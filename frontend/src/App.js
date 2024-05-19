import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/SignUp';
import Upload from './page/Upload';
import Prediction from './page/Prediction';
import Preview from './page/Preview';
import NotFound from './components/NotFound';
import Privacy from './page/Privacy';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/ThemeProvider";
import ScrollToTop from './components/ScrollToTop';

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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/join"
            element={<RegisterAndLogout />}
          />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/home/upload"
            element={
                <Upload />
            }
          />
          <Route
            path="/home/preview"
            element={
                <Preview />
            }
          />
          <Route
            path="/home/prediction"
            element={
                <Prediction />
            }
          />
          <Route
            path="/home/Privacy"
            element={
                <Privacy />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
