import React from "react";
import { useParams } from "react-router";
import QuestionDetails from "./QuestionDetails";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const QuestionPoll = () => {
    const { id } = useParams()
    const questions =  useSelector(state => state.questions)
    if (questions[id]) return <QuestionDetails id={id} />
    else return <Redirect to={"/404"}/>

}
//TODO depending on wether the question has been answered we have to render either a form or just the info

export default QuestionPoll