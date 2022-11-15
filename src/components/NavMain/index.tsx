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
  state = {
    searchStr: ""
  }

  TO_SEARCH_PAGE(data) {
    const { searchStr } = this.state
    console.log("searchStr", searchStr)
    this.props.dispatch({ type: "SEARCHSTR_CHANGE", data: searchStr })
    this.props.dispatch({ type: "ADD_PAGE", data: data })
    this.props.dispatch({ type: "ACTIVE_CHANGE", data: data })
  }
  TO_BACK() {
    const { pageArr } = this.props.state
    let resData = pageArr.slice(0, - 1)
    let resPage = resData[resData.length - 1]
    console.log("TO_BACK", resData, resPage)
    this.props.dispatch({ type: "DEL_PAGE", data: resData })
    this.props.dispatch({ type: "ACTIVE_CHANGE", data: resPage })
  }

  render() {
    const { activeComponent, pageArr, searchStr } = this.props.state
    const flag = activeComponent === "HomePage" ? "" : " active"
    console.log("Nav", activeComponent, pageArr, searchStr)
    return (
      <>
        <View className='nav'>
          <View className='nav-search'>
            <View className={`nav-search-left${flag}`} onClick={() => this.TO_BACK()}></View>
            <View className={`nav-search-right${flag}`}>
              <Input type="text" value={this.state.searchStr} onInput={(e) => this.setState({ searchStr: e.target["value"] })} />
              <View className='nav-search-item' onClick={() => this.TO_SEARCH_PAGE("SearchPage")}>
                搜索
              </View>
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