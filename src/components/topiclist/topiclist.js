import Taro , { Component } from '@tarojs/taro';
import {ScrollView} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopicList, getNextList} from '../../actions/topiclist';
import Topic from './topic';

@connect(function(store){
   return {...store.topiclist, currentCata: store.menu.currentCata}
}, function(dispatch){
  return {
    getTopicList(params){
      dispatch(getTopicList(params))
    },
    getNextList(params){
      dispatch(getNextList(params))
    }
  }
})

//思路，先通过 mount 方法获取数据，然后通过 state 得到数据
class TopicList extends Component {

  componentWillMount () {
    let {page, limit, currentCata} = this.props;
    this.props.getTopicList && this.props.getTopicList({page, limit, tab:currentCata.key})
  }

  //触发分页请求
  //请求下一页， 没有总页面，不知道什么到底
  scroollToLower(){
    let {page, limit, currentCata} = this.props
    this.props.getNextList && this.props.getNextList({page: (page + 1), limit, tab:currentCata.key})
  }

  render() {
    let {list} = this.props;
    return (
      //先容许下拉，事件
      <ScrollView scrollY={true} style={{height:'650PX'}} onScrollToLower={this.scroollToLower.bind(this)}>
        {
        list.map((item) =>  <Topic item = {item}/>)
        }
      </ScrollView>
    );
  }
}
export default TopicList;