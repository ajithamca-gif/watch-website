import { Container, Row, Col, Form, FormControl, Navbar as BSNavbar, Nav, Offcanvas } from "react-bootstrap";
import { FaHeart, FaUser, FaShoppingBag, FaMapMarkerAlt, FaPhoneAlt, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="ajs-navbar">
      {/* TOP BAR */}
      <div className="top-bar">
        <Container fluid="xl">
          <Row className="align-items-center py-2">

            {/* LEFT */}
            <Col xs={4} className="d-flex gap-3 align-items-center">
              <span className="top-link"><FaMapMarkerAlt size={11} /> Stores</span>
              <span className="top-link d-none d-sm-flex"><FaPhoneAlt size={11} /> Contact Us</span>
            </Col>

            {/* CENTER — HELIOS logo */}
            <Col xs={4} className="text-center">
              <h2 className="brand-name">AJS Watches</h2>
            </Col>

            {/* RIGHT */}
            <Col xs={4} className="d-flex justify-content-end gap-3 align-items-center">
              <FaHeart className="top-icon" />
              <FaUser className="top-icon" />
              <FaShoppingBag className="top-icon" />
            </Col>

          </Row>
        </Container>
      </div>

      {/* BOTTOM NAV — uses BSNavbar with Offcanvas for mobile */}
      <BSNavbar expand="lg" className="bottom-nav py-0">
        <Container fluid="xl">
          {/* Hamburger — shows on mobile */}
          <BSNavbar.Toggle aria-controls="ajs-offcanvas" className="ms-auto border-0" />

          <BSNavbar.Offcanvas
            id="ajs-offcanvas"
            aria-labelledby="ajs-offcanvas-label"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="ajs-offcanvas-label">AJS Watche</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto gap-1">
                {["All Watches", "Men", "Women", "Smart", "Brands", "Stores", "Offers"].map((item) => (
                  <Nav.Link key={item} href="#" className="nav-item-link">{item}</Nav.Link>
                ))}
              </Nav>
              <Form className="d-flex mt-3 mt-lg-0 search-form">
                <FaSearch className="search-icon" />
                <FormControl
                  type="search"
                  placeholder="Search entire store here..."
                  className="search-input"
                />
              </Form>
            </Offcanvas.Body>
          </BSNavbar.Offcanvas>
        </Container>
      </BSNavbar>
    </div>
  );
}

export default Navbar;