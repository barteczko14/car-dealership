import React from 'react'
import classes from './Autohandel.module.css'
import Image from 'next/image'
import autohandelImg from '@/assets/autohandel.jpg'
import Button from './button/Button'

const Autohandel = () => {
	return (
		<section className={classes.hero}>
			<Image className={classes.outer_img} src={autohandelImg}></Image>
			<div className={classes.title}>
				<h1>Autohandel</h1>
			</div>

			<div className={classes.button}>
				<Button>Oferta</Button>
			</div>
			<ul className={classes.list}>
				<li>Tanio</li>
				<li>Szybko</li>
				<li>Profesjonalnie</li>
			</ul>
		</section>
	)
}

export default Autohandel
