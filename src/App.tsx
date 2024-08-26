// qimport { useState } from 'react'
import './App.css'
import { getPirates } from './data/getPirates'

function App() {
	// const [characters, setCharacters] = useState<null | object>(null)

	const handleGet = async () => {
		try {
			const data = await getPirates()
			console.log('Data from API:', data)
			// TODO: visa datan i appen
		}
		catch(error) {
			const e: Error = error as Error
			console.log('API failed with error: ', e.message)
			// TODO: visa meddelande för användaren
		}
	}
	
	return (
		<div className="app">
			<header>
				<h1> Fullstack Pirates </h1>
			</header>
			<main>
				<button onClick={handleGet}> Arr mateys </button>
			</main>
		</div>
	)
}

export default App
