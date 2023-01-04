import { TARO } from '../taroRequest';

// rotation
function Rotation() {
    const rotation = "rotation"
    const queryAllRotation = (data: object = {}) => {
        let url = rotation + "/queryAllRotation"
        return TARO.get(url, data)
    }
    return { queryAllRotation }
}
export const rotation = Rotation()

// emerge
function Emerge() {
    const emerge = "emerge"
    const queryAllEmerge = (data: object = {}) => {
        let url = emerge + "/queryAllEmerge"
        return TARO.get(url, data)
    }
    return { queryAllEmerge }
}
export const emerge = Emerge()


// product
function Product() {
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
export const product = Product()


// user
function User() {
    const user = "user"
    const queryUserByUserName = (data: object = {}) => {
        let url = user + "/queryUserByUserName"
        return TARO.get(url, data)
    }
    return { queryUserByUserName }
}
export const user = User()


// shop
function Shop() {
    const shop = "shop"
    const queryShopByUserName = (data: object = {}) => {
        let url = shop + "/queryShopByUserName"
        return TARO.get(url, data)
    }

    const updateShopById = (data: object = {}) => {
        let url = shop + "/updateShopById"
        return TARO.post(url, data)
    }

    const deleteShopbyId = (data: object = {}) => {
        let url = shop + "/deleteShopbyId"
        return TARO.post(url, data)
    }
    const insertShop = (data: object = {}) => {
        let url = shop + "/insertShop"
        return TARO.post(url, data)
    }


    return { queryShopByUserName, updateShopById, deleteShopbyId, insertShop }
}
export const shop = Shop()
