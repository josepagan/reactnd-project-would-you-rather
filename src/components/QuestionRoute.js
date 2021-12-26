import React from "react";
import { useParams } from "react-router";
import Question from "./Question";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
const QuestionRoute = () => {
    const { id } = useParams()
    const questions =  useSelector(state => state.questions)
    if (questions[id]) return <Question id={id} />
    else return <Redirect to={"/404"}/>
}

export default QuestionRoute