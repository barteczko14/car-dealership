import classes from './Footer.module.css'
import { TbMail, TbPhone, TbBrandWhatsapp, TbBrandFacebook } from 'react-icons/tb'

const Footer = () => {
	let currentDate = new Date()
	let currentYear = currentDate.getFullYear()
	return (
		<footer id='kontakt' className={classes.footer}>
			<div className={classes.footer_container}>
				<h1 className={classes.title}>Kontakt</h1>
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
						<p>kryczcars@gmail.com</p>
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
						<p>facebook.com/kryczcars</p>
					</div>
				</div>
				<div className={classes.footer_company}>
					<span>Kryczcars &copy; {currentYear}</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
