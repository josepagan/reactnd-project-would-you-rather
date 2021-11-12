import { React, useState } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { apiCallBegan } from "../store/api";

const PollForm = ({ id: qid, optionOneText, optionTwoText, avatarURL }) => {
    const dispatch = useDispatch()
    const authedUser = useSelector(state => state.auth)
    const [answer, setAnswer] = useState(undefined)
    const handleChange = e => { setAnswer(e.target.value) }
    const handleSubmit = e => {
        dispatch(apiCallBegan({
            callMethodName: '_saveQuestionAnswer',
            data: { authedUser, qid, answer },
            onSuccess: ['users/questionAnswered', 'questions/questionAnswered'],
            onError: 'apiRequestfailed'
        }
        ))
        e.preventDefault()
    }
    return (
        <div>
            <div>
                <h2>Would you rather...</h2>
                <div className="poll">
                    <img className="avatar-large" src={avatarURL} alt="test" />
                    <form onSubmit={handleSubmit} className="form-answer">
                        <div className="radio-inputs">
                            <div className="option-one">
                                <input type="radio" value="optionOne" id="optionOne"
                                    onChange={handleChange} name="question" />
                                <label htmlFor="optionOne">{optionOneText}</label>
                            </div>
                            <div className="option-two">
                                <input type="radio" value="optionTwo" id="optionTwo"
                                    onChange={handleChange} name="question" />
                                <label htmlFor="optionTwo">{optionTwoText}</label>
                            </div>
                            <input className="submit-button" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

PollForm.propTypes = {
    id: PropTypes.string.isRequired,
    optionOneText: PropTypes.string.isRequired,
    optionTwoText: PropTypes.string.isRequired,
    avatarURL: PropTypes.string
}

export default PollForm