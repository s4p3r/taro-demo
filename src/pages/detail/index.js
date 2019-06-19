import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicInfo, admireTopic } from '../../actions/topiclist';
import TopicInfo from '../../components/topicinfo/topicinfo';
import Replies from '../../components/topicinfo/replies';

@connect(function (store) {
  return { loading: store.topiclist.loading, user: store.user, admireState: store.topiclist.admireState, topicinfo: store.topiclist.topicinfo, replies: store.topiclist.replies }
}, function (dispatch) {
  return {
    getTopicInfo(params) {
      dispatch(getTopicInfo(params))
    },
    admireTopic(params) {
      dispatch(admireTopic(params))
    }
  }
})

class Detail extends Component {

  config = {
    navigationBarTitleText: '话题详情'
  }


  admire(reply) {
    let { user } = this.props;
    let params = { replyid: reply.id, accesstoken: user.accesstoken }
    this.props.admireTopic && this.props.admireTopic(params)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.admireState != nextProps.admireState) {
      //不相等请求数据
      this.getDetail();
    }
  }


  getDetail() {
    let { user } = this.props;
    let params = { id: this.$router.params.topicid, mdrender: true, accesstoken: user.accesstoken }
    this.props.getTopicInfo && this.props.getTopicInfo(params)
  }

  componentWillMount() {
    this.getDetail();
  }

  render() {
    console.log(this.props.topicinfo)
    let { topicinfo, replies, loading } = this.props;
    console.log(this.props.topicinfo)

      return (
        loading ? <View>{Taro.showLoading}</View> :
        <View>
          <TopicInfo topicinfo={topicinfo} />
          <Replies replies={replies} onAdmire={this.admire.bind(this)} />
        </View>
      );
    }
  }
export default Detail;