/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from 'prop-types';
import Question from './Question';



const QuestionsList = ({ ids, type }) => {
    const questionList = ids.map(id => <Question key={id} id={id}>{id}</Question>)
    return <div>
      <h2>{type}</h2>
      {questionList}
    </div>
  }

  QuestionsList.propTypes = {
    ids: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
  }

  export default QuestionsList