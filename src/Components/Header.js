import React from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { IconButton} from "@material-ui/core";

function Header() {
  return (
    <div>
      <Container>
        <LogoContainer>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </LogoContainer>
        {/*  <HomePageButton>

          </HomePageButton>
          <SearchContainer>
              <SearchBarContainer>

              </SearchBarContainer>
          </SearchContainer>
          <IconsContainer>

          </IconsContainer> */}
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoContainer = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;
