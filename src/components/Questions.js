/* eslint-disable no-unused-vars */

import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import QuestionsList from './QuestionList';
import { questionsIds } from '../features/questions/questions';

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

  // const { unansweredQuestions, answeredQuestions } = useSelector(select)
  const { unansweredQuestions, answeredQuestions } = useSelector(questionsIds)

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