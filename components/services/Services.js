import classes from './Services.module.css'
import Title from '../Title'
import { FaCar } from 'react-icons/fa6'
import { FaTruck, FaTools, FaDollarSign, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
const Services = () => {
	return (
		<section id='services' className={classes.services_container}>
			<Title>Usługi</Title>
			<div className={classes.services}>
				<Link href='/autohandel'>
					<div className={`${classes.service} ${classes.color_one}`}>
						<FaCar className={classes.icon} />
						<h4 className={classes.service_title}>Autohandel</h4>
						<p className={classes.service_description}>Odkryj świat doskonałych pojazdów z naszego autohandlu.</p>
						<FaArrowRight className={classes.arrow_icon} />
					</div>
				</Link>
				<Link href='/czesci'>
					<div className={`${classes.service} ${classes.color_two}`}>
						<FaDollarSign className={classes.icon} />
						<h4 className={classes.service_title}>Sprzedaż części</h4>
						<p className={classes.service_description}>
							Znajdź wysokiej jakości części, które utrzymają Twoje auto w doskonałej formie.
						</p>
						<FaArrowRight className={classes.arrow_icon} />
					</div>
				</Link>
				<Link href='/serwis'>
					<div className={`${classes.service} ${classes.color_three}`}>
						<FaTools className={classes.icon} />
						<h4 className={classes.service_title}>Serwis</h4>
						<p className={classes.service_description}>
							Zaufaj naszym specjalistom do dbania o kondycję Twojego pojazdu.
						</p>
						<FaArrowRight className={classes.arrow_icon} />
					</div>
				</Link>
				<Link href='/transport'>
					<div className={`${classes.service} ${classes.color_four}`}>
						<FaTruck className={classes.icon} />
						<h4 className={classes.service_title}>Transport</h4>
						<p className={classes.service_description}>
							Szybki i bezpieczny transport pojazdów i maszyn.
						</p>
						<FaArrowRight className={classes.arrow_icon} />
					</div>
				</Link>
			</div>
		</section>
	)
}

export default Services
