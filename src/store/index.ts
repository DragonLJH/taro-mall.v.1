import { createStore, combineReducers } from 'redux';

type actionObject = {
    type?: string;
    data?: Array<object> | string | number | object | boolean
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




const reducers = combineReducers({ activeComponent, pageArr })

export const store = createStore(reducers);