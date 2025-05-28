import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Products from './pages/Products'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default App
