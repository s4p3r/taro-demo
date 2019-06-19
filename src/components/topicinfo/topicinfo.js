import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, RichText } from '@tarojs/components';
import { myTimeToLocal } from '../../utils/date';

const isweapp = process.env.TARO_ENV == 'weapp'  //判断是否小程序
class TopicInfo extends Component {

  render() {
    let { topicinfo } = this.props;
    let title = '置顶' + topicinfo.title
    return (
      <View className='topic-info'>
        <View className='topic-info-header'>
          <View className='topic-info-header-title'><Text></Text><Text>{title}</Text></View>
          <View className='topic-info-header-pie'>
            <Text>{myTimeToLocal(topicinfo.create_at)}</Text>
            <Text>{topicinfo.author ? topicinfo.author.loginname : ''}</Text>
            <Text>{topicinfo.visit_count + '次游览'}</Text>
          </View>
        </View>
        <View className="topic-info-body">
        {
           isweapp ? <RichText nodes={topicinfo.content} /> : <View dangerouslySetInnerHTML={{__html:topicinfo.content}}></View>
        }
        </View>
      </View>
    );
  }
}

TopicInfo.defaultProps = {
  topicinfo: {}
}
export default TopicInfo;