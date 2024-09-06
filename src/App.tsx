import { products } from '@/data/products';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import ProductCard from './components/product-card';
import Navbar from './components/NavBar';
import ProductPage from './components/ProductPage';
import { Toaster } from './components/ui/toaster';
import Cart from './components/Cart';


function Home() {

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(min-content,_300px))] lg:grid-cols-[repeat(3,_minmax(min-content,_300px))] xl:grid-cols-[repeat(4,_minmax(min-content,_300px))]  justify-center place-items-center gap-2 px-4'>
        {
          products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))
        }       
      </div>
    </div>
  );
}

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />}/>
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App
