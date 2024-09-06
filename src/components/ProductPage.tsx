import { getProduct, Products } from '@/data/products';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { ProductImageCarousel } from './ProductImageCarousel';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import Rating from './Rating';
import { revalidateCartAtom } from '@/lib/atoms';
import { useAtom } from 'jotai';
import { useToast } from '@/hooks/use-toast';

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Products | undefined>()
  const [cartRevalidate, setCartRevalidate] = useAtom(revalidateCartAtom)

  useEffect(() => {
    if (!productId) return
    setProduct(
      getProduct(parseInt(productId))
    )
  }, [productId]);

  const {toast} = useToast()

  function handleAddToCart() {
    // add the id of the product to local storage
    // update the "revalidate cart" atom to true

    // check if cart exists
    try {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([productId]))
      } else {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        cart.push(productId)
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      toast({
        title: 'Added to cart',
        description: 'Product has been added to cart',
      })
      setCartRevalidate(true)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add product to cart',
        variant: 'destructive'
      })
    }
  }

  if (!product) return null

  return (
    <div className='p-4 max-w-screen-xl mx-auto space-y-8'>
      <div className='flex max-lg:flex-col gap-4 justify-center items-center'>
        <ProductImageCarousel images={["/yeezy.jpg", "/yeezy.jpg", "/yeezy.jpg"]} />
        <Separator className='my-2 lg:hidden' />
        <div className='flex flex-col self-start max-sm:gap-2 gap-4 w-full basis-1/2'>
          <div className='flex flex-col gap-4'>
            <h2 className="scroll-m-20 max-sm:text-2xl text-4xl font-black tracking-tight first:mt-0">
              {product.name}
            </h2>
            <Link to={`/category/${product.category}`}>
              <Badge variant="default">{product.category}</Badge>
            </Link>
          </div>
          <div className='flex gap-2 items-baseline'>
            <Rating rating={product.avgRating} />
            <p>({product.avgRating})</p>
          </div>
          <p>{product.description}</p>
          <Separator className='my-2' />
          <div className='flex flex-col gap-4'>
            <p className='text-primary font-bold text-xl'>${product.price}</p>
            <div className='flex gap-4'>
              <Button variant='default' size='lg' className='w-full' onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

