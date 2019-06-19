import {getTopicList} from './topiclist';

//显示抽屉
export function showDrawer(){
  return function(dispatch){
    dispatch({type: 'showDrawer'})
  }
}

export function changeDrawer(cate){
  return dispatch =>  {
    dispatch({type: 'changeCate', currentCata: cate})
    dispatch(getTopicList({tab: cate.key, page: 1, limit: 20}))
  }
}

export function hideDrawer(){
  return (dispatch) => {
    dispatch({type:'hideDrawer'})
  }
}