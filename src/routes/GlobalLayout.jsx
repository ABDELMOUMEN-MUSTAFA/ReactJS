import { Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

const GlobalLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default GlobalLayout;
