import AboutUs from '@/components/AboutUs'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Opinion from '@/components/Opinion'
import classes from './page.module.css'

export default function Home() {
	return (
		<>
			<Hero></Hero>
			<div className={classes.wrapper}>
				<AboutUs></AboutUs>
				<Services></Services>
				<Opinion></Opinion>
			</div>
		</>
	)
}
