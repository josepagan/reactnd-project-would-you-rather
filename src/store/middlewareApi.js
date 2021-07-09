/* eslint-disable no-unused-vars */


import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from '../_DATA'
//TODO since alll calls are quite similar I should try to create a generic functio with composion

// const answerObj = {
//             authedUser: 'helenfoneing',
//             qid:"am8ehyc8byjqgar0jgpub9",
//             answer: "optionTwo"
//           }

// _saveQuestionAnswer(answerObj).then(res=>console.log("RES", res))


// const apiCall = async (dispatch, onSuccess, onError, callMethodName, data = undefined) => {
//     const callMethod = new Function(`return ${callMethodName}`)
//     try {
//         const response = await callMethod()
//         dispatch({ type: onSuccess, payload: response })

//     }
//     catch (error) {
//         dispatch({ type: onError, payload: error })
//     }
// }


// const callGetUsers = async (dispatch, onSuccess, onError) => {
//     try {
//         //add here a switch case with method so depending of get or whatever
//         const response = await _getUsers()
//         dispatch({ type: onSuccess, payload: response })
//     }
//     catch (error) {
//         dispatch({ type: onError, payload: error })

//     }

// }

const callGetQuestions = async (dispatch, onSuccess, onError) => {
    try {
        //add here a switch case with method so depending of get or whatever
        const response = await _getQuestions()
        dispatch({ type: onSuccess, payload: response })
    }
    catch (error) {
        dispatch({ type: onError, payload: error })

    }

}

const callSaveQuestion = async (data, dispatch, onSuccess, onError) => {
    try {
        const { question } = data

        //add here a switch case with method so depending of get or whatever
        const response = await _saveQuestion(question)
        dispatch({ type: onSuccess, payload: response })
    }
    catch (error) {
        dispatch({ type: onError, payload: error })

    }

}


const callSaveQuestionAnswer = async (data, dispatch, onSuccess, onError) => {
    try {
        const { answer } = data
        //add here a switch case with method so depending of get or whatever
        const response = await _saveQuestionAnswer(answer)

        //we dont get anything from server so we will use the data from apiCallBegan  to fill the state.
        //that means that the data on the website will only be update once the onSuccess dispatch happens, so there will be
        //a delay
        //TODO consider to change the design to 'optimistic' so the store update  happens first 
        // and get an error message afterwards if we dont get a positive 
        //response from the server.
        //

        //since we already have all the information I should not need to pick it from the response,
        //I could just use the answer object
        //eventually i have to investigate how to use this properly
        dispatch({ type: onSuccess, payload: response })
    }
    catch (error) {
        dispatch({ type: onError, payload: error })

    }
}

//TODO complete this with all api calls
const apiCalls = {
    _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer
}

const api = store => next => async action => {
    if (action.type !== 'api/callBegan') return next(action);
    //next(action) required so the original apiCallBegan appears first on redux devtools
    //otherwise the dispatch after the response would eat it
    next(action)
    const { dispatch } = store;

    const { callMethodName, url, feature, method, data, onSuccess, onError, apiCall } = action.payload;


    try {
        //callMethodName(string) gets the right function reference from apicalls
        const response = await apiCalls[callMethodName](data)
        dispatch({ type: onSuccess, payload: response })

    }
    catch (error) {
        dispatch({ type: onError, payload: error })
    }

    //DO NOT DELETE:
    // if (feature === "users" && method === "get") callGetUsers(dispatch, onSuccess, onError)
    // else if (feature === "questions" && method === "get") callGetQuestions(dispatch, onSuccess, onError)
    // else if (data && feature === "questions" && method === "post") callSaveQuestion(data, dispatch, onSuccess, onError)
    // else if ( data && feature === "answer" && method === "post") callSaveQuestionAnswer(data, dispatch, onSuccess, onError)
}
export default api;