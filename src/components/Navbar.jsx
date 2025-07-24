import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavbarItem from "../components/NavbarItem.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg rounded-xl" : "bg-white"
      } mx-auto max-w-full px-8 py-5`}
    >
      <div className="flex justify-between items-center">
        <div className="text-xl text-indigo-900 font-bold">Movieinfo</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className="hidden md:flex space-x-6">
          <NavbarItem custom=""/>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <NavbarItem custom="block" />
        </div>
      )}
    </header>
  );
}

export default Navbar;