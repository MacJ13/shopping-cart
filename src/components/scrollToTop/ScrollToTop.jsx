import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  const searchLocation = search || "";

  const fullPathName = pathname + searchLocation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fullPathName]);

  return null;
};

export default ScrollToTop;
