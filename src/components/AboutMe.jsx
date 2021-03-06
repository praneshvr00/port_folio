import styled from "styled-components";
import Me from "../Images/AboutMe2.jpg"
const Container = styled.div`
  width: 100%;
  height: 540px;
  margin-top: 1vw;
  display: flex;
  justify-content: center;
  background-color: #191919;
  @media (max-width: 900px) {
    width: 370px;
    height: 900px;
    margin-top: 2vw;
  }
`;
const Wrapper = styled.div`
  display: flex;
  margin-top: 3vw;
  flex-direction: row;
  width: 70%;
  height: 134%;
  @media (max-width: 900px) {
    width: 100%;
    height: 700px;
    display: block;
    margin-top: 30px;
    margin: 40px;
  }
`;

const Left = styled.div`
  width: 70%;
  height: 70%;
  flex: 1;
  /* background-color: red; */
  @media (max-width: 900px) {
    width: 80%;
    height: 380px;
  }
`;
const ImageContainer = styled.div`
  width: 80%;
  height: 78%;
  position: relative;
  @media (max-width: 900px) {
    width: 80%;
    height: 280px;
  }
`;
const Rectangle = styled.div`
  content: " ";
  margin-top: 2vw;
  width: 100%;
  height: 100%;
  border: 10px solid #4752e9;
  /* background: linear-gradient(to right, red, purple); */
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 900px) {
    margin-left: 50px;
    margin-top: 30px;
  }
`;
const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  position: relative;
  z-index: 2;
  margin-left: 40px;
  @media (max-width: 900px) {
    width: 200px;
    height: 300px;
    margin-left: 74px;
  }
`;

const Right = styled.div`
  flex: 2;
  /* background-color: purple; */
  width: 70%;
  height: 70%;
  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* text-align: center; */
  }
`;
const Title = styled.h1`
  margin-top: 4vh;
  margin-left: 2vw;
  color: #4752e9;
  @media (max-width: 900px) {
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const Desc = styled.p`
  margin-top: 3vh;
  margin-left: 2vw;
  word-spacing: 0.6rem;
  width: 500px;
  color: white;
  @media (max-width: 900px) {
    margin-top: 10px;
    width: 100%;
  }
`;
const DResume = styled.button`
  background-color: #4752e9;
  width: 150px;
  height: 50px;
  color: white;
  margin-top: 3vh;
  margin-left: 2vw;
  border-radius: 50px;
  cursor: pointer;
  /* background-image: linear-gradient(
    to right,
    #667eea,
    #764ba2,
    #6b8dd6,
    #8e37d7
  ); */
  /* box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75); */
  /* background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75); */
  /* 
  background-image: linear-gradient(to right, #E040FB, #00BCD4);
  box-shadow: 0 4px 12px 0 rgba(152, 160, 180,10); */
`;

const AboutMe = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ImageContainer>
            <Image src={Me} />
            <Rectangle />
          </ImageContainer>
        </Left>
        <Right>
          <Title>ABOUT ME</Title>
          <Desc>
            I am a self motivated student, eager in learning technologies,
            problem solving, and designing webapps. Currently I am pursuing 3rd
            year of BE computer science in kongu engineering college. I have a
            good experience in both programming languages and scripting
            languages. I had done few projects in the webapps and currently I
            am looking forwards to do projects thereby to enhance my skills and
            to satisfy customers expectation. My contact details and github
            details are linked in my profile section , Feel Free to contact me.
          </Desc>
          <DResume>contact</DResume>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default AboutMe;
