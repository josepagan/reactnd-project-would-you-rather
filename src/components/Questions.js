/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */


import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';



//TODO figure out why eslint does not like the proptypes
//TODO remember all the proptypes palaver



const Question = ({ id }) => {
  const questionObj = useSelector(state => state.questions[id])
  const { author, optionOne, optionTwo } = questionObj
  const { votes: optionOneVotes, text: optionOneText } = optionOne
  const { votes: optionTwoVotes, text: optionTwoText } = optionTwo

  // console.log(optionOne, optionOneVotes, optionOneText)
  return (<div><span style={{color:"gray"}}>Would you...
    </span><div>1.{optionOneText}</div>
    <div>2.{optionTwoText}</div>
    <div>author: {author}</div>
  </div>)
}


const QuestionsList = ({ questionsIds, type }) => {
  const questionList = questionsIds.map(id => <Question key={id} id={id}>{id}</Question>)
  return <div>
    <h2>{type}</h2>
    {questionList}
  </div>
}

QuestionsList.PropTypes = {
  questions: PropTypes.object.isRequired
}

const Questions = () => {

  // must contain list of all questions
  // 2 different views , answered by user and unanswered by user
  //unanswered by default

  //TODO this probably creates a reference, so its not good according to redux tutorial

  const select = state => {
    const user = state.auth
    const questions = Object.values(state.questions)

    const result = questions.reduce((previous, current) => {
      const questionAnswerers = [...current.optionOne.votes, ...current.optionTwo.votes]
      if (questionAnswerers.includes(user)) {
        previous.answeredQuestions.push(current.id)
      }
      else {
        previous.unansweredQuestions.push(current.id)
      }
      return previous
    }, {
      unansweredQuestions: [],
      answeredQuestions: []
    })
    return result
  }

  const { unansweredQuestions, answeredQuestions } = useSelector(select)

  return <div>
    PRIVATE QUESTIONS PRIVATE
    {/* TODO create some sort of conditional rendering
    it has display unanswered by default but toggling must be a feature */}
    <QuestionsList questionsIds={unansweredQuestions} type="Unanswered Questions" />
    <QuestionsList questionsIds={answeredQuestions} type="Answered Questions"/>
    {/* <AnsweredQuestions /> */}
  </div>

}

export default Questions