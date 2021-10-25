import {React, useState} from "react";
import QuestionPreview from './QuestionPreview';
import { questionsIds } from '../features/questions/questions';
import { useSelector } from "react-redux";

const QuestionsList = () => {
  const [showingUnanswered, toggleShowingUnanswered] = useState(true)

  const selectUserAnswers = state => state.users[state.auth].answers


  const userAnswers = useSelector(selectUserAnswers)
  const ids = useSelector(questionsIds)

  const questionList = ids
  //answer truthy of falseyness will be compared against showing unanswered variable
    .filter(id => userAnswers[id] ? !showingUnanswered : showingUnanswered)
    .map(id => <QuestionPreview key={id} id={id}/>)

  return <div >
    <h2>{showingUnanswered ? "Unanswered Questions" : "Answered Questions"}</h2>
    <button onClick={() => toggleShowingUnanswered(!showingUnanswered)}>show {showingUnanswered ? "answered" : "unanswered"}</button>
    <div className="questions-list">{questionList}</div>
  </div>
}

export default QuestionsList