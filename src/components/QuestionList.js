/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from 'prop-types';
import QuestionPreview from './QuestionPreview';



const QuestionsList = ({ ids, listName }) => {
    const questionList = ids.map(id => <QuestionPreview key={id} id={id}>{id}</QuestionPreview>)
    return <div>
      <h2>{listName}</h2>
      {questionList}
    </div>
  }

  QuestionsList.propTypes = {
    ids: PropTypes.object.isRequired,
    listName: PropTypes.string.isRequired
  }

  export default QuestionsList