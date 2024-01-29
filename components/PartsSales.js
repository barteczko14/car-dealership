import React from 'react'
import classes from './ServicesPage.module.css'
import Image from 'next/image'
import czesciImg from '@/assets/czesci.jpg'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaHandsHelping, FaSearch } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { BiHappyAlt } from 'react-icons/bi'

const PartsSales = () => {
	return (
		<section>
			<div className={classes.hero}>
				<Image className={classes.outer_img} src={czesciImg}></Image>
				<div className={classes.title}>
					<h1>Sprzedaż części</h1>
				</div>
				<ul className={classes.list}>
					<li>Oryginalne</li>
					<li>Tanie</li>
					<li>Sprawdzone</li>
				</ul>
			</div>
			<div className={classes.description}>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<IoSettingsOutline className={classes.description_icon}></IoSettingsOutline>
					</div>
					<div>
						<h2>Oryginalne Części</h2>
						<p className={classes.description_text}>
							Oferujemy tylko oryginalne części samochodowe, aby zapewnić naszym klientom najwyższą jakość i
							bezpieczeństwo. Nasz szeroki wybór obejmuje części do różnych marek i modeli pojazdów.
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
							Nasi doświadczeni specjaliści służą profesjonalnym doradztwem w doborze odpowiednich części do Twojego
							samochodu. Dbamy o to, abyś otrzymał dokładnie to, czego potrzebujesz.
						</p>
					</div>
				</div>
				<div className={classes.description_box}>
					<div className={classes.icon_box}>
						<FaSearch className={classes.description_icon}></FaSearch>
					</div>
					<div>
						<h2>Szeroki Wybór</h2>
						<p className={classes.description_text}>
							Nasz asortyment obejmuje różnorodne części samochodowe, dostosowane do różnych marek i modeli. Znajdziesz
							u nas wszystko, czego potrzebujesz do naprawy i ulepszenia swojego pojazdu.
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
							Oferujemy atrakcyjne ceny na wszystkie nasze części samochodowe. Wierzymy w uczciwość wobec klientów i
							zapewniamy korzystne warunki zakupu.
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
							Naszym priorytetem jest satysfakcja klienta. Gwarantujemy wysoką jakość obsługi, profesjonalizm i
							indywidualne podejście do każdego zlecenia. Twój komfort i zadowolenie są dla nas najważniejsze.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PartsSales
