import { useEffect, useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import testImage from "../../images/Food_Login01.jpg";
import testImage2 from "../../images/Food_Login02.jpg";
import testImage3 from "../../images/Food_Login03.jpg";
import testImage4 from "../../images/Food_Login04.jpg";
import testImage5 from "../../images/Food_Login05.jpg";

const Recommendation = (props) => {
  // 상태변수
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(props.userName);
  }, [props]);

  return (
    <div style={{ width: "1024px", fontFamily: "NotoSans", fontWeight: "700" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ color: "#0a0a5c" }}>{userName}</h2>
        <h2 style={{ marginLeft: "5px", fontWeight: "400" }}>
          님의 선호도를 바탕으로 요리를 추천해드릴게요.
        </h2>
      </div>
      <div
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ArrowBackIosIcon style={{ marginRight: "auto", fontSize: "64px" }} />
        <img
          src={testImage}
          alt="음식이미지"
          style={{
            width: "140px",
            height: "180px",
            border: "2px solid #a5a5a5",
            boxSizing: "border-box",
          }}
        />
        <img
          src={testImage2}
          alt="음식이미지"
          style={{
            width: "140px",
            height: "180px",
            marginLeft: "20px",
            border: "2px solid #a5a5a5",
            boxSizing: "border-box",
          }}
        />
        <img
          src={testImage3}
          alt="음식이미지"
          style={{
            width: "140px",
            height: "180px",
            marginLeft: "20px",
            border: "2px solid #a5a5a5",
            boxSizing: "border-box",
          }}
        />
        <img
          src={testImage4}
          alt="음식이미지"
          style={{
            width: "140px",
            height: "180px",
            marginLeft: "20px",
            border: "2px solid #a5a5a5",
            boxSizing: "border-box",
          }}
        />
        <img
          src={testImage5}
          alt="음식이미지"
          style={{
            width: "140px",
            height: "180px",
            marginLeft: "20px",
            border: "2px solid #a5a5a5",
            boxSizing: "border-box",
          }}
        />
        <ArrowForwardIosIcon style={{ marginLeft: "auto", fontSize: "64px" }} />
      </div>
      <div
        style={{ marginTop: "15px", display: "flex", justifyContent: "center" }}
      >
        페이지네이션 영역
      </div>
    </div>
  );
};

export default Recommendation;
