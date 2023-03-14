import React from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';
import copy from 'react-copy-to-clipboard'

import upvote from '../../Assets/upvote.png'
import downvote from '../../Assets/downvote.png'
import './Questions.css'
import Avatar from '../../Components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers'
import { useState } from 'react'
import { deleteQuestion, postAnswer, voteQuestion } from '../../actions/question'


const QuestionDetails = () => {

  const { id } = useParams();
  const questionsList = useSelector ((state) => state.questionReducer);
  const User = useSelector ((state) => state.currentUserReducer);
 // console.log(id)

 /* var questionsList = [{
    _id : '1',
    upvotes : 6,
    downvotes : 5,
    noOfAnswers: 4,
    questionTitle: "What is a function?",
    questionBody : "It Meant to be",
    questionTags : ["Java","React","JavaScript","HTML","CSS","Nodejs"],
    userPosted : "mano",
    userId : 6,
    askedon : "Jan 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "Atul",
      answeredOn : "Aug 2",
      userId : 2,
    }]
  },{
    _id : '2',
    upvotes : 0,
    downvotes :7,
    noOfAnswers: 8,
    questionTitle: "What is a function?",
    questionBody : "It Meant to be",
    questionTags : ["Python","Ruby","Angular"],
    userPosted : "mano",
    userId : 9,
    askedon : "Jan 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "Atul",
      answeredOn : "Aug 2",
      userId : 2,
    }]
  },{
    _id : '3',
    upvotes : 10,
    downvotes : 11,
    noOfAnswers: 12,
    questionTitle: "What is a function?",
    questionBody : "It Meant to be",
    questionTags : ["Java","React","JavaScript","HTML","CSS","Nodejs"],
    userPosted : "mano",
    userId : 13,
    askedon : "Jan 1",
    answer : [{
      answerBody : "Answer",
      userAnswered : "Atul",
      answeredOn : "Aug 2",
      userId : 2,
    }]
  }] */
  const [Answer, setAnswer] = useState("")
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const url = "http://localhost:3000";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault() 
    if(User === null){
        alert("Login or Signup to Post a Answer")
        Navigate('/Auth')
    }else{
        if(Answer === ""){
          alert("Enter a Answer berfore Submit")
        }else{
          dispatch(postAnswer({id, noOfAnswers : answerLength + 1, answerBody : Answer, userAnswered : User.result.name, userId : User.result._id}))
        }
    }
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  }

  const handleShare = () => {
    navigator.clipboard.writeText(url + location.pathname);
    alert('Copied url : ' + url + location.pathname);
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVote", User.result._id));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", User.result._id));
  };

  return (
    <div className='question-details-page'>
       {
        questionsList.data === null ? (
        <h1>Loading...</h1> ) : (
        <>
          {
            questionsList.data.filter( (question) => question._id === id).map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                      <div className="question-votes">
                        <img src={upvote} alt="up" className='votes-icon' onClick={handleUpVote}/>
                        <p>{question?.upVote?.length - question?.downVote?.length || 0}</p>
                        <img src={downvote} alt="down" className='votes-icon' onClick={handleDownVote}/>
                      </div>
                      <div style={{width : "100%"}}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-detail-tags">
                        {
                          question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                            )
                          )
                        }
                        
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type='button' onClick={handleShare}>Share</button>
                          {
                            User?.result?._id === question?.userId && (
                              <button type='button' onClick={handleDelete}>Delete</button>
                            )
                          }
                         
                        </div>
                        <div>
                          <p>Asked {moment(question.askedon).fromNow()}</p>
                          <Link to={`/Users/${question.userId}`} className="user-link" style={{color : '#0086d8'}}>
                            <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {question.userPosted}
                            </div>
                          </Link>
                        </div>
                      </div>
                      </div>
                    </div>
                  </section>
                  {
                    question.noOfAnswers !== 0 && (
                      <section>
                        <h3>{question.noOfAnswers} Answers</h3>
                        <DisplayAnswers key={question._id} question={question} handleShare={handleShare}/>
                      </section>
                    )
                  }
                  <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form onSubmit={(e) => {handlePostAns(e, question.answer.length);}}>
                      <textarea name="" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea><br />
                      <input type="Submit" className='post-ans-btn' value="Post Your Answer" onChange={(e) => {handlePostAns(e, question.answer.length)}}/>
                    </form>
                    <p>
                      Browse other Question and tagged
                      {
                        question.questionTags.map((tag) => (
                          <Link to='/Tags' key={tag} className="ans-tags">{tag}</Link>
                        ))
                      } {" "}or 
                      {
                        <Link to='/AskQuestion' style={{textDecoration :"none", color :"#009dff" }}> {" "}ask your own question.</Link>
                      }
                    </p>
                  </section>
              </div>
              
            ))
            
          }
        </>
       )}
    </div>
  )
}

export default QuestionDetails