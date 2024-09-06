import {products} from '../public/products'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import ProductCard from './components/product-card';


function Home() {
  return (
    <div>
      <h1 className=''>Home</h1>
      <div className='grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(min-content,_300px))] lg:grid-cols-[repeat(3,_minmax(min-content,_300px))] xl:grid-cols-[repeat(4,_minmax(min-content,_300px))]  justify-center place-items-center gap-2 px-4'>
        {products.map((product, index) => (
          <ProductCard key={index} product={{id: index, ...product}} />
        ))}
      </div>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
