
import {type} from './userFunction'


export const login = (user) => {
    return { type: type.login,payload:user };
}


