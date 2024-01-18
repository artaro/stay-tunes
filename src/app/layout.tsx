import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'

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
			<body>
				<div style={{ display: 'flex' }}>
					<Sidebar />
					<main style={{ flexGrow: 1 }}> {children}</main>
				</div>
			</body>
		</html>
	)
}
