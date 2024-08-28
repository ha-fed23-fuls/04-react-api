import { create } from 'zustand'
import { Character } from './interfaces'

interface PirateStore {
	pirates: Character[];
	setPirates: (pirates: Character[]) => void;
	// favorites: number[];
	// toggleFavorite: (index: number) => void;
}
const usePirateTreasure = create<PirateStore>((set) => ({
	pirates: [], //Character[];
	setPirates: characters => set(() => ({
		pirates: characters
	})),
	// favorites: [],
	// toggleFavorite: TODO
}))

export { usePirateTreasure }

/*
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))*/
