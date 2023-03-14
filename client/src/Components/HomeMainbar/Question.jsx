import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Question = ({question}) => {
  return (
    <div className='display-question-container'  >
        <div className="display-votes-ans">
        <p>{question?.upVote?.length - question?.downVote?.length || 0}</p>
            <p>Votes</p>
        </div>
        <div className="display-votes-ans">
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        <div className="display-question-detail">
            <Link to={`/Question/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
            <div className="display-tags-time">
                <div className="display-tags">
                    {
                        question.questionTags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                        ))
                    }
                </div>
                <p className="display-time">
                    asked {moment(question.askedOn).fromNow()} {question.userPosted}
                </p>
            </div>
        </div> 
    </div>
  )
}

export default Question