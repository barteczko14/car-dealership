import Image from 'next/image'
import classes from './OffertsCarosuelCart.module.css'
import Link from 'next/link'
const OffertsCarosuelCart = ({ carData }) => {
	const finalLink = `/oferta/${carData.id}`
	return (
		<Link href={finalLink}>
			<div className={classes.cart} key={carData.id}>
				<Image src={carData.src} width={500} height={300} className={classes.img} alt={carData.alt}></Image>
				<div className={classes.mark_model}>
					<span>
						{carData.marka} {carData.model}
					</span>
				</div>
				<div className={classes.cart_detail}>
					<span>Rok produkcji:</span>
					<span>{carData.rok_produkcji}</span>
				</div>
				<div className={classes.cart_detail}>
					<span>Przebieg:</span>
					<span>{carData.przebieg}</span>
				</div>
				<div className={classes.cart_detail}>
					<span>Rodzaj paliwa:</span>
					<span>{carData.rodzaj_paliwa}</span>
				</div>
				<div className={classes.cart_detail}>
					<span>Pojemność silnika:</span>
					<span>{carData.pojemnosc}</span>
				</div>
				<div className={classes.cart_detail}>
					<span>Moc silnika:</span>
					<span>{carData.moc}</span>
				</div>

				<h2 className={classes.price}>39900 zł</h2>
			</div>
		</Link>
	)
}

export default OffertsCarosuelCart
