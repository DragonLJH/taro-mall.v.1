import { Component, PropsWithChildren } from 'react'
import { connect } from "react-redux"
import { View, Text, Checkbox, Button } from '@tarojs/components'
import { AtAvatar, AtInputNumber, AtToast } from 'taro-ui'
import { shop } from "../../config/taroApi";
import './index.scss'
import Taro from '@tarojs/taro'
import MyAtToast from '../../components/MyAtToast'; 


function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

interface shopDataProps {
  check: boolean
  shopId: number
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
    atToast: {
      isOpened: false,
      text: "",
      status: "success"
    }
  }

  operationClick() {
    this.setState({ manage: !this.state.manage })
    this.setState({ selectAll: false })
    this.setState((prevState: any) => {
      prevState.shopData = [...prevState.shopData].map((item: shopDataProps) => {
        item["check"] = false
        return item
      })
      return prevState
    })
  }

  handleChange(index: number, value: number, item: shopDataProps) {
    let flagObj = { ...item, selectNum: value }
    const { selectNum, shopId } = flagObj
    shop.updateShopById({ selectNum, shopId })
    this.setState((prevState: any) => {
      prevState.shopData[index] = flagObj
      return prevState
    })
  }

  totalPrice() {
    let res = this.state.shopData.filter((item: shopDataProps) => item.check).map((item: shopDataProps) => item.productSellingPrice * item.selectNum)
    return res.length == 0 ? 0 : (res.length > 1 ? res.reduce((a, b) => a + b) : res)
  }

  selectAllFun() {
    let res = !this.state.selectAll
    this.setState({ selectAll: res })
    this.setState((prevState: any) => {
      prevState.shopData = [...prevState.shopData].map((item: shopDataProps) => {
        item["check"] = res
        return item
      })
      return prevState
    })
  }



  checkClick(index: number) {
    this.setState((prevState: any) => {
      prevState.shopData[index]["check"] = !prevState.shopData[index]["check"]
      return prevState
    }, () => {
      let all = this.state.shopData.map((item: shopDataProps) => item.check)
      if (!all.includes(false)) {
        this.setState({ selectAll: true })
      } else {
        this.setState({ selectAll: false })
      }
    })
  }

  onDel(shopId: number) {
    shop.deleteShopbyId({ shopId }).then((res) => {
      if (res.data) {
        this.queryShopByUserName()
        this.setState({
          atToast: {
            isOpened: true,
            text: "商品删除成功",
            status: "success"
          }
        })
      } else {
        this.setState({
          atToast: {
            isOpened: true,
            text: "商品删除失败",
            status: "error"
          }
        })
      } 
    })
  }

  queryShopByUserName() {
    shop.queryShopByUserName({ userName: this.props.state.userName }).then((res) => {
      console.log(res)
      let resData = res.data.map((item) => {
        item["check"] = false
        return item
      })
      this.setState({ shopData: resData })
    })
  }

  executionMethod() {
    if (!this.props.state.userName) {
      Taro.switchTab({ url: '/pages/login/index' })
    } else {
      this.queryShopByUserName()
    }
  }



  componentWillMount() {

  }

  componentDidMount() {
    this.executionMethod()
  }

  componentWillUnmount() {

  }

  componentDidShow() {
    // shop.queryShopByUserName({ userName: this.props.state.userName }).then((res) => {
    //   this.setState({ shopData: res.data })
    // })
    this.executionMethod()
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
        {this.state.shopData.map((item: shopDataProps, index: number) => {
          return (<View className='shop-main-item' key={index}>
            <View className={`shop-main-item-check ${item.check ? 'active' : ''}`} onClick={() => this.checkClick(index)}>
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
                  onChange={(value) => this.handleChange(index, value, item)}
                />
              </View>
            </View>
            {this.state.manage ? "" : <View className='at-icon at-icon-subtract-circle' onClick={() => this.onDel(item.shopId)}></View>}
          </View>

          )
        })}

      </View>

      <View className='shop-bottom'>
        <View className='shop-bottom-check'>
          <View className={`check-box ${this.state.selectAll ? "active" : ""}`} onClick={() => this.selectAllFun()}></View>
          <Text>全选</Text>
        </View>
        <View className='manage-style'>
          {this.state.manage ? (<><Text className='total-price'>{this.totalPrice()}</Text><View className='settlement'>结算</View></>)
            : (<View className='delete'>删除</View>)}
        </View>
      </View>
      <MyAtToast isOpened={this.state.atToast.isOpened} text={this.state.atToast.text} status={this.state.atToast.status}></MyAtToast>
    </>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)