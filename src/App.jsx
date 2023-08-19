import { BrowserRouter, Route, Routes } from "react-router-dom";

//----All Page---//
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Login from "./components/Login";
// import NotFound from "./components/NotFound";

// amimation library //
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div className="font-Poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
