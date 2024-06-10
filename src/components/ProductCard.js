import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="product-card border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center transform hover:scale-105">
      <div className="w-full relative" style={{ paddingTop: '100%' }}>
        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
      <p className="mt-2 text-gray-600">{product.price}</p>
    </div>
  );
}
