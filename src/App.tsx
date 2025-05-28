import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import img from "./assets/wall.jpg";
import { ArrowDown } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <section id="#">
        <div className="relative w-full h-screen">
          {/* Background Image */}
          <img
            src={img}
            alt="Wallpaper"
            className="w-full h-full object-cover"
          />

          {/* Dark Transparent Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1
              className="text-white text-5xl md:text-7xl mb-4"
              style={{ fontFamily: "font2" }}
            >
              Leather <span className="px-1">|</span> Craft{" "}
              <span className="px-2">|</span> Accessories
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              A symphony of craft and luxury
            </p>
            <button className="bg-white text-black px-6 py-3 font-medium shadow-md hover:bg-[#c9a173] transition">
              Explore Collection
            </button>
          </div>
          <ArrowDown className=" absolute left-1/2 top-6/7 text-white animate-bounce" />
        </div>
      </section>
      <section
        id="about"
        className="h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 py-12 bg-white"
      >
        <div className="flex items-center gap-4">
          <img
            src={img}
            className="h-64 w-auto object-cover rounded-lg shadow-md"
            alt="About visual 1"
          />
          <img
            src={img}
            className="h-64 w-auto object-cover rounded-lg shadow-md"
            alt="About visual 2"
          />
        </div>

        <div className="text-center md:text-left space-y-6">
          <h2
            className="text-4xl text-gray-800"
            style={{ fontFamily: "font2" }}
          >
            About PITSU
          </h2>
          <p className="text-gray-600 text-md" style={{ fontFamily: "font1" }}>
            PISTU - Pigment Art and Design Studio - was born from a passion for
            leather craftsmanship and a desire to create products that stand the
            test of time. Our journey began in a small workshop in Delhi, where
            our founder first fell in love with the art of leatherworking.
          </p>
          <p className="text-gray-600 text-md" style={{ fontFamily: "font1" }}>
            Today, our mission remains unchanged: To create timeless,
            handcrafted leather products that combine art, craftsmanship, and
            luxury, elevating everyday essentials into extraordinary pieces.
          </p>
          <p className="text-gray-600 text-md" style={{ fontFamily: "font1" }}>
            Each PISTU creation is a testament to the skill of our artisans, the
            quality of our materials, and our unwavering commitment to
            excellence.
          </p>
          <button className="mt-4 px-6 py-3 bg-black text-white hover:bg-[#c9a173] transition rounded shadow-md">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
