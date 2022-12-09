import { Component, PropsWithChildren } from 'react'
import { connect } from "react-redux"
import { View, Text, Checkbox, Button } from '@tarojs/components'
import { AtCheckbox } from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro'
import LoginPage from '../../components/LoginPage';
import UserPage from '../../components/UserPage';


function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}



class Shop extends Component<any> {
  constructor(props, context) {
    super(props, context)
    console.log("Shop", props, context)
  }
  state = {
    manage: true,
    selectAll: false,
  }

  operationClick() {
    this.setState({ manage: !this.state.manage })
    this.setState({ selectAll: false })
  }


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (<>
      <View className='shop-top'>
        <View className='shop-top-name'>
          <Text>购物车</Text>
          <Text></Text>
        </View>
        <View className='shop-top-operation' onClick={() => this.operationClick()}>
          {this.state.manage ? <Text>管理</Text> : <Text>退出管理</Text>}
        </View>
      </View>
      <View className='shop-bottom'>
        <View className='shop-bottom-check'>
          <View className={`check-box ${this.state.selectAll ? "active" : ""}`} onClick={() => this.setState({ selectAll: !this.state.selectAll })}></View>
          <Text>全选</Text>
        </View>
        <View className='manage-style'>
          {this.state.manage ? (<><Text className='total-price'>123</Text><View className='settlement'>结算</View></>)
            : (<View className='delete'>删除</View>)}
        </View>
      </View>
    </>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)