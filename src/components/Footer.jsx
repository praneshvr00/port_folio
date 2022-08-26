import styled from "styled-components";
import Phone from "@mui/icons-material/LocalPhone";
import Email from "@mui/icons-material/Email";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { GitHub } from "@material-ui/icons";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";


const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    height: 800px;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 200px;
  position: relative;
  @media (max-width: 900px) {
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    height: 90%;
  }
`;

const Left = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 2px solid black;
  z-index: 2;
  @media (max-width: 900px){
    justify-content: center;
    align-items: center;
    border-right: none;
    border-bottom: 2px solid black;
  }
`;
const LDiv = styled.div`
  /* width: 100%; */
  height: 40%;
  display: flex;
  gap: 10px;
  @media (max-width: 900px){
    margin: 10px;
  }
`;
const Desc = styled.p`
  padding: 1vw;
`;

const Center = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  
`;
const Div = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
`;

const Right = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-left: 2px solid black;
  @media (max-width: 900px){
    border-left: none;
    border-top: 2px solid black;
  }
`;


const FormBox = styled.form`
  width: 100%;
  @media (max-width: 900px) {
    height: 200px;
    display: flex;
    margin-top: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
const Input = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 700;
  &:focus {
    outline: none;
  }
  @media (max-width: 900px){
    width: 200px !important;
  }
`;

const ISubmit = styled.button`
  /* border-radius: 10px; */
  border-style: none;
  height: 35px;
  background-color: #4752e9;
  color: white;
  @media (max-width: 900px){
    margin-top: 18px;
  }
`;

const Istyle = {
  marginRight: "10px",
  height: "30px",
  width: "30px",
  backgroundColor: "white",
  color: "#4752e9",
  borderRadius: "20px",
};




// emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34xvkpe",
        "template_a3lcdya",
        form.current,
        "ik5stxGeFdLlJOJmj"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sended")
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <LDiv>
            <Phone style={Istyle} />
            +91 9944088876
          </LDiv>
          <LDiv>
            <Email style={Istyle} />
            vrpranesh50@gmail.com
          </LDiv>
        </Left>
        <Center>
          <Desc><b>Social Media</b></Desc>
          <Div>
          <GitHub onClick={ ()=> window.location.href="https://github.com/praneshvr00" } />
          <Instagram onClick={ ()=> window.location.href="https://www.instagram.com/pranesh_vrp/" }/>
          <LinkedIn onClick={ ()=> window.location.href="https://www.linkedin.com/in/pranesh-v-r-58a4741a0" }/>
          </Div>
          <Desc style={{fontSize: '12px'}}>Copyrightc2022-All rights reserved</Desc>
        </Center>
        <Right>
          <Desc><b>Stay in Touch</b></Desc>
          <FormBox ref={form} onSubmit={sendEmail}>
            <Input type="text" name="name" placeholder="name" required/>
            <Input type="enail" name="email" placeholder="email" required/>
            <Input type="text" name="message" placeholder="message" required style={{ width: "100px" }}/>
            <ISubmit style={{ width: "60px" }} >Submit</ISubmit>
          </FormBox>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
