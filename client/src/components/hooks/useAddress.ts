import { useSelector } from "react-redux";

import { selectAuthState } from "../../reduxStore/authSlice";

const useAddress = () => {
  const { address } = useSelector(selectAuthState);
  return address;
};

export default useAddress;
