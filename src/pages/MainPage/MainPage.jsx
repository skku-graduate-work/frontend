import NavBar from "../../components/NavBar/NavBar";
import Reccomendation from "./Components/Recommendations";
import MarketKurly from "./Components/MarketKurly";
import Footer from "../../components/Footer/Footer";

export default function MainPage() {
  return (
    <>
      {/* 네비게이션 바 */}
      <NavBar />
      <div className="inner" style={{ width: "1600px", margin: "auto" }}>
        {/* 선호도 추천 레시피 */}
        <div style={{ marginTop: "30px" }}>
          <Reccomendation />
        </div>

        {/* 마켓컬리 온라인 쇼핑몰 링크 */}
        <div style={{ marginTop: "30px" }}>
          <MarketKurly />
        </div>
      </div>
      {/* 푸터 */}
      <Footer />
    </>
  );
}
