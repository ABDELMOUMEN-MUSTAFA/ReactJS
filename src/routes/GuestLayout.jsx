import { Navigate, Outlet } from "react-router-dom";
import { Suspense, useContext } from "react";
import Loading from "../components/common/Loading";
import { AuthContext } from "../contexts/AuthContext";

const GuestRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="chambres" />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default GuestRoutes;
