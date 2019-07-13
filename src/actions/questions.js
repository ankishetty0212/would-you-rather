export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

//Action Creator - receiveQuestions
export function receiveQuestions(questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

//Function to dispatch call to action - receiveQuestions
/* export function receiveAllQuestions(){
    return (dispatch) => {
        return getAllQuestions()
        .then(({questions}) => {
            dispatch(receiveQuestions(questions))
        })
    }
} */