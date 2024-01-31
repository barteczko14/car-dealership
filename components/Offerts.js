'use client'
import carsData from '@/app/carsData'
import React, { useState, useEffect } from 'react'
import classes from './Offerts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Filters from './Filters'

const Offerts = () => {
	const [filteredCars, setFilteredCars] = useState(carsData)
	const [filters, setFilters] = useState({})

	const applyFilters = () => {
		let result = carsData

		if (filters.brandFilter) {
			result = result.filter(car => car.marka == filters.brandFilter)
		}

		if (filters.yearFilter) {
			result = result.filter(car => car.rok_produkcji == filters.yearFilter)
		}

		if (filters.fuelTypeFilter) {
			result = result.filter(car => car.rodzaj_paliwa.includes(filters.fuelTypeFilter))
		}

		setFilteredCars(result)
	}

	useEffect(() => {
		applyFilters()
	}, [filters])

	const handleFilterChange = newFilters => {
		setFilters(prevFilters => ({ ...prevFilters, ...newFilters }))
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.filter_container}>
				<Filters onFilterChange={handleFilterChange} />
			</div>
			<div className={classes.offerts_container}>
				{filteredCars.map(carData => (
					<Link className={classes.link} href={`/oferta/${carData.id}`}>
						<div className={classes.cart} key={carData.id}>
							<div className={classes.img_container}>
								<Image src={carData.src} width={500} height={300} className={classes.img} alt={carData.alt}></Image>
							</div>
							<div className={classes.details_container}>
								<div className={classes.title_price_container}>
									<div className={classes.details_title}>{carData.tytuł}</div>
									<div className={classes.details_price}>
										<p className={classes.price}>{carData.cena}</p>
									</div>
								</div>

								<div className={classes.cart_detail}>
									<span>Rok produkcji:</span>
									<span>{carData.rok_produkcji}</span>
								</div>
								<div className={classes.cart_detail}>
									<span>Przebieg:</span>
									<span>{carData.przebieg}</span>
								</div>
								<div className={classes.cart_detail}>
									<span>Rodzaj paliwa:</span>
									<span>{carData.rodzaj_paliwa}</span>
								</div>
								<div className={classes.cart_detail}>
									<span>Pojemność silnika:</span>
									<span>{carData.pojemnosc}</span>
								</div>
								<div className={classes.cart_detail}>
									<span>Moc silnika:</span>
									<span>{carData.moc}</span>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Offerts
