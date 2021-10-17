/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux"
import QuestionDetails from "./QuestionDetails";
import AnswerForm from "./AnswerForm";


const Question = ({ id }) => {
    //TODO move all the select shit and selection to question poll, then depending on if it has been answered or not 
    //render this or that
    const select = state => {
        console.log("answers from question Details ", state.users[state.auth].answers[id])
        if (state.users[state.auth].answers[id] !== undefined) return true
        else return false
    }
    const isQuestionAnswered = useSelector(select)


    //shamelesly copypasted from Question, consider better pattern
    const questionObj = useSelector(state => state.questions[id])
    const { author, optionOne, optionTwo, timestamp } = questionObj
    const authorObj = useSelector(state => state.users[author])
    const { avatarURL, name } = authorObj
    const { votes: optionOneVotes, text: optionOneText } = optionOne
    const { votes: optionTwoVotes, text: optionTwoText } = optionTwo
    const optionOneVotesCount = optionOneVotes.length
    const optionTwoVotesCount = optionTwoVotes.length
    console.log("isquestionasnwered", isQuestionAnswered)

    //TODO I actually have to split this , if the qestion has been answered return <FOrm>
    //if not, return display with all the data as props, that would make much more sense
    const props = {id, author, name, avatarURL, optionOneText, optionOneVotesCount, optionTwoText, optionTwoVotesCount}

    return isQuestionAnswered ? <QuestionDetails {...props} /> : <AnswerForm {...props} />
    
    
}


Question.propTypes = {
    id: PropTypes.string.isRequired
}


export default Question