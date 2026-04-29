import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div style={{ background: "#080707",color: "white",padding: "60px 0" }} className="about-section">
      <Container>
        <Row className="align-items-center">
          
          

          <Col md={6}>
            <h2>About AJS Watches</h2>
            <p>
              AJS Watches offers premium quality timepieces designed for
              elegance and durability. Our collection blends modern design
              with timeless craftsmanship.
            </p>
            <p>
              We believe a watch is more than just time — it's style,
              personality, and confidence.
            </p>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default About;