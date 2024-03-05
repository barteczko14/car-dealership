'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Offert from '@/components/offerts/Offert'
const page = ({ params }) => {
	const [carData, setcarData] = useState([])

	async function fetchData() {
		try {
			const response = await fetch('/api/hello')

			if (!response.ok) {
				throw new Error(`Błąd pobierania danych. Status: ${response.status}`)
			}

			const data = await response.json()

			setcarData(data.data)
		} catch (error) {
			console.error('Błąd pobierania danych:', error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const carId = params.carid
	const selectedCar = carData.find(car => car.id === carId)

	return <>{carData.length > 1 && <Offert carData={selectedCar}></Offert>}</>
}

export default page
