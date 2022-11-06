import { Component, PropsWithChildren } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import NavMain from '../../components/NavMain';
import Carousel from '../../components/Carousel';
import CardMsgList from '../../components/CardMsgList';
import Taro from '@tarojs/taro';
import { rotation, emerge, product } from "../../config/taroApi";

interface emergeProps {
  emergeTag: string;
  data: Array<object>;
}

export default class Index extends Component<PropsWithChildren> {
  state = {
    imgArr: [],
    emergeArr: [],
    emergeProductArr: [],
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
          return { emergeTag: item.emergeTag, data: [] }
        })
      }, () => {
        this.state.emergeArr.forEach((value: emergeProps, index: number) => {
          product()["queryProductByEmerge"]({ emergeTag: value.emergeTag })
            .then((res) => {
              this.setState((state: any, props) => {
                state.emergeArr[index].data = res.data
                return { emergeArr: state.emergeArr };
              })
            })
        })

      })

    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.log(this.state.emergeProductArr)
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
          {this.state.emergeArr.map((item, index: number) => {
            return <CardMsgList key={index} item={item} />
          })}

        </NavMain>
      </View>
    )
  }
}
