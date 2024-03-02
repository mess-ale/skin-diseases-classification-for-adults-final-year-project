import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
