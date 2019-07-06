import {getUsers} from '../utils/api'
import {receiveUsers} from './users'

export function getInitialUsers(){
    return (dispatch) => {
        return getUsers()
        .then(({users})=>{
            dispatch(receiveUsers(users))
        }) 
    }
}