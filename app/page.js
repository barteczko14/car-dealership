import AboutUs from '@/components/AboutUs'
import Hero from '@/components/hero/Hero'
import Services from '@/components/Services'
import Opinion from '@/components/Opinion'
import classes from './page.module.css'
import OffertsCarosuel from '@/components/offerts/OffertsCarosuel'

export default function Home() {
	return (
		<>
			<Hero></Hero>
			<div className={classes.wrapper}>
				<AboutUs></AboutUs>
				<OffertsCarosuel />
				<Opinion></Opinion>
				<Services></Services>
			</div>
		</>
	)
}
