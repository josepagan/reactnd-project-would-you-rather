/* eslint-disable no-unused-vars */

import { React, useState } from 'react';
import { useSelector } from 'react-redux'
import QuestionsList from './QuestionList';
import { questionsIds } from '../features/questions/questions';
import { questionsIds2 } from '../features/questions/questions';

const Questions = () => {

  const [showingUnanswered, toggleShowingUnanswered] = useState(true)
  const { unansweredQuestions, answeredQuestions } = useSelector(questionsIds)
  const questionsIdObj = useSelector(questionsIds2);
  console.log("questions alternative!!!",questionsIdObj)

  const listNOTToRender = showingUnanswered ?
    <QuestionsList ids={unansweredQuestions} listName="Unanswered Questions" />
    :
    <QuestionsList ids={answeredQuestions} listName="Answered Questions" />

    const listToRender = <QuestionsList ids={questionsIdObj} listName="allquestions"/>

  return <div>
    <div>{listToRender}</div>
    <button onClick={() => toggleShowingUnanswered(!showingUnanswered)}>show {showingUnanswered ? "answered" : "unanswered"}</button>
  </div>
}

// export default Questions