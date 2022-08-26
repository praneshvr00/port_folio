import styled from "styled-components";
import image from "../Images/Model1.png";
import { Outlet } from "react-router";
import { keyframes } from "styled-components";

const Image = styled.img`
  width: 500px;
  height: 300px;
  object-fit: contain;
  transition: all 1s ease-in-out;
  transform: translateX(1400px);
  margin-top: 30px;
  @media (max-width: 900px) {
    width: 355px;
    height: 210px;
  }
`;
const Desc = styled.p`
  padding-top: 8px;
  width: 20vw;
  transition: all 1s ease-in-out;
  transform: translateX(-1400px);
  color: white;
  @media (max-width: 900px) {
    width: 250px;
  }
`;
const H1 = styled.h1`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;
// const appear = keyframes`
//  0% {font-size: 0px;}
// `;
const Container = styled.div`
  width: 100%;
  height: 700px;
  /* background-color: gray; */
  display: flex;
  justify-content: center;
  overflow: hidden;
  &:hover ${Image} {
    transform: translateX(0px);
    transition: all 1s ease-in-out;
  }
  &:hover ${H1} {
    display: none;
  }

  &:hover ${Desc} {
    transform: translateX(0px);
    transition: all 1s ease-in-out;
  }
  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin-top: 10vh;
  height: 1100px;
  @media (max-width: 900px) {
    width: 100%;
    height: 650px;
    align-items: center;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 90%;
  margin: 0px 0px 7vw 0px;
  margin-left: 5vw;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const Left = styled.div`
  width: 30vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Title1 = styled.h1`
  color: #191919;
`;
const Title2 = styled.h1`
  color: #ffffff;
  padding-top: 10px;
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
    height: 200px;
  }
`;

const WorkingProjects = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Left>
            <Title1>PROJECT1</Title1>
            <Title2>JEWELLERY DESIGN</Title2>
            <Desc>
              Currently we are developing a project for a customer, they asked
              to develop a site for showcasing their available item. We are of 3
              members working on this project to finish as much as possible.
            </Desc>
          </Left>
          <center>
            <H1 style={{ color: "white", fontSize: 50 }}>Click me</H1>
          </center>
          <Right>
            <ImageContainer>
              <Image src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </ImageContainer>
          </Right>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default WorkingProjects;
