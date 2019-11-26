// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
  state = {  }
  render() { 
    const { list } = this.props
    return (
      <TopicWrapper color="red">
        {
          list.map((item, i) => {
            return (
              <TopicItem key={i}>
                <img src={item.get('imgUrl')} alt="img" className="topic-pic"/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
// 读取数据
const mapStateToProps = state => {
  console.log('home1', state.get('home'))
  return {
    list: state.getIn(['home', 'topicList'])
  }
}
export default connect(mapStateToProps)(Topic);