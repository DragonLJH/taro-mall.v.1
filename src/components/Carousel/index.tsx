import { Component, PropsWithChildren } from 'react'
import { View, Text, Input, CoverImage, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

interface carouselProps {
  imgArr: Array<string>;
}

export default class Carousel extends Component<carouselProps> {
  state = {
    imgArr: []
  }
  componentWillMount() {
    this.setState({
      imgArr: this.props.imgArr
    })
  }
  render() {
    return (
      <View className='carousel'>
        <Swiper
          className='carousel-swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          {this.props.imgArr.map((item: string, index: number) => {
            return (
              <SwiperItem key={index}>
                <CoverImage className='img' src={item} />
              </SwiperItem>
            )
          })}

        </Swiper>
      </View>
    )
  }
}
