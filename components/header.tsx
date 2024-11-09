import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-black text-white py-5">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 lg:px-14">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold ml-3 from-blue-500 to-blue-700 text-clip">
            Backend Builder
          </span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="/features"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </Link>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-gray-200 hover:opacity-80 transition-colors duration-300">
            Get Started
          </Button>
        </nav>
        <button onClick={toggleMenu} className="lg:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="bg-black text-white p-4 lg:hidden">
          <Link href="/features" className="block py-2 hover:text-blue-400">
            Features
          </Link>
          <Link href="/pricing" className="block py-2 hover:text-blue-400">
            Pricing
          </Link>
          <Link href="/about" className="block py-2 hover:text-blue-400">
            About
          </Link>
          <Link href="/contact" className="block py-2 hover:text-blue-400">
            Contact
          </Link>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-gray-200 hover:opacity-80 transition-colors duration-300 w-full mt-2">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
