'use client'
import React from 'react'
import carsData from '@/app/carsData.js'
import Offert from '@/components/Offert'
const page = ({ params }) => {
	const id = params.carid - 1
	// console.log(carsData[id].marka)
	return <Offert carData={carsData[id]}></Offert>
}

export default page
