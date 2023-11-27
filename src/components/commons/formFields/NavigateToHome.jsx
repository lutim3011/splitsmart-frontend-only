import { Navigate } from "react-router-dom";

const NavigateToHome = ({ path }) => (
  <Navigate to={path || "/"} replace={true} />
);
export default NavigateToHome;
