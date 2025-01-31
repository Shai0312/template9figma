"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const sanity = sanityClient({
  projectId: "vzaqcdm1",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});
type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  description: string;
  available: boolean;
  discountPercentage: number;
  imageUrl: string;
};

type Chef = {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  description: string;
  available: boolean;
  imageUrl: string;
};

// interface Product {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   description: string;
//   discountPercentage: number;
//   imageUrl: string;
//   tags: string[];
// }

// interface Chef {
//   _id: string;
//   name: string;
//   position: string;
//   experience: string;
//   specialty: string;
//   description: string;
//   available: boolean;
//   imageUrl: string;
// }

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const foodQuery = `
        *[_type == "food"] {
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          description,
          available,
          "imageUrl": image.asset->url
        }
      `;
      const chefQuery = `
        *[_type == "chef"] {
          _id,
          name,
          position,
          experience,
          specialty,
          description,
          available,
          "imageUrl": image.asset->url
        }
      `;

      const foodData = await sanity.fetch(foodQuery);
      const chefData = await sanity.fetch(chefQuery);

      const safeFoodProducts = foodData.map((product: Product) => ({
        ...product,
        tags: product.tags || [],
        imageUrl: product.imageUrl || '',
        description: product.description || 'No description available',
      }));
      
      const safeChefs = chefData.map((chef: Chef) => ({
        ...chef,
        imageUrl: chef.imageUrl || '',
        description: chef.description || 'No description available',
      }));
      

      setProducts(safeFoodProducts);
      setChefs(safeChefs);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter(item => item._id !== productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[url('/heropic.png')] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
              Our Shop
            </h1>
            <div className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center">
              <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors duration-300">
                Home
              </Link>
              <span className="text-white">/</span>
              <Link href="/shop" className="text-[#FF9F0D]">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <div className="p-4">
        <h2 className="text-center text-slate-900 mt-4 mb-2 font-semibold text-2xl">Products from API &apos;s Data</h2>
        <h3 className="text-center text-slate-900 mt-4 font-semibold mb-4 text-2xl">Food</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(products) && products.map((product) => (
            <div key={product._id} className="bg-gray-100 shadow-lg rounded-lg gap-4 hover:shadow-lg transition-shadow duration-300">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-slate-900 mt-2 text-lg">{truncateDescription(product.description)}</p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-yellow-500 font-bold">${product.price}</p>
                    {product.discountPercentage > 0 && (
                      <p className="text-sm text-green-600">
                        {product.discountPercentage}% OFF
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {(product.tags || []).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-300 text-black px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chef Cards Section */}
        <h2 className="text-center text-slate-800 mt-8 mb-2 font-semibold text-2xl">Our Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(chefs) && chefs.map((chef) => (
            <div key={chef._id} className="bg-gray-100 shadow-lg rounded-lg gap-4 hover:shadow-lg transition-shadow duration-300">
              <Image
                src={chef.imageUrl}
                alt={chef.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{chef.name}</h2>
                <p className="text-slate-900 mt-2 text-sm font-semibold">{truncateDescription(chef.description)}</p>
                <p className="text-lg text-slate-900 mt-1">Position: {chef.position}</p>
                <p className="text-lg text-slate-900">Specialty: {chef.specialty}</p>
                <p className="text-lg text-slate-900">Years Of Experience: {chef.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary Section */}
        <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
          {cart.length > 0 ? (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                  <div>
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                  </div>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <button
                    className="text-red-600 ml-4"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-black text-center">Your Cart is empty. Please Add Products.</p>
          )}
          {cart.length > 0 && (
            <div className="mt-4 text-xl font-bold text-slate-900">
              Total Price: ${calculateTotalPrice()}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCards;
