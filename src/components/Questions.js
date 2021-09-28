/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */


import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';


const UnansweredQuestions = ({ questionsIds }) => {
  return <div>
    <div>UnansweredQuestions</div>
  </div>
}
//TODO figure out why eslint does not like the proptypes
//TODO remember all the proptypes palaver

UnansweredQuestions.PropTypes = {
  questions: PropTypes.object.isRequired
}

const Question = ({ id }) => {
  const questionObj = useSelector(state => state.questions[id])
  const {author, optionOne, optionTwo} = questionObj
  const {votes: optionOneVotes, text: optionOneText} = optionOne
  const {votes: optionTwoVotes, text: optionTwoText} = optionTwo
  console.log(optionOne, optionOneVotes, optionOneText)
  return (<div>Would you
    <div>{optionOneText}</div>
    <div>{optionTwoText}</div>
    <div>author: {author}</div>
  </div>)
}


const AnsweredQuestions = ({ questionsIds }) => {
  const questionList = questionsIds.map(id => <Question key={id} id={id}>{id}</Question>)
  return <div>
    <div>AnsweredQuestions</div>
    {questionList}
  </div>
}

AnsweredQuestions.PropTypes = {
  questions: PropTypes.object.isRequired
}

const Questions = () => {

  // must contain list of all questions
  // 2 different views , answered by user and unanswered by user
  //unanswered by default

  //TODO this probably creates a reference, so its not good according to redux tutorial
  const select = state => Object.keys(state.questions)
  const questionsIds = useSelector(select)

  console.log("questions from useSelector", questionsIds)

  return <div>
    PRIVATE QUESTIONS PRIVATE
    {/* TODO create some sort of conditional rendering
    it has display unanswered by default but toggling must be a feature */}
    <UnansweredQuestions questionsIds={questionsIds} />
    <AnsweredQuestions questionsIds={questionsIds} />
    {/* <AnsweredQuestions /> */}
  </div>

}

export default Questions