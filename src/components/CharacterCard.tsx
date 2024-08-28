import { Character } from "../data/interfaces";

interface Props {
	c: Character;
}

const CharacterCard = ({ c }: Props) => (
	<section className="card">
		<p> {c.name} </p>
		{c.imageUrl && <img src={c.imageUrl} />}
	</section>
)

export default CharacterCard


// Om vi inte ska använda state-variabler kan vi returnera direkt:
/*
const C1 = () => (
	<p> hej </p>
)

const C2 = () => {
	// vi kan göra saker innan return
	return (
		<p> hej </p>
	)
}
*/