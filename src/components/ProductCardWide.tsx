import { Products } from '@/data/products'
import { Button } from './ui/button'
import { TrashIcon } from '@radix-ui/react-icons'
import { revalidateCartAtom } from '@/lib/atoms'
import { useAtom } from 'jotai'
import { useToast } from '@/hooks/use-toast'

export default function ProductCardWide(props: {product: Products}) {
  const {product} = props
  const [, setRevalidateCart] = useAtom(revalidateCartAtom)
  const {toast} = useToast()

  const handleRemoveFromCart = () => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      const ids = JSON.parse(cart)
      const newIds = ids.filter((id: string) => id !== product.id.toString())
      localStorage.setItem('cart', JSON.stringify(newIds))
    }
    setRevalidateCart(true)
    toast({
      title: 'Removed from cart',
      description: 'Product has been removed from cart',
    })
  }
  return (
    <div className='flex w-full group max-w-screen-lg justify-between gap-4 hover:bg-accent px-4 py-2 rounded-md transition-colors duration-200'>
      <div className='flex gap-4'>
        <img src="/yeezy.jpg" className='w-16 h-16 object-scale-down object-center' alt={product.name} />
        <div className='flex flex-col justify-center'>
          <p className='text-base font-semibold'>{product.name}</p>
          <p className='text-muted-foreground text-sm'>{product.category}</p>
        </div>
      </div>
      <div className='self-center flex gap-4 items-center'>
        <p className='text-lg font-semibold text-primary transition-all duration-500'>${product.price}</p>
        <div className='lg:group-hover:block lg:hidden'>
          <Button onClick={handleRemoveFromCart} size="icon" variant="destructive">
            <TrashIcon className='w-6 h-6' />
          </Button>
        </div>
      </div>
    </div>
  )
}

