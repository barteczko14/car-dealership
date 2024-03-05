'use client'
import Slider from 'react-slick'
import classes from './OffersCarosuel.module.css'
import Title from '../title/Title'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState, useEffect } from 'react'
import OffertsCarosuelCart from './OffertsCarosuelCart'
import Link from 'next/link'

function PrevArrow({ className, onClick }) {
	return <div className={className} onClick={onClick} />
}

function NextArrow({ className, onClick }) {
	return <div className={className} onClick={onClick} />
}

const OffertsCarosuel = () => {
	const [carsData, setcarsData] = useState([])

	async function fetchData() {
		const response = await fetch('/api/hello')

		if (!response.ok) {
			throw new Error(`Błąd pobierania danych. Status: ${response.status}`)
		}

		const data = await response.json()
		setcarsData(data.data)
	}

	useEffect(() => {
		fetchData()
	}, [])

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
				{carsData &&
					carsData.map(carData => <OffertsCarosuelCart key={carData.id} carData={carData}></OffertsCarosuelCart>)}
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
