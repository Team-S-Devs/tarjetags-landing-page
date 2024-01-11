import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../styles/Home/Comment.css'

export const Comment = ({id, image, comment, currentPosition}) => {

    const [position, setPosition] = useState("");

    useEffect(() => {
        if (id < currentPosition) {
            setPosition("left")
        } else if (id > currentPosition) {
            setPosition("right")
        } else {
            setPosition("center")
        }
    }, [id, currentPosition])

    return (
        <div className={`comment-container ${position}`}>
            <img src={image} alt="Profile img" className="profile-image-section" draggable={false} />
            <p className="comment-section">
                {
                    comment
                }
            </p>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    currentPosition: PropTypes.number.isRequired
}