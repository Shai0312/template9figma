import Image from 'next/image';

interface FoodCardProps {
  image: string;
  name: string;
  price: number;
  onAddToCart: (name: string, price: number) => void;
}

const FoodCard = ({ image, name, price, onAddToCart }: FoodCardProps) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="relative w-full h-48 mb-4">
        <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-yellow-500 text-lg font-bold mt-2">₹{price}</p>
        <button
          onClick={() => onAddToCart(name, price)}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
