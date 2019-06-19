import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'
import Menu from '../../components/menu/menu';
import TopicList from '../../components/topiclist/topiclist';

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentDidMount(){}

  render () {
    return (
      <View className='index'>
      <Menu></Menu>
      <TopicList />
      </View>
    )
  }
}

export default Index
