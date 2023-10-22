import { useEffect, useState } from "react";

import { getCookie } from "../../utils/Cookie";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import Refrigerator from "../Components/Refrigerator";
import Recommendation from "../Components/Recommendation";

import { GetUserInfo } from "../../axios";

export default function MainPage() {
  // 쿠키 이름으로 엑세스 토큰을 가져옵니다.
  function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // 쿠키 이름과 일치하는 경우 값을 반환합니다.
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    // 해당 쿠키 이름을 찾지 못한 경우 null을 반환합니다.
    return null;
  }

  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  // 초기 엑세스 토큰 설정
  useEffect(() => {
    setAccessToken(getCookie("accessToken"));
  }, []);

  // 엑세스 토큰 로깅
  useEffect(() => {
    if (accessToken) {
      console.log("쿠키 엑세스 토큰:", accessToken);
    } else {
      console.log("쿠키 엑세스 토큰이 없습니다.");
    }
  }, [accessToken]);

  // 사용자 정보 가져오기
  useEffect(() => {
    GetUserInfo(accessToken)
      .then((res) => {
        console.log(res);
        setUserName(res.data.user.nickname);
        setIngredients(res.data.ingredients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <>
      {/* 네비게이션 바 */}
      <NavBar userName={userName} />
      <div
        className="inner"
        style={{ width: "1024px", margin: "30px auto 0 auto" }}
      >
        {/* 냉장고 */}
        <Refrigerator
          setIngredients={setIngredients}
          accessToken={accessToken}
          userName={userName}
          ingredients={ingredients}
        />

        {/* 추천 요리 */}
        <div style={{ marginTop: "30px" }}>
          <Recommendation userName={userName} />
        </div>
      </div>

      {/* 푸터 */}
      <Footer />
    </>
  );
}
