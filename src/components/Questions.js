/* eslint-disable no-unused-vars */

import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux'

//TODO remember all the proptypes palaver

const UnansweredQuestions = ({ questions }) => {
  return <div>
    <div>UnansweredQuestions</div>
  </div>
}
const AnsweredQuestions = ({ questions }) => {
    const questionList = questions.map(el=><div>el</div>)
  return <div>
    <div>AnsweredQuestions</div>
    {questionList}
  </div>
}
const Questions = () => {

  // must contain list of all questions
  // 2 different views , answered by user and unanswered by user
  //unanswered by default

  const select = state => Object.keys(state.questions)
  const questions = useSelector(select)

  console.log("questions from component", Object.keys(questions))

  return <div>
    PRIVATE QUESTIONS PRIVATE
    {/* TODO create some sort of conditional rendering
    it has display unanswered by default but toggling must be a feature */}
    <UnansweredQuestions questions />
    <AnsweredQuestions questions />
  </div>

}

export default Questions