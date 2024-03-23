import { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps) {
  const { signed, loadingAuth } = useContext(AuthContext);
  if (loadingAuth) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }
  if (!signed) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
