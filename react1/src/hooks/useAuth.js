import { useContext } from "react";
import { AuthContext } from "../components/hoc/AuthProvider";

function useAuth() {
  return useContext(AuthContext);
};

export default useAuth;
