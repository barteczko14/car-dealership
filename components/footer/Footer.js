import classes from './Footer.module.css'
import { TbMail, TbPhone, TbBrandWhatsapp, TbBrandFacebook } from 'react-icons/tb'
import Title from '../Title'

const Footer = () => {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()
	return (
		<footer id='kontakt' className={classes.footer}>
			<Title>Kontakt</Title>
			<div className={classes.footer_cards_container}>
				<div className={classes.footer_card}>
					<div>
						<TbPhone />
					</div>
					<p>XXX-XXX-XXX</p>
				</div>
				<div className={classes.footer_card}>
					<div>
						<TbMail />
					</div>
					<p>YourDreamCar@gmail.com</p>
				</div>
				<div className={classes.footer_card}>
					<div>
						<TbBrandWhatsapp />
					</div>
					<p>XXX-XXX-XXX</p>
				</div>
				<div className={classes.footer_card}>
					<div>
						<TbBrandFacebook />
					</div>
					<p>facebook.com/YourDreamCar</p>
				</div>
			</div>
			<div className={classes.footer_owner}>
				<span>YourDreamCar &copy; {currentYear}</span>
			</div>
		</footer>
	)
}

export default Footer
