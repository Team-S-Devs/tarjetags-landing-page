import '../../styles/SaFaBanner.css'

export const SaFaBanner = () => {
	const navigateToSafa = () => {
		window.location.href = 'https://safa-solutions.netlify.app/'
	}

	return (
		<div className='sa-fa-banner'>
			<img src="https://i.postimg.cc/C5jNL0TF/safa.png" alt="Safa Solitions Logo" className='sa-fa-image' onClick={navigateToSafa} />
			<p className="sa-fa-description">
				Expertos en desarrollo web, creando experiencias digitales excepcionales para tu presencia en línea. Profesionalismo y creatividad a tu alcance.
			</p>
		</div>
	)
}
