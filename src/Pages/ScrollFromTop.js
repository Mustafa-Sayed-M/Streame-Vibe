import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollFromTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);
  return;
}
export default ScrollFromTop;