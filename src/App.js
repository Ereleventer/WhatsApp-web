import "./App.css";
import "./components/LoginComponent.css";
import LoginComponent from "./components/LoginComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import RegisterComponent from "./components/RegisterComponent";
import Sidebar from "./Sidebar";
import Chat from "./Chat";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="*" element={<Navigate to="/chat" />} />
          <Route path="/chat" element={<Home/>} />
          <Route path="/chat/:ID" element={<Home/>} />

        </Routes>
      </AuthProvider>
    </Router>
  );
}


export default App;
