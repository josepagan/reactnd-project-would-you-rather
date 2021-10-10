/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { React, useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { apiCallBegan } from "../store/api"

const NewQuestionForm = () => {
  const [optionOneText, setOptionOneText] = useState("")
  const [optionTwoText, setOptionTwoText] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const author = useSelector(state => state.auth)
  const dispatch = useDispatch()


const handleSubmit = e => {
  dispatch(apiCallBegan({
    callMethodName: '_saveQuestion',
    data: { optionOneText, optionTwoText, author },
    onSuccess: ['questions/questionAdded','users/questionAdded'],
    onError: 'apiRequestfailed'
  }
  ))
  e.preventDefault()
}

  return (
    <form className="new-question-form"
    onSubmit={handleSubmit}
      >
      NEW QUESTION FORM HERE
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
      <input type="submit" />
    </form>)
}


export default NewQuestionForm