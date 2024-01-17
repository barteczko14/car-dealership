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
				{children}
				<div className='wrapper'>
					<Footer />
				</div>
			</body>
		</html>
	)
}
