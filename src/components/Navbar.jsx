import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #191919;
  @media (max-width : 900px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  /* width: auto; */
  height: 100%;
`;
const Left = styled.div`
  /* background-color: yellow; */
  flex: 1;
  height: 100%;
  display: flex;
  padding-left: 9vw;
  font-weight: 900;
  font-size: xx-large;
  align-items: center;
  color: #4752e9;
  @media (max-width : 900px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Right = styled.div`
  /* background-color: red; */
  display: flex;
  flex: 2;
  align-items: end;
  justify-content: end;
  padding-right:5vw;
  height: 100%;
  font-weight: 600;
  @media (max-width : 900px) {
    width: 100%;
    padding-right:1px;
    justify-content: center;
    align-items: center;
  }
`;
const MenuItem = styled.div`
  padding: 4vh;
  color: #4752e9;
  cursor: pointer;
  &:hover{
    color: #ffffff;
  }
  @media (max-width : 900px) {
    padding: 10px;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>Pranesh </MenuItem>
        </Left>
        <Right>
          <MenuItem onClick={ ()=> window.scrollTo({top: 1800, behavior: 'smooth'}) }>Skills</MenuItem>
          <MenuItem onClick={ () => window.scrollTo({top: 1200, behavior: "smooth"})}>Works</MenuItem>
          <MenuItem onClick={ () => window.scrollTo({top: 2200, behavior: "smooth"})}>Contact</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
