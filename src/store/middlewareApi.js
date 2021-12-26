/* eslint-disable no-unused-vars */

import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from '../_DATA'

//         //TODO consider to change the design to 'optimistic' so the store update  happens first 
//         // and get an error message afterwards if we dont get a positive 
//         //response from the server.
//         // to make it optimistic: just go ahead dispatching it and then 
//         //

//         //since we already have all the information I should not need to pick it from the response,
//         //I could just use the answer object
//         //eventually i have to investigate how to use this properly
//         dispatch({ type: onSuccess, payload: response })
//     }
//     catch (error) {
//         dispatch({ type: onError, payload: error })
//     }
// }

const apiCalls = {
    _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer
}

const api = store => next => async action => {
    if (action.type !== 'api/callBegan') return next(action);
    //next(action) required so the original apiCallBegan appears first on redux devtools
    //otherwise the dispatch after the response would eat it
    next(action)
    const { dispatch } = store;

    const { callMethodName, url, feature, method, data, onError, apiCall } = action.payload;
    let { onSuccess } = action.payload;
    //onsuccess now will be an array of actions to call , wrap it in an array.
    if (typeof (onSuccess) === 'string') onSuccess = [onSuccess]


    try {
        //TODO consider to make it optimistic (first update store, then if data all right let it go if not get error)
        //callMethodName(string) gets the right method reference from apicalls
        //if we had to call a proper backend we would use a switch wih proper callings
        const response = await apiCalls[callMethodName](data)
        onSuccess.forEach(element => {
            dispatch({ type: element, payload: response })

        });
        // dispatch({ type: onSuccess, payload: response })

    }
    catch (error) {
        dispatch({ type: onError, payload: error })
        console.log("wtf")
    }

}
export default api;