import randomImage1 from "../../images/Food_Login01.jpg";
import randomImage2 from "../../images/Food_Login02.jpg";
import randomImage3 from "../../images/Food_Login03.jpg";
import randomImage4 from "../../images/Food_Login04.jpg";
import randomImage5 from "../../images/Food_Login05.jpg";
import randomImage6 from "../../images/Food_Login06.jpg";
import randomImage7 from "../../images/Food_Login07.jpg";
import randomImage8 from "../../images/Food_Login08.jpg";
import randomImage9 from "../../images/Food_Login09.jpg";
import randomImage10 from "../../images/Food_Login10.jpg";
import randomImage11 from "../../images/Food_Login11.jpg";
import randomImage12 from "../../images/Food_Login12.jpg";
import randomImage13 from "../../images/Food_Login13.jpg";
import React, { useState } from "react";

export default function LoginPage() {
  // 이미지 파일 배열
  const images = [
    randomImage1,
    randomImage2,
    randomImage3,
    randomImage4,
    randomImage5,
    randomImage6,
    randomImage7,
    randomImage8,
    randomImage9,
    randomImage10,
    randomImage11,
    randomImage12,
    randomImage13,
  ];

  // 랜덤한 이미지 선택
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // State 변수
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일 입력 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // 패스워드 입력 핸들러
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 처리
    console.log("Email:", email);
    console.log("Password:", password);
    // 필요한 로직을 추가하세요 (예: 서버로의 요청 등)
  };

  return (
    <div
      className="inner"
      style={{
        width: "1600px",
        margin: "0 auto",
        display: "flex",
        backgroundColor: "orange",
      }}
    >
      <div
        className="left"
        style={{
          width: "50%",
          height: "fit-content",
        }}
      >
        <img src={randomImage} alt="Random Image" style={{ width: "100%" }} />
      </div>
      <div className="right" style={{ width: "50%" }}>
        <div
          className="title"
          style={{
            fontSize: "60px",
            fontFamily: "CookieRun",
            marginTop: "25px",
            marginLeft: "40px",
          }}
        >
          ★ 레시피 추천 시스템
        </div>
        <div
          className="loginBox"
          style={{
            marginTop: "200px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              fontFamily: "CookieRun",
              marginBottom: "10px",
            }}
          >
            Log In
          </div>
          <form style={{ margin: "0 150px" }} onSubmit={handleSubmit}>
            <div
              style={{
                marginTop: "25px",
                textAlign: "left",
                fontSize: "24px",
                fontFamily: "CookieRun",
              }}
            >
              Email
            </div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{
                width: "100%",
                display: "block",
                fontSize: "24px",
                padding: "10px",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
              placeholder="이메일"
            />

            <div
              style={{
                marginTop: "40px",
                textAlign: "left",
                fontSize: "24px",
                fontFamily: "CookieRun",
              }}
            >
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                width: "100%",
                display: "block",
                fontSize: "24px",
                padding: "10px",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
              placeholder="비밀번호"
            />

            <button
              type="submit"
              style={{
                marginTop: "55px",
                width: "100%",
                display: "block",
                fontSize: "24px",
                fontFamily: "CookieRun",
                padding: "10px 20px",
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
