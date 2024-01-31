'use client'

import React, { useState } from 'react'
import classes from './Filters.module.css'

const carBrandsList = [
	'BMW',
	'Audi',
	'Mercedes',
	'Toyota',
	'Honda',
	'Ford',
	'Volkswagen',
	'Chevrolet',
	'Nissan',
	'Hyundai',
	'Kia',
	'Volvo',
	'Subaru',
	'Mazda',
	'Lexus',
	'Jaguar',
	'Land Rover',
	'Porsche',
	'Ferrari',
]

const Filters = ({ onFilterChange }) => {
	const handleInputChange = e => {
		const { name, value } = e.target
		onFilterChange({ [name]: value })
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.filters_container}>
                
				<div className={classes.filter_container}>
					<select name='brandFilter' onChange={handleInputChange}>
						<option value=''>-- Wybierz markę --</option>
						{carBrandsList.map(brand => (
							<option key={brand} value={brand}>
								{brand}
							</option>
						))}
					</select>
				</div>

				<div className={classes.filter_container}>
					<select name='yearFilter' onChange={handleInputChange}>
						<option value=''>-- Rok produkcji --</option>
						{Array.from({ length: 25 }, (_, i) => 2000 + i).map(year => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>

				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
				<div className={classes.filter_container}>
					<input placeholder='Rodzaj paliwa' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
				</div>
			</div>
		</div>
	)
}

export default Filters
