import { Component } from 'react'
import { store } from "./store"
import { Provider } from "react-redux"


import './app.scss'

class App extends Component<any> {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    // this.props.children 是将要会渲染的页面
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
