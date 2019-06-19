import Taro from '@tarojs/taro';
//设置缓存
export function setCache(key, value){
  let params = value;
  if(typeof value == 'object') {
    params = JSON.stringify(value)
  }
  Taro.setStorageSync(key, value);
}

export function getCache(key){
  let result = Taro.getStorageInfoSync(key)
  if(result){
    result = JSON.parse(result)
  }else{
    return null;
  }
  return result
}

export async function validateUser(params){
  if(params && params.accesstoken){
    return true;
  }
  return false;
}