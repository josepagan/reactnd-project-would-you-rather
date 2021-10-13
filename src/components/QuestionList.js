/* eslint-disable no-unused-vars */

import {React, useState} from "react";
import PropTypes from 'prop-types';
import QuestionPreview from './QuestionPreview';
import { questionsIds } from '../features/questions/questions';
import { useSelector } from "react-redux";

const QuestionsList = () => {
  const [showingUnanswered, toggleShowingUnanswered] = useState(true)

  const selectUserAnswers = state => state.users[state.auth].answers


  const userAnswers = useSelector(selectUserAnswers)
  //TODO change silly quuestionsIDs2, that 2 in the end is silly
  const ids = useSelector(questionsIds)

  const questionList = ids
  //answer truthy of falseyness will be compared against showing unanswered variable
    .filter(id => userAnswers[id] ? !showingUnanswered : showingUnanswered)
    .map(id => <QuestionPreview key={id} id={id}/>)

    //TODO put here a sort method to sort by time of post
  return <div >
    <h2>{showingUnanswered ? "Unanswered Questions" : "Answered Questions"}</h2>
    <button onClick={() => toggleShowingUnanswered(!showingUnanswered)}>show {showingUnanswered ? "answered" : "unanswered"}</button>
    <div className="questions-list">{questionList}</div>
  </div>
}



// QuestionsList.propTypes = {
//   ids: PropTypes.object.isRequired,
//   listName: PropTypes.string
// }

export default QuestionsList