import { Component, PropsWithChildren } from 'react'
import { View, Text, Input, Button, ScrollView } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

export default class NavMain extends Component<PropsWithChildren> {

  render() {
    console.log("Nav", this.props)
    return (
      <>
        <View className='nav'>
          <View className='nav-search'>
            <Input type="text" />
            <View className='nav-search-item'>
              搜索
            </View>
          </View>
        </View>
        <View className='main'>
          <ScrollView scrollY style={{ height: "calc(100% - 45px)", marginTop: "45px" }}>
            {this.props.children}
          </ScrollView>
        </View>
      </>
    )
  }
}
