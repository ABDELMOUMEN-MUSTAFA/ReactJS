import { Suspense, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/common/Loading";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default PrivateRoutes;
