import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'StayTunes',
	description: 'Stay Tunes - Explore your favorite tunes',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div style={{ display: 'flex' }}>
					<Sidebar />
					<main style={{ flexGrow: 1 }}> {children}</main>
				</div>
			</body>
		</html>
	)
}
