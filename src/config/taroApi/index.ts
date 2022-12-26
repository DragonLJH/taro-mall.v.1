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
    const queryProductByProductMsg = (data: object = {}) => {
        let url = product + "/queryProductByProductMsg"
        return TARO.get(url, data)
    }

    const queryProductById = (data: object = {}) => {
        let url = product + "/queryProductById"
        return TARO.get(url, data)
    }

    return { queryProductByEmerge, queryProductByProductMsg, queryProductById }
}


// user
export const user = () => {
    const user = "user"
    const queryUserByUserName = (data: object = {}) => {
        let url = user + "/queryUserByUserName"
        return TARO.get(url, data)
    }
    return { queryUserByUserName }
}



// shop
export const shop = () => {
    const shop = "shop"
    const queryShopByUserName = (data: object = {}) => {
        let url = shop + "/queryShopByUserName"
        return TARO.get(url, data)
    }
    return { queryShopByUserName }
}
