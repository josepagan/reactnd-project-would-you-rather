import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux"
import QuestionDetails from "./QuestionDetails";
import PollForm from "./PollForm";


const Question = ({ id }) => {

    //returns true if the question was answered by the current user 
    const select = state => {
        if (state.users[state.auth].answers[id] !== undefined) return true
        else return false
    }
    const isQuestionAnswered = useSelector(select)


    const questionObj = useSelector(state => state.questions[id])
    const { author, optionOne, optionTwo } = questionObj
    const authorObj = useSelector(state => state.users[author])
    const option = useSelector(state => state.users[state.auth].answers[id])
    
    const { avatarURL, name } = authorObj
    const { votes: optionOneVotes, text: optionOneText } = optionOne
    const { votes: optionTwoVotes, text: optionTwoText } = optionTwo
    const optionOneVotesCount = optionOneVotes.length
    const optionTwoVotesCount = optionTwoVotes.length

    const props = {id, author, name, avatarURL, optionOneText, optionOneVotesCount, optionTwoText, optionTwoVotesCount, option}

    return isQuestionAnswered ? <QuestionDetails {...props} /> : <PollForm {...props} />
    
    
}


Question.propTypes = {
    id: PropTypes.string.isRequired
}


export default Question