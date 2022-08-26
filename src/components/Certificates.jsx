import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* background-color: yellow; */
  height: 700px;
  /* overflow: hidden; */
`;
const Wrapper = styled.div`
  width: 70%;
  height: 90%;
  margin: 0vh 0vh 5vh 30vh;
  background-color: #4752e9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Box = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  margin: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; /* border: 2px solid; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  /* background-color: blue; */
  transition: all 0.7s ease-in-out;
  &:hover{
    transform:Scale(1.08)
  }
`;
const ImageContainer = styled.div`
  width: 570px;
  height: 250px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 600px;
  align-items: center;
  text-align: center;
  justify-content: center;
  /* margin: 5px; */
  background-color: #4752e9;
`;
const Title = styled.h1`
  margin-top: 10px;
  color: white;
  font-weight: 900;
`;
const Desc = styled.div`
  margin-top: 20px;
  font-weight: 500;
  color: white;
`;

const Certificates = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </ImageContainer>
          <TextContainer>
            <Title>Title 1</Title>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap .
            </Desc>
            {/* <Button> </Button> */}
          </TextContainer>
        </Box>
        <Box>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </ImageContainer>
          <TextContainer>
            <Title>Title 2</Title>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap..
            </Desc>
          </TextContainer>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
