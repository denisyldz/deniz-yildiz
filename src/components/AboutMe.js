import { Container,Row, Col } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";



export const AboutMe = () => {
 
  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
            <p>My name is Deniz YILDIZ. I was born in Ankara on December 1st, 2000. I am currently living in Antalya since 2004. Besides coding, I really love playing video games,dancing and everything about music. Also, I am studying for Computer Engineering in Alanya Alaaddin Keykubat University. I am always trying to learn new things and improve myself about coding. Especially I am much more curious about game industry so of course my goal is to work in a game company when I graduated. </p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} ></img>
    </section>
  );
};
