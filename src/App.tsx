import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import Business from "./pages/Business";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import Question from "./pages/Question";
import AddGallery from "./admin/AddGallery";
import Road from "./pages/Road";

const App: React.FC = () => {
  return (
    <div className="w-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/business" element={<Business />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/gallery/post" element={<AddGallery />} />
          <Route path="/question" element={<Question />} />
          <Route path="/road" element={<Road />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
