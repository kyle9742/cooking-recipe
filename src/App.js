import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";

import "./App.css";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { mode } = useContext(ThemeContext);
  //리액트 라우트는 최상단에 브라우저라우트>라우츠>라우트
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
