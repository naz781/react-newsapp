import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import News from "./page/news"
import Category from "./component/Category"
import Footer from "./component/Footer"
import Legal from "./page/Legal"
import AboutContact from "./page/AboutContact"

function App() {
  return (
    <Router>
      {/* Navbar - shows on every page */}
      <Navbar />

      {/* Category buttons - shows on every page */}
      <Category />

      {/* Main content area - this changes based on the URL */}
      <main className="min-h-screen">
        <Routes>
          {/* Home Page - shows news */}
          <Route path="/" element={<News />} />

          {/* News Category Routes - all show News for now */}
          <Route path="/world" element={<News />} />
          <Route path="/politics" element={<News />} />
          <Route path="/tech" element={<News />} />

          {/* Legal Pages - all use the same Legal component */}
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="/cookies" element={<Legal />} />
          <Route path="/ethics" element={<Legal />} />

          {/* About & Contact Pages */}
          <Route path="/about" element={<AboutContact />} />
          <Route path="/contact" element={<AboutContact />} />
        </Routes>
      </main>

      {/* Footer - shows on every page */}
      <Footer />
    </Router>
  )
}

export default App