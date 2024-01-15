'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const links = [
		{
			link: 'o-nas',
			linkDesc: 'O nas',
		},
		{
			link: 'kontakt',
			linkDesc: 'Kontakt',
		},
	]

	return (
		<div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
			<div>
				<h1 className='text-5xl ml-2'>
					<a href='/'>KryczCars</a>
				</h1>
			</div>
			<ul className='hidden md:flex'>
				{links.map(({ link, linkDesc }, index) => (
					<li
						key={index}
						className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200'>
						<Link href={link}>{linkDesc}</Link>
					</li>
				))}
			</ul>
			<div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
					{links.map(({ link, linkDesc }, index) => (
						<li key={index} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
							<Link onClick={() => setNav(!nav)} href={link}>
								{linkDesc}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Navbar
