import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";

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
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
