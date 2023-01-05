import { Component } from 'react'
import { AtToast } from 'taro-ui'
import './index.scss'

export interface myAtToastProps {
    text?: string
    icon?: string
    image?: string
    status?: 'error' | 'loading' | 'success'
    isOpened: boolean
}



class MyAtToast extends Component<myAtToastProps> {

    constructor(props, context) {
        super(props, context)
    }
    state = {
        atToast: {} as myAtToastProps
    }
    componentDidMount() {
        this.setState({ atToast: this.props })
        setTimeout(() => {
            this.setState({ atToast: { text: "", status: 'success', isOpened: false } })
        }, 1000)
    }
    render() {
        return <AtToast isOpened={this.state.atToast.isOpened} status={this.state.atToast.status} text={this.state.atToast.text}  ></AtToast>
    }
}

export default MyAtToast 