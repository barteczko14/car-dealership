import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'Cars dealership',
	description: '',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				<div className='wrapper'>
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
