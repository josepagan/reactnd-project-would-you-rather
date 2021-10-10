import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const QuestionDetails = ({id}) => {
    const select = state => {
        console.log("answers from question Details ", state.users[state.auth].answers[id])
        if (state.users[state.auth].answers[id] !== undefined) return true
        else return false
    }
    const isQuestionAnswered = useSelector(select)
    console.log("isquestionasnwered",isQuestionAnswered)
    return <h1>{isQuestionAnswered.toString()}</h1>
}

QuestionDetails.propTypes = {
    id: PropTypes.string.isRequired
}

export default QuestionDetails