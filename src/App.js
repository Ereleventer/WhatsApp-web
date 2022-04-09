import "./App.css";
import "./components/LoginComponent.css";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import RegisterComponent from "./components/RegisterComponent";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/chat" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
