import { createStore, combineReducers } from 'redux';

type actionObject = {
    type?: string;
    data?: Array<object> | string | number | object | boolean
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




const reducers = combineReducers({ activeComponent })

export const store = createStore(reducers);