import Image from 'next/image'
import heroImg from '../assets/hero.jpg'
import heroImg2 from '../assets/hero_2.jpg'
import classes from './Hero.module.css'

const Hero = () => {
	return (
		<section id='o-nas' className={classes.hero_wrapper}>
			<Image className={classes.hero_img} src={heroImg}></Image>
			<div className={classes.middle}>
				<Image priority className={classes.middle_img} src={heroImg2}></Image>
				<h2 className={classes.hero_title}>
					Your future <span className={classes.color_title}>car</span>
				</h2>
			</div>
		</section>
	)
}

export default Hero
