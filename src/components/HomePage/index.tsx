import { FC, useEffect, useState } from 'react'
import { View, Text, CoverImage } from '@tarojs/components'
import Carousel from '../Carousel';
import CardMsgList from '../CardMsgList';
import { rotation, emerge, product } from "../../config/taroApi";
import './index.scss'

interface emergeProps {
    emergeTag: string;
    data: Array<object>;
}

const HomePage: FC = () => {

    const [imgArr, setImgArr] = useState([])
    const [emergeArr, setEmergeArr] = useState([])

    useEffect(() => {
        rotation.queryAllRotation().then((res) => {
            let arr = res.data.map((item) => {
                return item.rotationImg
            })
            setImgArr(arr)
        })

    }, [])
    useEffect(() => {
        updataEmergeArr().then((result: any) => {
            setEmergeArr(result)
        }).catch((err) => {

        });
    }, [])

    const updataEmergeArr = () => {
        return emerge.queryAllEmerge().then((res) => {
            let arr = res.data.map((item) => {
                return { emergeTag: item.emergeTag, data: [] }
            })
            let newArr = Promise.all(arr.map((value: emergeProps, index: number) => {
                return product["queryProductByEmerge"]({ emergeTag: value.emergeTag }).then((val) => {
                    value.data = val.data
                    return value
                })
            }))
            return newArr
        })
    }

    return (
        <>
            <View className="home-page">
                <Carousel imgArr={imgArr} />
                {emergeArr.map((item, index: number) => {
                    console.log("HomePage", item)
                    return <CardMsgList key={index} item={item} />
                })}
            </View>
        </>
    )
}

export default HomePage