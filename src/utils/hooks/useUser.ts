import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

export const useUser = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) return false;

  const { user } = authContext;

  return user;
};
