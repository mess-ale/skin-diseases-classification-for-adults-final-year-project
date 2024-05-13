import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Upload from "./Pages/Upload";
import Preview from "./Pages/Preview";
import Prediction from "./Pages/Prediction";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Signup />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login route='/api/token/'/>} />
          <Route path="/join" element={<RegisterAndLogout route='/api/user/register/'/>} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/home/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home/preview"
            element={
              <ProtectedRoute>
                <Preview />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home/prediction"
            element={
              <ProtectedRoute>
                <Prediction />
              </ProtectedRoute>
            }
          />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
