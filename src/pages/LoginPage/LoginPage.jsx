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

import naverIcon from "../../images/Icon_naver.png";
import kakaoIcon from "../../images/Icon_kakao.png";
import googleIcon from "../../images/Icon_google.jpg";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

import SignupForm from "./SignupForm";
import FindPasswordForm from "./FindPasswordForm";

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

  // 메인화면 이미지 변수
  const [randomImage, setRandomImage] = useState("");

  // State 변수
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 회원가입 모달 창 보임 변수
  const [modalIsOpen, setIsOpen] = useState(false);

  // 비밀번호 찾기 모달 창 보임 변수
  const [modalIsOpen2, setIsOpen2] = useState(false);

  // 모달 창 스타일
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  const navigate = useNavigate();

  // 이메일 입력 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // 패스워드 입력 핸들러
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 처리
    console.log("Email:", email);
    console.log("Password:", password);
    // 필요한 로직을 추가하세요 (예: 서버로의 요청 등)
    navigate("/main");
  };

  // 회원가입 창 모달 보임함수
  const showModal = () => {
    setIsOpen(true);
  };

  // 회원가입 창 모달 숨김함수
  const closeModal = () => {
    setIsOpen(false);
  };

  // 비밀번호 찾기 창 모달 보임함수
  const showModal2 = () => {
    setIsOpen2(true);
  };

  // 비밀번호 찾기 창 모달 숨김함수
  const closeModal2 = () => {
    setIsOpen2(false);
  };

  // 네이버 소셜 로그인
  const handleNaverLogin = () => {
    const REST_API_KEY = "백엔드한테 달라하자1";
    const REDIRECT_URI = "백엔드한테 달라하자2";
    const link = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";

    window.location.href = link;
  };

  // 카카오 소셜 로그인
  const handleKakaoLogin = () => {
    const REST_API_KEY = "백엔드한테 달라하자1";
    const REDIRECT_URI = "백엔드한테 달라하자2";
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = link;
  };

  // 랜덤한 이미지 선택 (한번만)
  useEffect(() => {
    setRandomImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  return (
    <div
      className="inner"
      style={{
        width: "1600px",
        margin: "0 auto",
        display: "flex",
        // backgroundColor: "orange",
        backgroundColor: "#FFFAFA",
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
            marginTop: "40px",
            marginLeft: "55px",
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
          <form
            style={{ margin: "25px 150px 0 150px" }}
            onSubmit={handleSubmit}
          >
            <div
              style={{
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
                backgroundColor: "#0A3440",
                color: "#FFFFFF",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </form>
          <div
            style={{
              marginTop: "15px",
              marginLeft: "150px",
              textAlign: "left",
              fontSize: "16px",
              fontFamily: "CookieRun",
            }}
          >
            처음이신가요?{" "}
            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "Highlight",
              }}
              onClick={showModal}
            >
              회원가입
            </a>
            {/* 회원가입 모달 */}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <SignupForm />
            </Modal>
          </div>

          <div
            style={{
              marginTop: "10px",
              marginLeft: "150px",
              textAlign: "left",
              fontSize: "16px",
              fontFamily: "CookieRun",
            }}
          >
            비밀번호를 잊으셨나요?{" "}
            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "Highlight",
              }}
              onClick={showModal2}
            >
              비밀번호 찾기
            </a>
            {/* 비밀번호 찾기 모달 */}
            <Modal
              isOpen={modalIsOpen2}
              onRequestClose={closeModal2}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <FindPasswordForm />
            </Modal>
          </div>

          <div
            style={{
              height: "50px",
              marginTop: "50px",
              marginLeft: "150px",
              marginRight: "150px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a>
              <img
                onClick={handleNaverLogin}
                src={naverIcon}
                alt="Naver Icon"
                style={{
                  height: "100%",
                  marginRight: "30px",
                  cursor: "pointer",
                }}
              />
            </a>
            <a>
              <img
                onClick={handleKakaoLogin}
                src={kakaoIcon}
                alt="Kakao Icon"
                style={{
                  height: "100%",
                  marginRight: "30px",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://google.com">
              <img
                src={googleIcon}
                alt="Google Icon"
                style={{ height: "100%", borderRadius: "4px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
