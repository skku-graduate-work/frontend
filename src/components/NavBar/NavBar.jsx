import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import "./NavBar.css";

const NavBar = (props) => {
  // 상태변수
  const [userName, setUserName] = useState("사용자명");

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

  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate("/profile");
  };

  // 로그아웃
  const handleLogout = () => {
    // 모든 쿠키를 삭제
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    // 로그인 페이지로 리디렉션
    navigate("/login");
  };

  // 사용자명 설정
  useEffect(() => {
    setUserName(props.userName);
  }, [props.userName]);

  return (
    <div className="menuBar">
      <div className="menuBarInner">
        <div className="logoTitleContainer">
          <div className="logoContainer">
            {/* 사이트 로고 */}
            <LocalDiningIcon
              style={{
                width: "64px",
                height: "64px",
              }}
            />
          </div>
          <h1 className="siteTitle">음식 추천 시스템</h1>
        </div>

        <div className="profileContainer">
          {/* 내 정보 아이콘 */}
          <PersonIcon
            style={{
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
            onClick={handleToProfile}
          />
          <h1
            style={{
              marginLeft: "10px",
              fontSize: "16px",
              fontWeight: "700",
              fontFamily: "NotoSans",
            }}
          >
            {userName} 님
          </h1>
          <button
            type="button"
            onClick={handleLogout}
            style={{
              width: "100px",
              height: "40px",
              marginLeft: "10px",
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
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
