import { useEffect } from "react";
import { useLocation } from "react-router";

const pathNameHistory = new Set();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  console.log({ pathname });
  useEffect(() => {
    if (!pathNameHistory.has(pathname)) {
      window.scrollTo(0, 0);
      pathNameHistory.add(pathname);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
