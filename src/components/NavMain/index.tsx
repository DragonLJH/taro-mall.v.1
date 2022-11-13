import { Component, PropsWithChildren } from 'react'
import { connect } from "react-redux"
import { View, Text, Input, Button, ScrollView } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

class NavMain extends Component<any> {

  TO_SEARCH_PAGE(data) {
    this.props.dispatch({ type: "ACTIVE_CHANGE", data: data })
  }

  render() {
    console.log("Nav", this.props)
    return (
      <>
        <View className='nav'>
          <View className='nav-search'>
            <Input type="text" />
            <View className='nav-search-item' onClick={() => this.TO_SEARCH_PAGE("SearchPage")}>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavMain)