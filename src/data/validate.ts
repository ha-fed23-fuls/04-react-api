import { Character } from "./interfaces";
import Joi from 'joi'

type ValidationResult = ValidationSuccess | ValidationFailure
interface ValidationSuccess {
	success: true;
	value: Character[];
}
interface ValidationFailure {
	success: false;
	error: string;
}


const schema = Joi.array<Character>().items(
	Joi.object<Character>({
		films: Joi.array().items(
			Joi.string()
		).required(),

		imageUrl: Joi
			.string()
			.uri(),  // man kan dela upp på flera rader

		name: Joi.string().required(),
		_id: Joi.number().required()
	})
)

export function validateCharacters(chars: Character[]): ValidationResult {
	// console.log('Test 1', schema.validate( 5 ))
	// console.log('Test 2', schema.validate( [] ))
	// console.log('Test 3', schema.validate( [
	// 	{
	// 		films: ['titel'],
	// 		imageUrl: 'https://image.com/image.example.png',
	// 		name: 'name',
	// 		_id: 123}
	// ] ))
	// Förväntat testresultat: 1==fail, 2==okej, 3==okej

	const result = schema.validate(chars.map(c => ({
		films: c.films,
		imageUrl: c.imageUrl,
		name: c.name,
		_id: c._id
	})))
	if( result.error ) {
		return { success: false, error: result.error.message }
	}
	else {
		return { success: true, value: chars }
	}
}