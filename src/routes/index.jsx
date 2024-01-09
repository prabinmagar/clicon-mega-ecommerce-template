import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const RoutesConfig = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default RoutesConfig;
