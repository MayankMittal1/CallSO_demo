import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { WebSocketContext } from "./websockets";

import {
  connectWallet,
  disconnectWallet,
  connectWalletIfCache,
  selectAuthState,
  fetchURL,
} from "../../reduxStore/authSlice";

import { ellipseAddress } from "../../helpers/utils";
import { concat } from "ethers/lib/utils";
import { ethers } from "ethers";
import styled from "styled-components";

const WalletConnect = () => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const [balance, setBalance] = useState("0");
  const { address, network, url } = useSelector(selectAuthState);
  useEffect(() => {
    if (address) dispatch(fetchURL(address));
  }, [address]);
  const history = useHistory();
  useEffect(() => {
    dispatch(connectWalletIfCache());
  }, []);
  const ws = useContext(WebSocketContext);
  useEffect(() => {
    if (address) ws.loginSockets(address, url);
  }, [address, url]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        // window.location.reload();
      });
    }
  });

  const onConnect = () => {
    dispatch(connectWallet());
  };
  const onDisconnect = () => {
    dispatch(disconnectWallet());
  };
  return !address ? (
    <Button
      className="mx-2"
      style={{ borderRadius: "12px" }}
      onClick={onConnect}
    >
      Connect
    </Button>
  ) : (
    <>
      <Button
        disabled
        className="mx-2"
        style={{ borderRadius: "12px" }}
        onClick={onConnect}
      >
        {url ? url : ellipseAddress(address, 5)}
      </Button>
      <Button disabled style={{ borderRadius: "12px" }} onClick={onDisconnect}>
        Disconnect
      </Button>
    </>
  );
};
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: 2px solid white;
  font-family: "Oxanium", cursive;
`;

export default WalletConnect;
