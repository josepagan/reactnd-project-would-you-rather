/* eslint-disable no-unused-vars */

import { React, useState } from 'react';
import { useSelector } from 'react-redux'
import QuestionsList from './QuestionList';
import { questionsIds } from '../features/questions/questions';

const Questions = () => {

  const [showingUnanswered, toggleShowingUnanswered] = useState(true)
  const { unansweredQuestions, answeredQuestions } = useSelector(questionsIds)

  const listToRender = showingUnanswered ?
    <QuestionsList ids={unansweredQuestions} listName="Unanswered Questions" />
    :
    <QuestionsList ids={answeredQuestions} listName="Answered Questions" />

  return <div>
    <div>{listToRender}</div>
    <button onClick={() => toggleShowingUnanswered(!showingUnanswered)}>show {showingUnanswered ? "answered" : "unanswered"}</button>
  </div>
}

export default Questions