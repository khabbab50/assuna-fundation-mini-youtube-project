import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navigation/Navbar";

const Layout = () => {
  const searchText = useSelector((state) => state.search.searchText);
  console.log(searchText);
  return (
    <div>
      <Navbar searchText={searchText} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
