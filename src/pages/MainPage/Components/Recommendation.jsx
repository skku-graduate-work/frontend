import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Recommendation = (props) => {
  return (
    <div style={{ width: "1024px", fontFamily: "NotoSans", fontWeight: "700" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ color: "#0a0a5c" }}>사용자명</h2>
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
        음식 사진 영역
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
