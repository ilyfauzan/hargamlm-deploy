// src/components/Banner.js
import Image from 'next/image';
import banner from '../../public/images/banner.jpg'; // pastikan path ke gambar benar

export default function Banner() {
  return (
    <div className="relative h-32 md:h-48 lg:h-64 w-full flex items-center justify-center rounded-md mt-4 overflow-hidden">
      <Image src={banner} alt="Banner" layout="fill" objectFit="cover" />
    </div>
  );
}
