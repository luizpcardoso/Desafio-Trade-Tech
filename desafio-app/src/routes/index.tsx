import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/index";
import Providers from "../providers/index";

export const AppRoutes = () => {
  return (
    <Router>
      <Providers>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Providers>
    </Router>
  );
};
