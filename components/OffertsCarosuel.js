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
	return <div className={className} style={{}} onClick={onClick} />
}

function NextArrow({ className, onClick }) {
	return <div className={className} onClick={onClick} />
}

const OffertsCarosuel = () => {
	const settings = {
		dots: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	}

	return (
		<div className={classes.wrapper}>
			<section className={classes.offers_carosuel_container}>
				<Title>Oferty</Title>

				<Slider {...settings}>
					{carsData.map(item => (
						<div className={classes.cart} key={item.id}>
							<div className={classes.img_body}>
								<Image
									className={classes.img}
									src={item.src}
									width={500}
									height={300}
									style={{ objectFit: 'cover', height: 160 }}
									alt={item.alt}></Image>
							</div>
							<div>
								<div className={classes.mark_model}>
									<span>
										{item.model} {item.marka}
									</span>
								</div>
								<div className={classes.card_detail}>
									<span>Rok produkcji:</span>
									<span>{item.rocznik}</span>
								</div>
								<div className={classes.card_detail}>
									<span>Przebieg:</span>
									<span>{item.przebieg}</span>
								</div>
								<div className={classes.card_detail}>
									<span>Rodzaj paliwa:</span>
									<span>{item.paliwo}</span>
								</div>
								<div className={classes.card_detail}>
									<span>Pojemność silnika:</span>
									<span>{item.pojemnosc}</span>
								</div>
								<div className={classes.card_detail}>
									<span>Moc silnika:</span>
									<span>{item.moc}</span>
								</div>

								<h2 className={classes.price}>39900</h2>
							</div>
						</div>
					))}
				</Slider>
			</section>
		</div>
	)
}

export default OffertsCarosuel
