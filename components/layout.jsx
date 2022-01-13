// Custom Components
import Navbar from './navbar';

// Next Components
import Head from 'next/head';

const Layout = ({children}) => {
	return (
		<div className="min-w-screen min-h-screen h-screen w-full max-w-full">
			<Head>
				<title>Kyle's Awesome Portfolio</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;700&family=Poppins:wght@100;300;700&display=swap" rel="stylesheet" />

				<meta name="description" content="Personal Platform for showcasing my work and connecting with fellow engineers."></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
			<header className="min-w-screen w-full">
				<Navbar />
			</header>
			<main className="h-full pl-3 pr-3 sm:pl-32 sm:pr-32 space-y-52">
				{children}	
				<footer className="w-full flex justify-center font-mono text-sm mb-5">Designed And Created By Kyle Smith</footer>
			</main>
		</div>
	)
}

export default Layout
