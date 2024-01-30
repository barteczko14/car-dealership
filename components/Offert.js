import React from 'react'
import classes from './Offert.module.css'
import Image from 'next/image'
import { BsFillTelephoneFill } from 'react-icons/bs'
const Offert = ({ carData }) => {
	return (
		<section className={classes.wrapper}>
			<div className={classes.main_container}>
				<div className={classes.img_container}>
					<Image className={classes.img} src={carData.src} width={700} height={500}></Image>
				</div>
				<div className={classes.title_container}>
					<div className={classes.title_box}>
						<h2 className={classes.title}>{carData.tytuł}</h2>
					</div>
					<div className={classes.title_details}>
						<span>{carData.rok_produkcji} </span>
						<span>{carData.przebieg} km </span>
						<span>{carData.pojemnosc} cm³</span>
						<span>{carData.rodzaj_paliwa} </span>
					</div>
					<div>
						<p className={classes.price}>{carData.cena} PLN</p>
					</div>
					<div className={classes.phone_container}>
						<BsFillTelephoneFill className={classes.icon}></BsFillTelephoneFill>
						<span className={classes.phone_number}>XXX-XXX-XXX</span>
					</div>
				</div>
			</div>

			<div className={classes.details_container}>
				<h3 className={classes.details_title}>Szczegóły</h3>
				<div className={classes.details_box}>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Marka</span>
						<span>{carData.marka}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Model</span>
						<span>{carData.model}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Rok produkcji</span>
						<span>{carData.rok_produkcji}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Przebieg</span>
						<span>{carData.przebieg}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Pojemność</span>
						<span>{carData.pojemnosc}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Rodzaj paliwa</span>
						<span>{carData.rodzaj_paliwa}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Moc</span>
						<span>{carData.moc}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Skrzynia biegów</span>
						<span>{carData.skrzynia}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Napęd</span>
						<span>{carData.napęd}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Spalanie</span>
						<span>{carData.spalanie}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Liczba drzwi</span>
						<span>{carData.liczba_drzwi}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Liczba miejsc</span>
						<span>{carData.liczba_miejsc}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Kolor</span>
						<span>{carData.kolor}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Kraj pochodzenia</span>
						<span>{carData.kraj_pochodzenia}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.detail_title}>Bezwypadkowy</span>
						<span>{carData.bezwypadkowy}</span>
					</div>
					<div>
						<h3 className={classes.details_title}>Opis</h3>
						<div className={classes.details_description_container}>
							<p>{carData.opis}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Offert
