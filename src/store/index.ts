import { createStore, combineReducers } from 'redux';

interface actionObject {
    type?: string;
    data?: Array<object> | string | number | object | boolean
}

export interface stateType {
    activeComponent: string
    pageArr: Array<string>
    productId: number
    searchStr: Array<string>
}


const productId = (state: number = 0, action: actionObject) => {
    switch (action.type) {
        case 'PRODUCTID_CHANGE':
            return action.data
        default:
            return state
    }
}

const searchStr = (state: Array<string> = [], action: actionObject) => {
    switch (action.type) {
        case 'SEARCHSTR_CHANGE':
            return action.data
        default:
            return state
    }
}

const pageArr = (state: Array<string> = [], action: actionObject) => {
    switch (action.type) {
        case 'ADD_PAGE':
            return [...state, action.data]
        case 'DEL_PAGE':
            return action.data
        default:
            return state
    }
}


const activeComponent = (state: string = "", action: actionObject) => {
    console.log("activeComponent", state, action)
    switch (action.type) {
        case 'ACTIVE_CHANGE':
            return action.data
        default:
            return state
    }
}




const reducers = combineReducers({ activeComponent, pageArr, searchStr, productId })

export const store = createStore(reducers);