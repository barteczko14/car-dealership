'use client'
import React from 'react'
import Slider from 'react-slick'
import classes from './OffersCarosuel.module.css'
import Title from './Title'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import carsData from '@/app/carsData.js'
import Image from 'next/image'

function PrevArrow({ className, onClick }) {
	return (
		<div
			className={className}
			style={{ display: 'block', marginLeft: 20, paddingLeft: 20, zIndex: 9 }}
			onClick={onClick}
		/>
	)
}

function NextArrow({ className, onClick }) {
	return <div className={className} style={{ display: 'block', marginRight: 20, paddingRight: 20 }} onClick={onClick} />
}

const OffertsCarosuel = () => {
	const settings = {
		dots: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	}

	return (
		<div className={classes.wrapper}>
			<section className={classes.offers_carosuel_container}>
				<Title>Oferty</Title>

				<Slider {...settings}>
					{carsData.map(item => (
						<div className={classes.cart} key={item.id}>
							<div className={classes.img_body}>
								<Image src={item.src} width={200} height={200} alt={item.alt}></Image>
							</div>
							<div>
								<div className={classes.mark_model}>
									<span>{item.model}</span>
									<span>{item.marka}</span>
								</div>
								<h2>{item.marka}</h2>
								<p>{item.model}</p>
								<p>{item.rocznik}</p>
							</div>
						</div>
					))}
				</Slider>
			</section>
		</div>
	)
}

export default OffertsCarosuel
