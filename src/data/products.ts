
export interface Products {
  id: number
  productImage: string
  name: string
  price: number
  category: string
  description: string
  numberOfReviews: number
  avgRating: number
}

export const getProduct = (id: number): Products | undefined => {
  return products.find((product) => product.id === id)
}

export const getProducts = (ids: number[]): Products[] => {
  return products.filter((product) => ids.includes(product.id))
}

export const searchProducts = (query: string): Products[] => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  )
}

export const getProductsFiltered = ({
  category,
  minPrice,
  maxPrice,
  ascending,
  query
}: {
  category?: string
  minPrice?: number
  maxPrice?: number
  ascending?: boolean
  query?: string
}): Products[] => {
  if (!category && !minPrice && !maxPrice && !query && !ascending) {
    return products
    .sort((a, b) => {
      if (ascending) {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
  }
  return products
    .filter((product) => {
      if (category && product.category !== category) {
        return false
      }
      if (minPrice && product.price < minPrice) {
        return false
      }
      if (maxPrice && product.price > maxPrice) {
        return false
      }
      if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      if (ascending) {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
}

export const getAllCategories = (): string[] => {
  return Array.from(new Set(products.map((product) => product.category))
  )
}

export const products = [
  {
    "id": 1,
    "productImage": "https://example.com/images/laptop.jpg",
    "name": "Laptop Pro X",
    "price": 1200.99,
    "category": "Electronics",
    "description": "A high-performance laptop for professionals with a sleek design and powerful features.",
    "numberOfReviews": 532,
    "avgRating": 4.5
  },
  {
    "id": 2,
    "productImage": "https://example.com/images/smartphone.jpg",
    "name": "Smartphone Z",
    "price": 999.99,
    "category": "Electronics",
    "description": "A feature-packed smartphone with an amazing camera and long battery life.",
    "numberOfReviews": 876,
    "avgRating": 4.7
  },
  {
    "id": 3,
    "productImage": "https://example.com/images/sneakers.jpg",
    "name": "AirRun Sneakers",
    "price": 129.99,
    "category": "Footwear",
    "description": "Comfortable and stylish sneakers perfect for running and everyday wear.",
    "numberOfReviews": 324,
    "avgRating": 4.2
  },
  {
    "id": 4,
    "productImage": "https://example.com/images/coffee-maker.jpg",
    "name": "Coffee Maker 5000",
    "price": 89.99,
    "category": "Home Appliances",
    "description": "Brew the perfect cup of coffee with this easy-to-use coffee maker.",
    "numberOfReviews": 209,
    "avgRating": 4.0
  },
  {
    "id": 5,
    "productImage": "https://example.com/images/guitar.jpg",
    "name": "Acoustic Guitar",
    "price": 299.99,
    "category": "Musical Instruments",
    "description": "A beautifully crafted acoustic guitar with rich sound quality.",
    "numberOfReviews": 190,
    "avgRating": 4.6
  },
  {
    "id": 6,
    "productImage": "https://example.com/images/headphones.jpg",
    "name": "Noise Cancelling Headphones",
    "price": 199.99,
    "category": "Electronics",
    "description": "Block out the world and enjoy your music with these premium noise-cancelling headphones.",
    "numberOfReviews": 672,
    "avgRating": 4.8
  },
  {
    "id": 7,
    "productImage": "https://example.com/images/tablet.jpg",
    "name": "Tablet Ultra",
    "price": 499.99,
    "category": "Electronics",
    "description": "A powerful tablet with a large display, perfect for entertainment and productivity.",
    "numberOfReviews": 324,
    "avgRating": 4.4
  },
  {
    "id": 8,
    "productImage": "https://example.com/images/washing-machine.jpg",
    "name": "Washing Machine X",
    "price": 599.99,
    "category": "Home Appliances",
    "description": "Efficient and quiet washing machine with multiple wash settings.",
    "numberOfReviews": 135,
    "avgRating": 4.3
  },
  {
    "id": 9,
    "productImage": "https://example.com/images/monitor.jpg",
    "name": "Curved Monitor 32\"",
    "price": 349.99,
    "category": "Electronics",
    "description": "Immersive 32-inch curved monitor for the ultimate viewing experience.",
    "numberOfReviews": 478,
    "avgRating": 4.6
  },
  {
    "id": 10,
    "productImage": "https://example.com/images/blender.jpg",
    "name": "Blender Max",
    "price": 79.99,
    "category": "Home Appliances",
    "description": "Blend smoothies, soups, and more with this high-speed blender.",
    "numberOfReviews": 112,
    "avgRating": 4.2
  },
  {
    "id": 11,
    "productImage": "https://example.com/images/smartwatch.jpg",
    "name": "Smartwatch Pro",
    "price": 199.99,
    "category": "Wearables",
    "description": "Track your fitness, receive notifications, and more with this versatile smartwatch.",
    "numberOfReviews": 654,
    "avgRating": 4.5
  },
  {
    "id": 12,
    "productImage": "https://example.com/images/tv.jpg",
    "name": "Smart TV 55\"",
    "price": 799.99,
    "category": "Electronics",
    "description": "Enjoy your favorite shows and movies on this stunning 55-inch smart TV.",
    "numberOfReviews": 843,
    "avgRating": 4.7
  },
  {
    "id": 13,
    "productImage": "https://example.com/images/soundbar.jpg",
    "name": "Soundbar X",
    "price": 149.99,
    "category": "Electronics",
    "description": "Enhance your home theater experience with this powerful soundbar.",
    "numberOfReviews": 389,
    "avgRating": 4.3
  },
  {
    "id": 14,
    "productImage": "https://example.com/images/fridge.jpg",
    "name": "Refrigerator 300L",
    "price": 899.99,
    "category": "Home Appliances",
    "description": "Spacious refrigerator with energy-efficient cooling technology.",
    "numberOfReviews": 204,
    "avgRating": 4.5
  },
  {
    "id": 15,
    "productImage": "https://example.com/images/oven.jpg",
    "name": "Electric Oven Pro",
    "price": 299.99,
    "category": "Home Appliances",
    "description": "Bake, broil, and roast with precision using this modern electric oven.",
    "numberOfReviews": 146,
    "avgRating": 4.1
  },
  {
    "id": 16,
    "productImage": "https://example.com/images/microwave.jpg",
    "name": "Microwave Oven",
    "price": 149.99,
    "category": "Home Appliances",
    "description": "Quickly heat your meals with this convenient microwave oven.",
    "numberOfReviews": 167,
    "avgRating": 4.2
  },
  {
    "id": 17,
    "productImage": "https://example.com/images/drone.jpg",
    "name": "Drone X Pro",
    "price": 999.99,
    "category": "Electronics",
    "description": "Capture stunning aerial footage with this advanced drone.",
    "numberOfReviews": 512,
    "avgRating": 4.6
  },
  {
    "id": 18,
    "productImage": "https://example.com/images/kettle.jpg",
    "name": "Electric Kettle",
    "price": 49.99,
    "category": "Home Appliances",
    "description": "Boil water in seconds with this fast and efficient electric kettle.",
    "numberOfReviews": 302,
    "avgRating": 4.3
  },
  {
    "id": 19,
    "productImage": "https://example.com/images/iron.jpg",
    "name": "Steam Iron",
    "price": 59.99,
    "category": "Home Appliances",
    "description": "Smooth out wrinkles and creases with this powerful steam iron.",
    "numberOfReviews": 198,
    "avgRating": 4.4
  },
  {
    "id": 20,
    "productImage": "https://example.com/images/vacuum.jpg",
    "name": "Vacuum Cleaner Pro",
    "price": 199.99,
    "category": "Home Appliances",
    "description": "Keep your floors spotless with this high-suction vacuum cleaner.",
    "numberOfReviews": 156,
    "avgRating": 4.3
  },
  {
    "id": 21,
    "productImage": "https://example.com/images/shoes.jpg",
    "name": "Running Shoes",
    "price": 89.99,
    "category": "Footwear",
    "description": "Lightweight and durable running shoes for daily workouts.",
    "numberOfReviews": 277,
    "avgRating": 4.2
  },
  {
    "id": 22,
    "productImage": "https://example.com/images/jacket.jpg",
    "name": "Winter Jacket",
    "price": 129.99,
    "category": "Clothing",
    "description": "Stay warm and stylish with this insulated winter jacket.",
    "numberOfReviews": 189,
    "avgRating": 4.3
  },
  {
    "id": 23,
    "productImage": "https://example.com/images/tshirt.jpg",
    "name": "Graphic T-Shirt",
    "price": 29.99,
    "category": "Clothing",
    "description": "Express your style with this trendy graphic t-shirt.",
    "numberOfReviews": 98,
    "avgRating": 4.1
  },
  {
    "id": 24,
    "productImage": "https://example.com/images/pants.jpg",
    "name": "Casual Pants",
    "price": 49.99,
    "category": "Clothing",
    "description": "Comfortable and versatile casual pants for everyday wear.",
    "numberOfReviews": 156,
    "avgRating": 4.2
  },
  {
    "id": 25,
    "productImage": "https://example.com/images/watch.jpg",
    "name": "Analog Watch",
    "price": 149.99,
    "category": "Accessories",
    "description": "A stylish analog watch with a classic design.",
    "numberOfReviews": 233,
    "avgRating": 4.4
  }
]

