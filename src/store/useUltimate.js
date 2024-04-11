import { create } from "zustand";

const useUltimate = create(set => ({
  turn: "x",
  setTurn: turn => set({ turn }),
  cellValue: Array(9).fill(null),
  setCellValue: cellValue => set({ cellValue })
}));

export default useUltimate;