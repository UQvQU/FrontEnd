import React, {
  Component
} from 'react';
import { withRouter } from 'react-router-dom'
import withLoading from './withLoading'
import axios from './axios'

class Topic extends Component {
  state = {
    content: ''
  }
  // 判断isloading的值
  initLoading () {
    // 返回Promise
    const { id } = this.props.match.params
    return axios.get('/topic/' + id).then(res => {
      this.setState({
        content: res.data.data.content
      })
      return Promise.resolve(true)
    }).catch(err => {
      return Promise.reject(false)
    })
  }
  componentDidMount() {}
  render() {
    const { content } = this.state
    return (
      <div>
        Topic
          {/* { content } */}
        <div dangerouslySetInnerHTML={{
          __html: content
        }}></div>
      </div>
    )
  }
}
export default withRouter(withLoading(Topic))
