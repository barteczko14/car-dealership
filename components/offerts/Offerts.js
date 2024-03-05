'use client'
import React, { useState, useEffect } from 'react'
import classes from './Offerts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Filters from '../filters/Filters'

const Offerts = () => {
	const [filteredCars, setFilteredCars] = useState([])
	const [filters, setFilters] = useState({})
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

	const applyFilters = () => {
		let result = carsData

		if (filters.brandFilter) {
			result = result.filter(car => car.marka.toLowerCase().includes(filters.brandFilter.toLowerCase()))
		}

		if (filters.gearboxFilter) {
			result = result.filter(car => car.skrzynia.toLowerCase().includes(filters.gearboxFilter.toLowerCase()))
		}

		if (filters.modelFilter) {
			result = result.filter(car => car.model.toLowerCase().includes(filters.modelFilter.toLowerCase()))
		}

		if (filters.yearFromFilter && filters.yearToFilter) {
			result = result.filter(
				car => car.rok_produkcji >= filters.yearFromFilter && car.rok_produkcji <= filters.yearToFilter
			)
		}

		if (!filters.yearFromFilter && filters.yearToFilter) {
			result = result.filter(car => car.rok_produkcji <= filters.yearToFilter)
		}

		if (filters.yearFromFilter && !filters.yearToFilter) {
			result = result.filter(car => car.rok_produkcji >= filters.yearFromFilter)
		}

		if (filters.fuelTypeFilter) {
			result = result.filter(car => car.rodzaj_paliwa.toLowerCase().includes(filters.fuelTypeFilter.toLowerCase()))
		}

		if (filters.courseFromFilter && filters.courseToFilter) {
			result = result.filter(car => car.przebieg >= filters.courseFromFilter && car.przebieg <= filters.courseToFilter)
		}

		if (!filters.courseFromFilter && filters.courseToFilter) {
			result = result.filter(car => car.przebieg <= filters.courseToFilter)
		}

		if (filters.courseFromFilter && !filters.courseToFilter) {
			result = result.filter(car => car.przebieg >= filters.courseFromFilter)
		}

		if (filters.priceFromFilter && filters.priceToFilter) {
			result = result.filter(car => car.cena >= filters.priceFromFilter && car.cena <= filters.priceToFilter)
		}

		if (!filters.priceFromFilter && filters.priceToFilter) {
			result = result.filter(car => car.cena <= filters.priceToFilter)
		}

		if (filters.priceFromFilter && !filters.priceToFilter) {
			result = result.filter(car => car.cena >= filters.priceFromFilter)
		}

		setFilteredCars(result)
	}

	useEffect(() => {
		applyFilters()
	}, [filters, carsData])

	const handleFilterChange = newFilters => {
		setFilters(prevFilters => ({ ...prevFilters, ...newFilters }))
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.filter_container}>
				<Filters onFilterChange={handleFilterChange} />
			</div>
			{carsData.length > 1 &&
				filteredCars.map(carData => (
					<Link className={classes.link} key={carData.id} href={`/oferta/${carData.id}`}>
						<div className={classes.cart}>
							<div className={classes.img_container}>
								<Image
									priority
									src={carData.src[0]}
									width={500}
									height={300}
									className={classes.img}
									alt={carData.alt}></Image>
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
	)
}

export default Offerts
