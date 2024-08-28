import { useState } from 'react'
import { getPirates } from '../data/getPirates'
import { Character } from '../data/interfaces'
import CharacterCard from './CharacterCard'
import { validateCharacters } from '../data/validate'

const Main = () => {
	const [characters, setCharacters] = useState<Character[]>([])
	const [message, setMessage] = useState<string>('')
	const [searchFilter, setSearchFilter] = useState<string>('')

	const handleGet = async () => {
		try {
			const result = validateCharacters(await getPirates())
			if( result.success ) {
				// Vi använder "!" för att TypeScript ska strunta i den obefintliga möjligheten att det är undefined
				setCharacters(result.value)
			} else {
				setMessage(result.error)
			}
		}
		catch(error) {
			const e: Error = error as Error
			console.log('API failed with error: ', e.message)
			setMessage('Something went wrong. Please try again later. Arrr!')
		}
	}

	// Räknas ut baserat på characters och det användaren skrivit in i sökfältet
	// Kan optimeras med useMemo
	const filteredCharacters: Character[] = characters.filter(c => c.name.toLowerCase().includes(searchFilter.toLowerCase()))

	return (
		<main>
			<input type="text" placeholder="Find characters"
				onChange={(event) => setSearchFilter(event.target.value)}
				value={searchFilter}
				/>
			<button onClick={handleGet}> Arr mateys </button>
			{message && (
				<p> {message} </p>
			)}
			<div className="pirate-grid">
				{filteredCharacters.map((c: Character) => (
					<CharacterCard key={c._id} c={c} />
				))}
			</div>
		</main>
	)
}

export default Main
