import { Component, PropsWithChildren } from 'react'
import { View, Text, CoverImage } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

interface cardProps {
    item: productProps
    isFlex: boolean
}

interface productProps {
    productColor: Array<string>
    productEmergeSite: string
    productId: number
    productMsg: string
    productMsgImg: Array<string>
    productName: string
    productPrice: number
    productRotationImg: Array<string>
    productSalesVolume: number
    productSellingPrice: number
    productSize: Array<string>
    productStock: number
    productType: string
}
export default class Card extends Component<cardProps> {
    state = {
        isFlex: false
    }
    render() {
        console.log("Card", this.props)
        return (
            <View className={`card ${this.props.isFlex ? "flex" : ""}'`}>
                <View className='card-img'>
                    <CoverImage className='img' src={this.props.item.productRotationImg[0]} />
                </View>
                <View className='card-main'>
                    <View className='card-main-title'>
                        <Text>{this.props.item.productName}</Text>
                    </View>
                    <View className='card-main-price'>
                        <Text>{this.props.item.productSellingPrice}</Text>
                    </View>
                    <View className='card-main-msg'>
                        <Text>{this.props.item.productMsg}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
