import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Upload from "./components/Upload";
import Preview from "./components/Preview";
import Prediction from "./components/Prediction";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Signup />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/prediction" element={<Prediction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
