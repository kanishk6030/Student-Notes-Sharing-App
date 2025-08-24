import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export function useNotes() {
  return useContext(NotesContext);
}
