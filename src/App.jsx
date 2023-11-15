import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Cart />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
