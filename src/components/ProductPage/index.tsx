import { FC, useEffect, useState } from 'react'
import { View, Text, CoverImage } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { connect } from 'react-redux';
import Carousel from '../Carousel';
import Card from '../Card';
import { rotation, emerge, product } from "../../config/taroApi";
import './index.scss'


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

const ProductPage: FC = (props: any) => {
    const { productId } = props.state
    const [data, setData] = useState({} as productProps)
    useEffect(() => {
        product().queryProductById({ productId: productId }).then((res) => {
            setData(res.data)
            console.log("useEffect-ProductPage", res)
        })
    }, [])
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
                    <View className='choice-msg'>
                        
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
                                加入购物车
                            </View>
                            <View className='product-page-operation-item'>
                                立即购买
                            </View>
                        </View>

                    </View>
                </View>
            ) : ""}


        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)