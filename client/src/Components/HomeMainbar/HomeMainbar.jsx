import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import Question from './Question'

const HomeMainbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const user = 4;

  const questionsList = useSelector (state => state.questionReducer);
  //console.log(questionsList);

  /*  var questionsList = [{
      _id : 1,
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
      _id : 2,
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
      _id : 3,
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

    const checkAuth = () =>{
      if(user === null){
        alert("Login or Sign up to ask a question")
        navigate('/Auth')
      }else{
        navigate('/AskQuestion');
      };
    };
  

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }  
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>     
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.data.length} questions </p>
            <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar