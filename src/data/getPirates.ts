export interface ApiData {
	data: Character[];
	info: object;   // vi behöver inte använda något som finns i "info"
}
export interface Character {
	films: string[];
	imageUrl: string;
	name: string;
	_id: number;
}

async function getPirates(): Promise<Character[]> {
	const response: Response = await fetch('https://api.disneyapi.dev/character?films=Pirates of the Caribbean&pageSize=100')
	const apiData: ApiData = await response.json()
	// Obs! Vi är inte garanterade att få "ApiData"
	// på onsdag kommer vi att se hur vi kan validera datan
	return apiData.data
}

export { getPirates }
