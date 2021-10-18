import { React, useState } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";

// import { useDispatch } from "react-redux";

const AnswerForm = ({id: qid, optionOneText, optionTwoText, avatarURL }) => {
    const dispatch = useDispatch()
    const authedUser = useSelector(state => state.auth)
    
    const [choice, setChoice] = useState(undefined)
    const handleChange = e => { setChoice(e.target.value) }
    const handleSubmit = (e) => { 
        console.log("submitted:", choice)
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
                    <input type="radio" value="choice-1" id="choice-1"
                        onChange={handleChange} name="question" />
                    <label htmlFor="choice-1">{optionOneText}</label>
                </div>
                <input type="radio" value="choice-2" id="choice-2"
                    onChange={handleChange} name="question" />
                <label htmlFor="choice-2">{optionTwoText}</label>
                <input type="submit" />
            </form>
        </div>
    )
}

AnswerForm.propTypes = {
    optionOneText: PropTypes.string.isRequired,
    optionTwoText: PropTypes.string.isRequired,
    avatarURL: PropTypes.string
}

export default AnswerForm