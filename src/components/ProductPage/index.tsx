import { FC, useEffect, useState, Component } from 'react'
import { View, Text, CoverImage } from '@tarojs/components'
import { AtIcon, AtFloatLayout, AtTag } from 'taro-ui'
import { connect } from 'react-redux';
import Carousel from '../Carousel';
import Card from '../Card';
import { rotation, emerge, product } from "../../config/taroApi";
import './index.scss'
import { stateType } from "../../store"


function mapStateToProps(state) {
    return { state }
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
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

interface ProductPageProps {
    dispatch: Function
    state: stateType
}

interface myTagsProps {
    arr: Array<string>
    type: string
    selectMsg: Function
}


const MyTags = (props: myTagsProps) => {
    const { arr, type, selectMsg } = props
    const [active, setActive] = useState({})
    const [initArr, setInitArr] = useState({})
    useEffect(() => {
        let obj = {}
        let init = arr.forEach((item) => {
            obj[item] = false
        })
        console.log("init", init)
        setActive(obj)
        setInitArr(obj)
    }, [])
    const click = (item: string) => {
        let flag = { ...initArr }
        flag[item] = true
        setActive(flag)
        let obj = {}
        obj[type] = item
        selectMsg(obj)
    }

    return (
        <View className='MyTags'>
            {Object.keys(active).map((item, index) => {
                return (<AtTag onClick={() => click(item)} key={index} active={active[item]} type='primary' circle >{item}</AtTag>)
            })}
        </View>
    )
}


const ProductPage: FC = (props: ProductPageProps) => {
    console.log("ProductPage", props)
    const { productId } = props.state
    const [data, setData] = useState({} as productProps)
    const [choice, setChoice] = useState(false)
    const [selectData, setSelectData] = useState({})
    useEffect(() => {
        product().queryProductById({ productId: productId }).then((res) => {
            setData(res.data)
            console.log("useEffect-ProductPage", res)
        })
    }, [])
    const handleClose = () => {
        setChoice(false)
    }
    const selectMsg = (item: object) => {
        let flagObj = { ...selectData }
        setSelectData({ ...flagObj, ...item })
        console.log("selectMsg", { ...flagObj, ...item })
    }

    return (
        <>

            {Object.keys(data).length ? (
                <View className='product-page'>
                    <Carousel imgArr={data.productRotationImg} />
                    <View className='product-msg'>
                        <View className='price'>
                            <Text>{data.productSellingPrice}</Text>
                            <Text className='del'>{data.productPrice}</Text>
                        </View>
                        <View className='name'>
                            <Text>{data.productName}</Text>
                        </View>
                        <View className='msg'>
                            <Text className='msg-title'>{data.productEmergeSite.split("#")[0]}</Text>
                            <Text>{data.productMsg}</Text>
                        </View>
                    </View>
                    <View className='choice-msg' onClick={() => setChoice(true)}>
                        <View className='at-icon at-icon-bullet-list'></View>
                        <Text>共{data.productColor.length}种颜色分类可选</Text>
                    </View>
                    <AtFloatLayout className='choice-msg-float-layout' isOpened={choice} onClose={() => setChoice(false)}>
                        {/* {data.productColor.map((item, index) => {
                            return (
                                <AtTag key={index} type='primary' circle >{item}</AtTag>
                            )
                        })} */}
                        <View>
                            <Text>颜色</Text>
                            <MyTags arr={data.productColor} type="selectColor" selectMsg={selectMsg}></MyTags>
                        </View>
                        <View>
                            <Text>尺寸</Text>
                            <MyTags arr={data.productSize} type="selectSize" selectMsg={selectMsg}></MyTags>
                        </View>
                    </AtFloatLayout>
                    <View className='product-img-msg'>
                        {data.productMsgImg.map((item, index) => {
                            return <CoverImage key={index} className='img' src={item} />
                        })}
                    </View>
                    <View className='product-page-bottom'>
                        <View className='product-page-star'>
                            <View className='at-icon at-icon-heart'></View>
                            <View>
                                <Text>收藏</Text>
                            </View>
                        </View>
                        <View className='product-page-operation'>
                            <View className='product-page-operation-item'>
                                <Text>加入购物车</Text>
                            </View>
                            <View className='product-page-operation-item'>
                                <Text>立即购买</Text>
                            </View>
                        </View>

                    </View>
                </View>
            ) : ""}


        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)