import { Button } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import React from "react";
import styled from "styled-components";
import trip from "../../assets/illustrations/Trip-rafiki.svg";

const FrontPageWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const FrontPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  padding: 54px 54px 120px 54px;
  max-width: 1098px;
  border: 1px #00874c solid;
  border-radius: 36px;
  box-shadow: 0px 16px 32px rgba(215, 213, 212, 0.4);
`;

const FrontPageSubheader = styled.div`
  margin-bottom: 22px;
`;

const FrontPageList = styled.li`
  display: flex;
  margin: 4px 0;
  align-items: center;
`;

const FrontPageImage = styled.img`
  width: 320px;
`;

const LeftButton = styled.button`
  background-color: #00a05a;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  padding: 8px 20px;
  margin-right: 40px;
`;

const RightButton = styled.button`
  background-color: #ffffff;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  border: 1px #00874c solid;
  padding: 8px 20px;
  margin-right: 40px;
`;

// Delete comment later. Right now we have not decided how to do styling. Could do this or Sass if easier for everyone
const FrontPage = () => {
  const startNewTrip = () => {
    // placeholder for link to next page
    console.log("go to next page");
  };
  return (
    <FrontPageWrapper>
      <FrontPageContainer>
        <h1>Pack-Way</h1>
        <FrontPageSubheader>
          Making planning for group camping trips as easy as one, two,
          marshmellow.
        </FrontPageSubheader>
        <ul>
          <FrontPageList>
            <TaskAltIcon fontSize="small" sx={{ marginRight: "4px" }} /> Build
            packing lists based on your destination.
          </FrontPageList>
          <FrontPageList>
            <TaskAltIcon fontSize="small" sx={{ marginRight: "4px" }} /> Easily
            invite friends and plan trips together.
          </FrontPageList>
          <FrontPageList>
            <TaskAltIcon fontSize="small" sx={{ marginRight: "4px" }} /> Never
            ask "Who's bringing what?" again.
          </FrontPageList>
        </ul>
        <FrontPageImage src={trip} alt="trip" />
        <div>
          <LeftButton onClick={startNewTrip}>Plan a new Trip</LeftButton>
          <RightButton>Join a friend's trip</RightButton>
        </div>
      </FrontPageContainer>
    </FrontPageWrapper>
  );
};

export default FrontPage;
