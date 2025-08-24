import { useContext } from "react";
import { UsersContext } from "./UsersContext";

export function useUsers() {
  return useContext(UsersContext);
}
