'use client'
import Link from 'next/link'
import classes from './Navbar.module.css'
import { useState } from 'react'
import Button from '../button/Button'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import Image from 'next/image'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	return (
		<nav className={classes.navbar}>
			<div className={classes.links_container}>
				<Link className={classes.link} href='/#o-nas'>
					O nas
				</Link>
				<Link className={classes.link} href='/#services'>
					Usługi
				</Link>
				<Link className={classes.link} href='#kontakt'>
					Kontakt
				</Link>
			</div>
			<Link href='/'>
				<Image className={classes.logo} src={logo}></Image>
			</Link>
			<div className={classes.links_container}>
				<Button>
					<Link href='/oferta'>Oferta</Link>
				</Button>
			</div>
			<div onClick={() => setNav(!nav)} className={classes.burger_icon}>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{nav && (
				<div className={classes.mobile_nav}>
					<div>
						<Link onClick={() => setNav(!nav)} className={classes.mobile_link} href='/'>
							O nas
						</Link>
						<Link onClick={() => setNav(!nav)} className={classes.mobile_link} href='/#services'>
							Usługi
						</Link>
						<Link onClick={() => setNav(!nav)} className={classes.mobile_link} href='/#kontakt'>
							Kontakt
						</Link>
					</div>
					<Button>
						<Link onClick={() => setNav(!nav)} href='/oferta'>
							Oferta
						</Link>
					</Button>
				</div>
			)}
		</nav>
	)
}

export default Navbar
