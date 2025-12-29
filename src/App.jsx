import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Category from "./component/Category";
import News from "./page/News";
import Footer from "./component/Footer";
import AboutContact from "./page/AboutContact";
import Legal from "./page/Legal";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Category />

        <main className="grow">
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/about" element={<AboutContact />} />
            <Route path="/contact" element={<AboutContact />} />
            <Route path="/legal/:type" element={<Legal />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
