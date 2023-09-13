import { useState } from "react";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import "./NavBar.css";

const NavBar = (props) => {
  const [userName, setUserName] = useState("사용자명");
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleSetUserInfo = () => {};

  const handleLogout = () => {};

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
            onClick={handleSetUserInfo}
          />
          <h1
            style={{
              marginLeft: "10px",
              fontSize: "16px",
              fontWeight: "700",
              fontFamily: "NotoSans",
            }}
          >
            {userName}
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
