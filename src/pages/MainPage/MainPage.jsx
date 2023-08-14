import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MainPage.css";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import Reccomendation from "./Components/Recommendations";

export default function MainPage() {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="menuBar">
        <div className="menuBarInner">
          <div className="logoTitleContainer">
            <div className="logoContainer">
              {/* 사이트 로고 */}
              <RamenDiningIcon
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </div>
            <h1 className="siteTitle">레시피 추천 시스템</h1>
          </div>
          <div className="searchContainer">
            {/* 검색 창 */}
            <input
              type="text"
              placeholder="요리명 혹은 재료로 레시피 검색"
              className={`searchInput ${isInputFocused ? "focused" : ""}`}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            {/* 돋보기 아이콘 */}
            <div className="searchIconContainer">
              <SearchIcon
                style={{
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="profileContainer">
            {/* 내 정보 아이콘 */}
            <PersonIcon
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
      <div className="inner" style={{ width: "1600px", margin: "auto" }}>
        <div style={{ marginTop: "20px" }}>
          <Reccomendation />
        </div>
      </div>
    </>
  );
}
