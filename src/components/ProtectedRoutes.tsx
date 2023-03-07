import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from '../store/hooks';

const ProtectedRoutes = () => {

  const user = useAppSelector(state => state.user.user)

  if (
    user?.email === null ||
    user?.email === "undefined" ||
    user?.email === "" ||
    user?.password === null ||
    user?.password === "undefined" ||
    user?.password === ""
  ) {
    return <Navigate to="/" replace />;
  }
  
  return <Outlet />;
};

export default ProtectedRoutes;