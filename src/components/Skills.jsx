import styled from "styled-components";
import Storage from "@mui/icons-material/Storage";

const Container = styled.div`
  /* background-color: gray; */
  width: 100%;
  height: 1200px;
`;
const Wrapper = styled.div`
  height: 70%;
  /* min-width: 50%; */
  margin: 5vh 0vh 5vh 15vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  max-width: 70%;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    max-width: none;
    margin: 0;
    height: 1100px;
  }
`;
const Head = styled.h1`
  font-size: 4rem;
  padding-left: 14.4vw;
  border-width: 10px;
  border-right: -10px;
  color: #ffffff;
  position: relative;
  content: "";
`;
const Line = styled.span`
  border-bottom: 4px solid #191919;
  position: absolute;
  top: 0;
  bottom: 0;
  color: #191919;
`;
const SkillBox = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  margin: 25px 20px 10px 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
  @media (max-width: 900px) {
    margin: 4px;
    width: 170px;
    height: 300px;
    margin-top: 40px;
  }
`;
const Title = styled.h3`
  margin-top: 2vw;
  margin: 13px;
`;
const Desc = styled.p`
  margin-top: 1vw;
  margin: 13px;
`;

const Skills = () => {
  return (
    <Container>
      <Head>
        P<Line>ROJECTS</Line>
      </Head>
      <Wrapper>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px" }} />
          <Title>HOSPITAL REGISTRAION</Title>
          <Desc>
            I developed this project while learning Web development, language
            used are html,css,bootstrap and JS.
          </Desc>
        </SkillBox>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px" }} />
          <Title>FOOD ORDERING</Title>
          <Desc>
            I developed this project while learning Advanced java topics like
            swings, servlet etc.. language used is java.
          </Desc>
        </SkillBox>

        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px" }} />
          <Title>JEWELLERY SALE</Title>
          <Desc>
          I am currently developing this website with our teammates for client , language used are React.
          </Desc>
        </SkillBox>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px" }} />
          <Title>PORTFOLIO</Title>
          <Desc>
           I had developed this portfolio while learning React , language used are React.
          </Desc>
        </SkillBox>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px" }} />
          <Title>FOOD ORDERING</Title>
          <Desc>
          I developed this project for a event conducted by outer college, language used is html, css, bootstrap, JS.
          </Desc>
        </SkillBox>
        
      </Wrapper>
    </Container>
  );
};

export default Skills;
