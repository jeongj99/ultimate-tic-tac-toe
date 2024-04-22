import { create } from "zustand";

const initialState = {
  turn: "x",
  ultimateState: Array(9).fill(Array(9).fill(null)),
  activeSubboard: null,
  ultimateWinner: null
};

const useUltimate = create(set => ({
  ...initialState,
  setTurn: turn => set({ turn }),
  setUltimateState: ultimateState => set({ ultimateState }),
  setActiveSubboard: activeSubboard => set({ activeSubboard }),
  setUltimateWinner: ultimateWinner => set({ ultimateWinner }),

  resetGame: () => set(initialState)
}));

export default useUltimate;