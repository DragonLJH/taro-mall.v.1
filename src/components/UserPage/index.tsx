import { Component, FC, PropsWithChildren, useState } from 'react'
import { connect } from 'react-redux';
import { stateType } from "../../store";
import { rotation, emerge, product, user } from "../../config/taroApi";
import { View, Text, CoverImage } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
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


const UserPage: FC<any> = (props: UserPageProps) => {
    const { state } = props

    return (
        <>
            <View className='user-title'>
                <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
                <Text>{state?.userName}123</Text>
            </View>

        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)