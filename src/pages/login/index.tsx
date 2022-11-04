import { Component, PropsWithChildren } from 'react'
import { View, Text, Input ,Button} from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

export default class Login extends Component<PropsWithChildren> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toIndex() {
    Taro.navigateTo({ url: '/pages/index/index' })
  }

  render() {
    return (
      <View className='login'>
        <View className='login-item'>
          <Input type='text' placeholder='请输入账号' focus />
          <Input type="safe-password" password={true} placeholder='请输入密码' />
          <Button type='primary'>登录</Button>
        </View>
      </View>
    )
  }
}
