import styled from "styled-components";
import Storage from "@mui/icons-material/Storage";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { ProjectsInfo } from "../data/ProjectData";

const Container = styled.div`
  width: 100%;
  height: auto;
`;
const Wrapper = styled.div`
  height: 70%;
  margin: 5vh 0vh 5vh 15vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  max-width: 70%;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 900px) {
    max-width: none;
    margin: 0;
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
  position: relative;
  @media (max-width: 900px) {
    margin: 4px;
    width: 150px;
    height: 350px;
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

const ViewMore = styled.div`
  width: 55%;
  height: auto;
  position: absolute; 
  z-index: 99;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  filter: opacity(0.96);
  background-color: #4752e9;
  @media (max-width: 900px) {
    width: 95%;
  }
`;

const ViewWrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ViewLeft = styled.div`
  width: 90%;
  height: 50%;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ViewLeftImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: contain;
`;

const LeftHover = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #121212; */
`;

const ClickSourceCode = styled.button`
  width: 45px;
  height: 30px;
  background-color: #121212;
  color: #fff;
  margin-left: 13px;
  cursor: pointer;
`;
const ClickLink = styled.button`
  width: 45px;
  height: 30px;
  background-color: #121212;
  color: #fff;
  margin-left: 13px;
  cursor: pointer;
`;

const ViewRight = styled.div`
  width: 90%;
  height: 50%;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ViewRightDesc = styled.div`
  width: 100%;
  height: 100%;
  color: #121212; 
  font-family: 'Raleway',sans-serif; 
  font-size: 18px; 
  font-weight: 500; 
  line-height: 32px; 
  margin-top: 5px;
`;

const ClickView = styled.button`
  width: 45px;
  height: 30px;
  border-color: #4752e9;
  background-color: white;
  margin-left: 13px;
  position: absolute;
  bottom: 5px;
`;

//Global Id for handling view button click function in project section.
var Id = "";

const Skills = () => {
  const [isView, setIsView] = useState(false);
  const setId = (id) => {
    Id = id;
  }
  return (
    <Container>
      <Head>
        P<Line>ROJECTS</Line>
      </Head>
      <Wrapper>
        {isView ? 
          <ViewMore className="viewMore"> 
              <CloseIcon style={{ position:"absolute", top:"10px", right:"10px",  color: "#121212", float: "right", fontSize: "2.5rem", zIndex: "101" }} onClick={(e) => {setIsView(!isView)} } />             
            {ProjectsInfo.map((data, i) => {
              if(data.id == Id){
               return(
                <ViewWrapper key={i}>
                  <ViewLeft>
                    <ViewLeftImage src={data.mainImg1} alt="loading !"/>
                    <LeftHover>
                      <ClickSourceCode type="button" style={{ width:"80px" }} onClick={ () => window.open(data.sourcecode) }>
                        Source Code
                      </ClickSourceCode>
                      <ClickLink type="button" onClick={ () => window.open(data.link) }>
                        Visit
                      </ClickLink>
                    </LeftHover>
                  </ViewLeft>
                  <ViewRight>
                    <ViewRightDesc>
                      <p style={{margin: "10px"}}>{data.description}</p>
                    </ViewRightDesc>
                  </ViewRight>
                </ViewWrapper>
                );
              }
          })}
          </ViewMore>
          : null 
        }
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px", position:"absolute", top: "10px"}} />
          <Title>HOSPITAL REGISTRAION</Title>
          <Desc>
            I developed this project while learning Web development, language
            used are <b>html,css,bootstrap and JS</b>.
          </Desc>
          {!isView && <ClickView type="button" value="1" onClick={(e) => {setIsView(!isView); setId(e.target.value) }} >View</ClickView> }
        </SkillBox>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px", position:"absolute", top: "10px" }} />
          <Title>FOOD ORDERING</Title>
          <Desc>
            I developed this project while learning Advanced java topics like
            <b> swings, servlet etc..</b> language used is java.
          </Desc>
          {!isView && <ClickView type="button" value="2" onClick={(e) => {setIsView(!isView); setId(e.target.value) }} >View</ClickView> }
        </SkillBox>

        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px", position:"absolute", top: "10px" }} />
          <Title>JEWELLERY SALE</Title>
          <Desc>
          I am currently developing this website with our teammates for a client (Ranga Jewellery), language used is <b> Django</b>.
          </Desc>
          {!isView && <ClickView type="button" value="3" onClick={(e) => {setIsView(!isView); setId(e.target.value) }} >View</ClickView> }
        </SkillBox>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px", position:"absolute", top: "10px" }} />
          <Title>PORTFOLIO</Title>
          <Desc>
           I had developed this portfolio while learning React , language used are <b>React</b>. Also integrated <b>EmailJS</b> service to receive Emails.
          </Desc>
          {!isView && <ClickView type="button" value="4" onClick={(e) => {setIsView(!isView); setId(e.target.value) }} >View</ClickView> }
        </SkillBox>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px", position:"absolute", top: "10px" }} />
          <Title>FOOD MANAGEMENT</Title>
          <Desc>
          I developed this project for a Event conducted by outer college, language used is <b> html, css, bootstrap, JS</b>.
          </Desc>
          {!isView && <ClickView type="button" value="5" onClick={(e) => {setIsView(!isView); setId(e.target.value) }} >View</ClickView> }
        </SkillBox>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px", position:"absolute", top: "10px" }} />
          <Title>GHEE SALES</Title>
          <Desc>
          I did this project for a Ghee traders named  Barani Ghee  using <b> Ejs, MongoDB, NodeJs, Bootstrap </b>.
          </Desc>
          {!isView && <ClickView type="button" value="6" onClick={(e) => {setIsView(!isView); setId(e.target.value) }} >View</ClickView> }
        </SkillBox>
        <SkillBox>
          <Storage style={{ color: "#4572e9", margin: "13px", position:"absolute", top: "10px" }} />
          <Title>Ecommerce</Title>
          <Desc>
          I did this project while learning flutter in my intership, <b> Flutter is used to develop frontend UI. </b>.
          </Desc>
          {!isView && <ClickView type="button" value="7" onClick={(e) => {setIsView(!isView); setId(e.target.value) }} >View</ClickView> }
        </SkillBox>
        
      </Wrapper>
    </Container>
  );
      
};

export default Skills;
