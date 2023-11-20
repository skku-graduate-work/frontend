import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Login } from "../../axios";
import { setCookie } from "../../utils/Cookie";
import SignupForm from "../Components/SignupForm";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import naverIcon from "../../images/Icon_naver.png";
import kakaoIcon from "../../images/Icon_kakao.png";
import googleIcon from "../../images/Icon_google.jpg";
import main_video from "../../video/main_video.mp4";
import "./LoginPage.css";

export default function LoginPage() {
  // State 변수
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login"); // 모달 종류 추가

  // 모달 창 스타일
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
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
    Login(email, password)
      .then((res) => {
        console.log("엑세스토큰은: ", res.data.accessToken);

        // 토큰을 브라우저 쿠키에 저장
        setCookie("accessToken", res.data.accessToken, {
          path: "/",
          sameSite: "strict",
        });
        navigate("/main");
      })
      .catch((err) => {
        console.log(err);
        alert("로그인에 실패했습니다");
      });
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // 가입하기 버튼을 클릭했을 때 모달의 내용을 변경하는 함수
  const showSignUpModal = () => {
    setModalType("signup");
    setIsSignUpModalOpen(true);
  };

  // 회원가입 창 모달 숨김함수
  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  // 네이버 소셜 로그인
  const handleNaverLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver";
  };

  // 카카오 소셜 로그인
  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  // 구글 소셜 로그인
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <>
      <video className="background-video" src={main_video} autoPlay loop muted>
        {/* 동영상 소스 */}
        <source src={main_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="title">
        <RestaurantIcon style={{ fontSize: "64px" }} /> &nbsp;사이트 제목
      </div>
      <button className="login-button" onClick={openLoginModal}>
        로그인
      </button>
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        style={{
          portalClassName: "modal-portal", // 새로운 portal 클래스 추가
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "400px",
            height: "500px",
            margin: "auto",
            backgroundColor: "#FAFAFA",
            display: "flex",
            flexDirection: "column", // 세로 방향으로 나열
            justifyContent: "space-between", // 컨텐츠 사이의 간격을 최대화
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // 그림자 추가
            padding: "5px", // padding 제거
            animation: "slideIn 0.5s ease-out", // 슬라이딩 애니메이션
          },
        }}
      >
        {/* 첫 번째 영역 */}
        <div className="login-region-1">
          <h2 className="login-region-1-title">사이트 제목</h2>
          {/* 이메일 입력창 */}
          <div className="email-region">
            <input
              className="email-input"
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="이메일"
            />
          </div>
          {/* 비밀번호 입력창 */}
          <div className="password-region">
            <input
              className="password-input"
              style={{ color: "black" }}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호"
            />
          </div>
          <div className="login-button-area">
            {/* 로그인 버튼 */}
            <button className="login-button-2" onClick={handleSubmit}>
              로그인
            </button>
          </div>
          {/* 구분선 */}
          <div className="line-area">
            <hr style={{ flex: "1", borderTop: "1px solid #ccc" }} />
            <span
              style={{
                padding: "0 20px",
                color: "#ccc",
                fontWeight: "700",
                fontFamily: "NanumSquare",
              }}
            >
              또는
            </span>
            <hr style={{ flex: "1", borderTop: "1px solid #ccc" }} />
          </div>
          {/* 소셜 로그인 */}
          <div className="social-area">
            {/* 소셜 로그인 아이콘들 */}
            <img
              onClick={handleNaverLogin}
              src={naverIcon}
              alt="Naver Icon"
              style={{
                width: "30px",
                height: "30px",
                cursor: "pointer",
                margin: "0 5px",
              }}
            />
            <img
              onClick={handleKakaoLogin}
              src={kakaoIcon}
              alt="Kakao Icon"
              style={{
                width: "30px",
                height: "30px",
                cursor: "pointer",
                margin: "0 5px",
              }}
            />
            <img
              onClick={handleGoogleLogin}
              src={googleIcon}
              alt="Google Icon"
              style={{
                width: "30px",
                height: "30px",
                cursor: "pointer",
                margin: "0 5px",
              }}
            />
          </div>
        </div>

        {/* 두 번째 영역 */}
        <div className="login-region-2">
          <div>
            계정이 없으신가요?{" "}
            <a
              style={{
                color: "Highlight",
                cursor: "pointer",
              }}
              onClick={showSignUpModal} // 회원가입 모달 열기 함수 사용
            >
              가입하기
            </a>
          </div>
        </div>
      </Modal>

      {/* 회원가입 모달 */}
      <Modal
        isOpen={isSignUpModalOpen}
        onRequestClose={closeSignUpModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <SignupForm closeModal={closeSignUpModal} />
      </Modal>
    </>
  );
}
