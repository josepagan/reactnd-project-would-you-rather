/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { React, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { apiCallBegan } from "../store/api"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

const NewQuestionForm = () => {

  const [optionOneText, setOptionOneText] = useState("")
  const [optionTwoText, setOptionTwoText] = useState("")
  const author = useSelector(state => state.auth)
  const submitted = useSelector(state => state.form)
  const dispatch = useDispatch()



  const handleSubmit = e => {
    dispatch(apiCallBegan({
      callMethodName: '_saveQuestion',
      data: { optionOneText, optionTwoText, author },
      onSuccess: ['questions/questionAdded', 'users/questionAdded', 'form/formSubmitted'],
      onError: 'apiRequestfailed'
    }
    ))
    e.preventDefault()
  }

  useEffect(() => {
    return () => {
      //dispatch form reset.
      dispatch({
        type: 'form/formReset'
      })
    };
  }, [])




  return submitted ? <Redirect to="/"/> :  (
    <div>
      <form className="new-question-form"
        onSubmit={handleSubmit}
      >
        <div className="form-answer">
          <h3>Would you rather?...</h3>
          <label>1.
            <input type="text"
              value={optionOneText}
              onChange={(e) => setOptionOneText(e.target.value)} />
          </label>
          <label>2.
            <input type="text"
              value={optionTwoText}
              onChange={(e) => setOptionTwoText(e.target.value)} />
          </label>
          <input className="submit-button" type="submit" disabled={submitted} />
        </div>
      </form>
      {submitted && "Thanks for submitting this question!"}
    </div>
  )
}


export default NewQuestionForm