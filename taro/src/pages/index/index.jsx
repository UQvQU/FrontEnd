import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PostCard, PostForm } from '../../components/index'
import './index.scss'

export default class Index extends Component {
  // es7 class public
  state = {
    posts: [
      {
        title: '泰罗',
        content: '嚯嚯嚯'
      }
    ],
    formTitle: '',
    formContent: ''
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  config = {
    navigationBarTitleText: '首页'
  }

  componentDidShow () { }

  componentDidHide () { }

  handleTitleInput(e) {
    this.setState({
      formTitle: e.target.value
    })
  }
  handleContentInput(e) {
    this.setState({
      formContent: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const { formTitle: title, formContent: content } = this.state
    const newPosts = this.state.posts.concat({title, content})
    this.setState({
      posts: newPosts,
      formTitle: '',
      formContent: ''
    })
  }

  render () {
    return (
      <View className='index'>
        {
          this.state.posts.map((post, ad) => (
            <PostCard key={ad.id} title={post.title} content={post.content} />
          ))
        }
        <PostForm formTitle={this.state.formTitle}
          formContent={this.state.formContent} 
          handleSubmit={e => this.handleSubmit(e)}
          handleTitleInput={e => this.handleTitleInput(e)}
          handleContentInput={e => this.handleContentInput(e)}
        />

      </View>
    )
  }
}
