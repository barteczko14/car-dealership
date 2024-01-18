import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'Cars dealership',
	description:
		'Znajdź idealny samochód w naszym profesjonalnym komisie samochodowym. Oferujemy szeroki wybór pojazdów używanych w doskonałym stanie technicznym. Sprawdź naszą ofertę i znajdź swój wymarzony samochód już dziś. Gwarancja jakości, konkurencyjne ceny i przyjazna obsługa klienta.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<div className='wrapper'>
					<Footer />
				</div>
			</body>
		</html>
	)
}
