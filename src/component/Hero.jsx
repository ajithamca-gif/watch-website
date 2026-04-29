import { Container, Row, Col, Button } from "react-bootstrap";
import heroImg from "../assets/watch-img-one.jpg";

function Hero() {
  return (
    <div style={{ background: "#cacaca", padding: "80px 0" }} className="hero-section">
      <Container>
        <Row className="align-items-center">
          
          <Col md={6}>
            <h1>Premium Watches Collection</h1>
            <p>
              Discover stylish and modern watches crafted for elegance and performance.
            </p>
            <Button className="herobtn">Shop Now</Button>
          </Col>

          <Col md={6} className="hero-img">
            <img
              src={heroImg}
              alt="watch"
              className="img-fluid"
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Hero;