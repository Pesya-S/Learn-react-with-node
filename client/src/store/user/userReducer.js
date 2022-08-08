import {type} from './userFunction'
import * as functions from './userFunction'
const initilize = {
    name:'',email:'',password:''
};

export const user = (state = initilize, action) => {
    switch (action.type) {
        case type.login: return functions.login(state,action.payload);
        default: return state;
    }
}
