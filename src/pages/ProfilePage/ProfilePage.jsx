import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import { GetUserInfo } from "../../axios";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import NameChangeForm from "../Components/NameChangeForm";
import FindPasswordForm from "../Components/FindPasswordForm";

import testImage from "../../images/Food_Login03.jpg";
import testImage2 from "../../images/Kurly_Logo03.jpg";

export default function ProfilePage(props) {
  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [modal2IsOpen, set2IsOpen] = useState(false);
  const [modal3IsOpen, set3IsOpen] = useState(false);
  const [userName, setUserName] = useState("");

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

  // 이름 변경 모달 보임함수
  const showModal2 = () => {
    set2IsOpen(true);
  };

  // 이름 변경 모달 숨김함수
  const closeModal2 = () => {
    set2IsOpen(false);
  };

  // 비밀번호 변경 모달 보임함수
  const showModal3 = () => {
    set3IsOpen(true);
  };

  // 비밀번호 변경 모달 숨김함수
  const closeModal3 = () => {
    set3IsOpen(false);
  };

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

  const navigate = useNavigate();

  const handleToMain = () => {
    navigate("/main");
  };

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <>
      {/* 네비게이션 바 */}
      <NavBar userName={userName} />

      {/* 이너 */}
      <div
        className="inner"
        style={{ width: "1024px", margin: "30px auto 0 auto" }}
      >
        {/* 페이지 타이틀, 중간선 */}
        <div
          style={{
            height: "50px",
            textAlign: "center",
            fontSize: "38px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "relative",
              backgroundColor: "white",
              padding: "0 ",
              fontFamily: "NotoSans",
              fontWeight: "700",
            }}
          >
            회원정보 수정
          </span>

          {/* 중간선을 그리는 가상 요소 */}
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "60%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "1px",
              backgroundColor: "gray",
              zIndex: -1, // 선 요소의 쌓임 순서를 낮게 설정
            }}
          ></span>
        </div>

        {/* 본문 */}
        <div style={{ width: "100%", display: "flex" }}>
          {/* Left */}
          <div
            style={{
              width: "calc(50% - 2px)",
              height: "600px",
              borderRight: "2px solid #a5a5a5",
            }}
          >
            {/* 프로필사진 */}
            <div
              style={{
                paddingTop: "10px",
                paddingRight: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={testImage2}
                alt="profileIMG"
                style={{
                  width: "200px",
                  height: "200px",
                  border: "4px solid #a5a5a5",
                }}
              />

              <button
                type="submit"
                style={{
                  width: "200px",
                  height: "40px",
                  margin: "25px auto 0 auto",
                  display: "block",
                  backgroundColor: "#5E5E5E",
                  color: "#FFFFFF",
                  border: "0",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "NotoSans",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                프로필사진 변경
              </button>
            </div>

            {/* 사용자명 */}
            <div
              style={{
                height: "20px",
                marginTop: "20px",
                display: "flex",
                textAlign: "left",
                alignItems: "center",
                fontFamily: "NotoSans",
                fontWeight: "700",
              }}
            >
              사용자명
            </div>
            <div
              style={{
                marginTop: "5px",
                paddingRight: "10px",
                display: "flex",
              }}
            >
              <input
                type="text"
                value={userName}
                onChange={console.log()}
                disabled
                style={{
                  width: "280px",
                  height: "40px",
                  display: "block",
                  padding: "10px",
                  boxSizing: "border-box",
                  fontFamily: "NotoSans",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
                placeholder={userName}
              />

              <button
                type="submit"
                onClick={showModal2}
                style={{
                  width: "200px",
                  height: "40px",
                  marginLeft: "auto",
                  display: "block",
                  backgroundColor: "#5E5E5E",
                  color: "#FFFFFF",
                  border: "0",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "NotoSans",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                사용자명 변경
              </button>
            </div>

            {/* 이메일 */}
            <div
              style={{
                height: "20px",
                marginTop: "20px",
                display: "flex",
                textAlign: "left",
                alignItems: "center",
                fontFamily: "NotoSans",
                fontWeight: "700",
              }}
            >
              이메일
            </div>
            <input
              type="text"
              value={""}
              onChange={console.log()}
              disabled
              style={{
                width: "calc(100% - 10px)",
                height: "40px",
                marginTop: "5px",
                display: "block",
                padding: "10px",
                boxSizing: "border-box",
                fontFamily: "NotoSans",
                fontWeight: "700",
                fontSize: "16px",
              }}
              placeholder={"이메일이 들어갑니다"}
            />
          </div>

          {/* Right */}
          <div
            style={{
              width: "calc(50% - 2px)",
              height: "600px",
              position: "relative", // 추가: 부모 요소에 상대적인 위치 지정
            }}
          >
            {/* 비밀번호 */}
            <div
              style={{
                height: "20px",
                marginTop: "10px",
                paddingLeft: "10px",
                display: "flex",
                textAlign: "left",
                alignItems: "center",
                fontFamily: "NotoSans",
                fontWeight: "700",
              }}
            >
              비밀번호
            </div>

            <button
              type="submit"
              onClick={showModal3}
              style={{
                width: "calc(100% - 10px)",
                height: "40px",
                marginTop: "5px",
                marginLeft: "10px",
                display: "block",
                backgroundColor: "#5E5E5E",
                color: "#FFFFFF",
                border: "0",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "NotoSans",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              비밀번호 변경
            </button>

            {/* 선호 음식 */}
            <div
              style={{
                height: "20px",
                marginTop: "20px",
                paddingLeft: "10px",
                display: "flex",
                textAlign: "left",
                alignItems: "center",
                fontFamily: "NotoSans",
                fontWeight: "700",
              }}
            >
              선호 음식
            </div>

            <div
              style={{
                marginTop: "5px",
                marginLeft: "10px",
                display: "flex",
                fontFamily: "NotoSans",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              {/* 선호음식 1 */}
              <div style={{ width: "calc((100% - 40px) / 5)" }}>
                <img
                  src={testImage}
                  alt="testIMG"
                  style={{ width: "100%", height: "120px" }}
                />
                <span>음식명</span>
              </div>

              {/* 선호음식 2 */}
              <div
                style={{ width: "calc((100% - 40px) / 5)", marginLeft: "10px" }}
              >
                <img
                  src={testImage}
                  alt="testIMG"
                  style={{ width: "100%", height: "120px" }}
                />
                <span>음식명</span>
              </div>

              {/* 선호음식 3 */}
              <div
                style={{ width: "calc((100% - 40px) / 5)", marginLeft: "10px" }}
              >
                <img
                  src={testImage}
                  alt="testIMG"
                  style={{ width: "100%", height: "120px" }}
                />
                <span>음식명</span>
              </div>

              {/* 선호음식 4 */}
              <div
                style={{ width: "calc((100% - 40px) / 5)", marginLeft: "10px" }}
              >
                <img
                  src={testImage}
                  alt="testIMG"
                  style={{ width: "100%", height: "120px" }}
                />
                <span>음식명</span>
              </div>

              {/* 선호음식 5 */}
              <div
                style={{ width: "calc((100% - 40px) / 5)", marginLeft: "10px" }}
              >
                <img
                  src={testImage}
                  alt="testIMG"
                  style={{ width: "100%", height: "120px" }}
                />
                <span>음식명</span>
              </div>
            </div>
            <button
              type="submit"
              style={{
                width: "calc(100% - 10px)",
                height: "40px",
                marginTop: "15px",
                marginLeft: "10px",
                display: "block",
                backgroundColor: "#5E5E5E",
                color: "#FFFFFF",
                border: "0",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "NotoSans",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              선호 음식 변경하기
            </button>

            {/* 메인으로 돌아가기 */}
            <button
              type="button"
              onClick={handleToMain}
              style={{
                position: "absolute", // 추가: 절대적인 위치 지정
                bottom: "0", // 추가: 아래에서 0px 떨어진 위치
                right: "0", // 추가: 오른쪽에서 0px 떨어진 위치
                width: "200px",
                height: "40px",
                display: "inline-block",
                backgroundColor: "#3498DB",
                color: "#FFFFFF",
                fontFamily: "NotoSans",
                fontWeight: "700",
                fontSize: "16px",
                border: "0",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              메인으로 돌아가기
            </button>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <Footer />

      {/* 사용자명 변경 모달 */}
      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <NameChangeForm accessToken={accessToken} />
      </Modal>

      {/* 비밀번호 찾기 모달 */}
      <Modal
        isOpen={modal3IsOpen}
        onRequestClose={closeModal3}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FindPasswordForm />
      </Modal>
    </>
  );
}
