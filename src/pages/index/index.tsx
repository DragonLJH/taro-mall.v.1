import { Component, PropsWithChildren } from 'react'
import { connect } from "react-redux"
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import NavMain from '../../components/NavMain';
import HomePage from '../../components/HomePage';
import SearchPage from '../../components/SearchPage';
import ProductPage from '../../components/ProductPage';

interface emergeProps {
  emergeTag: string;
  data: Array<object>;
}

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}


class Index extends Component<any> {
  state = {
    activeComponent: ""
  }

  ACTIVE_CHANGE(data) {
    this.props.dispatch({ type: "ACTIVE_CHANGE", data: data })
  }

  INDEX_PAGE() {
    const { activeComponent } = this.props.state
    switch (activeComponent) {
      case "HomePage": return <HomePage></HomePage>
      case "SearchPage": return <SearchPage></SearchPage>
      case "ProductPage": return <ProductPage></ProductPage>
      default:
        break;
    }
  }

  componentWillMount() {
    console.log("componentWillMount")
    this.props.dispatch({ type: "ADD_PAGE", data: "HomePage" })
    this.ACTIVE_CHANGE("HomePage")
  }

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    return (
      <View className='index' >
        <NavMain>
          {this.INDEX_PAGE()}
          {/* <HomePage></HomePage> */}
        </NavMain>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)