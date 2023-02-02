import { Component, FC, PropsWithChildren, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { stateType } from "../../store";
import { rotation, emerge, product, user } from "../../config/taroApi";
import { View, Text, CoverImage } from '@tarojs/components'
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
}



const MyIcon: FC<MyIconProps> = (props: MyIconProps) => {
    const { icon, title } = props
    return (
        <View className='my-icon'>
            <View className={`at-icon at-icon-${icon}`}></View>
            <View>
                <Text>{title}</Text>
            </View>
        </View>
    )
}

interface UserMainCardProps {
    title: string
    
}
const UserMainCard: FC<any> = (props: any) => {
    


    return (
        <View className='user-main-card'>
            <View className='user-main-card-title'>
                <View className='left'>
                    <Text> 我的订单</Text>
                </View>
                <View className='right'>
                    <Text> 全部</Text>
                </View>
            </View>
            <View className='user-main-card-main'>
                <MyIcon icon="phone" title="客服" />
                <MyIcon icon="settings" title="设置" />
                <MyIcon icon="phone" title="客服" />
                <MyIcon icon="settings" title="设置" />
                <MyIcon icon="phone" title="客服" />
            </View>
        </View>
    )
}


const UserPage: FC<UserPageProps> = (props: UserPageProps) => {
    const { state } = props

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
                    <MyIcon icon="phone" title="客服" />
                    <MyIcon icon="settings" title="设置" />
                </View>

            </View>
            <View className='user-main'>
                <UserMainCard />
                <UserMainCard />
                <UserMainCard />
                <UserMainCard />
            </View>

        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)