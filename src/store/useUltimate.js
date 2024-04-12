import { create } from "zustand";

const useUltimate = create(set => ({
  turn: "x",
  setTurn: turn => set({ turn }),
  ultimateState: Array(9).fill(Array(9).fill(null)),
  setUltimateState: ultimateState => set({ ultimateState })
}));

export default useUltimate;