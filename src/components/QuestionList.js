/* eslint-disable no-unused-vars */

import {React, useState} from "react";
import PropTypes from 'prop-types';
import QuestionPreview from './QuestionPreview';
import { questionsIds2 } from '../features/questions/questions';
import { useSelector } from "react-redux";

const QuestionsList = () => {
  const [showingUnanswered, toggleShowingUnanswered] = useState(true)

  const select = state => state.users[state.auth].answers


  const answers = useSelector(select)
  const ids = useSelector(questionsIds2)

  const questionList = ids
  //answer truthy of falseyness will be compared against showing unanswered variable
    .filter(id => answers[id] ? !showingUnanswered : showingUnanswered)
    .map(id => <QuestionPreview key={id} id={id}>{id}</QuestionPreview>)
    //TODO put here a sort method to sort by time of post
  return <div >
    {/* <h2>{listName}</h2> */}
    {/* TODO make a freaking button to toggle the answer or unansweredd  */}
    <div className="questions-list">{questionList}</div>
  </div>
}



// QuestionsList.propTypes = {
//   ids: PropTypes.object.isRequired,
//   listName: PropTypes.string
// }

export default QuestionsList