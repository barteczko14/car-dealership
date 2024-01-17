import React from 'react'
import classes from './AboutUs.module.css'
import Title from './Title'
import Image from 'next/image'
import aboutUsImage from '../assets/about-us.jpg'
const AboutUs = () => {
	return (
		<div className={classes.wrapper}>
			<section className={classes.about_us_container}>
				<Title>O nas</Title>
				<div className={classes.about_us}>
					<div className={classes.about_us_image_container}>
						<Image src={aboutUsImage}></Image>
					</div>
					<div className={classes.about_us_description}>
						<div>
							<p className={classes.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, nisl a tincidunt fringilla,
								nulla libero tempus sapien, id posuere nunc odio vel odio. Integer luctus tincidunt diam, nec cursus
								justo ultricies eu. Sed ut condimentum turpis. Fusce in dolor vel ex gravida pellentesque. Suspendisse
								sed turpis nec elit scelerisque euismod. Etiam ultrices elit id ante vestibulum, ut tincidunt turpis
								posuere. Nunc et fringilla dolor. Integer volutpat sapien non erat consequat, eu fermentum ligula
								egestas. Quisque id scelerisque dolor. Phasellus finibus rhoncus facilisis.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutUs
