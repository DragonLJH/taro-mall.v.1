import { Component, PropsWithChildren } from 'react'
import { connect } from "react-redux"
import { View, Text, Input, Button } from '@tarojs/components'
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
class Login extends Component<any> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  toIndex() {
    Taro.navigateTo({ url: '/pages/index/index' })
  }

  render() {
    return this.props.state.userName ? <UserPage /> : <LoginPage />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)