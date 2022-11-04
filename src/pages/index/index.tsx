import { Component, PropsWithChildren } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import NavMain from '../../components/NavMain';
import Carousel from '../../components/Carousel';
import CardMsgList from '../../components/CardMsgList';
import Taro from '@tarojs/taro';
import { rotation, emerge, product } from "../../config/taroApi";

export default class Index extends Component<PropsWithChildren> {
  state = {
    imgArr: [],
    emergeArr: [],
    testNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }



  componentWillMount() { }

  componentDidMount() {
    rotation().queryAllRotation().then((res) => {
      this.setState({
        imgArr: res.data.map((item) => {
          return item.rotationImg
        })
      })
    })
    emerge().queryAllEmerge().then((res) => {
      this.setState({
        emergeArr: res.data.map((item) => {
          return item.emergeTag
        })
      }, () => {
        this.state.emergeArr.forEach((value) => {
          product().queryProductByEmerge({ emergeTag: value }).then((res) => {
            console.log("queryProductByEmerge-" + value, res)
          })
        })

      })

    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index' >
        <NavMain>
          <Carousel imgArr={this.state.imgArr} />
          {this.state.testNumber.map((item: number) => {
            return (
              <View key={item}>
                <Text>{item}</Text>
              </View>
            )
          })}
          {this.state.emergeArr.map((item) => {
            return <CardMsgList item={item} />
          })}

        </NavMain>
      </View>
    )
  }
}
