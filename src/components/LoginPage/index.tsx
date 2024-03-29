import { Component, FC, PropsWithChildren, useState } from 'react'
import { connect } from 'react-redux';
import { stateType } from "../../store";
import { rotation, emerge, product, user } from "../../config/taroApi";
import { View, Text, CoverImage } from '@tarojs/components'
import { AtTag, AtInput, AtButton } from 'taro-ui'
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

interface LoginPageProps {
    state?: stateType
    dispatch: Function

}


const LoginPage: FC<LoginPageProps> = (props: LoginPageProps) => {
    const { state, dispatch } = props
    const [objAP, setObjAp] = useState({
        userName: "18022429170",
        userPassword: "123",
    } as objAPProps)
    const handleChangeAccount = (userName: string) => {
        let old = { ...objAP }
        setObjAp({ ...old, userName })
    }
    const handleChangePassword = (userPassword: string) => {
        let old = { ...objAP }
        setObjAp({ ...old, userPassword })
    }
    const onSubmit = () => {
        user.queryUserByUserName(objAP).then((res) => {
            if (res.data) {
                dispatch({ type: "CHANGE_USER", data: objAP.userName })
            }
        })
    }
    const onReset = () => {
        setObjAp({
            userName: "",
            userPassword: "",
        })
    }

    return (
        <View className='login-page'>
            <View><AtInput
                name='userName'
                title='账号'
                type='text'
                placeholder='账号'
                value={objAP.userName}
                onChange={handleChangeAccount}
            /></View>
            <View><AtInput
                name='userPassword'
                title='密码'
                type="password"
                placeholder='密码'
                value={objAP.userPassword}
                onChange={handleChangePassword}
            /></View>
            <View><AtButton type='primary' onClick={onSubmit}>登录</AtButton>
            </View>
            <View><AtButton onClick={onReset}>重置</AtButton></View>



        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)