/* eslint-disable no-unused-vars */
import produce from 'immer'
import { createSelector } from 'reselect'
//Action Types
// const AUTHED_USER="authedUser";

//Action creators


//reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'questions/questionsReceived': {
            return action.payload
        }
        case 'questions/questionAdded': {
            return produce(state, (newState) => {
                newState[action.payload.id] = action.payload
            })
        }
    }
    return state
}
const questionsSelector = state => Object.values(state.questions)
const userSelector = state => state.auth

export const questionsIds = createSelector([questionsSelector, userSelector],
    (questions, user) => {
        const result = questions.reduce((previous, current) => {
            const questionAnswerers = [...current.optionOne.votes, ...current.optionTwo.votes]
            if (questionAnswerers.includes(user)) {
                previous.answeredQuestions.push(current.id)
            }
            else {
                previous.unansweredQuestions.push(current.id)
            }
            return previous
        }, {
            unansweredQuestions: [],
            answeredQuestions: []
        })
        return result
    }

)