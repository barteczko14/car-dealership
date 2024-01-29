// Importuj niezbędne biblioteki i komponenty
import React from 'react'
import classes from './ServicesPage.module.css' // Upewnij się, że utworzono odpowiedni plik CSS
import Image from 'next/image'
import serviceImg from '@/assets/serwis.jpg' // Importuj obraz serwisu samochodowego
import { IoConstructOutline } from 'react-icons/io5'
import { FaWrench, FaSearch } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { BiHappyAlt } from 'react-icons/bi'
import Link from 'next/link'

const CarServicePage = () => {
	return (
		<section>
			<div className={classes.hero}>
				<Image className={classes.outer_img} src={serviceImg} alt='Serwis Samochodowy'></Image>
				<div className={classes.title}>
					<h1>Serwis Samochodowy</h1>
				</div>
				<ul className={classes.list}>
					<li>Profesjonalnie</li>
					<li>Szybko</li>
					<li>Pewnie</li>
				</ul>
			</div>
			<div className={classes.description}>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<IoConstructOutline className={classes.description_icon}></IoConstructOutline>
					</div>
					<div>
						<h2>Profesjonalne Naprawy</h2>
						<p className={classes.description_text}>
							Nasz serwis samochodowy oferuje profesjonalne naprawy, obejmujące zarówno drobne usterki, jak i bardziej
							skomplikowane problemy techniczne. Nasi doświadczeni mechanicy są gotowi sprostać każdemu wyzwaniu
							naprawczemu.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<FaWrench className={classes.description_icon}></FaWrench>
					</div>
					<div>
						<h2>Szeroka Gama Usług</h2>
						<p className={classes.description_text}>
							Oferujemy kompleksową gamę usług serwisowych, obejmujących regularne przeglądy, diagnostykę komputerową,
							układ hamulcowy, klimatyzację, oraz wiele innych. Zadbamy o wszystkie aspekty techniczne Twojego pojazdu.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<FaSearch className={classes.description_icon}></FaSearch>
					</div>
					<div>
						<h2>Dokładna Diagnostyka</h2>
						<p className={classes.description_text}>
							Nasi wysoko wykwalifikowani technicy posługują się nowoczesnymi narzędziami diagnostycznymi, aby
							skutecznie zidentyfikować i rozwiązać wszelkie problemy techniczne. Precyzja w diagnozowaniu to nasza
							mocna strona.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<MdOutlineAttachMoney className={classes.description_icon}></MdOutlineAttachMoney>
					</div>
					<div>
						<h2>Konkurencyjne Ceny</h2>
						<p className={classes.description_text}>
							Wierzymy w uczciwość wobec klientów i oferujemy konkurencyjne ceny za nasze usługi serwisowe.
							Transparencja i uczciwość są dla nas kluczowe w relacjach z klientem.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<BiHappyAlt className={classes.description_icon}></BiHappyAlt>
					</div>
					<div>
						<h2>Zadowolenie Klienta</h2>
						<p className={classes.description_text}>
							Naszym celem jest zapewnienie pełnej satysfakcji klienta. Gwarantujemy indywidualne podejście, rzetelność
							i wysoką jakość obsługi. Twój spokój i zadowolenie są dla nas priorytetem.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CarServicePage
