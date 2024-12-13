import "./index.css";
import Header from "./components/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/country/:code" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
