import * as React from 'react';
import { Component } from 'react';
import Scroll from '../../reusableComponents/scroll/Scroll';
import Loading from '../../reusableComponents/loading/Loading';
import LazyImage from '../../reusableComponents/lazyImg/Lazy-img';
import Carousel from '../../reusableComponents/carousel/Carousel';
import { IDisc } from '../../app/store/stateTypes';
import {ERR_OK} from '../../api/config';
import {getRecommend, getDiscList} from '../../api/recommend'
import Disc from '../disc/Disc';
import { setDisc } from '../../app/actions/disc';
import { Dispatch } from 'redux';
import {  Route, withRouter } from 'react-router'
import { connect } from 'react-redux'



interface Props{
  setDisc:Function,
  history:any,
  location:any,
  match:any
}

interface State{
  recommends: Array<any>,
  discList:Array<IDisc>
}
// 
let cacheData:{
  recommends: Array<any>,
  discList:Array<IDisc>
};

class Recommend extends Component<Props, State>{
  unMountedFlag:boolean;
  constructor(props:Props){
    super(props);
    this.unMountedFlag=false
    this.state = {
      recommends: [],
      discList:[]
    }
  }

  componentDidMount(){
    // console.log("Recommend的componentDidMount")
    if(cacheData){
      console.log("cacheData", cacheData);
      this.setState(
        {
          recommends: cacheData.recommends,
          discList:cacheData.discList
        }
      )
    } else{
      // 获取数据
        this.getRecommend()
        this.getDiscList()
    }
  }

  componentWillUnmount(){
    // 缓存以获取的数据
    cacheData = {
      recommends:this.state.recommends,
      discList:this.state.discList
    }
    this.unMountedFlag=true
  }

  getRecommend() {
    getRecommend().then((res) => {
      console.log(res.code, res.data.slider)
      if (res.code === ERR_OK && !this.unMountedFlag) {
        this.setState({
          recommends: res.data.slider
        })
      }
    })
  }

  getDiscList(){
    getDiscList().then((res) => {
      console.log(res.code, res.data.list);
        if (res.code === ERR_OK && !this.unMountedFlag) {
            this.setState({
                discList: res.data.list
            })
        }
    })
  }

  selectDisc = (disc:any) => {
    this.props.history.push(`/recommend/${disc.dissid}`);
    this.props.setDisc(disc)
  }
  render() {
      // console.log("Header render")
    const {recommends, discList} = this.state;
    return(
      <div className="recommend">
        <Scroll className="recommend-content">
          <div>
            <div className="slider-wrapper">
              {
                !!recommends.length &&
                <Carousel>
                  {
                    recommends.map((item, index)=>(
                      <div key={index}>
                        <a href={item.linkUrl}>
                          <img src={item.picUrl}/>
                        </a>
                      </div>
                    ))
                  }
                </Carousel>
              }
            </div>
            <div className="recommend-list">
              <h1 className="list-title">热门歌单推荐</h1>
              <ul>
                {
                  !!discList.length && discList.map((item, index)=>(
                    <li className="item" key={index} onClick={() => {this.selectDisc(item)}}>
                      <div className="icon">
                        <LazyImage
                          className="discListLazy"
                          containerClassName="recommend"
                          sizes="200px"
                          src="https://placehold.it/200x300?text=Image1"
                          srcset={item.imgurl}
                          width="60"
                          height="60"
                        />
                      </div>
                      <div className="text">
                        <h2 className="name">{item.creator.name}</h2>
                        <p className="desc">{item.dissname}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          {
            !discList.length &&
            <div className="loading-container" >
              <Loading/>
            </div>
          }
        </Scroll>
        <Route path="/recommend/:id" component={Disc}/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch:Dispatch) => {
  return {
      setDisc : (disc:IDisc) => {
          dispatch(setDisc(disc))
      }
  }
}

export default withRouter(connect(() => ({}), mapDispatchToProps)(Recommend))