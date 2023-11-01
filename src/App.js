import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RedirectPage from "./pages/RedirectPage/RedirectPage"; // Redirect.jsx의 실제 경로로 교체하세요.

import SocialLoginHandeler from "./pages/Components/SocialLoginHandler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/redirect/*" element={<RedirectPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
