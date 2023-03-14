import React from 'react'
import './RightSidebar.css'
import Comment from '../../Assets/Comment.png'
import Pen from '../../Assets/Pen.png'
import BlackLogo from '../../Assets/BlackLogo.png'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={Pen} alt="Pen" width="18" />
                <p>Observablity is the key to the future of software (and your devops career) </p>
                </div>
                <div className='right-sidebar-div-2'>
                <img src={Pen} alt="Pen" width="18" />
                <p>Podcast 374: How valuable is your screen name ?</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={Comment} alt="comment" width="18" />
                <p>Review Queue workflows-Final release.... </p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={Comment} alt="comment" width="18" />
                <p>Please welcome Valued Associates:#958 - v2blast #959 - sepencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={BlackLogo} alt="stack" width="18" />
                <p>Outdated Answers: accepted answers is now unpinned on Stack Overflow</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>32</p>
                <p>Why was this span flag was declined, yet the question mark is spammed?</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>42</p>
                <p>What is the best course of action when a user has high enough rep to..</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>43</p>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget