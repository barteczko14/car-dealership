import React from 'react'
import classes from './ServicesPage.module.css'
import Image from 'next/image'
import transportImg from '@/assets/transport.jpg'
import { GiSandsOfTime } from 'react-icons/gi'
import { FaTruckMoving, FaSearch } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { BiHappyAlt } from 'react-icons/bi'

const Transport = () => {
	return (
		<section>
			<div className={classes.hero}>
				<Image className={classes.outer_img} src={transportImg}></Image>
				<div className={classes.title}>
					<h1>Transport</h1>
				</div>
				<ul className={classes.list}>
					<li>Szybki</li>
					<li>Bezpieczny</li>
					<li>Niezawodny</li>
				</ul>
			</div>
			<div className={classes.description}>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<GiSandsOfTime className={classes.description_icon}></GiSandsOfTime>
					</div>
					<div>
						<h2>Efektywny Transport</h2>
						<p className={classes.description_text}>
							Specjalizujemy się w szybkim i bezpiecznym transporcie samochodów oraz maszyn roboczych. Dzięki
							zaawansowanym rozwiązaniom logistycznym, gwarantujemy sprawną dostawę na każdą trasę.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<FaTruckMoving className={classes.description_icon}></FaTruckMoving>
					</div>
					<div>
						<h2>Profesjonalne Przemieszczanie</h2>
						<p className={classes.description_text}>
							Nasza firma oferuje profesjonalne przemieszczanie maszyn roboczych. Dzięki wysoko wykwalifikowanej kadrze
							oraz nowoczesnemu sprzętowi transportowemu, zapewniamy kompleksową obsługę w zakresie przewozu ciężkich
							urządzeń.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<FaSearch className={classes.description_icon}></FaSearch>
					</div>
					<div>
						<h2>Zaawansowane Rozwiązania Logistyczne</h2>
						<p className={classes.description_text}>
							Stawiamy na zaawansowane rozwiązania logistyczne, aby dostosować się do indywidualnych potrzeb naszych
							klientów. Śledzenie przesyłek, terminowość i kompleksowa obsługa to nasze priorytety.
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
							Oferujemy konkurencyjne ceny za nasze usługi transportowe. Dbamy o atrakcyjne warunki finansowe, aby
							zapewnić satysfakcję naszym klientom.
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
							Naszym głównym celem jest zadowolenie klientów. Dlatego nasz zespół pracuje z pełnym zaangażowaniem, aby
							zapewnić kompleksową obsługę i indywidualne podejście do każdego zlecenia.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Transport
