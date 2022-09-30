import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fav from "./pages/Fav";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/favorites" element={<Fav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
