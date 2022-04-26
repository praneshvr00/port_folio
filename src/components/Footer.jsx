import styled from "styled-components";
import Phone from "@mui/icons-material/LocalPhone";
import Email from "@mui/icons-material/Email";
import Location from "@mui/icons-material/LocationOn";
import { borderRadius, display } from "@mui/system";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #191919;
  border-radius: 10vw 10vw 0px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    height: 500px;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 300px;
  margin-top: 7vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  height: 250px;
  background-color: #ffffff;

  border: 5px solid #4752e9;

  border-radius: 30px;
  position: sticky;
`;
const Desc = styled.p`
  padding: 1vw;
  @media (max-width: 900px) {
    display: flex;
    height: 50px;
  }
`;

const Right = styled.div`
  background-color: white;
  display: flex;
  width: 600px;
  height: 250px;
  border-radius: 30px;
  border: 5px solid #4752e9;
  @media (max-width: 900px) {
    margin-top: 20px;
    width: 300px;
  }
`;
const FormBox = styled.form`
  width: 100%;
  @media (max-width: 900px) {
    height: 300px;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 600px;
  height: 60px;
`;
const Label = styled.label`
  padding: 10px;
  color: #4752e9;
  font-weight: 600;
`;
const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 700;
  &:focus {
    outline: none;
  }
`;
const IMessage = styled.textarea.attrs({})`
  width: 300px;
  height: 70px;
  border: 2px solid black;
  border-radius: 4px;
  font-size: 1rem;
  letter-spacing: 3px;
  &:focus{
    outline: none;
  }
`;
const ISubmit = styled.button`
  margin-top: 18px;
  border-radius: 10px;
  border-style: none;
  width: 100px;
  height: 50px;
  background-color: #4752e9;
  color: white;
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
          <Desc>
            <Phone style={Istyle} />
            +91 9944088876
          </Desc>
          <Desc>
            <Email style={Istyle} />
            vrpranesh50@gmail.com
          </Desc>
          <Desc>
            <Location style={Istyle} />
            1-C/2Naganampatti<br/>Oddanchatram,TamilNadu.
          </Desc>
        </Left>
        <Right>
          <FormBox ref={form} onSubmit={sendEmail}>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" name="name" required/>
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" required />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <IMessage name="message" required></IMessage>
            </FormGroup>
            <FormGroup>
              <ISubmit style={{ width: "100px" }} >Submit</ISubmit>
            </FormGroup>
          </FormBox>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
