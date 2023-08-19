import githubIcon from "../../images/Icon_github.png";
import notionIcon from "../../images/Icon_notion.png";

const Footer = () => {
  return (
    <div style={{ marginTop: "30px", backgroundColor: "#ff8282" }}>
      <div
        className="footerInner"
        style={{
          width: "1600px",
          height: "250px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "24px",
              color: "#ffffff",
              fontFamily: "CookieRun",
            }}
          >
            (주)오뚜기
            <br /> 경기도 안양시 동안구 흥안대로 405 <br />
            <br />
            Copyright ⓒ ottogi co.,Ltd All Rights Reserved.
          </h1>
        </div>
        <div
          style={{ marginLeft: "auto", marginRight: "30px", display: "flex" }}
        >
          <img
            src={githubIcon}
            alt="깃허브아이콘"
            style={{ width: "70px", height: "70px", cursor: "pointer" }}
          />
          <img
            src={notionIcon}
            alt="노션아이콘"
            style={{
              width: "70px",
              height: "70px",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
