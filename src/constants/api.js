const rootPath = 'https://cnodejs.org/api/v1';
const apiObject = {
  getTopics: rootPath + '/topics',  //获取话题列表
  getTopicinfo: rootPath + '/topic/', //获取话题详情
  checkusertoken: rootPath + '/accesstoken', //验证用户token
  getUserinfo: rootPath + 'user/', //获取用户信息
  upreply: rootPath + '/reply/',    //点赞
}

export default apiObject;