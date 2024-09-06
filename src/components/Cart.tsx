import { getProducts, Products } from '@/data/products'
import React, { useEffect } from 'react'
import ProductCardWide from './ProductCardWide'
import { revalidateCartAtom } from '@/lib/atoms'
import { useAtom } from 'jotai'
import { Separator } from './ui/separator'

export default function Cart() {

  const [Ids, setIds] = React.useState([])
  const [cart, setCart] = React.useState<Products[] | undefined>()
  const [revalidateCart, setRevalidateCart] = useAtom(revalidateCartAtom)

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setIds(JSON.parse(cart))
    }
    if (revalidateCart) {
      setRevalidateCart(false)
    }
  }, [revalidateCart])

  useEffect(() => {
    Ids && setCart(getProducts(Ids.map((id: string) => parseInt(id))))
  }, [Ids])


  if (!cart) {
    return (
      <div className='flex justify-center items-center h-[80vh]'>
        <h1 className='text-2xl'>Loading...</h1>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className='flex justify-center items-center h-[80vh]'>
        <h1 className='text-2xl'>Cart is empty</h1>
      </div>
    )
  } else {
    return (
      <div className='max-w-screen-xl mx-auto flex my-8 flex-col gap-12'>
        <div className='flex gap-4 self-center'>
          <p className='font-semibold text-xl'>{cart && cart.length} <span className='font-normal'>Items in Cart</span></p>
        </div>
        <div className='grid grid-cols-1 gap-4 place-items-center'>
          {cart && cart.map((product, i) => (
            <ProductCardWide key={i} product={product} />
          ))}
        </div>
        <Separator />
        <div className="flex max-w-screen-lg mx-auto px-4 justify-between w-full">
          <h3 className='font-light'>Total</h3>
          <h3>${cart.reduce((acc, curr) => acc + curr.price, 0)}</h3>
        </div>
      </div>
    )
  }

}

