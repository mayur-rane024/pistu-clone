import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="bg-white h-20 text-[#4B3F3F] shadow-sm py-4 bg-opacity-70">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Left side - Logo */}
        <div className="flex items-start gap-2">
          {/* <img src="/logo.png" alt="PISTU Logo" className="h-8" /> */}
          <h1  className="text-xl tracking-wider ]">
            PISTU<sup>®</sup>
          </h1>
        </div>

        {/* Right side - Nav Links + Cart Icon */}
        <div className="flex justify-end items-center gap-8">
          {/* Nav Links */}
          <ul className="flex gap-8 text-sm font-medium">
            <li>
              <a href="#products" className="hover:text-[#b89242]">
                PRODUCTS
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#b89242]">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#craft" className="hover:text-[#b89242]">
                CRAFT
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#b89242]">
                CONTACT
              </a>
            </li>
          </ul>

          {/* Cart Icon */}
          <FiShoppingBag className="text-2xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
