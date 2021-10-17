import React from "react";
import { useParams } from "react-router";
import Question from "./Question";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
//TODO maybe instead of conditional rendering it would be a good idea to actually add Routes
const QuestionRoute = () => {
    const { id } = useParams()
    const questions =  useSelector(state => state.questions)
    if (questions[id]) return <Question id={id} />
    else return <Redirect to={"/404"}/>

}
//TODO depending on wether the question has been answered we have to render either a form or just the info

export default QuestionRoute