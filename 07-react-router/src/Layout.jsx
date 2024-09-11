import { Outlet } from "react-router-dom";
import Navbar from "./components/partials/Navbar.jsx";
import Footer from "./components/partials/Footer.jsx";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
