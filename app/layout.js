import './globals.css'
import Navbar from '../components/Navbar'

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
			</body>
		</html>
	)
}
