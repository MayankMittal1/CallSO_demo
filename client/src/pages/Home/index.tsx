import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Modal, ModalBody, Row } from "reactstrap";
import styled from "styled-components";
import { WebSocketContext } from "../../components/common/websockets";
import useAddress from "../../components/hooks/useAddress";
import {
  acceptCallState,
  decline,
  selectCallState,
} from "../../reduxStore/callSlice";
import Navbar from "./components/Navbar";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import Call from "../Call";
import { startBasicCall } from "../../helpers/socket";

const Homepage = () => {
  const dispatch = useDispatch();
  const ws = useContext(WebSocketContext);
  const [to, setTo] = useState("");
  const address = useAddress();
  const callState = useSelector(selectCallState);
  const offerCall = () => {
    ws.offerCall(address, to);
  };

  const acceptCall = () => {
    let channel = "channel" + Math.floor(Math.random() * 1000000) + 1;
    startBasicCall(1, 1, channel);
    dispatch(acceptCallState());
    ws.acceptCall(callState.from, address, channel);
  };
  useEffect(() => {
    console.log("call state", callState);
  }, [callState]);

  return (
    <>
      <Navbar />
      {callState.status == "ACCEPTED" ? (
        <Call from={callState.from} />
      ) : (
        <Wrapper>
          <Heading>Future of Communication</Heading>
          <Line>Connect your wallet to make a call.</Line>
          {callState.status == "RECIEVED" ? (
            <Callbox>
              <Calling>
                <Message>{callState.from}</Message>
                <Message>Calling</Message>
              </Calling>
              <Button
                onClick={() => {
                  acceptCall();
                }}
              >
                <GoPlus />
                Accept Call
              </Button>
              <Button
                onClick={() => {
                  ws.declineCall(callState.from, address);
                  //dispatch(decline());
                }}
              >
                <HiMinus />
                Decline Call
              </Button>
            </Callbox>
          ) : (
            <>
              <Inputbox>
                <SearchContainer>
                  <Input
                    placeholder="Enter wallet address...."
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                </SearchContainer>
              </Inputbox>
              <Button onClick={offerCall}>Call</Button>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

// const Start = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: flex-end;
// `;
const Heading = styled.h1`
  padding-top: 100px;
  display: flex;
  color: white;
  font-size: 64px;
`;

const Line = styled.p`
  color: white;
  font-size: 20px;
  padding-bottom: 80px;
`;

const Inputbox = styled.div`
  height: 60px;
  width: 463px;
  background-color: #354657;
  display: flex;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SearchContainer = styled.span`
  /* border: 0.5px solid yellow; */
  display: flex;
  align-items: center;
  /* padding-bottom: 20px; */
  /* padding-top: 80px; */
`;

const Input = styled.input`
  margin-left: 20px;
  background-color: #354657;
  border: none;
  color: white;
  font-size: 16px;
  font-family: "Oxanium", cursive;
  &:focus {
    outline: none;
  }
  &::placeholder {
    border: none;
    /* padding: 15px; */
    color: white;
  }
`;
const Message = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 45px;
  font-size: 16px;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: 2px solid white;
  font-family: "Oxanium", cursive;
`;
const Callbox = styled.div`
  background-color: #bfbfbf;
  width: 540px;
  height: 208px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;
const Calling = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export default Homepage;
