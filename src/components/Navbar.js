import Image from 'next/image';
import logo from '../../public/images/logo.png';

export default function Navbar() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

 // Fungsi untuk scroll ke atas saat menu "Home" ditekan
function scrollToTop() {
    // Periksa apakah kita berada di bagian atas halaman
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-gray-100 text-gray-800 flex items-center justify-between z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="Logo" width={50} height={50} className="rounded" />
      </div>
      <div className="flex-grow text-center">
        {/* Tambahkan fungsi scrollToTop saat menu "Home" ditekan */}
        <a href="#" onClick={scrollToTop} className="font-semibold mx-2">Home</a>
        <a href="#" onClick={() => scrollToSection('about-us')} className="font-semibold mx-2">About Us</a>
      </div>
      <div className="w-12"></div> {/* Placeholder to balance the space taken by the logo */}
    </nav>
  );
}
