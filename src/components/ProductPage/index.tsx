import { FC, useEffect, useState } from 'react'
import { View, Text, CoverImage } from '@tarojs/components'
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
                    <View className='price'>
                        <Text>{data.productSellingPrice}</Text>
                        <Text>{data.productPrice}</Text>
                    </View>
                </View>
            ) : ""}


        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)