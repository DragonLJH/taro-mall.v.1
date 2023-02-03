import { Component, FC, PropsWithChildren, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { stateType } from "../../store";
import { rotation, emerge, product, user } from "../../config/taroApi";
import { View, Text, CoverImage, IconProps } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro'

function mapStateToProps(state) {
    return { state }
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
}

interface objAPProps {
    userName: string;
    userPassword: string;
}

interface UserPageProps {
    state?: stateType
    dispatch: Function

}

interface MyIconProps {
    icon: string
    title: string
    fun: Function
}



const MyIcon: FC<MyIconProps> = (props: MyIconProps) => {
    const { icon, title, fun } = props
    return (
        <View className='my-icon' onClick={() => fun()}>
            <View className={`at-icon at-icon-${icon}`}></View>
            <View>
                <Text>{title}</Text>
            </View>
        </View>
    )
}

interface UserMainCardProps {
    bc?: string
    title?: string
    fun?: Function
    icon: Array<MyIconProps>

}
const UserMainCard: FC<UserMainCardProps> = (props: UserMainCardProps) => {
    const { title, fun, icon, bc = "#fff" } = props

    return (
        <View className='user-main-card' style={{ backgroundColor: bc }}>
            <View className='user-main-card-title'>
                {title ? <View className='left'>
                    <Text> {title}</Text>
                </View> : ""}
                {fun ? <View className='right' onClick={() => fun()}>
                    <Text> 全部</Text>
                </View> : ""}
            </View>
            <View className='user-main-card-main'>
                {icon?.map((item: MyIconProps, index: number) => {
                    return <MyIcon key={index} icon={item.icon} title={item.title} fun={() => item.fun()} />
                })}
            </View>
        </View>
    )
}


const UserPage: FC<UserPageProps> = (props: UserPageProps) => {
    const { state } = props
    const [arr, setArr] = useState([] as Array<UserMainCardProps>)
    // const [userMainCard, setUserMainCard] = useState({} as UserMainCardProps)
    const resMyIconProps = (res): MyIconProps => {
        return { title: res, icon: res, fun: () => { console.log(res); } };
    }
    useEffect(() => {
        let bcmsg: Array<string> = ["analytics", "bell", "blocked", "bookmark",]
        let wddd: Array<string> = ["download-cloud", "calendar", "home", "message", "money"]
        let wdqy: Array<string> = ["sound", "folder", "download", "equalizer", "filter",]
        const data: Array<UserMainCardProps> = [{
            bc: "#ccc",
            icon: [
                ...bcmsg.map((item: string) => {
                    return resMyIconProps(item);
                })
            ]
        }, {
            title: "我的订单", fun: () => { console.log("wddd") },
            icon: [
                ...wddd.map((item: string) => {
                    return resMyIconProps(item);
                })
            ]
        }, {
            title: "我的权益", fun: () => { console.log("wdqy") },
            icon: [
                ...wdqy.map((item: string) => {
                    return resMyIconProps(item);
                })
            ]
        },]
        setArr(data)
    }, [])

    return (
        <View className='user'>
            <View className='user-title'>
                <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
                <View className='user-title-msg'>
                    <View className='item-1'>
                        <Text>XXX_XXX</Text>
                    </View>
                    <View className='item-2'>
                        <Text>{state?.userName}123</Text>
                    </View>
                    <View className='item-3'>
                        <Text>关注0</Text>
                        <Text className='br'></Text>
                        <Text>粉丝0</Text>
                        <Text className='br'></Text>
                        <Text>好友0</Text>
                    </View>
                </View>
                <View className='user-title-operation'>
                    <MyIcon icon="phone" title="客服" fun={() => { console.log("客服") }} />
                    <MyIcon icon="settings" title="设置" fun={() => { console.log("设置") }} />
                </View>

            </View>
            <View className='user-main'>
                {arr?.map((item: UserMainCardProps, index: number) => {
                    return <UserMainCard key={index} {...item} />
                })}
                {/* <UserMainCard bc="#ccc" icon={userMainCard.icon} />
                <UserMainCard title={userMainCard.title} fun={userMainCard.fun} icon={userMainCard.icon} /> */}
            </View>

        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)