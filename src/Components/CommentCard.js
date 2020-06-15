import React from 'react'
import './CommentCard.css'

const CommentCard = (props) => {
    return (
        <div className='Comment__Card'>
            <h3>Name</h3>
            <p>{props.name}</p>
            <h3>Email</h3>
            <p>{props.email}</p>
            <h3>Body</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default CommentCard;