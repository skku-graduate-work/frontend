import kurlyLogo from "../../images/Kurly_Logo01.png";
import githubIcon from "../../images/Icon_github.png";
import notionIcon from "../../images/Icon_notion.png";

const Footer = () => {
  const handleLinkKurly = () => {
    window.location.href = "https://www.kurly.com/main";
  };

  const handleLinkGithub = () => {
    window.location.href = "https://github.com/skku-graduate-work";
  };

  const handleLinkNotion = () => {
    window.location.href =
      "https://www.notion.so/hyelimlog/177667bc02ac4968ab3c816afeb16f80";
  };

  return (
    <div
      style={{
        marginTop: "30px",
        borderTop: "2px solid #e9e9e9",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        className="footerInner"
        style={{
          width: "1024px",
          height: "100px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={kurlyLogo}
            alt="kurly"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={handleLinkKurly}
          />
          <div style={{ marginLeft: "10px" }}>
            <h1
              style={{
                marginBottom: "0",
                fontSize: "16px",
                fontWeight: "700",
                fontFamily: "NotoSans",
              }}
            >
              빈 냉장고, 채우고 싶다면?{" "}
            </h1>
            <h1
              style={{
                marginTop: "0",
                fontSize: "16px",
                fontWeight: "700",
                fontFamily: "NotoSans",
                color: "#2980B9",
                cursor: "pointer",
              }}
              onClick={handleLinkKurly}
            >
              마켓컬리 신선몰 바로가기
            </h1>
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <img
            src={githubIcon}
            alt="깃허브아이콘"
            onClick={handleLinkGithub}
            style={{ width: "60px", height: "60px", cursor: "pointer" }}
          />
          <img
            src={notionIcon}
            alt="노션아이콘"
            onClick={handleLinkNotion}
            style={{
              width: "60px",
              height: "60px",
              marginLeft: "30px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
