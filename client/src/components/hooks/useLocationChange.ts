import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const useLocationChange = (action) => {
  let prevUrl;
  const location = useLocation();
  useEffect(() => {
    if (prevUrl != location.pathname) {
      action(location);
      prevUrl = location.pathname;
    }
  }, [location.pathname]);
};

export default useLocationChange;
