import '../../styles/Footer.css'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import footerMenuSubelementsJSON from '../../utils/FooterMenuSubelements.json'
import { FooterMenuSubelement } from './FooterMenuSubelement';
import { SaFaBanner } from "./SaFaBanner";

export const Footer = () => {
	const iconsColor = '#ffffff'
	const iconsSize = 32;

	return (
		<div className='footer-container'>
			<div className='container '>
				<footer className='footer'>
					<div className='footer-colomn'>
						<div className="footer-element-container footer-description">
							<h2>LOGO</h2>
							<p className='description-tarjetags-footer'>Irure Lorem proident dolore consequat nisi non officia nostrud consectetur fugiat eiusmod ipsum reprehenderit.</p>
						</div>
						<SaFaBanner />
					</div>
					<div className="footer-element-container footer-menu">
						{
							footerMenuSubelementsJSON.map((element) => {
								return <FooterMenuSubelement title={element['name-section']} subelements={element.subelements} key={element.id} />
							})
						}
					</div>
					<div className="footer-element-container social-medias">
						<h4 className='subtitle-footer'>Síguenos</h4>
						<div className='social-medias-section'>
							<a className='social-media-link' href='/'>
								<FaFacebook color={iconsColor} size={iconsSize} />
							</a>
							<a className='social-media-link' href='/'>
								<FaInstagram color={iconsColor} size={iconsSize} />
							</a>
							<a className='social-media-link' href='/'>
								<FaTiktok color={iconsColor} size={iconsSize} />
							</a>
						</div>
					</div>
				</footer>
			</div>
		</div>

	)
}
