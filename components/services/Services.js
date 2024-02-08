'use client'
import classes from './Services.module.css'
import Title from '../title/Title'
import { FaCar } from 'react-icons/fa6'
import { FaTruck, FaTools, FaDollarSign, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'
const Services = () => {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	}
	const item = {
		hidden: { opacity: 0, scale: 0.5 },
		show: { opacity: 1, scale: 1 },
	}
	return (
		<section id='services' className={classes.services_container}>
			<Title>Usługi</Title>
			<motion.div
				variants={container}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className={classes.services}>
				<Link href='/autohandel'>
					<motion.div variants={item} className={`${classes.service} ${classes.color_one}`}>
						<FaCar className={classes.icon} />
						<h4 className={classes.service_title}>Autohandel</h4>
						<p className={classes.service_description}>Odkryj świat doskonałych pojazdów z naszego autohandlu.</p>
						<FaArrowRight className={classes.arrow_icon} />
					</motion.div>
				</Link>
				<Link href='/czesci'>
					<motion.div variants={item} className={`${classes.service} ${classes.color_two}`}>
						<FaDollarSign className={classes.icon} />
						<h4 className={classes.service_title}>Sprzedaż części</h4>
						<p className={classes.service_description}>
							Znajdź wysokiej jakości części, które utrzymają Twoje auto w doskonałej formie.
						</p>
						<FaArrowRight className={classes.arrow_icon} />
					</motion.div>
				</Link>
				<Link href='/serwis'>
					<motion.div variants={item} className={`${classes.service} ${classes.color_three}`}>
						<FaTools className={classes.icon} />
						<h4 className={classes.service_title}>Serwis</h4>
						<p className={classes.service_description}>
							Zaufaj naszym specjalistom do dbania o kondycję Twojego pojazdu.
						</p>
						<FaArrowRight className={classes.arrow_icon} />
					</motion.div>
				</Link>
				<Link href='/transport'>
					<motion.div variants={item} className={`${classes.service} ${classes.color_four}`}>
						<FaTruck className={classes.icon} />
						<h4 className={classes.service_title}>Transport</h4>
						<p className={classes.service_description}>Szybki i bezpieczny transport pojazdów i maszyn.</p>
						<FaArrowRight className={classes.arrow_icon} />
					</motion.div>
				</Link>
			</motion.div>
		</section>
	)
}

export default Services
