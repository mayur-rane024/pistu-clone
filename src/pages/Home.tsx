import img from './../assets/wall.jpg';

function Home() {
  return (
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
        <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-4">
          Leather <span className="px-1">|</span> Craft <span className="px-2">|</span> Accessories
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          A symphony of craft and luxury
        </p>
        <button className="bg-white text-black px-6 py-3 font-medium shadow-md hover:bg-[#c9a173] transition">
          Explore Collection
        </button>
      </div>
    </div>
  );
}

export default Home;
