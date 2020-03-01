import React, {Component, ReactNode} from 'react'
import BScroll from 'better-scroll';

// 定义接口
interface scrollProps{
    children?:ReactNode,
    className?:string,
    scrollHandler?:Function,
    // probeType: 0,1都是不侦测实时位置，
    // 2是在手指滚动的过程中监测，手指离开后的惯性滚动过程不监测，
    // 3是只要滚动，都监测
    probeType?:number,
    pullUp?:boolean,
    pullUpHandler?:Function
}

interface scrollState{
    click:boolean,
    probeType:number,
    listenScroll:boolean
}

// Scroll组件
export default class Scroll extends Component<scrollProps, scrollState>{
    wrapper:React.RefObject<HTMLDivElement>;
    wrapperBs:any;
    constructor(props: scrollProps){
        super(props);
        // 创建ref
        this.wrapper = React.createRef();
        this.wrapperBs = null;
        this.scrollTo = this.scrollTo.bind(this);
        this.scrollToElement = this.scrollToElement.bind(this);
        this.state = {
            click:true,
            listenScroll:true,
            probeType: props.probeType || 2
        }
    }
    componentDidMount(){
        setTimeout(() => {
            // console.log(1)
            this._initScroll()
        }, 20)
    }

    componentWillUnmount(){
        this.stop()
    }

    _initScroll = ()=> {
        if (!this.wrapper.current) {
            return
        }
        this.wrapperBs = new BScroll(this.wrapper.current, {
            probeType: this.state.probeType,
            click: this.state.click
        })
        let {scrollHandler,pullUpHandler} = this.props;
        // console.log(this.wrapperBs)
        if (this.state.listenScroll) {
            this.wrapperBs.on('scroll', (pos:Object) => {
                scrollHandler && scrollHandler(pos)
            })
        }

        if (this.state.listenScroll) {
            this.wrapperBs.on('scrollEnd', (pos:Object) => {
                scrollHandler && scrollHandler(pos)
            })
        }

        if (this.props.pullUp) {
            this.wrapperBs.on('scrollEnd', () => {
                if (this.wrapperBs.y <= (this.wrapperBs.maxScrollY + 50)) {
                    pullUpHandler && pullUpHandler()
                }
            })
        }

        // if (this.state.beforeScroll) {
        //     this.wrapperBs.on('beforeScrollStart', () => {
        //         this.$emit('beforeScroll')
        //     })
        // }
    }
    stop = () =>{
        this.wrapperBs && this.wrapperBs.stop()
    }
    refresh = () => {
        this.wrapperBs && this.wrapperBs.refresh()
    }
    scrollTo(...args:any){
        this.wrapperBs && this.wrapperBs.scrollTo.apply(this.wrapperBs, args)
    }
    scrollToElement(...args:any){
        this.wrapperBs && this.wrapperBs.scrollToElement.apply(this.wrapperBs, args)
    }
    render(){
        return (
            <div ref={this.wrapper} className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}