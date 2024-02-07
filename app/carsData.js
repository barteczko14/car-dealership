const carsData = [
	{
		id: 1,
		cena: 37900,
		tytuł: 'Renault Captur 1.5 dCi Energy Life',
		marka: 'Renault',
		model: 'Captur',
		rok_produkcji: 2015,
		przebieg: 169000,
		pojemnosc: '1461',
		rodzaj_paliwa: 'Diesel',
		moc: '90 KM',
		skrzynia: 'manualna',
		napęd: 'na przednie koła',
		spalanie: '4l / 100km',
		liczba_drzwi: 5,
		liczba_miejsc: 5,
		kolor: 'brązowy',
		kraj_pochodzenia: 'Francja',
		bezwypadkowy: 'tak',
		alt: 'Renault Captur',
		src: [
			'/images/renault_1.webp',
			'/images/renault_2.webp',
			'/images/renault_3.webp',
			'/images/renault_4.webp',
			'/images/renault_5.webp',
			'/images/renault_6.webp',
			'/images/renault_7.webp',
		],
		opis: 'Witam, mam do sprzedania samochód Renault Captur z 2014r z silnikiem 1.5 diesla o mocy 90KM. Auto świeżo sprowadzone do kraju z Francji, opłacone oraz przygotowane do rejestracji. Przebieg auta oryginalny, potwierdzony. Do samochodu posiadam komplet dokumentów, 2 karty oraz książkę serwisową. Auto posiada nowe opony zimowe. Auto w limitowanej wersji lakierniczej- z białym dachem. Wnętrze czyste i zadbane, bardzo bogato wyposażone, posiada m.in. NAVI R-LINK, kamerę cofania, asystent parkowania, czujniki parkowania, światła LED, hak, isofix, system KEYLESS GO- bez kluczykowe otwieranie i odpalanie auta, elektryczne lusterka i wiele innych. Samochód bez konieczności wkładu finansowego.',
	},
	{
		id: 2,
		cena: 12500,
		tytuł: 'Volkswagen Polo 1.2 Comfortline',
		marka: 'Volkswagen',
		model: 'Polo',
		rok_produkcji: 2008,
		przebieg: 171000,
		pojemnosc: '1198',
		rodzaj_paliwa: 'Benzyna',
		moc: '60 KM',
		skrzynia: 'manualna',
		napęd: 'na przednie koła',
		spalanie: '7.6l / 100km',
		liczba_drzwi: 5,
		liczba_miejsc: 5,
		kolor: 'srebrny',
		kraj_pochodzenia: 'Niemcy',
		bezwypadkowy: 'tak',
		alt: 'Volkswagen Polo',
		src: [
			'/images/vw_1.webp',
			'/images/vw_2.webp',
			'/images/vw_3.webp',
			'/images/vw_4.webp',
			'/images/vw_5.webp',
			'/images/vw_6.webp',
			'/images/vw_7.webp',
			'/images/vw_8.webp',
			'/images/vw_9.webp',
			'/images/vw_10.webp',
		],

		opis: 'Witam, mam do sprzedania samochód Volkswagen Polo z 2008r z silnikiem 1.2 Benzyna. Auto od pierwszego właściciela, świeżo sprowadzone do kraju z Niemiec, opłacone oraz przygotowane do rejestracji. Do samochodu posiadam komplet dokumentów, książkę serwisową oraz 2 kluczyki. Przebieg w 100% oryginalny. Wnętrze auta czyste i zadbane, bardzo dobrze wyposażone, posiada m.in 4el szyby, el i grzane lusterka, podgrzewane fotele, spryskiwacze reflektorów, ISOFIX,czujniki parkowania, klimatyzację oraz wiele innych.',
	},
	{
		id: 3,
		cena: 16700,
		tytuł: 'Seat Leon 1.6 Stylance',
		marka: 'Seat',
		model: 'Leon',
		rok_produkcji: 2007,
		przebieg: 219000,
		pojemnosc: '1595',
		rodzaj_paliwa: 'Benzyna',
		moc: '102 KM',
		skrzynia: 'manualna',
		napęd: 'na przednią oś',
		spalanie: '10l / 100km',
		liczba_drzwi: 5,
		liczba_miejsc: 5,
		kolor: 'czarny',
		kraj_pochodzenia: 'Niemcy',
		bezwypadkowy: 'tak',
		alt: 'Seat Leon',
		src: [
			'/images/seat_1.webp',
			'/images/seat_2.webp',
			'/images/seat_3.webp',
			'/images/seat_4.webp',
			'/images/seat_5.webp',
			'/images/seat_6.webp',
			'/images/seat_7.webp',
		],
		opis: 'Witam, mam do sprzedania samochód Seat Leon z 2007r z silnikiem 1.6 Benzyna o mocy 102KM-auto idealne do gazu. Samochód świeżo sprowadzony do kraju z Niemiec, opłacony oraz przygotowany do rejestracji. Samochód cały bezwypadkowy w oryginalnym lakierze, wszystkie szyby oryginalne. Wnętrze auta czyste i zadbane, bardzo dobrze wyposażone. Samochód bez wkładu finansowego.',
	},
	{
		id: 4,
		cena: 33900,
		tytuł: 'FNissan Qashqai 1.5 dCi Acenta',
		marka: 'Nissan',
		model: 'Qashqai',
		rok_produkcji: 2011,
		przebieg: 199000,
		pojemnosc: '1461',
		rodzaj_paliwa: 'Diesel',
		moc: '110 KM',
		skrzynia: 'manualna',
		napęd: 'na przednią oś',
		spalanie: '4l / 100km',
		liczba_drzwi: 5,
		liczba_miejsc: 5,
		kolor: 'szary',
		kraj_pochodzenia: 'Francja',
		bezwypadkowy: 'nie',
		alt: 'Nissan Qashqai',
		src: [
			'/images/nissan_1.webp',
			'/images/nissan_2.webp',
			'/images/nissan_3.webp',
			'/images/nissan_4.webp',
			'/images/nissan_5.webp',
			'/images/nissan_6.webp',
			'/images/nissan_7.webp',
		],
		opis: 'Witam, mam do sprzedania samochód Nissan Qashqai z 2011r z silnikiem 1.5 diesla o mocy 110KM. Auto w wersji Poliftowej. Samochód świeżo sprowadzony do kraju z Francji, opłacony oraz przygotowany do rejestracji. Wnętrze auta czyste i zadbane, bardzo bogato wyposażone, posiada m.in. 4el szyby, el lusterka, panorama dach, NAVI, kamera cofania, isofix, wielofunkcyjna kierownica oraz wiele innych. Przebieg auta w 100% oryginalny, potwierdzony kiążką serwisową. Do auta posiadam komplet dokumentów oraz książkę serwisową. Auto posiada nowe opony Continental. Samochód bez konieczności wkładu finansowego.',
	},
	{
		id: 5,
		cena: 27900,
		tytuł: 'Opel Meriva 1.4 T Cosmo',
		marka: 'Opel',
		model: 'Meriva',
		rok_produkcji: 2011,
		przebieg: 147000,
		pojemnosc: '1364',
		rodzaj_paliwa: 'Benzyna',
		moc: '120 KM',
		skrzynia: 'manualna',
		napęd: 'na przednią oś',
		spalanie: '7l / 100km',
		liczba_drzwi: 5,
		liczba_miejsc: 5,
		kolor: 'biały',
		kraj_pochodzenia: 'Francja',
		bezwypadkowy: 'nie',
		alt: 'Opel Meriva',
		src: [
			'/images/opel_1.webp',
			'/images/opel_2.webp',
			'/images/opel_3.webp',
			'/images/opel_4.webp',
			'/images/opel_5.webp',
			'/images/opel_6.webp',
			'/images/opel_7.webp',
		],
		opis: 'Witam, mam do sprzedania samochód Opel Meriva z 2011r z silnikiem 1.4 Benzyna o mocy 120KM. Auto zarejestrowane w Polsce, z ważnymi opłatami. Wnętrze auta czyste i zadbane, bardzo dobrze wyposażone. Samochód posiada m.in: XENONY skrętne, panorama dach, fotele półskórzane, isofix, climatronic el szyby oraz wiele innych. Auto bez konieczności wkładu finansowego. Do samochodu posiadam komplet dokumentów oraz książkę serwisową.',
	},
	{
		id: 6,
		cena: 34900,
		tytuł: 'Honda CR-V 2.2i-CTDi Elegance',
		marka: 'Honda',
		model: 'CRV',
		rok_produkcji: 2008,
		przebieg: 230000,
		pojemnosc: '2204',
		rodzaj_paliwa: 'Diesel',
		moc: '140 KM',
		skrzynia: 'manualna',
		napęd: '4x4',
		spalanie: '8l / 100km',
		liczba_drzwi: 5,
		liczba_miejsc: 5,
		kolor: 'czarny',
		kraj_pochodzenia: 'Francja',
		bezwypadkowy: 'tak',
		alt: 'Honda CRV',
		src: [
			'/images/honda_1.jpg',
			'/images/honda_2.jpg',
			'/images/honda_3.jpg',
			'/images/honda_4.jpg',
			'/images/honda_5.jpg',
			'/images/honda_6.jpg',
			'/images/honda_7.jpg',
		],
		opis: 'Bardzo wygodne, duże auto z naprawdę dużym bagażnikiem. Opony zimowe są nowe, posiadam również zestaw letni. Oryginalne pióra wycieraczek, wymienione w listopadzie. Auto na codzień jest garażowane. Lakier posiada kilka rys oraz dwa odpryski lakieru wielkości do 0,5 cm powstałe prawdopodobnie przez uderzenie kamienia. Auto dla osoby która od czasu do czasu wyrusza w podróż, nie po mieście, trwającą około 30 min ponieważ posiada DPF. Zużycie paliwa średnie to 7,5 l.',
	},
	{
		id: 7,
		cena: 41900,
		tytuł: 'Volkswagen Golf VII 1.4 TSI',
		marka: 'Volkswagen',
		model: 'Golf',
		rok_produkcji: 2018,
		przebieg: 75000,
		pojemnosc: '1400',
		rodzaj_paliwa: 'Benzyna',
		moc: '150 KM',
		skrzynia: 'automatyczna',
		napęd: 'na przednią oś',
		spalanie: '6.2l / 100km',
		liczba_drzwi: 5,
		liczba_miejsc: 5,
		kolor: 'czerwony',
		kraj_pochodzenia: 'Niemcy',
		bezwypadkowy: 'tak',
		alt: 'Volkswagen Golf VII',
		src: ['/images/vw_golf_vii.jpg'],
		opis: 'Volkswagen Golf VII 1.4 TSI z 2018 roku. Przebieg 75000 km. Kolor nadwozia - czerwony. Samochód wyposażony w automatyczną skrzynię biegów, napęd na przednią oś. Pojemność silnika 1400 cm³, moc 150 KM. Bezawaryjny, bezwypadkowy. Idealny do jazdy miejskiej. Zapraszam na jazdę próbną!',
	},
]

export default carsData
