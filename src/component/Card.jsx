import Container from 'react-bootstrap/Container';
import bannerImg from "../assets/banner-img.jpg";
import "./Card.css";

function Card() {
  return (
    <Container className="p-0">
      <div 
        className="banner-section"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-overlay">
          <p className="breadcrumb-text">Home &gt; Watches</p>
          <h1 className="banner-title">Watches</h1>
        </div>
      </div>
    </Container>
  );
}

export default Card;