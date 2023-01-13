import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Picture from "./components/Picture";
import Roadmap from "./components/Roadmap";
import Tiger from "./components/Tiger";
import Nfts from "./components/Nfts";
import Faqs from "./components/Faqs";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Header" element={<Header />} />
        <Route path="About" element={<About />} />
        <Route path="Nfts" element={<Nfts />} />
        <Route path="Roadmap" element={<Roadmap />} />
        <Route path="Faqs" element={<Faqs />} />
        <Route path="picture" element={<Picture />} />
        <Route path="tiger" element={<Tiger />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
