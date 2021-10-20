import { React, useState } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { apiCallBegan } from "../store/api";

// import { useDispatch } from "react-redux";

const AnswerForm = ({id: qid, optionOneText, optionTwoText, avatarURL }) => {
    const dispatch = useDispatch()
    const authedUser = useSelector(state => state.auth)    
    const [answer, setAnswer] = useState(undefined)
    const handleChange = e => { setAnswer(e.target.value) }
    const handleSubmit = (e) => { 
        dispatch(apiCallBegan({
            callMethodName: '_saveQuestionAnswer',
            data: {authedUser, qid, answer },
            onSuccess: ['users/questionAnswered','questions/questionAnswered'],
            onError: 'apiRequestfailed'
          }
          ))
        //TODO complete all this shit
        // dispatch() 
        e.preventDefault()
    }
    return (
        <div>
            <div>
                <h2>Would you rather...</h2>
                <img className="avatar-large" src={avatarURL} alt="test" />

            </div>
            {/* TODO mess with css to vertically align labels with the input */}
            <form onSubmit={handleSubmit} className="form-answer">
                <div>
                    <input type="radio" value="optionOne" id="optionOne"
                        onChange={handleChange} name="question" />
                    <label htmlFor="optionOne">{optionOneText}</label>
                </div>
                <input type="radio" value="optionTwo" id="optionTwo"
                    onChange={handleChange} name="question" />
                <label htmlFor="optionTwo">{optionTwoText}</label>
                <input type="submit" />
            </form>
        </div>
    )
}

AnswerForm.propTypes = {
    id: PropTypes.string.isRequired,
    optionOneText: PropTypes.string.isRequired,
    optionTwoText: PropTypes.string.isRequired,
    avatarURL: PropTypes.string
}

export default AnswerForm