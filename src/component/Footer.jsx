import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{ background: "#080707", color: "white", padding: "20px 0" }}>
      <Container className="text-center">
        <p className="mb-1">© 2026 AJS Watches. All Rights Reserved.</p>
        <p className="mb-0">Designed with ❤️ using React & Bootstrap</p>
      </Container>
    </footer>
  );
}

export default Footer;