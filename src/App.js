import "./App.css";

import Home from "./pages/Home";
import Estadio from "./pages/Estadio";
import Estatistica from "./pages/Estatistica";
import Curiosidade from "./pages/Curiosidade";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/estadios" element={<Estadio />}></Route>
        <Route path="/estatisticas" element={<Estatistica />}></Route>
        <Route path="/curiosidades" element={<Curiosidade />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
