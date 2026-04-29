import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div style={{ padding: "60px 0",color:"#080707" }} className="contact-section">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>

        <Row className="justify-content-center">
          <Col md={6}>
            <Form>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message" />
              </Form.Group>

              <div className="text-center">
                <Button className="contact-btn" variant="dark">Send Message</Button>
              </div>

            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;