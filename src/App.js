import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Product } from './components/Product';
import { ProductDetails } from './components/ProductDetails';
import { ProductIndex } from './components/ProductIndex';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { PageNotFound } from './components/PageNotFound';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="products" element={<Product />}>
          <Route path="/" element={<ProductIndex />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
