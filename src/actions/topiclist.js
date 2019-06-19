import Taro from '@tarojs/taro';
import {getJson, postJson} from '../utils/request';
import api from '../constants/api';

export function getTopicList(params){
  return async dispatch =>{
  // Taro.showLoading();
   let res = await getJson(api.getTopics, params);
  // Taro.hideLoading();
   if(res && res.data) {
     if(res.data.success) {
      dispatch({type: 'getTopicList', list: res.data.data})
     }
   }
  } 
}

export function getNextList(params){
  return async dispatch => {
    let res = await getJson(api.getTopics, params);
    if(res && res.data) {
      if(res.data.success) {
        if(res.data.data.length > 0) {
          dispatch({type: 'appendTopicList', list: res.data.data, page: params.page}) //页数加1
        }
      }
    }
  }
}

export function getTopicInfo(params){
  return async dispatch => {
    dispatch({type: 'loading'})
    let res = await getJson(api.getTopicinfo + params.id, params);
    if(res && res.data && res.data.success){
      dispatch({type: 'getTopicInfo', infoData: res.data.data});
    }else{
      console.log('errr');
    }
  }
}


//点赞话题
export function admireTopic(params){
  return async dispatch => {
    let result = await postJson(api.upreply + params.replyid + '/up', params);
    if(result && result.data && result.success) {

    }else{
      Taro.showToast({title: '点赞失败', icon: 'none'})
    }
  }
}
