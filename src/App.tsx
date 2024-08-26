import { useState } from 'react'
import './App.css'
import { Character, getPirates } from './data/getPirates'

function App() {
	const [characters, setCharacters] = useState<Character[]>([])
	const [message, setMessage] = useState<string>('')
	// TODO: lägg till filterfunktion (sök på namn)

	const handleGet = async () => {
		try {
			const data: Character[] = await getPirates()
			// console.log('Data from API:', data)
			setCharacters(data)
		}
		catch(error) {
			const e: Error = error as Error
			console.log('API failed with error: ', e.message)
			setMessage('Something went wrong. Please try again later. Arrr!')
		}
	}
	
	return (
		<div className="app">
			<header>
				<h1> 🏴‍☠️ Frontend Pirates 🏴‍☠️ </h1>
			</header>
			<main>
				<button onClick={handleGet}> Arr mateys </button>
				{message && (
					<p> {message} </p>
				)}
				<div className="pirate-grid">
					{characters.map((c: Character) => (
						<section key={c._id} className="card">
							<p> {c.name} </p>
							<img src={c.imageUrl} />
						</section>
					))}
				</div>
			</main>
		</div>
	)
}
// Higher order functions: map, filter, find, forEach

export default App
