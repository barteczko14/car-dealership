import classes from './Footer.module.css'
import { TbMail, TbPhone, TbBrandWhatsapp, TbBrandFacebook } from 'react-icons/tb'
import Title from './Title'

const Footer = () => {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()
	return (
		<footer id='kontakt' className={classes.footer}>
			<Title>Kontakt</Title>
			<div className={classes.footer_cards}>
				<div className={classes.footer_card}>
					<div className={classes.footer_icon}>
						<TbPhone />
					</div>
					<p>XXX-XXX-XXX</p>
				</div>
				<div className={classes.footer_card}>
					<div className={classes.footer_icon}>
						<TbMail />
					</div>
					<p>YourFutureCar@gmail.com</p>
				</div>
				<div className={classes.footer_card}>
					<div className={classes.footer_icon}>
						<TbBrandWhatsapp />
					</div>
					<p>XXX-XXX-XXX</p>
				</div>
				<div className={classes.footer_card}>
					<div className={classes.footer_icon}>
						<TbBrandFacebook />
					</div>
					<p>facebook.com/YourFutureCar</p>
				</div>
			</div>
			<div className={classes.footer_owner}>
				<span>YourFutureCar &copy; {currentYear}</span>
			</div>
		</footer>
	)
}

export default Footer
