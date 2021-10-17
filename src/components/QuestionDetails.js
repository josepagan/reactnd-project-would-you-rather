import React from "react";
import PropTypes from 'prop-types';


const QuestionDetails = ({optionOneText, optionTwoText, optionOneVotesCount, optionTwoVotesCount, avatarURL}) => {
    const totalVoters = optionOneVotesCount + optionTwoVotesCount
    const percentageOptionOne = (100 / totalVoters) * optionOneVotesCount
    const percentageOptionTwo = (100 / totalVoters) * optionTwoVotesCount
    return (
        <div>
        <h2>Would you rather...</h2>
        <img className="avatar-large" src={avatarURL} alt="test" />
        <ul>
            <li>{optionOneText} voted {optionOneVotesCount} times<span>{percentageOptionOne}%</span> </li>
            <li>{optionTwoText} voted {optionTwoVotesCount} times <span>{percentageOptionTwo}%</span></li>
        </ul>
    </div>
    )
}

QuestionDetails.propTypes = {
    optionOneText: PropTypes.string.isRequired,
    optionTwoText: PropTypes.string.isRequired,
    optionOneVotesCount: PropTypes.number.isRequired,
    optionTwoVotesCount: PropTypes.number.isRequired,
    avatarURL: PropTypes.string
}


export default QuestionDetails