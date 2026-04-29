import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavigationBar from "./component/Navbar";
import Products from "./component/Products";
import Card from './component/Card';

import "./App.css";
import About from './component/About';

function App() {
  return (
    <div>
      <NavigationBar />
      <Card/>
      <Products/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;