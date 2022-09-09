import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./styles.css";

const BasePage = () => {
  return (
    <div className="page">
      <Navbar />
      <Footer />
      <Outlet />
    </div>
  );
};

export default BasePage;
