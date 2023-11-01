// Redirect.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../utils/Cookie";

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 경로 가져오기
    const path = window.location.pathname;

    // 경로에서 토큰 추출
    const matches = path.match(/\/redirect\/([^/]+)/);

    if (matches && matches[1]) {
      const accessToken = matches[1];

      // 쿠키에 엑세스 토큰 설정
      setCookie("accessToken", accessToken, {
        path: "/",
        sameSite: "strict",
      });

      // 원하는 경로로 리다이렉트 (예: "/main")
      navigate("/main");
    } else {
      // URL에 엑세스 토큰이 없는 경우 처리
    }
  }, [navigate]);

  return <div>리다이렉트 중...</div>;
};

export default RedirectPage;
