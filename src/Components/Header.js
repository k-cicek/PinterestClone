import React from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Header() {
  return (
    <div>
      <Container>
        <LogoContainer>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </LogoContainer>
        <HomePageButton>
          <a href="/">HomePage</a>
        </HomePageButton>
        <SearchContainer>
          <SearchBarContainer>
             <IconButton>
              <SearchIcon /> 
            </IconButton> 
            <form>
              <input type="text" />
              <button type="submit"></button>
            </form>
          </SearchBarContainer>
        </SearchContainer>
         <IconsContainer>
         <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <TextsmsIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
          
          </IconsContainer> 
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
    cursor: pointer;
    height: 24px;
    width: 24px;
  }

  .MuiSvgIcon-root :hover {
    background-color: #efefef;
  }
`;

const HomePageButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
`;

const SearchBarContainer = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;
  margin-left: 10px;

  
  form {
    display: flex;
    flex: 1;
  }
  
  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }
  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }

`;

const IconsContainer = styled.div`
margin-left: 20px;
`;