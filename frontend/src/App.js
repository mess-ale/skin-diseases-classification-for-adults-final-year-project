import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/SignUp';
import Upload from './page/Upload';
import Prediction from './page/Prediction';
import Preview from './page/Preview';
import NotFound from './components/NotFound';
import Privacy from './page/Privacy';
import SkinCareAdvice from './page/SkinCareAdvice';
import DoctorAppointmentForm from './page/DoctorAppointmentForm';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/ThemeProvider";
import ScrollToTop from './components/ScrollToTop';
import ContactSuccess from './components/ContactSuccess';
import AppointmentSuccess from './components/AppointmentSuccess';

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
          <Route
            path="/home/Appointment"
            element={
                <DoctorAppointmentForm />
            }
          />
          <Route
            path="/home/ContactSuccess"
            element={
                <ContactSuccess />
            }
          />
          <Route
            path="/home/AppointmentSuccess"
            element={
                <AppointmentSuccess />
            }
          />
          <Route
            path="/home/SkinCareAdvice"
            element={
                <SkinCareAdvice />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
