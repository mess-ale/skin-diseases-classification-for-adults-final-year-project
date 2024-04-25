import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Upload from "./Pages/Upload";
import Preview from "./Pages/Preview";
import Prediction from "./Pages/Prediction";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Signup />} />
          <Route path="/home/upload" element={<Upload />} />
          <Route path="/home/preview" element={<Preview />} />
          <Route path="/home/prediction" element={<Prediction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
