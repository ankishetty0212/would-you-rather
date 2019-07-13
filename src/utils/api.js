import{_getUsers, _getQuestions} from './_DATA.js'

export function getUsers(){
    return Promise.all([
        _getUsers()
      ]).then(([users]) => ({
        users
      }))
}

export function getAllQuestions(){
    return Promise.all([
      _getQuestions()
    ]).then(([questions]) => ({
      questions
    }))
}