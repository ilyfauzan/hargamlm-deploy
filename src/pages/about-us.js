import Image from 'next/image'; // Import Image dari next/image

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Tentang Kami</h1>
      <p className="text-lg mb-4">
        Selamat datang di halaman &quot;Tentang Kami&quot; kami! Kami adalah sebuah perusahaan yang berfokus pada [deskripsi singkat tentang perusahaan Anda]. Visi kami adalah [jelaskan visi perusahaan Anda], dan misi kami adalah [jelaskan misi perusahaan Anda].
      </p>
      <p className="text-lg mb-4">
        Kami berkomitmen untuk memberikan [jelaskan nilai-nilai atau keuntungan utama yang Anda tawarkan kepada pelanggan Anda]. Dengan tim profesional dan berpengalaman, kami berusaha untuk [jelaskan apa yang membuat perusahaan Anda unik].
      </p>
      <p className="text-lg mb-4">
        Untuk informasi lebih lanjut tentang kami, jangan ragu untuk menghubungi kami di [alamat email atau nomor telepon].
      </p>
      <div className="flex items-center mb-4 space-x-4">
        <a href="[tautan WhatsApp]" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          <Image src="/whatsapp-logo.png" alt="WhatsApp" width={24} height={24} /> {/* Ganti tag <img> dengan <Image /> */}
        </a>
        <a href="[tautan Instagram]" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700">
          <Image src="/instagram-logo.png" alt="Instagram" width={24} height={24} /> {/* Ganti tag <img> dengan <Image /> */}
        </a>
        <a href="[tautan Tokopedia]" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
          <Image src="/tokopedia-logo.png" alt="Tokopedia" width={24} height={24} /> {/* Ganti tag <img> dengan <Image /> */}
        </a>
      </div>
    </div>
  );
}
