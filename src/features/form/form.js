/* eslint-disable no-unused-vars */




//reducer
export default function reducer(state=false,action){
    switch (action.type) {
        case 'form/formSubmitted':{
            return true
        }
        case 'form/formReset':{
            return false
        }
    }
    return state
}