import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [{
        id:1,
        tagName: "JavaScript",
        tagDesc: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn."
     },{
        id:2,
        tagName : "Java",
        tagDesc : " Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more."
     },{
        id:3,
        tagName : "React",
        tagDesc : "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies."
     },{
        id:4,
        tagName : "Python",
        tagDesc : "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
     },{
        id:5,
        tagName : "CSS",
        tagDesc : "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
     }]
  return (
    <div className='home-container-1'>
       <LeftSidebar />
       <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a Keyword or Label that categorizes your question, with other similar question.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find answer for your question.</p>
        <div className="tags-list-container">
            {
                tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id}/>
                ))
            }
        </div>
       </div>
    </div>
  )
}

export default Tags