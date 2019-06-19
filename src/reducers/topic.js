const TOPIC_STATE = {
  page:1,
  limit: 20,
  list: [],
  topicinfo: {},
  replies: [],
  loading: true,
  admireState: false //点赞状态,

}

export default function topiclist(prestate = TOPIC_STATE, action) {
  switch(action.type) {
    case 'admireSuccess':
    return {...prestate, admireState: !prestate.admireState}
    case 'getTopicInfo':
    return {...prestate, replies: action.infoData.replies, topicinfo: {...action.infoData, replies: null},loading: false }
    case 'getTopicList':
    return {...prestate, 'list': action.list, page: 1}
    case 'appendTopicList':
    return {...prestate, list: prestate.list.concat(action.list), page: action.page}
    case 'loading':
    return {...TOPIC_STATE}
    default:
    return {...prestate}
  }
}