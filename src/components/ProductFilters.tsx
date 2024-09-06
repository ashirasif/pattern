
import { useEffect, useState } from 'react';
import { getAllCategories, getProductsFiltered, Products } from '@/data/products';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const ProductFilter = ({ onFilter }: { onFilter: (products: Products[]) => void }) => {

  const [category, setCategory] = useState<string | undefined>(undefined);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [ascending, setAscending] = useState<boolean>(true);
  const [query, setQuery] = useState<string | undefined>(undefined);

  const handleFilter = () => {
    const filteredProducts = getProductsFiltered({
      category,
      minPrice,
      maxPrice,
      Ascending: ascending,
      query,
    });
    onFilter(filteredProducts); // Pass the filtered products back to the parent
  };

  useEffect(() => {
    handleFilter();
  }, [category, minPrice, maxPrice, ascending, query, handleFilter]);


  return (
    <div className="filter-form p-4 border rounded-lg space-y-4">
      <h2 className="text-lg font-semibold">Filter Products</h2>

      <div className="form-group">
        <label>Category</label>
        <Select
          onValueChange={(value) => setCategory(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
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

      <div className="form-group flex items-center gap-2">
        <Checkbox
          checked={ascending}
          // @ts-expect-error
          onCheckedChange={setAscending}
          id="ascending"
        />
        <label htmlFor="ascending">Sort by price (Ascending)</label>
      </div>

      <div className="form-group">
        <label htmlFor="query">Search Products</label>
        <Input
          type="text"
          id="query"
          placeholder="Search by name"
          value={query ?? ''}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

    </div>
  );
};

export default ProductFilter;
