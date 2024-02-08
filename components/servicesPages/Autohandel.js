import Link from 'next/link'
import Image from 'next/image'
import classes from './ServicesPage.module.css'
import autohandelImg from '@/assets/autohandel.jpg'
import { GiChoice } from 'react-icons/gi'
import { FaHandsHelping, FaSearch } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { BiHappyAlt } from 'react-icons/bi'

const Autohandel = () => {
	return (
		<section>
			<div className={classes.hero_section_container}>
				<Image className={classes.hero_img} src={autohandelImg} alt='Grafika przedstawiająca uścisk dłoni.'></Image>
				<div className={classes.title_container}>
					<h1>Autohandel</h1>
				</div>
				<div className={classes.button_container}>
					<Link href='/oferta'>
						<button className={classes.button}>Oferta</button>
					</Link>
				</div>
				<ul className={classes.list}>
					<li>Tanio</li>
					<li>Szybko</li>
					<li>Profesjonalnie</li>
				</ul>
			</div>
			<div className={classes.description}>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<GiChoice className={classes.description_icon}></GiChoice>
					</div>
					<div>
						<h2>Rozbudowany Wybór</h2>
						<p className={classes.description_text}>
							W naszym komisie samochodowym kładziemy ogromny nacisk na różnorodność oferty. Oferujemy szeroki wybór
							markowych pojazdów, spełniających najwyższe standardy jakości. Bez względu na to, czy poszukujesz
							dynamicznego hatchbacka, eleganckiego sedana, czy też solidnego SUV-a, nasza bogata gama samochodów
							pozwoli Ci znaleźć idealny pojazd dostosowany do Twoich indywidualnych potrzeb.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<FaHandsHelping className={classes.description_icon}></FaHandsHelping>
					</div>
					<div>
						<h2>Profesjonalne Doradztwo</h2>
						<p className={classes.description_text}>
							Nasi doświadczeni doradcy z przyjemnością asystują Ci w procesie wyboru samochodu. Dzięki indywidualnemu
							podejściu do każdego klienta, możesz liczyć na fachową pomoc w doborze pojazdu, który spełni Twoje
							oczekiwania zarówno pod względem technicznym, jak i estetycznym.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<FaSearch className={classes.description_icon}></FaSearch>
					</div>
					<div>
						<h2>Pełna Transparentność</h2>
						<p className={classes.description_text}>
							Wierzymy w otwartość i uczciwość w relacjach z naszymi klientami. Dlatego też, każdy samochód w naszym
							komisie jest dokładnie sprawdzany pod kątem technicznym. Oferujemy pełną historię serwisową oraz gwarancję
							uczciwego podejścia do transakcji.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<MdOutlineAttachMoney className={classes.description_icon}></MdOutlineAttachMoney>
					</div>
					<div>
						<h2>Finansowanie i Ubezpieczenie</h2>
						<p className={classes.description_text}>
							Dla naszych klientów proponujemy dogodne rozwiązania finansowe, umożliwiając elastyczne spłaty i
							konkurencyjne stawki. Oferujemy również kompleksowe ubezpieczenia, abyś mógł cieszyć się swoim nowym
							samochodem z pełnym spokojem.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<BiHappyAlt className={classes.description_icon}></BiHappyAlt>
					</div>
					<div>
						<h2>Twoje Zadowolenie na Pierwszym Miejscu</h2>
						<p className={classes.description_text}>
							Naszym priorytetem jest satysfakcja klienta. Dlatego też, nasz zespół pracuje nieustannie, aby zapewnić Ci
							kompleksową obsługę na każdym etapie zakupu samochodu. Gwarantujemy profesjonalizm, rzetelność i
							indywidualne podejście do każdego klienta.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Autohandel
