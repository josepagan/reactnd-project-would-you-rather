/* eslint-disable no-unused-vars */


//this reducer simply keeps track of the form submision to
//trigger some user feedback when form has sucessfully submited

//it resets on form component unmount

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