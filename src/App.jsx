import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Cart from "./components/cart/Cart";
import { PATH_CHECKOUT } from "./utils/constants";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      {pathname !== PATH_CHECKOUT && (
        <>
          <Navbar />
          <Cart />
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
