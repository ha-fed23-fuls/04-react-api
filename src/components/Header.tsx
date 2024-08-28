import { Character } from '../data/interfaces'
import { usePirateTreasure } from '../data/store'
import './Header.css'

const Header = () => {
	const pirates: Character[] = usePirateTreasure(state => state.pirates)
	const count: number = pirates.length

	return (
		<header>
			<h1> 🏴‍☠️ Frontend Pirates 🏴‍☠️ </h1>
			<p> {count} pirater </p>
		</header>
	)
}

export default Header
