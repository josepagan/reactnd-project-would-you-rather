import React from "react";
import PropTypes from 'prop-types';


const QuestionDetails = ({ optionOneText, optionTwoText, optionOneVotesCount, optionTwoVotesCount, avatarURL, option }) => {
    const totalVoters = optionOneVotesCount + optionTwoVotesCount
    const percentageOptionOne = (100 / totalVoters) * optionOneVotesCount
    const percentageOptionTwo = (100 / totalVoters) * optionTwoVotesCount
    let optionOneClassNames = "option"
    let optionTwoClassNames = "option"
    const optionSpan = <span className="option-voted">  YOU VOTED THIS OPTION</span>
    option === "optionOne" ? optionOneClassNames += " red-border" : optionTwoClassNames += " red-border"
    return (
        <div>
            <h2>Would you rather...</h2>
            <img className="avatar-large" src={avatarURL} alt="test" />
            <ul>
                <li className={optionOneClassNames}>
                    {optionOneText} voted {optionOneVotesCount} times
                    <span>{percentageOptionOne}%</span>
                    {option === "optionOne" && optionSpan}
                </li>
                <li className={optionTwoClassNames}>
                    {optionTwoText} voted {optionTwoVotesCount} times
                    <span>{percentageOptionTwo}%</span>
                    {option === "optionTwo" && optionSpan}
                </li>
            </ul>
        </div>
    )
}

QuestionDetails.propTypes = {
    option: PropTypes.string.isRequired,
    optionOneText: PropTypes.string.isRequired,
    optionTwoText: PropTypes.string.isRequired,
    optionOneVotesCount: PropTypes.number.isRequired,
    optionTwoVotesCount: PropTypes.number.isRequired,
    avatarURL: PropTypes.string
}


export default QuestionDetails