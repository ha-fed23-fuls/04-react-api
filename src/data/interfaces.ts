export interface ApiData {
	data: Character[];
	info: object;   // vi behöver inte använda något som finns i "info"
}

export interface Character {
	films: string[];
	imageUrl?: string;
	name: string;
	_id: number;
}
