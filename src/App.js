
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProductList from './components/productList/ProductList';
import Contact from './contact/Contact';
import Pictures from './components/Pictures';
import Navheader from './components/Navheader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header />
      <About />
      <ProductList />
      <Contact />
      <Navheader />
      <Pictures />
      <Navbar />
      <Footer />

      
    </div>
  );
}

export default App;
