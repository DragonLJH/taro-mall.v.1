import { Component, PropsWithChildren } from 'react'
import { connect } from "react-redux"
import { View, Text, Checkbox, Button } from '@tarojs/components'
import { AtAvatar, AtInputNumber } from 'taro-ui'
import { shop } from "../../config/taroApi";
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

interface shopDataProps {
  check: boolean
  productId: number
  productName: string
  productRotationImg: string
  productSellingPrice: number
  selectColor: string
  selectNum: number
  selectSize: string
  userName: string
}


class Shop extends Component<any> {
  constructor(props, context) {
    super(props, context)
    console.log("Shop", props, context)
  }


  state = {
    manage: true,
    selectAll: false,
    shopData: [],
  }

  operationClick() {
    this.setState({ manage: !this.state.manage })
    this.setState({ selectAll: false })
  }

  handleChange(value: number, item: shopDataProps) {
    let flagObj = { ...item,selectNum:value } 
    console.log("handleChange " , flagObj)
    this.setState((prevState) => {
      console.log(prevState)
    })
  }


  componentWillMount() {
    shop().queryShopByUserName({ userName: "18022429170" }).then((res) => {
      let resData = res.data.map((item) => {
        item["check"] = false
        return item
      })
      this.setState({ shopData: resData })
    })
  }

  componentDidMount() {
    // if (!this.props.state.userName) {
    //   Taro.switchTab({ url: '/pages/login/index' })
    // }


  }

  componentWillUnmount() {

  }

  componentDidShow() {
    // shop().queryShopByUserName({ userName: this.props.state.userName }).then((res) => {
    //   this.setState({ shopData: res.data })
    // })
  }

  componentDidHide() {
  }

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
      <View className='shop-main'>
        {this.state.shopData.map((item: selectDataProps, index: number) => {
          return (<View className='shop-main-item' key={index}>
            <View className={`shop-main-item-check ${item.check ? 'active' : ''}`}>
              <View className='circle'></View>
            </View>
            <View className='shop-main-item-img'>
              <AtAvatar image={item.productRotationImg}></AtAvatar>
            </View>
            <View className='shop-main-item-msg'>
              <View className='shop-main-item-msg-title'>
                <Text>{item.productName}</Text>
              </View>
              <View className='shop-main-item-msg-format'>
                <Text>{item.selectColor}</Text>
                <Text>{item.selectSize}</Text>
              </View>
              <View className='shop-main-item-msg-price'>
                <Text>{item.productSellingPrice}</Text>
                <AtInputNumber
                  min={0}
                  max={10}
                  step={1}
                  value={item.selectNum}
                  onChange={(value) => this.handleChange(value, item)}
                />
              </View>
            </View>
          </View>

          )
        })}

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