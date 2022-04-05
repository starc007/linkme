import "./App.css";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/plus-jakarta-sans/600.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, CHome } from "./pages/Home";
import PrivateHome from "./pages/Private/Home";
import PrivateRoute from "./routes/PrivateRoutes";
import Profile from "./pages/Private/Profile";
import EditProfile from "./pages/Private/EditProfile";
import PublicProfile from "./pages/PublicProfile";

import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<CHome />} />
          {!isAuthenticated && (<Route
            path="/:username"
            element={
              <PublicProfile />
            }
          />)}
        </Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PrivateHome />
            </PrivateRoute>
          }
        >
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit/profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          {isAuthenticated && (<Route
            path="/:username"
            element={
              
              <PrivateRoute>
                <PublicProfile />
              </PrivateRoute>
            }
          />)}
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
