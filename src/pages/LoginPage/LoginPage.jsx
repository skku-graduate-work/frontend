import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

import { Login } from "../../axios";
import { setCookie } from "../../utils/Cookie";

import SignupForm from "../Components/SignupForm";
import FindPasswordForm from "../Components/FindPasswordForm";

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

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import naverIcon from "../../images/Icon_naver.png";
import kakaoIcon from "../../images/Icon_kakao.png";
import googleIcon from "../../images/Icon_google.jpg";

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
    window.location.href = "http://127.0.0.1:8080/oauth2/authorization/naver";
  };

  // 카카오 소셜 로그인
  const handleKakaoLogin = () => {
    const client_id = "b693914bce90ffe5cd36881849f94517";
    const redirect_uri = "http://localhost:3000/login/oauth2/callback/kakao";
    const link = `https://kauth.kakao.com/oauth/authorize?scope=account_email&client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&prompt=login`;

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
        width: "1200px",
        height: "750px",
        margin: "0 auto",
        display: "flex",
        fontFamily: "NotoSans",
        fontWeight: "700",
      }}
    >
      <div
        className="left"
        style={{
          width: "50%",
        }}
      >
        <img
          src={randomImage}
          alt="Random Image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        className="right"
        style={{
          width: "50%",
          borderRight: "2px solid #e9e9e9",
          borderBottom: "2px solid #e9e9e9",
        }}
      >
        <div
          className="title"
          style={{
            height: "100px",
            borderBottom: "2px solid #e9e9e9",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
          }}
        >
          <LocalDiningIcon style={{ fontSize: "64px" }} /> 음식 추천 시스템
        </div>
        <div
          className="loginBox"
          style={{
            width: "400px",
            height: "500px",
            margin: "75px auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              height: "40px",
              fontSize: "24px",
            }}
          >
            Log In
          </div>
          <form
            style={{ height: "240px", marginTop: "30px" }}
            onSubmit={handleSubmit}
          >
            <div
              style={{
                height: "30px",
                paddingLeft: "10px",
                textAlign: "left",
                fontSize: "18px",
                color: "#5e5e5e",
              }}
            >
              Email
            </div>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              style={{
                width: "100%",
                height: "40px",
                paddingLeft: "10px",
                boxSizing: "border-box",
                fontSize: "16px",
              }}
              placeholder="이메일을 입력해주세요"
            />

            <div
              style={{
                height: "30px",
                marginTop: "30px",
                paddingLeft: "10px",
                textAlign: "left",
                fontSize: "18px",
                color: "#5e5e5e",
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
                height: "40px",
                paddingLeft: "10px",
                boxSizing: "border-box",
                fontSize: "16px",
              }}
              placeholder="비밀번호를 입력해주세요"
            />

            <button
              type="submit"
              style={{
                width: "100%",
                height: "40px",
                marginTop: "30px",
                border: "0",
                borderRadius: "4px",
                fontSize: "18px",
                color: "#FFFFFF",
                backgroundColor: "#5E5E5E",
                cursor: "pointer",
              }}
            >
              Log In
            </button>
          </form>
          <div
            style={{
              height: "60px",
              marginTop: "30px",
              textAlign: "left",
              fontSize: "18px",
              color: "#5e5e5e",
            }}
          >
            <div>
              계정이&nbsp;없으신가요?{" "}
              <a
                style={{
                  color: "Highlight",
                  cursor: "pointer",
                }}
                onClick={showModal}
              >
                회원가입
              </a>
            </div>
            <div>
              비밀번호를 잊으셨나요?{" "}
              <a
                style={{
                  color: "Highlight",
                  cursor: "pointer",
                }}
                onClick={showModal2}
              >
                비밀번호 찾기
              </a>
            </div>
          </div>

          {/* 회원가입 모달 */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <SignupForm closeModal={closeModal} />
          </Modal>

          {/* 비밀번호 찾기 모달 */}
          <Modal
            isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <FindPasswordForm />
          </Modal>

          <div
            style={{
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a>
              <img
                onClick={handleNaverLogin}
                src={naverIcon}
                alt="Naver Icon"
                style={{
                  width: "50px",
                  height: "50px",
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
                  width: "50px",
                  height: "50px",
                  marginLeft: "30px",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://google.com">
              <img
                src={googleIcon}
                alt="Google Icon"
                style={{
                  width: "50px",
                  height: "50px",
                  marginLeft: "30px",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
