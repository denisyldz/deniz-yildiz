import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitHub from "../assets/img/icons8-github-60.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
        <footer className="footer">
          <Container>
            <Row className="align-item-center">
              <Col sm={6}>
                {" "}
                <br />
                <img src={logo} alt="Logo" />
              </Col>
              <Col sm={6} className="text-center text-sm-end">
                <br />
                <br />

                <div className="social-icon">
                  <a href="">
                    <img src={navIcon1} />
                  </a>
                  <a href="">
                    <img src={gitHub} />
                  </a>
                  <a href="">
                    <img src={navIcon3} />
                  </a>
                </div>
                <p>CopyRight 2022. All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
    
    
  );
};
