
import Taro from '@tarojs/taro';

interface params {
    url: string
    data: object
}
interface Method {
    OPTIONS
    GET
    HEAD
    POST
    PUT
    DELETE
    TRACE
    CONNECT
}

const baseUrl = "http://150.158.96.29:8782/"

class taroRequest {
    private baseRequest(params: params, method: keyof Method = "GET") {
        const { url, data } = params
        const option = {
            url: baseUrl + url, //仅为示例，并非真实的接口地址
            data: data,
            method: method,
            header: {
                'content-type': 'application/json' // 默认值
            }
        }
        if (method == "POST") {
            option["header"] = {
                'content-type': 'application/x-www-form-urlencoded' 
            }
        }
        return Taro.request(option)
    }

    get(url: string, data: object) {
        return this.baseRequest({ url, data })
    }
    post(url: string, data: object) {
        return this.baseRequest({ url, data }, "POST")
    }

}

export const TARO = new taroRequest()