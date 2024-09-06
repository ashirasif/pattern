
import { useEffect } from 'react';
import { getAllCategories, getProductsFiltered, Products } from '@/data/products';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { useAtom } from 'jotai';
import { ascendingAtom, categoryAtom, maxPriceAtom, minPriceAtom, queryAtom } from '@/lib/atoms';

const ProductFilter = ({ onFilter }: { onFilter: (products: Products[]) => void }) => {

  const [category, setCategory] = useAtom(categoryAtom)
  const [minPrice, setMinPrice] = useAtom(minPriceAtom)
  const [maxPrice, setMaxPrice] = useAtom(maxPriceAtom)
  const [ascending, setAscending] = useAtom(ascendingAtom);
  const [query, setQuery] = useAtom(queryAtom)


  const handleFilter = () => {
    const filteredProducts = getProductsFiltered({
      category,
      minPrice,
      maxPrice,
      ascending,
      query,
    });
    onFilter(filteredProducts); // Pass the filtered products back to the parent
  };

  useEffect(() => {
    handleFilter();
  }, [category, minPrice, maxPrice, ascending, query, handleFilter]);


  return (
    <div className="flex flex-col gap-4 items-center p-4 space-y-4">

      <div className="form-group w-full">
        <label htmlFor="query">Search Products</label>
        <Input
          type="text"
          id="query"
          placeholder="Search by name"
          value={query ?? ''}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className='grid max-md:grid-rows-4 lg:grid-cols-4 gap-4 w-full items-end'>
        <div className="form-group">
          <label>Category</label>
          <Select
            onValueChange={(value) => setCategory(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              {
                getAllCategories().map((category) => (
                  <SelectItem value={category} key={category}>
                    {category}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>

        <div className="form-group">
          <label htmlFor="minPrice">Minimum Price</label>
          <Input
            type="number"
            id="minPrice"
            placeholder="Min Price"
            value={minPrice ?? ''}
            onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxPrice">Maximum Price</label>
          <Input
            type="number"
            id="maxPrice"
            placeholder="Max Price"
            value={maxPrice ?? ''}
            onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
          />
        </div>

        <div className="form-group w-full grid grid-cols-2 gap-2">
          <Button variant={ascending ? "default" : "ghost"} onClick={() => {
            setAscending(true);
          }}>Asc</Button>
          <Button variant={!ascending ? "default" : "ghost"} onClick={() => {
            setAscending(false);
          }}>Desc</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
