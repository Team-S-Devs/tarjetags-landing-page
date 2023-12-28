import '../../styles/Home/MainFunction.css'
import PropTypes from 'prop-types'

export const MainFunction = ({ name, description, image, isLeft }) => {
	return (
		<div className="main-function-container">
			<div className={`main-function-details ${isLeft ? "left" : "right"}`}>
				<h2 className="main-function-name">
					{
						name
					}
				</h2>
				<p>
					{
						description
					}
				</p>
			</div>
			<div className="main-function-image-container">
				<img src={image} alt={`${name}`} className="main-function-image" />
			</div>
		</div>
	)
}

MainFunction.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	isLeft: PropTypes.bool.isRequired
}