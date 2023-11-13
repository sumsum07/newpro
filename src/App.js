import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import LoginForm from "./pages/LoginForm";
import StarPage from "./pages/StarPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/star" element={<StarPage />} />
        </Routes>
    </div>
  );
}

export default App;

