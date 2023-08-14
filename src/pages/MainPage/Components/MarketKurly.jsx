import "./MarketKurly.css";
import kurlyLogo from "../../../images/Kurly_Logo01.png";
import kurlyImage1 from "../../../images/Kurly_Logo02.jpg";
import kurlyImage2 from "../../../images/Kurly_Logo03.jpg";
import kurlyImage3 from "../../../images/Kurly_Logo04.png";
import kurlyImage4 from "../../../images/Kurly_Logo05.jpg";

const MarketKurly = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "24px",
          fontFamily: "CookieRun",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>신선한 레시피를 위한</h1>
        <h1 style={{ marginLeft: "15px", color: "#5f0080" }}>신선한 식재료</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={kurlyLogo}
          alt="마켓컬리 로고"
          style={{ width: "80px", height: "80px", borderRadius: "12px" }}
        />
        <div className="custom-linkButton">마켓컬리 통합 온라인몰 가기</div>
      </div>

      {/* 카테고리별 */}
      <div style={{ display: "flex", marginTop: "25px" }}>
        {/* 농산 */}
        <div style={{ width: "calc((100% - 75px)/4)" }}>
          <img
            src={kurlyImage1}
            alt="마켓컬리 농산 이미지"
            style={{ width: "100%", height: "380px", cursor: "pointer" }}
          />
          <h1
            style={{
              fontSize: "36px",
              fontFamily: "CookieRun",
              textAlign: "center",
            }}
          >
            농산
          </h1>
        </div>

        {/* 수산 */}
        <div style={{ width: "calc((100% - 75px)/4)", marginLeft: "25px" }}>
          <img
            src={kurlyImage2}
            alt="마켓컬리 수산 이미지"
            style={{ width: "100%", height: "380px", cursor: "pointer" }}
          />
          <h1
            style={{
              fontSize: "36px",
              fontFamily: "CookieRun",
              textAlign: "center",
            }}
          >
            수산
          </h1>
        </div>

        {/* 축산 */}
        <div style={{ width: "calc((100% - 75px)/4)", marginLeft: "25px" }}>
          <img
            src={kurlyImage3}
            alt="마켓컬리 축산 이미지"
            style={{ width: "100%", height: "380px", cursor: "pointer" }}
          />
          <h1
            style={{
              fontSize: "36px",
              fontFamily: "CookieRun",
              textAlign: "center",
            }}
          >
            축산
          </h1>
        </div>

        {/* 소스 */}
        <div style={{ width: "calc((100% - 75px)/4)", marginLeft: "25px" }}>
          <img
            src={kurlyImage4}
            alt="마켓컬리 소스 이미지"
            style={{ width: "100%", height: "380px", cursor: "pointer" }}
          />
          <h1
            style={{
              fontSize: "36px",
              fontFamily: "CookieRun",
              textAlign: "center",
            }}
          >
            소스&양념
          </h1>
        </div>
      </div>

      <div
        style={{
          fontSize: "16px",
          fontFamily: "CookieRun",
          display: "flex",
          justifyContent: "center",
          color: "#a0a0a0",
        }}
      >
        <h1>각 항목을 누르면 해당 카테고리로 이동해요</h1>
      </div>
    </div>
  );
};

export default MarketKurly;
