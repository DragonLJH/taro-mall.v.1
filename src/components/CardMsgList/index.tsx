import { Component, PropsWithChildren } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import Card from "../Card";
import { product } from "../../config/taroApi";

interface cardMsgProps {
    item: Array<object>
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
                <ScrollView scrollX style={{ whiteSpace: "nowrap" }}>
                    {this.state.data.map((item: number, index: number) => {
                        return (
                            <Card key={index} isFlex={true} />
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}
