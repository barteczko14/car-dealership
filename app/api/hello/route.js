import { connectDatabase } from '@/app/helpers/db-util'
import { NextResponse } from 'next/server'

export async function GET() {
	let client

	// try {
	try {
		client = await connectDatabase()
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database failed!' })
		return
	}
	const db = client.db()
	const carsData = await db.collection('carsData').find().toArray()
	client.close()

	const transformedData = carsData.map(carData => ({
		id: carData._id,
		tytuł: carData.tytuł,
		marka: carData.marka,
		model: carData.model,
		rok_produkcji: carData.rok_produkcji,
		opis: carData.opis,
		cena: carData.cena.$numberInt,
		kolor: carData.kolor,
		alt: carData.alt,
		bezwypadkowy: carData.bezwypadkowy,
		kraj_pochodzenia: carData.kraj_pochodzenia,
		liczba_drzwi: carData.liczba_drzwi.$numberInt,
		liczba_miejsc: carData.liczba_miejsc.$numberInt,
		moc: carData.moc.$numberInt,
		napęd: carData.napęd,
		pojemnosc: carData.pojemnosc.$numberInt,
		przebieg: carData.przebieg.$numberInt,
		rodzaj_paliwa: carData.rodzaj_paliwa,
		skrzynia: carData.skrzynia,
		spalanie: carData.spalanie,
		src: carData.src,
	}))

	return NextResponse.json({ data: transformedData })
}
// 	catch (error) {
// 		return NextResponse.json({ error: 'Error retrieving data from MongoDB' })
// 	}
// }

// Adding document to collection in mongoDb

// await db.collection('carsData').insertOne({
// 	cena: { $numberInt: '34900' },
// 	alt: 'Honda CRV',
// 	bezwypadkowy: 'tak',
// 	kolor: 'czarny',
// 	kraj_pochodzenia: 'Francja',
// 	liczba_drzwi: { $numberInt: '5' },
// 	liczba_miejsc: { $numberInt: '5' },
// 	marka: 'Honda',
// 	moc: { $numberInt: '140' },
// 	model: 'Honda',
// 	napęd: '4x4',
// 	opis: 'Bardzo wygodne, duże auto z naprawdę dużym bagażnikiem. Opony zimowe są nowe, posiadam również zestaw letni. Oryginalne pióra wycieraczek, wymienione w listopadzie. Auto na codzień jest garażowane. Lakier posiada kilka rys oraz dwa odpryski lakieru wielkości do 0,5 cm powstałe prawdopodobnie przez uderzenie kamienia. Auto dla osoby która od czasu do czasu wyrusza w podróż, nie po mieście, trwającą około 30 min ponieważ posiada DPF. Zużycie paliwa średnie to 7,5 l.',
// 	pojemnosc: { $numberInt: '2204' },
// 	przebieg: { $numberInt: '230000' },
// 	rodzaj_paliwa: 'Diesel',
// 	rok_produkcji: '2008',
// 	skrzynia: 'manualna',
// 	spalanie: '8l / 100km',
// 	src: [
// 		'/images/honda_1.jpg',
// 		'/images/honda_2.jpg',
// 		'/images/honda_3.jpg',
// 		'/images/honda_4.jpg',
// 		'/images/honda_5.jpg',
// 		'/images/honda_6.jpg',
// 		'/images/honda_7.jpg',
// 	],
// 	tytuł: 'Honda CR-V 2.2i-CTDi Elegance',
// })
