import { Component, PropsWithChildren } from 'react'
import { View, Text, CoverImage } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

interface cardProps {
    isFlex: boolean
}

export default class Card extends Component<cardProps> {
    state = {
        isFlex: false
    }
    render() {
        return (
            <View className={`card ${this.props.isFlex ? "flex" : ""}'`}>
                <View className='card-img'>
                    <CoverImage className='img' src="http://150.158.96.29:8082/my-shop-img/uploadRotationImg/386a621929dc40269a6a9dcfd6802658.jpg" />
                </View>
                <View className='card-main'>
                    <View className='card-main-title'>
                        <Text>男鞋</Text>
                    </View>
                    <View className='card-main-price'>
                        <Text>199</Text>
                    </View>
                    <View className='card-main-msg'>
                        <Text>1123123男鞋那时的话说的亲12312312123123123123123123123</Text>
                    </View>
                </View>
            </View>
        )
    }
}
