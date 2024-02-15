import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: '%s | DevShop',
		default: 'DevShop',
	},
	description:
		'DevShop is your one stop to by all branded products',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavigationBar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
