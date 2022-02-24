import { Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import View from "./pages/View";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/view" element={<View />} />
      <Route path="/doctor" element={<Doctor />} />
    </Routes>
  );
}

export default App;
