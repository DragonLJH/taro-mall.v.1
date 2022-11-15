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


const SearchPage: FC = (props: any) => {
    const { searchStr } = props.state
    const [searchArr, setSearchArr] = useState([])
    useEffect(() => {
        product().queryProductByProductMsg({ productMsg: searchStr }).then((res) => {
            setSearchArr(res.data)
            console.log("useEffect-SearchPage", res)
        })

    }, [])
    return (
        <>
            <View>
                {searchArr.map((item, index: number) => {
                    console.log("SearchPage", item)
                    return <Card key={index} isFlex={true} item={item} />
                })}
            </View>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)