import AboutUs from '@/components/aboutUs/AboutUs'
import Hero from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import Opinions from '@/components/opinions/Opinions'
import classes from './page.module.css'
import OffertsCarosuel from '@/components/offerts/OffertsCarosuel'

export default function Home() {
	return (
		<>
			<Hero></Hero>
			<div className={classes.wrapper}>
				<AboutUs></AboutUs>
				<OffertsCarosuel />
				<Opinions></Opinions>
				<Services></Services>
			</div>
		</>
	)
}
