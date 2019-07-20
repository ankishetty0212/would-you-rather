import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


//Action Creator - receiveQuestions
export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

function answerQuestion({authedUser, questionId, answer}){
    return{
        type: ANSWER_QUESTION,
        authedUser, 
        questionId, 
        answer
    }
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion({authedUser, questionId, answer}){
    return(dispatch, getState) => {
        //const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({ authedUser, questionId, answer })
        .then(dispatch(answerQuestion({authedUser, questionId, answer})))
        .then(() => dispatch(hideLoading()))

    }
}