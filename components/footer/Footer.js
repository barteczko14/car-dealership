'use client'
import classes from './Footer.module.css'
import { TbMail, TbPhone, TbBrandWhatsapp, TbBrandFacebook } from 'react-icons/tb'
import Title from '../title/Title'
import { motion } from 'framer-motion'

const Footer = () => {
	const container = {
		hidden: { opacity: 0, scale: 0.5 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}
	const item = {
		hidden: { opacity: 0, scale: 0.5 },
		show: { opacity: 1, scale: 1 },
	}

	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()
	return (
		<footer id='kontakt' className={classes.footer}>
			<Title>Kontakt</Title>
			<motion.div variants={container} initial='hidden' animate='show' className={classes.footer_cards_container}>
				<motion.div variants={item} className={classes.footer_card}>
					<div>
						<TbPhone />
					</div>
					<p>XXX-XXX-XXX</p>
				</motion.div>
				<motion.div variants={item} className={classes.footer_card}>
					<div>
						<TbMail />
					</div>
					<p>YourDreamCar@gmail.com</p>
				</motion.div>
				<motion.div variants={item} className={classes.footer_card}>
					<div>
						<TbBrandWhatsapp />
					</div>
					<p>XXX-XXX-XXX</p>
				</motion.div>
				<motion.div variants={item} className={classes.footer_card}>
					<div>
						<TbBrandFacebook />
					</div>
					<p>facebook.com/YourDreamCar</p>
				</motion.div>
			</motion.div>
			<div className={classes.footer_owner}>
				<span>YourDreamCar &copy; {currentYear}</span>
			</div>
		</footer>
	)
}

export default Footer
