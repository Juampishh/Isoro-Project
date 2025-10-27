import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta de bienvenida */}
        <Route path="/welcome" element={<WelcomeScreen />} />

        {/* Ruta principal */}
        <Route path="/" element={<Home />} />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </Router>
  );
}
