
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

export const products = [
  {
    "productImage": "https://example.com/images/laptop.jpg",
    "name": "Laptop Pro X",
    "price": 1200.99,
    "category": "Electronics",
    "description": "A high-performance laptop for professionals with a sleek design and powerful features.",
    "numberOfReviews": 532,
    "avgRating": 4.5
  },
  {
    "productImage": "https://example.com/images/smartphone.jpg",
    "name": "Smartphone Z",
    "price": 999.99,
    "category": "Electronics",
    "description": "A feature-packed smartphone with an amazing camera and long battery life.",
    "numberOfReviews": 876,
    "avgRating": 4.7
  },
  {
    "productImage": "https://example.com/images/sneakers.jpg",
    "name": "AirRun Sneakers",
    "price": 129.99,
    "category": "Footwear",
    "description": "Comfortable and stylish sneakers perfect for running and everyday wear.",
    "numberOfReviews": 324,
    "avgRating": 4.2
  },
  {
    "productImage": "https://example.com/images/coffee-maker.jpg",
    "name": "Coffee Maker 5000",
    "price": 89.99,
    "category": "Home Appliances",
    "description": "Brew the perfect cup of coffee with this easy-to-use coffee maker.",
    "numberOfReviews": 209,
    "avgRating": 4.0
  },
  {
    "productImage": "https://example.com/images/guitar.jpg",
    "name": "Acoustic Guitar",
    "price": 299.99,
    "category": "Musical Instruments",
    "description": "A beautifully crafted acoustic guitar with rich sound quality.",
    "numberOfReviews": 190,
    "avgRating": 4.6
  },
  {
    "productImage": "https://example.com/images/headphones.jpg",
    "name": "Noise Cancelling Headphones",
    "price": 199.99,
    "category": "Electronics",
    "description": "Block out the world and enjoy your music with these premium noise-cancelling headphones.",
    "numberOfReviews": 672,
    "avgRating": 4.8
  },
  {
    "productImage": "https://example.com/images/tablet.jpg",
    "name": "Tablet Ultra",
    "price": 499.99,
    "category": "Electronics",
    "description": "A powerful tablet with a large display, perfect for entertainment and productivity.",
    "numberOfReviews": 324,
    "avgRating": 4.4
  },
  {
    "productImage": "https://example.com/images/washing-machine.jpg",
    "name": "Washing Machine X",
    "price": 599.99,
    "category": "Home Appliances",
    "description": "Efficient and quiet washing machine with multiple wash settings.",
    "numberOfReviews": 135,
    "avgRating": 4.3
  },
  {
    "productImage": "https://example.com/images/monitor.jpg",
    "name": "Curved Monitor 32\"",
    "price": 349.99,
    "category": "Electronics",
    "description": "Immersive 32-inch curved monitor for the ultimate viewing experience.",
    "numberOfReviews": 478,
    "avgRating": 4.6
  },
  {
    "productImage": "https://example.com/images/blender.jpg",
    "name": "Blender Max",
    "price": 79.99,
    "category": "Home Appliances",
    "description": "Blend smoothies, soups, and more with this high-speed blender.",
    "numberOfReviews": 112,
    "avgRating": 4.2
  },
  {
    "productImage": "https://example.com/images/smartwatch.jpg",
    "name": "Smartwatch Pro",
    "price": 199.99,
    "category": "Wearables",
    "description": "Track your fitness, receive notifications, and more with this versatile smartwatch.",
    "numberOfReviews": 654,
    "avgRating": 4.5
  },
  {
    "productImage": "https://example.com/images/tv.jpg",
    "name": "Smart TV 55\"",
    "price": 799.99,
    "category": "Electronics",
    "description": "Enjoy your favorite shows and movies on this stunning 55-inch smart TV.",
    "numberOfReviews": 843,
    "avgRating": 4.7
  },
  {
    "productImage": "https://example.com/images/soundbar.jpg",
    "name": "Soundbar X",
    "price": 149.99,
    "category": "Electronics",
    "description": "Enhance your home theater experience with this powerful soundbar.",
    "numberOfReviews": 389,
    "avgRating": 4.3
  },
  {
    "productImage": "https://example.com/images/fridge.jpg",
    "name": "Refrigerator 300L",
    "price": 899.99,
    "category": "Home Appliances",
    "description": "Spacious refrigerator with energy-efficient cooling technology.",
    "numberOfReviews": 204,
    "avgRating": 4.5
  },
  {
    "productImage": "https://example.com/images/oven.jpg",
    "name": "Electric Oven Pro",
    "price": 299.99,
    "category": "Home Appliances",
    "description": "Bake, broil, and roast with precision using this modern electric oven.",
    "numberOfReviews": 146,
    "avgRating": 4.1
  },
  {
    "productImage": "https://example.com/images/microwave.jpg",
    "name": "Microwave Oven",
    "price": 149.99,
    "category": "Home Appliances",
    "description": "Quickly heat your meals with this convenient microwave oven.",
    "numberOfReviews": 167,
    "avgRating": 4.2
  },
  {
    "productImage": "https://example.com/images/drone.jpg",
    "name": "Drone X Pro",
    "price": 999.99,
    "category": "Electronics",
    "description": "Capture stunning aerial footage with this advanced drone.",
    "numberOfReviews": 512,
    "avgRating": 4.6
  },
  {
    "productImage": "https://example.com/images/kettle.jpg",
    "name": "Electric Kettle",
    "price": 49.99,
    "category": "Home Appliances",
    "description": "Boil water in seconds with this fast and efficient electric kettle.",
    "numberOfReviews": 302,
    "avgRating": 4.3
  },
  {
    "productImage": "https://example.com/images/iron.jpg",
    "name": "Steam Iron",
    "price": 59.99,
    "category": "Home Appliances",
    "description": "Smooth out wrinkles and creases with this powerful steam iron.",
    "numberOfReviews": 198,
    "avgRating": 4.4
  },
  {
    "productImage": "https://example.com/images/vacuum.jpg",
    "name": "Vacuum Cleaner Pro",
    "price": 199.99,
    "category": "Home Appliances",
    "description": "Keep your floors spotless with this high-suction vacuum cleaner.",
    "numberOfReviews": 156,
    "avgRating": 4.3
  },
  {
    "productImage": "https://example.com/images/shoes.jpg",
    "name": "Running Shoes",
    "price": 89.99,
    "category": "Footwear",
    "description": "Lightweight and durable running shoes for daily workouts.",
    "numberOfReviews": 277,
    "avgRating": 4.2
  },
  {
    "productImage": "https://example.com/images/jacket.jpg",
    "name": "Winter Jacket",
    "price": 129.99,
    "category": "Clothing",
    "description": "Stay warm and stylish with this insulated winter jacket.",
    "numberOfReviews": 189,
    "avgRating": 4.3
  },
  {
    "productImage": "https://example.com/images/tshirt.jpg",
    "name": "Graphic T-Shirt",
    "price": 29.99,
    "category": "Clothing",
    "description": "Express your style with this comfortable and trendy graphic tee.",
    "numberOfReviews": 212,
    "avgRating": 4.1
  },
  {
    "productImage": "https://example.com/images/trousers.jpg",
    "name": "Chino Trousers",
    "price": 49.99,
    "category": "Clothing",
    "description": "Casual and comfortable chinos, perfect for any occasion.",
    "numberOfReviews": 156,
    "avgRating": 4.0
  },
  {
    "productImage": "https://example.com/images/socks.jpg",
    "name": "Cotton Socks (5 Pack)",
    "price": 19.99,
    "category": "Clothing",
    "description": "Soft and breathable cotton socks for everyday use.",
    "numberOfReviews": 98,
    "avgRating": 4.5
  },
  {
    "productImage": "https://example.com/images/blender.jpg",
    "name": "Blender Max",
    "price": 79.99,
    "category": "Home Appliances",
    "description": "Blend smoothies, soups, and more with this high-speed blender.",
    "numberOfReviews": 112,
    "avgRating": 4.2
  },
  {
    "productImage": "https://example.com/images/backpack.jpg",
    "name": "Waterproof Backpack",
    "price": 79.99,
    "category": "Accessories",
    "description": "Durable and waterproof backpack, perfect for hiking or travel.",
    "numberOfReviews": 154,
    "avgRating": 4.3
  },
  {
    "productImage": "https://example.com/images/mattress.jpg",
    "name": "Memory Foam Mattress",
    "price": 799.99,
    "category": "Furniture",
    "description": "Sleep comfortably with this high-quality memory foam mattress.",
    "numberOfReviews": 187,
    "avgRating": 4.6
  }
]
