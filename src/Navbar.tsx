import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav?.classList.add("bg-white");
    } else {
      nav?.classList.remove("bg-white");
    }
  })
  return (
    <nav className="bg-transparent h-20 text-[#3A2A1B] outline-none border-none bg-opacity-70 fixed top-0 w-screen z-10 inset-y-0">
      <div className="container mx-auto px-14 flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-start gap-2">
          {/* <img src="/logo.png" alt="PISTU Logo" className="h-8" /> */}
          <h1  className="text-xl tracking-wider ">
            <img src="./logo.png" className="h-16  mt-10" alt="" />
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

          <FiShoppingBag className="text-2xl cursor-pointer hover:text-[#b89242]" id="#"/>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
