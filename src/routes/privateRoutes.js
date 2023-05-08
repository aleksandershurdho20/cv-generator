import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PrivateRoutes({ roles, children }) {
  const { userInfo } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();

  const hasUserAcces =
    userInfo && userInfo?.role?.some((role) => roles.includes(role));
  if (!hasUserAcces) {
    return navigate("/");
  }
  return children;
}
export default PrivateRoutes;
