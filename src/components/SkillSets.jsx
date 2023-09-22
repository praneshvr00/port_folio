import styled from "styled-components";
import Workicon from "@mui/icons-material/WorkHistoryRounded";
import Certificateicon from "@mui/icons-material/MilitaryTech";
import SkillIcon from "@mui/icons-material/Psychology";
import ArrowRightAltOutlined from "@mui/icons-material/ArrowRightAltOutlined";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  z-index: 3;
  margin-top: 1vw;
  background-color: #191919;
  @media (max-width: 900px) {
    height: 650px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    display: block;
  }
  /* border-bottom:5px solid;
  border-image: linear-gradient(45deg, #4752e9, skyblue) 1; */
`;

const Left = styled.div`
  /* background-color: #c34040; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 2;
  @media (max-width: 900px) {
    padding-top: 60px;
  }
`;
const Qualification = styled.div`
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
const Degree = styled.h1`
  color: #4752e9;
  font-weight: 900;
  font-size: 5vw;
  margin-top: -10vw;
  @media (max-width: 900px) {
    padding-top: 2px;
  }
`;
const DegreeName = styled.h3`
  color: #4752e9;
  font-weight: 600;
  font-size: 28px;
  margin-top: 3vw;
  @media (max-width: 900px) {
    padding-top: 10px;
    text-align: center;
    justify-content: center;
    padding-top: 10px;
  }
`;
const About = styled.p`
  color: #ffffff;
  margin-top: 2vw;
  font-size: larger;
  width: 90%;
  @media (max-width: 900px) {
    padding-top: 10px;
    text-align: center;
    justify-content: center;
  }
`;

const Right = styled.div`
  /* background-color: orange; */
  flex: 4;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    margin-top: 30px;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
const Title = styled.h1`
  margin-top: -2vw;
  color: #ffffff;
`;
const SkillBoxContainer = styled.div`
  margin-top: 4vw;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const Ghost1 = styled.span`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  content: "";
  opacity: 0;
  transition: all 0.5s ease-out;
  @media (max-width: 900px) {
    margin-top: 10px;
  }
`;
const SkillBox = styled.button`
  width: 240px;
  height: 230px;
  background-color: #4752e9;
  color: white;
  margin: 0px 5px 0px 5px;
  position: relative;
  cursor: pointer;
  &:hover ${Ghost1} {
    opacity: 1;
    transition: all 1s ease-in-out;
  }
  @media (max-width: 900px) {
    margin-top: 20px;
    width: 100px;
    height: 100px;
    position: relative;
  }
`;

const Ghost0 = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 6vh;
  width: 100%;
  @media (max-width: 900px) {
    bottom: 0px;
  }
`;

const SkillSets = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Qualification>
            <Degree>Frontend Developer</Degree>
            <DegreeName>Web and Mobile Application</DegreeName>
            <About>
              Hello I am Pranesh , I am a developer with a decent experience in
              WebDeveloping, UI/UX, AndroidDeveloping, Coding and ProblemSolving.
            </About>
          </Qualification>
        </Left>
        <Right>
          <Title>
            WEB DESIGNER AND DEVELOPER WORKING IN NEW CUTTING EDGE TECHNOLOGIES! 
          </Title>
          <SkillBoxContainer>
            <Link to="/">
              <SkillBox>
                <Ghost0>
                <SkillIcon />
                  <p>SKILL-SETS</p>
                  <p className="visible" style={{ margin: "5px" }}>(Click me)</p>
                  <Ghost1>
                    Look more <ArrowRightAltOutlined />
                  </Ghost1>
                </Ghost0>
              </SkillBox>
            </Link>
            <Link to="/b">
              <SkillBox>
                <Ghost0>
                  <Certificateicon />
                  <p>PROJECTS</p>
                  <p className="visible" style={{ margin: "5px" }}>(Click me)</p>
                  <Ghost1>
                    Look more <ArrowRightAltOutlined />
                  </Ghost1>
                </Ghost0>
              </SkillBox>
            </Link>
            <Link to="/c">
              <SkillBox>
                <Ghost0>
                <Workicon />
                  <p>ONGOING</p>
                  <p className="visible" style={{ margin: "5px" }}>(Click me)</p>
                  <Ghost1>
                    Look more <ArrowRightAltOutlined />
                  </Ghost1>
                </Ghost0>
              </SkillBox>
            </Link>
          </SkillBoxContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default SkillSets;
