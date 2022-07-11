import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const FrontPageWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 6rem;
`;

const FrontPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const FrontPage = () => {
  const startNewTrip = () => {
    // placeholder for link to next page
    console.log("go to next page");
  };
  return (
    <FrontPageWrapper>
      <FrontPageContainer>
        <div>image</div>
        <Button
          variant="contained"
          sx={{ marginTop: "2rem" }}
          color="primary"
          onClick={startNewTrip}
        >
          Start A New Trip
        </Button>
        <Button variant="contained" sx={{ marginTop: "2rem" }} color="primary">
          Join A Friend's Trip
        </Button>
      </FrontPageContainer>
    </FrontPageWrapper>
  );
};

export default FrontPage;
