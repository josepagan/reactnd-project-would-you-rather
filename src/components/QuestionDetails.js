import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

const QuestionDetails = ({id}) => {
    //TODO move all the select shit and selection to question poll, then depending on if it has been answered or not 
    //render this or that
    const select = state => {
        console.log("answers from question Details ", state.users[state.auth].answers[id])
        if (state.users[state.auth].answers[id] !== undefined) return true
        else return false
    }
    const isQuestionAnswered = useSelector(select)
    console.log("isquestionasnwered",isQuestionAnswered)
    return <div>
        <h2>Would you rather..</h2>
    </div>
}

QuestionDetails.propTypes = {
    id: PropTypes.string.isRequired
}

export default QuestionDetails