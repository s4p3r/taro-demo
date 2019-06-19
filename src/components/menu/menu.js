import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Image} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {showDrawer, changeDrawer, hideDrawer} from '../../actions/menu'
import {AtDrawer} from 'taro-ui';


import './menu.scss';

@connect(function(store){
  return {...store.menu}
}, function(dispatch){
  return {
    showMenu(){
      dispatch(showDrawer()) //这里传 showdrawer 就会在action 里参数中 （dispatch）
  },
  changeCata(cata){
    dispatch(changeDrawer(cata))
  },
  hideDrawer(){
    dispatch(hideDrawer())
  }
}  
})

class Menu extends Component {

   config = {
       navigationBarTitleText: ''
  }

  state={}


  showDrawer(){
    this.props.showMenu && this.props.showMenu()
  }

  getItems(cataData) {
    return cataData.map(item=>item.value)
  }

  //点击分类触发
  clickCata(index){
    let {cataData} = this.props;
    let clickCata = cataData[index]; //获取点击的数据
    if(clickCata.key != this.props.currentCata.key) {
      this.props.changeCata && this.props.changeCata(clickCata)  //点击分类，触发切换分类方法
    }
  }

  // 关闭抽屉触发
  closeDrawer(){
    this.props.hideDrawer && this.props.hideDrawer()
  }

  render() {
    let {showDrawer, cataData} = this.props
    let items = this.getItems(cataData)

    return (
      <View className='topiclist-menu'>
        <View className="atdrawer">
        <AtDrawer onItemClick={this.clickCata.bind(this)} onClose={this.closeDrawer.bind(this)} show={showDrawer} items={items}/>
        </View>
        <Image className='image img-left' onClick={this.showDrawer.bind(this)} src={require('../../assets/images/cata.png')}/>
        <Text>{this.props.currentCata.value? this.props.currentCata.value : ''}</Text>
        <Image className='image img-right' src={require('../../assets/images/login.png')}/>
      </View>
    );
  }
}

export default Menu;