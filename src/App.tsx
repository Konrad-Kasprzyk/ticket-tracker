import "./App.css";
import Main from "./layouts/Main";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/login/Login.page";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "./config/firebase";

function App() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={user ? <Outlet /> : <Navigate to="/login" />}>
          <Route path="/" element={<Main />}>
            <Route index element={<HomePage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
