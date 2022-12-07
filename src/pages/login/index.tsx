import { Component, PropsWithChildren } from 'react'
import { View, Text, Input ,Button} from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import LoginPage from '../../components/LoginPage';

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
      <LoginPage />
    )
  }
}
