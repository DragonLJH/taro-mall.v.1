import { TARO } from '../taroRequest';

// rotation
export const rotation = () => {
    const rotation = "rotation"
    const queryAllRotation = (data: object = {}) => {
        let url = rotation + "/queryAllRotation"
        return TARO.get(url, data)
    }
    return { queryAllRotation }
}

// emerge
export const emerge = () => {
    const emerge = "emerge"
    const queryAllEmerge = (data: object = {}) => {
        let url = emerge + "/queryAllEmerge"
        return TARO.get(url, data)
    }
    return { queryAllEmerge }
}


// product
export const product = () => {
    const product = "product"
    const queryProductByEmerge = (data: object = {}) => {
        let url = product + "/queryProductByEmerge"
        return TARO.get(url, data)
    }
    return { queryProductByEmerge }
}

