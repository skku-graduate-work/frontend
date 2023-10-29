import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import SocialLoginHandeler from "./pages/Components/SocialLoginHandler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        {/* <Route
          path="/login/oauth2/callback/kakao" //redirect_url
          element={<SocialLoginHandeler />} //당신이 redirect_url에 맞춰 꾸밀 컴포넌트
        /> */}
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
