import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question
            }
        case ANSWER_QUESTION:
            const { authedUser, questionId, answer } = action
            return{
                ...state,
                [questionId]: {
                    ...state[questionId],
                    [answer] :{
                        ...state[questionId].answer,
                        text: state[questionId][answer].text,
                        votes: state[questionId][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
                return state
    }
}