'use client'
import Image from 'next/image'
import heroImg from '../../assets/hero.jpg'
import heroImg2 from '../../assets/hero2.jpg'
import classes from './Hero.module.css'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const Hero = () => {
	const variants = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	}

	return (
		<section className={classes.hero}>
			<Image alt='Grafika hero' className={classes.outer_img} src={heroImg}></Image>
			<div>
				<Image alt='Grafika hero' className={classes.inner_img} src={heroImg2}></Image>
				<motion.h1
					variants={variants}
					initial='hidden'
					animate='show'
					transition={{
						ease: 'linear',
						x: { duration: 1 },
					}}>
					Your dream <span>car</span>
				</motion.h1>
			</div>
		</section>
	)
}

export default Hero
