export interface ApiData {
	// TODO: ta reda på vad som kommer från API:et
	// och skriv färdigt interfacet
}

async function getPirates(): Promise<ApiData> {
	const response: Response = await fetch('https://api.disneyapi.dev/character?films=Pirates of the Caribbean')
	const data: ApiData = await response.json()
	// Obs! Vi är inte garanterade att få "ApiData"
	// på onsdag kommer vi att se hur vi kan validera datan
	return data
}

export { getPirates }
