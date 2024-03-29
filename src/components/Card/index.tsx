import { Component, PropsWithChildren } from 'react'
import { connect } from 'react-redux';
import { View, Text, CoverImage } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

interface cardProps {
    state?: any
    dispatch?: any
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

function mapStateToProps(state) {
    return { state }
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
}
class Card extends Component<cardProps> {
    state = {
        isFlex: false
    }

    flexStyle = process.env.TARO_ENV == "h5" ? {
        display: 'flex',
        width: 'calc(100% - 40px)',
        height: '100%',
        alignItems: 'center',
    } : {}
    flexViewStyle = process.env.TARO_ENV == "h5" ? {
        flex: 1
    } : {}


    TO_PRODUCT_PAGE() {
        const { productId } = this.props.item
        this.props.dispatch({ type: "PRODUCTID_CHANGE", data: productId })
        this.props.dispatch({ type: "ADD_PAGE", data: "ProductPage" })
        this.props.dispatch({ type: "ACTIVE_CHANGE", data: "ProductPage" })
    }

    render() {
        return (
            <View style={this.props.isFlex ? this.flexStyle : {}} onClick={() => this.TO_PRODUCT_PAGE()} className={`card ${this.props.isFlex ? "flex" : ""}'`}   >
                <View className='card-img' style={this.props.isFlex ? this.flexViewStyle : {}} >
                    <CoverImage className='img' src={this.props.item.productRotationImg[0]} />
                </View>
                <View className='card-main' style={this.props.isFlex ? this.flexViewStyle : {}} >
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

export default connect(mapStateToProps, mapDispatchToProps)(Card)