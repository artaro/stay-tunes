import MainContent from './main-content/page'

export default function App() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 bg-pearl'>
			<div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'></div>

			<div className='relative flex place-items-center'>
				<MainContent />
			</div>

			<div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
		</main>
	)
}
