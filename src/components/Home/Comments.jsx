import { useState } from 'react';
import commentsJSON from '../../utils/Comments.json'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Comment } from './Comment';
import '../../styles/Home/Comments.css'

export const Comments = () => {

	const [currentPosition, setCurrentPosition] = useState(1)
	const [leftIsDisable, setLeftIsDisable] = useState(true)
	const [rightIsDisable, setRightIsDisable] = useState(false)

	const handleLeftPosition = () => {
		let newCurrentPosition = currentPosition - 1

		if (newCurrentPosition > 1) {
			setCurrentPosition(newCurrentPosition)
			if (rightIsDisable) {
				setRightIsDisable(false)
			}
		} else {
			setCurrentPosition(1)
			setLeftIsDisable(true)
		}
	}

	const handleRightPosition = () => {
		let newCurrentPosition = currentPosition + 1

		if (newCurrentPosition < commentsJSON.length) {
			setCurrentPosition(newCurrentPosition)
			if (leftIsDisable) {
				setLeftIsDisable(false)
			}
		} else {
			setCurrentPosition(commentsJSON.length)
			setRightIsDisable(true)
		}
	}

	return (
		<div className="comments-container">
			<h2 className="subtitle">COMENTARIOS</h2>
			<button className={`comments-button left ${leftIsDisable ? 'disable' : ''}`} onClick={handleLeftPosition}>
				<SlArrowLeft />
			</button>
			<button className={`comments-button right ${rightIsDisable ? 'disable' : ''}`} onClick={handleRightPosition}>
				<SlArrowRight />
			</button>
			<div className='comments-section'>
				{
					commentsJSON.map((comment) => {
						return <Comment id={comment.id} comment={comment.comment} image={comment.image} currentPosition={currentPosition} key={comment.id} />
					})
				}
			</div>
		</div>
	)
}