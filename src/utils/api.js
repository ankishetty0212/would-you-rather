import{_getUsers} from './_DATA.js'

export function getUsers(){
    return Promise.all([
        _getUsers()
      ]).then(([users]) => ({
        users
      }))
}