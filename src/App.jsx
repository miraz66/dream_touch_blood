import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";

//----All Page---//
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="font-Poppins overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
