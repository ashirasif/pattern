import { Products } from '@/data/products';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import ProductCard from './components/product-card';
import Navbar from './components/NavBar';
import ProductPage from './components/ProductPage';
import { Toaster } from './components/ui/toaster';
import Cart from './components/Cart';
import ProductFilter from './components/ProductFilters';
import { useEffect, useState } from 'react';
import { Separator } from './components/ui/separator';
import Pagination from './components/Pagination';
import { useAtom } from 'jotai';
import { pageAtom, productsPerPageAtom, totalPagesAtom } from './lib/atoms';


function Home() {

  const [filteredProducts, setFilteredProducts] = useState<Products[] | undefined>();
  const [productsPerPage] = useAtom(productsPerPageAtom)
  const [, setTotalPages] = useAtom(totalPagesAtom)
  const [page] = useAtom(pageAtom)

  useEffect(() => {
    if (!filteredProducts) {
      return
    }
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
    setTotalPages(totalPages)
  }, [filteredProducts, productsPerPage])

  return (
    <div className='max-w-screen-xl mx-auto space-y-6'>
      <ProductFilter onFilter={setFilteredProducts} />
      <Separator />
      {
        filteredProducts && filteredProducts?.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(min-content,_300px))] lg:grid-cols-[repeat(3,_minmax(min-content,_300px))] xl:grid-cols-[repeat(4,_minmax(min-content,_300px))]  justify-center place-items-center gap-2 px-4'>
            {
              filteredProducts
                .slice((page - 1) * productsPerPage, page * productsPerPage)
                .map((product) => (
                <ProductCard key={product.name} product={product} />
              )) 
            }       
          </div>
        ) : (
            <div className='flex justify-center items-center h-[40vh] w-full'>
              <h3>No Products Found</h3>
            </div>
          )
      }
      <Separator />
      <Pagination />
    </div>
  );
}

const Layout = () => {
  return (
    <div className='py-4'>
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
