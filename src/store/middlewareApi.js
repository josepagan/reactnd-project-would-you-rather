/* eslint-disable no-unused-vars */


import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from '../_DATA'

const callGetUsers = async (dispatch, onSuccess, onError) => {
    try {
        //add here a switch case with method so depending of get or whatever
        const response =  await _getUsers()
        dispatch({type: onSuccess, payload: response})    
    }
    catch (error){
        dispatch({type:onError, payload: error})

    }

}

const callGetQuestions = async (dispatch, onSuccess, onError) => {
    try {
        //add here a switch case with method so depending of get or whatever
        const response =  await _getQuestions()
        dispatch({type: onSuccess, payload: response})    
    }
    catch (error){
        dispatch({type:onError, payload: error})

    }

}

const callSaveQuestion = async (data, dispatch, onSuccess, onError) => {
    try {
        const { question } = data

        //add here a switch case with method so depending of get or whatever
        const response =  await _saveQuestion(question)
        dispatch({type: onSuccess, payload: response})    
    }
    catch (error){
        dispatch({type:onError, payload: error})

    }

}


const callSaveQuestionAnswer = async (data, dispatch, onSuccess, onError) => {
    try {
        const { authedUser, qid, answer } = data
        //add here a switch case with method so depending of get or whatever
        const response =  await _saveQuestionAnswer( authedUser, qid, answer)
        dispatch({type: onSuccess, payload: response})    
    }
    catch (error){
        dispatch({type:onError, payload: error})

    }
}




const api = store => next => action => {
    if (action.type !== 'apiCallBegan') return next(action);
    //next(action) required so the original apiCallBegan appears first on redux devtools
    //otherwise the dispatch after the response would eat it
    next(action)
    const { dispatch } = store;
    const { url,feature, method, data, onSuccess, onError } = action.payload;
    if (feature === "users" && method === "get") callGetUsers(dispatch, onSuccess, onError)
    else if (feature === "questions" && method === "get") callGetQuestions(dispatch, onSuccess, onError)
    else if (data && feature === "questions" && method === "post") callSaveQuestion(data, dispatch, onSuccess, onError)
    else if ( data && feature === "questionAnswer" && method === "post") callSaveQuestionAnswer(data, dispatch, onSuccess, onError)
    // {
    //     try {
    //         //add here a switch case with method so depending of get or whatever
    //         const response =  await _getUsers()
    //         dispatch({type: onSuccess, payload: response})    
    //     }
    //     catch (error){
    //         dispatch({type:onError, payload: error})
    
    //     }

    // }
    
    
}
export default api;