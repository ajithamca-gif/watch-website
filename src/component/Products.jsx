import { Container, Row, Col, Button } from "react-bootstrap";

import watchimg1 from "../assets/img-card1.jpg"
import watchimg2 from "../assets/img-card2.jpg"
import watchimg3 from "../assets/img-card3.jpg"
import watchimg4 from "../assets/img-card4.jpg"
import watchimg5 from "../assets/img-card5.jpg"
import watchimg6 from "../assets/img-card6.jpg"
import watchimg7 from "../assets/img-card7.jpg"
import watchimg8 from "../assets/img-card8.jpg"

const watches = [
  { id: 1, name: "Classic Black", price: "₹2,999", img: watchimg1 },
  { id: 2, name: "Brown Leather Strap", price: "₹4,499", img: watchimg2 },
  { id: 3, name: "Silver Pro", price: "₹5,999", img: watchimg3 },
  { id: 4, name: "Leather Strap", price: "₹3,499", img: watchimg4 },
  { id: 5, name: "Digital Sport", price: "₹2,199", img: watchimg5 },
  { id: 6, name: "Luxury Diamond", price: "₹9,999", img: watchimg6 },
  { id: 7, name: "Pink Leather Strap", price: "₹4,999", img: watchimg7 },
  { id: 8, name: "Gold Edition", price: "₹7,949", img: watchimg8 },
];

function Products() {
  return (
    <Container className="mt-4">
      <Row className="g-4 mb-3">
        <p> WATCHES</p>
        <p style={{fontWeight:"lighter", fontSize:"14px"}}>ITEMS 1-12 OF 5700</p>
        {watches.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <div className="productcard text-center p-3 shadow-sm">
              <img
                src={item.img}
                alt={item.name}
                className="img-fluid mb-3"
              />
              <h5>{item.name}</h5>
              <p>{item.price}</p>
              <Button className="product-btn buy-btn">Buy Now</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;