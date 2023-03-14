import React,{useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
import  askQuestion  from '../../actions/question.js'

const AskQuestion = () => {
    const [questionTitle, setquestionTitle] = useState(' ');
    const [questionBody, setquestionBody] = useState('');
    const [questionTags, setquestionTags] = useState('');

    const dispatch = useDispatch();
    const User = useSelector((state) => (state.currentUserReducer));
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        //console.log({questionTitle, questionBody, questionTags})
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted : User.result.name, userId : User?.result?._id}, navigate))
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setquestionBody(questionBody + "/n")
        }
    }
    
  return (
    <div className='ask-question'>     
        <div className="ask-ques-container">
            <h1>Ask Public Question</h1>
            <form onSubmit={handlesubmit}>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking a question to another person</p>
                        <input type="text" onChange={(e) => {setquestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?' id='ask-ques-title'/>
                    </label>
                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all theinformation someone would need to answer your question</p>
                        <textarea id="ask-ques-body" onChange={(e) => {setquestionBody(e.target.value)}} onKeyPress={handleEnter} cols="30" rows="10"></textarea>
                    </label>
                    <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe your question is about</p>
                        <input type="text" onChange={(e) => {setquestionTags(e.target.value.split(" "))}} placeholder='e.g. (HTML CSS JS REACT)' id='ask-ques-tag'/>
                    </label>
                </div>
                <input type="submit" value="Review your question " className='review-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion