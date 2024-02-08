import React from 'react'
import classes from './AboutUs.module.css'
import Title from '../title/Title'
import Image from 'next/image'
import aboutUsImage from '../../assets/about-us.jpg'
const AboutUs = () => {
	return (
		<section id='o-nas' className={classes.about_us_container}>
			<Title>O nas</Title>
			<div className={classes.about_us}>
				<div className={classes.about_us_image_container}>
					<Image src={aboutUsImage} alt='Grafika przedstawiająca pracowników firmy.'></Image>
				</div>
				<div className={classes.about_us_description}>
					<p>
						Witaj w naszym komisie samochodowym, miejscu, gdzie pasja motoryzacyjna spotyka się z profesjonalizmem.
						Jesteśmy dynamicznym zespołem, którego głównym celem jest dostarczanie kompleksowych usług związanych z
						samochodami.
					</p>
					<p>
						Nasza firma to więcej niż tylko komis samochodowy. Jest to centrum, gdzie znajdziesz wszystko, czego
						potrzebujesz w świecie motoryzacji. Sprzedajemy samochody, oferujemy części zamiennych najwyższej jakości,
						zapewniamy profesjonalny transport i kompleksowy serwis.
					</p>
					<p>
						Kim jesteśmy? Jesteśmy zespołem pasjonatów samochodów, dla których motoryzacja to nie tylko praca, ale
						również styl życia. Nasze doświadczenie i zaangażowanie sprawiają, że możesz nam zaufać w każdym aspekcie
						naszej działalności.
					</p>
					<p>
						Co oferujemy? Oferujemy szeroki wybór samochodów, zarówno nowych, jak i używanych. Nasze pojazdy przechodzą
						rygorystyczne testy, aby zapewnić Ci bezpieczeństwo i satysfakcję z jazdy. Posiadamy także magazyn części
						zamiennych, abyś mógł utrzymać swój samochód w doskonałej kondycji. Zapewniamy również kompleksowy transport
						i profesjonalny serwis, dzięki czemu możesz mieć pewność, że z nami Twój pojazd jest w najlepszych rękach.
					</p>
					<p>
						Dlaczego my? Nasza firma to miejsce, gdzie doświadczenie, rzetelność i pasja łączą się, tworząc idealne
						środowisko dla miłośników samochodów. Dołącz do nas i odkryj, dlaczego jesteśmy liderem w branży
						motoryzacyjnej.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
