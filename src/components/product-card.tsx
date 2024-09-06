import { Products } from 'public/products'
import { Card, CardContent } from './ui/card'



export default function ProductCard ({product} : {product: Products}) {
  return (
      <Card className="w-72 hover:cursor-pointer group transition duration-200 relative">
        <CardContent className='h-[430px] p-6 group-hover:bg-foreground/10 transition-colors duration-200'>
          <div className='flex h-full flex-col justify-between'>
            <div className='space-y-2'>
              <div className='rounded-md h-52 overflow-hidden'>
                <img src={product.productImage} className='h-full w-full object-center object-cover' alt={`${product.name} image`} />
              </div>
              <div className=''>
                <p className="text-base font-semibold">{product.name}</p>
                <p className='text-muted-foreground transition-colors duration-200'>{product.category}</p>
              </div>
            </div>
            <div className='flex justify-between items-center'>
            <p className='text-base font-semibold'>{product.avgRating}</p>
            <p className='text-base font-semibold'>${product.price}</p>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}
