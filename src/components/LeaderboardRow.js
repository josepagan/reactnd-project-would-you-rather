import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const LeaderboardRow = ({ id, rank }) => {
    const user = useSelector(state => state.users[id])
    const { avatarURL, name, answers, questions } = user
    const answersCount = Object.keys(answers).length
    const questionsCount = questions.length
    // const points = answersCount + questionsCount

    return <div className="leaderboard-row">
        <div>{rank}</div>
        <img className="avatar" src={avatarURL} alt="test" />
        <div>
            <div>{name}</div>
            {/* <div>{points} Points!</div> */}
            <div>Questions: {questionsCount}</div>
            <div>Answers: {answersCount}</div>
        </div>
    </div>
}

LeaderboardRow.propTypes = {
    id: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
}

export default LeaderboardRow