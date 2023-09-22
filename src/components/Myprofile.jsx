import styled, { keyframes } from "styled-components";
import { Download } from "@mui/icons-material";
import ME from "../Images/Pranesh.png";
import { GitHub } from "@material-ui/icons";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import jsPDF from './../../node_modules/jspdf/dist/jspdf.es';
import Resume  from "../Images/Resume.png";

const Container = styled.div`
  width: 100%;
  height: 580px;
  position: relative;
  overflow: hidden;
  background-color: #191919;
  @media (max-width: 900px) {
    display: block;
    margin-top: 6px;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    display: block;
    margin-top: 25px;
  }
`;

const Left = styled.div`
  flex: 1;
  width: 100%;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: #b74040; */
  @media (max-width: 900px) {
    height: 250px;
  }
`;
// const TextContainer = styled.div``;
const typing = keyframes` 
  from { width: 0 }
  to { width: 100% }
`;
const Title = styled.h1`
  font-weight: 900;
  font-size: 4vw;
  color: #4752e9;
  @media (max-width: 900px) {
    font-size: 4rem;
  }
`;
const Writer = styled.h1`
  overflow: hidden;
  font-weight: 900;
  font-size: 4vw;
  /* color: #f9004d; */
  color: #4752e9;
  animation: ${typing} 2.5s steps(30, end);
  animation-delay: 1s;
  @media (max-width: 900px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  padding: 3vw 4vw 1vw 4vw;
  font-size: 1vw;
  font-weight: 500;
  width: 30vw;
  line-height: 25px;
  color: white;
  @media (max-width: 900px) {
    font-size: 0.7rem;
    width: 200px;
    line-height: 17px;
  }
  /* background-color: green; */
`;
// const Resume = () => {
//   fileSaver.saveAs(process.env.REACT_APP_CLIENT_URL + {MyFile},"PraneshVR.pdf");
// }

// const DownloadResume = () => {
//   return(window.location.href = "../files/MyResume.pdf");
// };

const DownloadR = styled.button`
  background-color: #4752e9;
  margin-top: 2vw;
  width: 9vw;
  height: 4vw;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  font-weight: 600;
  border-style: none;
  border: 1px solid blue;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 0.7rem;
    margin-top: 20px;
    width: 150px;
    height: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 680px;
  display: flex;
  position: relative;
`;
const ImageContainer = styled.div`

  /* width: 80vw; */
  /* height: 50vw; */
  height: 580px;
  width: 700px;
  display: flex;
  justify-content: center;
  /* background-color: greenyellow; */
  @media (max-width: 900px) {
    height: 400px;
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Image = styled.img`
  width: 60%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  /* background-color: red; */
  @media (max-width: 900px) {
    width: 50%;
    padding-top: 0px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const SocialMedias = styled.div`
  /* background-color: green; */
  flex: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 4vw;
  bottom: 10vw;
  margin: 5vh;
`;
const SocialItem = styled.div`
  align-items: center;
  text-align: center;
  padding: 1vh;
  border: 2px solid black;
  margin: 2px;
`;

const Circle = styled.div`
  /* background-color: white; */
  /* background-color: #4752e9; */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%234752E9' cx='50' cy='0' r='50'/%3E%3Cg fill='%234550e3' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23444edd' cx='50' cy='100' r='50'/%3E%3Cg fill='%23424cd7' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23404ad1' cx='50' cy='200' r='50'/%3E%3Cg fill='%233f48ca' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%233d46c3' cx='50' cy='300' r='50'/%3E%3Cg fill='%233b44bc' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%233941b5' cx='50' cy='400' r='50'/%3E%3Cg fill='%23373fae' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23353da6' cx='50' cy='500' r='50'/%3E%3Cg fill='%23333a9d' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23313795' cx='50' cy='600' r='50'/%3E%3Cg fill='%232f358b' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%232c3281' cx='50' cy='700' r='50'/%3E%3Cg fill='%232a2e76' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23272b6b' cx='50' cy='800' r='50'/%3E%3Cg fill='%2324275d' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%2321234d' cx='50' cy='900' r='50'/%3E%3Cg fill='%231d1e3a' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23191919' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  /* background-attachment: fixed; */
  background-size: contain;
  width: 55vw;
  height: 55vw;
  border-radius: 50%;
  position: absolute;
  top: 120px;
  right: -200px;
  border: 5px solid #191919;
  @media (max-width: 900px) {
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    transform: translate(-48%, -90%);
  }
`;

const Myprofile = () => {
 var pdfGen = () =>{
    var doc = new jsPDF('portrait','px','a4','false');
    doc.addImage(Resume,'PNG',0,30,0,0);
    doc.save('Resume.pdf');
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>
            V R<br />
            <Writer>
              <span style={{ color: "white" }}>P</span>RANESH
            </Writer>
          </Title>
          <Desc>
          Frontend Developer and my passion lies in crafting exceptional user experiences and innovative web solutions.
          </Desc>
          <DownloadR onClick={pdfGen}>
            Download Resume <Download />
          </DownloadR>
        </Left>
        <Right>
          <ImageContainer>
            <Image src={ME} />
          </ImageContainer>
          <Circle />
          <SocialMedias>
            <SocialItem>
            <GitHub onClick={ ()=> window.location.href="https://github.com/praneshvr00" } />
            </SocialItem>
            <SocialItem>
            <LinkedIn onClick={ ()=> window.location.href="https://www.linkedin.com/in/pranesh-v-r-58a4741a0" }/>
            </SocialItem>
            <SocialItem>
            <Instagram onClick={ ()=> window.location.href="https://www.instagram.com/pranesh_vrp/" }/>
            </SocialItem>
          </SocialMedias>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Myprofile;

