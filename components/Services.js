import React from 'react'
import classes from './Services.module.css'
import Title from './Title'
import { FaCar } from 'react-icons/fa6'
import { FaTruck, FaTools, FaDollarSign, FaArrowRight } from 'react-icons/fa'
const Services = () => {
	return (
		<div className={classes.wrapper}>
			<section id='services' className={classes.services_container}>
				<Title>Usługi</Title>
				<div className={classes.services}>
					<div className={`${classes.service} ${classes.color_one}`}>
						<FaCar className={classes.icon} />
						<h4 className={classes.service_title}>Autohandel</h4>
						<p className={classes.service_description}>Lorem ipsum dolor sit consect adipiscing.</p>
						<FaArrowRight className={classes.arrow_icon} />
					</div>
					<div className={`${classes.service} ${classes.color_two}`}>
						<FaDollarSign className={classes.icon} />
						<h4 className={classes.service_title}>Sprzedaż części</h4>
						<p className={classes.service_description}>Lorem ipsum dolor sit consect adipiscing.</p>
						<FaArrowRight className={classes.arrow_icon} />
					</div>
					<div className={`${classes.service} ${classes.color_three}`}>
						<FaTools className={classes.icon} />
						<h4 className={classes.service_title}>Serwis</h4>
						<p className={classes.service_description}>Lorem ipsum dolor sit consect adipiscing.</p>
						<FaArrowRight className={classes.arrow_icon} />
					</div>
					<div className={`${classes.service} ${classes.color_four}`}>
						<FaTruck className={classes.icon} />
						<h4 className={classes.service_title}>Transport</h4>
						<p className={classes.service_description}>Lorem ipsum dolor sit consect adipiscing.</p>
						<FaArrowRight className={classes.arrow_icon} />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Services
