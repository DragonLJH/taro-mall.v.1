import { Component, PropsWithChildren } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import Card from "../Card";
import { product } from "../../config/taroApi";

interface cardMsgProps {
    item: emergeProps
}

interface emergeProps {
    emergeTag?: string;
    data: Array<productProps>
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

export default class CardMsgList extends Component<cardMsgProps> {
    state = {
        data: [1, 2, 3, 4, 5]
    }

    componentDidMount() {
    }
    render() {
        return (
            <View className='card-msg-list'>
                {this.props.item.data.length ?
                    <>
                        <View className='card-msg-list-item'>
                            <Text className='card-msg-list-item-text'>{this.props.item.emergeTag}</Text>
                        </View>
                        <ScrollView scrollX style={{ whiteSpace: "nowrap" }}>
                            {this.props.item.data.map((item: productProps, index: number) => {
                                return (
                                    <Card key={index} isFlex={false} item={item} />
                                )
                            })}
                        </ScrollView>
                    </>
                    : ""}
            </View>
        )
    }
}
