/* eslint-disable no-unused-vars */

import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



const QuestionPreview = ({ id }) => {
    const questionObj = useSelector(state => state.questions[id])
    const { author, optionOne, optionTwo } = questionObj
    const { votes: optionOneVotes, text: optionOneText } = optionOne
    const { votes: optionTwoVotes, text: optionTwoText } = optionTwo

    // console.log(optionOne, optionOneVotes, optionOneText)
    return (
        <div><span style={{ color: "gray" }}>Would you...
        </span>
            <div>1.{optionOneText}</div>
            <div>2.{optionTwoText}</div>
            <div>author: {author}</div>
            <Link to={`/questions/${id}`}>Link to poll</Link>
        </div>)
}

QuestionPreview.propTypes = {
    id: PropTypes.string.isRequired
}
export default QuestionPreview