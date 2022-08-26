import styled from "styled-components";
import Icon1 from "@mui/icons-material/DiamondSharp";

const Container = styled.div`
  width: 100%;
  height: 900px;
  @media (max-width: 900px) {
    /* background-color: yellow; */
    height: 750px;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  height: 650px;
  margin: 5vh 0vh 5vh 30vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-top: 4%;
  max-width: 70%;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  @media (max-width: 900px) {
    height: 1100px;
    margin-left: 0px;
    max-width: none;
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
`;
const ProjectBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  margin: 10px;
  width: 380px;
  height: 130px;
  position: relative;
  border-radius: 15px;
  background-color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
  @media (max-width: 900px){
    width: 140px;
    height: 130px;
    margin: 15px 0px 0px 5px;
  }
  
`;
// const IconCotainer = styled.div``;
const Role = styled.h1`
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    font-size: 18px;
  }

`;
const Date = styled.p`
  padding-top: 20px;
  padding-left: 13px;
`;
const ViewContianer = styled.div``;
const View = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  border: none;
  color: #191919;
  border-top: 1px solid gray;
  text-align: right;
  padding-right: 30px;
  border-radius: 0px 0px 15px 15px;
  /* background-color: #191919; */
`;

const Projects = () => {
  return (
    <Container>
      <Head>
        S<Line style={{color:"#191919"}}>KILLS</Line>
      </Head>
      <Wrapper>
        <ProjectBox>
          <Role style={{ display: "flex" }}>
            <Icon1 style={{ color: "red", margin: "10px" }} />
            C
          </Role>
          <Date></Date>
          <View></View>
        </ProjectBox>
        <ProjectBox>
          <Role style={{ display: "flex" }}>
            <Icon1 style={{ color: "blue", margin: "10px" }} />
           JAVA
          </Role>
          <Date></Date>
          <View></View>
        </ProjectBox>
        <ProjectBox>
          <Role style={{ display: "flex" }}>
            <Icon1 style={{ color: "green", margin: "10px" }} />
            PYTHON
          </Role>
          <Date></Date>
          <View></View>
        </ProjectBox>
        <ProjectBox>
          <Role style={{ display: "flex" }}>
            <Icon1 style={{ color: "orange", margin: "10px" }} />
            HTML
          </Role>
          <Date></Date>
          <View></View>
        </ProjectBox>
        <ProjectBox>
          <Role style={{ display: "flex" }}>
            <Icon1 style={{ color: "aqua", margin: "10px" }} />
            CSS
          </Role>
          <Date></Date>
          <View></View>
        </ProjectBox>
        <ProjectBox>
          <Role style={{ display: "flex" }}>
            <Icon1 style={{ color: "violet", margin: "10px" }} />
           JS
          </Role>
          <Date></Date>
          <View></View>
        </ProjectBox>
        <ProjectBox>
          <Role style={{ display: "flex" }}>
            <Icon1 style={{ color: "brown", margin: "10px" }} />
            REACT
          </Role>
          <Date></Date>
          <View></View>
        </ProjectBox>
        <ProjectBox>
          <Role style={{ display: "flex" }}>
            <Icon1 style={{ color: "#191919", margin: "10px" }} />
            SQL
          </Role>
          <Date></Date>
          <View></View>
        </ProjectBox>
        
      </Wrapper>
    </Container>
  );
};

export default Projects;
