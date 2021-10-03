/* eslint-disable no-unused-vars */

import { React, useState } from 'react';
import { useSelector } from 'react-redux'
import QuestionsList from './QuestionList';
import { questionsIds } from '../features/questions/questions';
import { Button } from 'bootstrap';

const Questions = () => {

  const [showingUnanswered, toggleShowingUnanswered] = useState(true)
  const { unansweredQuestions, answeredQuestions } = useSelector(questionsIds)

  const listToRender = showingUnanswered ?
    <QuestionsList ids={unansweredQuestions} type="Unanswered Questions" />
    :
    <QuestionsList ids={answeredQuestions} type="Answered Questions" />

  return <div>
    <div>{listToRender}</div>
    <button onClick={()=>toggleShowingUnanswered(!showingUnanswered)}>show {showingUnanswered ? "answered" : "unanswered"}</button>
    
  </div>
}

export default Questions