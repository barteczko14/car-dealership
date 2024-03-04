'use client'
import classes from './Filters.module.css'

const Filters = ({ onFilterChange }) => {
	const handleInputChange = e => {
		const { name, value } = e.target
		onFilterChange({ [name]: value })
	}

	return (
		<div className={classes.filters_container}>
			<div>
				<input type='text' name='brandFilter' placeholder='-- Marka --' onChange={handleInputChange} />
			</div>

			<div>
				<input type='text' name='modelFilter' placeholder='-- Model --' onChange={handleInputChange} />
			</div>

			<div>
				<select name='yearFromFilter' onChange={handleInputChange}>
					<option value=''>Rok produkcji od</option>
					{Array.from({ length: 25 }, (_, i) => 2000 + i).map(year => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>
			<div>
				<select name='yearToFilter' onChange={handleInputChange}>
					<option value=''>Rok produkcji do</option>
					{Array.from({ length: 25 }, (_, i) => 2000 + i).map(year => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>

			<div>
				<input placeholder='-- Rodzaj paliwa --' type='text' name='fuelTypeFilter' onChange={handleInputChange} />
			</div>

			<div>
				<input placeholder='-- Przebieg od --' type='text' name='courseFromFilter' onChange={handleInputChange} />
			</div>
			<div>
				<input placeholder='-- Przebieg do --' type='text' name='courseToFilter' onChange={handleInputChange} />
			</div>

			<div>
				<input placeholder='-- Cena od --' type='text' name='priceFromFilter' onChange={handleInputChange} />
			</div>
			<div>
				<input placeholder='-- Cena do --' type='text' name='priceToFilter' onChange={handleInputChange} />
			</div>

			<div>
				<input type='text' name='gearboxFilter' placeholder='-- Skrzynia biegów --' onChange={handleInputChange} />
			</div>
		</div>
	)
}

export default Filters
