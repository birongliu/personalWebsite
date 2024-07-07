import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
