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


//create an array with the ids of all the questions, then sort the array based
//on the timestamp of each question

const questionsSelector = state => state.questions
export const questionsIds = createSelector([questionsSelector],
    (questions) => {
        const questionsIdArray = Object.keys(questions)
        const sortedByTimestamp = questionsIdArray.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        return sortedByTimestamp
    }

)


export const isQuestionAnswered = createSelector()