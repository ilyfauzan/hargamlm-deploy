import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Image from 'next/image';
import waIcon from '../../public/images/whatsapp.png';
import igIcon from '../../public/images/instagram.png';
import tokopediaIcon from '../../public/images/tokopedia.png';

export default function Home({ products }) {
  return (
    <div>
      <Navbar />
      <main className="pt-24 p-4 container mx-auto text-center">
        <section id="home">
          <Banner />
          <h1 className="text-2xl font-bold my-8">CHECK OUR PRODUCTS!</h1>
          <ProductList products={products} />
        </section>
        <section id="about-us" className="my-8 pt-8">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-4 text-gray-600">
            We are a company dedicated to providing the best products to our customers. Our mission is to ensure customer satisfaction through quality and innovation.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://wa.me/6281275392213" target="_blank" rel="noopener noreferrer">
              <Image src={waIcon} alt="WhatsApp" className="w-10 h-10" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/hargamlm/" target="_blank" rel="noopener noreferrer">
              <Image src={igIcon} alt="Instagram" className="w-10 h-10" width={40} height={40} />
            </a>
            <a href="https://www.tokopedia.com/hargamalam" target="_blank" rel="noopener noreferrer">
              <Image src={tokopediaIcon} alt="Tokopedia" className="w-10 h-10" width={40} height={40} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const products = [
    {
      id: 1,
      name: '𝗣𝗼𝗿𝘀𝗰𝗵𝗲 𝟵𝟳 𝗣𝗼𝗹𝗼 𝗦𝗵𝗶𝗿𝘁',
      price: '$49.99',
      image: '/images/product1.jpg',
    },
    {
      id: 2,
      name: '𝗚𝗶𝗼𝗿𝗱𝗮𝗻𝗼 𝗣𝗼𝗹𝗼 𝗦𝗵𝗶𝗿𝘁 𝗡𝗮𝗽𝗼𝗹𝗲𝗼𝗻',
      price: '$19.99',
      image: '/images/product2.jpg',
    },
    {
      id: 3,
      name: '𝗞𝗮𝗽𝗽𝗮 𝗠𝗼𝗻𝘁𝗲 𝗖𝗮𝗿𝗹𝗼 𝗠𝗼𝗻𝗮𝗰𝗼',
      price: '$39.99',
      image: '/images/product3.jpg',
    },
    {
      id: 4,
      name: '𝗗.𝗡.𝗔 𝗟𝗼𝗻𝗴 𝗦𝗹𝗲𝗲𝘃𝗲',
      price: '$59.99',
      image: '/images/product4.jpg',
    },
    {
      id: 5,
      name: '𝗞𝗮𝗼𝘀 𝗣𝘂𝗺a',
      price: '$49.99',
      image: '/images/product5.jpg',
    },
    {
      id: 6,
      name: '𝗙𝗶𝗹𝗮 𝗟𝗼𝗻𝗴 𝗦𝗹𝗲𝗲𝘃𝗲',
      price: '$19.99',
      image: '/images/product6.jpg',
    },
    {
      id: 7,
      name: '𝗛𝘂𝘀𝗵 𝗣𝘂𝗽𝗽𝗶𝗲𝘀 𝗣𝗼𝗹𝗼 𝗦𝗵𝗶𝗿𝘁',
      price: '$39.99',
      image: '/images/product7.jpg',
    },
    {
      id: 8,
      name: '𝗚𝗶𝗼𝗿𝗱𝗮𝗻𝗼 𝗣𝗼𝗹𝗼 𝗦𝗵𝗶𝗿𝘁',
      price: '$59.99',
      image: '/images/product8.jpg',
    },
    {
      id: 9,
      name: 'Sold Kilat (Semarang)',
      price: '$49.99',
      image: '/images/product9.jpg',
    },
    {
      id: 10,
      name: 'Polo Shirt Hush Puppies',
      price: '$19.99',
      image: '/images/product10.jpg',
    },
  ];

  return {
    props: {
      products,
    },
  };
}
