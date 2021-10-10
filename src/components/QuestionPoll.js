import React from "react";
import { useParams } from "react-router";
import QuestionDetails from "./QuestionDetails";

const QuestionPoll = () => {
    const { id } = useParams()
    return <div>QuestionPoll component. Question Id:{id}
    <QuestionDetails id={id} />
    </div>

}
//TODO depending on wether the question has been answered we have to render either a form or just the info

export default QuestionPoll