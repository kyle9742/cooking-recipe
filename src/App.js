import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Create from './pages/create';
import Search from './pages/search';
import Recipe from './pages/recipe';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;