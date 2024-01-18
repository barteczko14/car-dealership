import Image from 'next/image'
import heroImg from '../../assets/hero.jpg'
import heroImg2 from '../../assets/hero2.jpg'
import classes from './Hero.module.css'

const Hero = () => {
	return (
		<section id='o-nas' className={classes.hero}>
			<Image className={classes.outer_img} src={heroImg}></Image>
			<div>
				<Image className={classes.inner_img} src={heroImg2}></Image>
				<h1>
					Your dream <span>car</span>
				</h1>
			</div>
		</section>
	)
}

export default Hero
