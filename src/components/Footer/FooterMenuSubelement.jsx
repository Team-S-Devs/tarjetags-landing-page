import PropTypes from 'prop-types'

export const FooterMenuSubelement = ({ title, subelements }) => {
	return (
		<div className='footer-subelements-container'>
			<h4 className="subelement-title">
				{title}
			</h4>
			{
				subelements.map((subelement) => {
					return <a className='footer-subelement-menu-link' key={subelement.id} href={subelement.path}>
						{subelement['subelement-name']}
					</a>
				})
			}
		</div>
	)
}

FooterMenuSubelement.propTypes = {
	title: PropTypes.string.isRequired,
	subelements: PropTypes.array.isRequired
}