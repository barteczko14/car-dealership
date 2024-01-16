'use client'
import Link from 'next/link'
import classes from './Navbar.module.css'
import React, { useState } from 'react'
import Button from './Button'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	return (
		<nav className={classes.navbar_container}>
			<div className={classes.links_container}>
				<Link className={classes.link} href='/'>
					O nas
				</Link>
				<Link className={classes.link} href='/'>
					Usługi
				</Link>
				<Link className={classes.link} href='#kontakt'>
					Kontakt
				</Link>
			</div>
			<div>
				<Link className={classes.logo} href='/'>
					Your Future Car
				</Link>
			</div>
			<div className={classes.links_container}>
				<Button btnStyle='button_main'>
					<Link className={classes.link} href='/oferta'>
						Oferta
					</Link>
				</Button>
			</div>
			<div onClick={() => setNav(!nav)} className={classes.burger_icon}>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<div className={classes.mobile_nav}>
					<div className={classes.mobile_links_container}>
						<Link onClick={() => setNav(!nav)} className={classes.mobile_link} href='/'>
							O nas
						</Link>
						<Link onClick={() => setNav(!nav)} className={classes.mobile_link} href='/'>
							Usługi
						</Link>
						<Link onClick={() => setNav(!nav)} className={classes.mobile_link} href='/'>
							Kontakt
						</Link>
					</div>
					<div>
						<Button btnStyle={'button_main'}>
							<Link onClick={() => setNav(!nav)} className={classes.mobile_link} href='/oferta'>
								Oferta
							</Link>
						</Button>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
