const USER_STATE = {
  accesstoken: 'ee25d591-3c9b-496b-a3c1-eab86829665d'
}

export default function user(prestate = USER_STATE, action){
  switch(action.type){
    default:
    return {...prestate}
  }
}