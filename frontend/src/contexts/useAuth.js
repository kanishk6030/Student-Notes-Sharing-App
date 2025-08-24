import { useContext } from "react";
import { AuthContext } from "./AuthenContext";

export function useAuth() {
  return useContext(AuthContext);
}
