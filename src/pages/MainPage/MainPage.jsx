import { useEffect, useState } from "react";

import { getCookie } from "../../utils/Cookie";

import NavBar from "../../components/NavBar/NavBar";
import Refrigerator from "./Components/Refrigerator";
import Recommendation from "./Components/Recommendation";
import Footer from "../../components/Footer/Footer";

export default function MainPage() {
  const [accessToken, setAccessToken] = useState("");

  // 브라우저 쿠키 가져오기
  useEffect(() => {
    setAccessToken(getCookie("token"));
    console.log("엑세스 토큰: ", accessToken);
  }, []);

  return (
    <>
      {/* 네비게이션 바 */}
      <NavBar />
      <div
        className="inner"
        style={{ width: "1024px", margin: "30px auto 0 auto" }}
      >
        {/* 냉장고, 제작가능 음식 목록 */}
        <div>
          <Refrigerator />
        </div>

        {/* 마켓컬리 온라인 쇼핑몰 링크 */}
        <div style={{ marginTop: "30px" }}>
          <Recommendation />
        </div>
      </div>
      {/* 푸터 */}
      <Footer />
    </>
  );
}
