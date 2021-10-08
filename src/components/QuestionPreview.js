/* eslint-disable no-unused-vars */

import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const QuestionPreview = ({ id }) => {
    const questionObj = useSelector(state => state.questions[id])
    const { author, optionOne, optionTwo, timestamp} = questionObj
    const authorObj = useSelector(state => state.users[author])
    const {avatarURL, name} = authorObj
    const { votes: optionOneVotes, text: optionOneText } = optionOne
    const { votes: optionTwoVotes, text: optionTwoText } = optionTwo

    return (
        <div className="questionPreview">
            <div>{name} asks:</div>
            <img className="avatar" src={avatarURL} alt="test"/>
            {console.log("authorObj",authorObj)}
            <div>1.{optionOneText}</div>
            <div>2.{optionTwoText}</div>
            <Link to={`/questions/${id}`}>Link to poll</Link>
        </div>
        )
}

QuestionPreview.propTypes = {
    id: PropTypes.string.isRequired
}
export default QuestionPreview