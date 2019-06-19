import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './topic.scss';
import {myTimeToLocal} from '../../utils/date';

class Topic extends Component {

  //调到详情页面
  goToDetail(topic){
    Taro.navigateTo({url:'/pages/detail/index?topicid='+topic.id});
  }

  render() {
    let { item } = this.props;

    return (
      <View key={item.id} className='topiclist-topic' onClick={this.goToDetail.bind(this, item)}>
        <Image className='head-img' src={item.author ? item.author.avatar_url : ''} />
        <View className='right'>
          <View className='topic-title'>
          {
            item.top ?  <Text className='topic-up'>置顶</Text> : (item.tab == 'share' ?  <Text className='topic-up blue'>分享</Text> :  <Text className='topic-up'>问答</Text>)
          }
            <Text>{item.title}</Text>
          </View>
          <View className='topic-info'>
            <Text>{item.author ? item.author.loginname : ''}</Text>
            <Text>{item.reply_count + '/' + item.visit_count}</Text>
            <Text>创建时间:{item.create_at && myTimeToLocal(item.create_at)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

Topic.defaultProps = {
  item: []
}
export default Topic;