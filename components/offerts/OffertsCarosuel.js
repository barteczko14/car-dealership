'use client'
import Slider from 'react-slick'
import classes from './OffersCarosuel.module.css'
import Title from '../title/Title'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import carsData from '@/app/carsData.js'
import OffertsCarosuelCart from './OffertsCarosuelCart'
import Button from '../button/Button'
import Link from 'next/link'

function PrevArrow({ className, onClick }) {
	return <div className={className} onClick={onClick} />
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
		autoplaySpeed: 5000,
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
		<section className={classes.offers_carosuel_container}>
			<Title>Ogłoszenia</Title>
			<Slider {...settings}>
				{carsData.map(carData => (
					<OffertsCarosuelCart key={carData.id} carData={carData}></OffertsCarosuelCart>
				))}
			</Slider>
			<div className={classes.offerts_btn}>
				<Link className={classes.button} href='/oferta'>
					Pełna oferta
				</Link>
			</div>
		</section>
	)
}

export default OffertsCarosuel
