import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 當路由的路徑為 "/" 時，會渲染 Layout 元件 */}
        <Route path="/" element={<Layout />}>
          {/* 當索引路由被匹配時，會渲染 Homepage 元件。 */}
          <Route index element={<Homepage />}></Route>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
