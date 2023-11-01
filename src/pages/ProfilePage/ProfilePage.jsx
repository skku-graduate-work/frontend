import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import { GetUserInfo, SetMinNutrient, SetMaxNutrient } from "../../axios";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import NameChangeForm from "../Components/NameChangeForm";
import FindPasswordForm from "../Components/FindPasswordForm";
import FavorFoodForm from "../Components/FavorFoodForm";
import ChangeProfileImgForm from "../Components/ChangeProfileImgForm";

import NoFoodImg from "../../images/no_food.jpg";
import UserDefaultImg from "../../images/no-user.jpg";

export default function ProfilePage(props) {
  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal2IsOpen, set2IsOpen] = useState(false);
  const [modal3IsOpen, set3IsOpen] = useState(false);
  const [modal4IsOpen, set4IsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [minCal, setMinCal] = useState(0);
  const [minCarb, setMinCarb] = useState(0);
  const [minProt, setMinProt] = useState(0);
  const [minFat, setMinFat] = useState(0);
  const [maxCal, setMaxCal] = useState(0);
  const [maxCarb, setMaxCarb] = useState(0);
  const [maxProt, setMaxProt] = useState(0);
  const [maxFat, setMaxFat] = useState(0);
  const [favoriteFood, setFavoriteFood] = useState([]);
  const [FoodImgSource1, setFoodImgSource1] = useState("");
  const [FoodImgSource2, setFoodImgSource2] = useState("");
  const [FoodImgSource3, setFoodImgSource3] = useState("");
  const [FoodImgSource4, setFoodImgSource4] = useState("");
  const [FoodImgSource5, setFoodImgSource5] = useState("");
  const [FoodName1, setFoodName1] = useState("미등록");
  const [FoodName2, setFoodName2] = useState("미등록");
  const [FoodName3, setFoodName3] = useState("미등록");
  const [FoodName4, setFoodName4] = useState("미등록");
  const [FoodName5, setFoodName5] = useState("미등록");

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

  // 프로필 사진 변경 모달 보임함수
  const showModal = () => {
    setIsOpen(true);
  };

  // 프로필 사진 변경 모달 숨김함수
  const closeModal = () => {
    setIsOpen(false);
  };

  // 이름 변경 모달 보임함수
  const showModal2 = () => {
    set2IsOpen(true);
  };

  // 이름 변경 모달 숨김함수
  const closeModal2 = () => {
    set2IsOpen(false);
  };

  // 선호음식 변경 모달 보임함수
  const showModal4 = () => {
    set4IsOpen(true);
  };

  // 선호음식 변경 모달 숨김함수
  const closeModal4 = () => {
    set4IsOpen(false);
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

  // 최소칼로리 변경 함수
  const handleChangeMinCal = (event) => {
    const newMinCal = parseInt(event.target.value, 10);
    setMinCal(newMinCal);
  };

  // 최소탄수화물 변경 함수
  const handleChangeMinCarb = (event) => {
    const newMinCarb = parseInt(event.target.value, 10);
    setMinCarb(newMinCarb);
  };

  // 최소단백질 변경 함수
  const handleChangeMinProt = (event) => {
    const newMinProt = parseInt(event.target.value, 10);
    setMinProt(newMinProt);
  };

  // 최소지방 변경 함수
  const handleChangeMinFat = (event) => {
    const newMinFat = parseInt(event.target.value, 10);
    setMinFat(newMinFat);
  };

  // 최대칼로리 변경 함수
  const handleChangeMaxCal = (event) => {
    const newMaxCal = parseInt(event.target.value, 10);
    setMaxCal(newMaxCal);
  };

  // 최대탄수화물 변경 함수
  const handleChangeMaxCarb = (event) => {
    const newMaxCarb = parseInt(event.target.value, 10);
    setMaxCarb(newMaxCarb);
  };

  // 최대단백질 변경 함수
  const handleChangeMaxProt = (event) => {
    const newMaxProt = parseInt(event.target.value, 10);
    setMaxProt(newMaxProt);
  };

  // 최대지방 변경 함수
  const handleChangeMaxFat = (event) => {
    const newMaxFat = parseInt(event.target.value, 10);
    setMaxFat(newMaxFat);
  };

  // 칼로리, 영양소 상/하한 저장함수
  const handleSaveCalories = () => {
    SetMinNutrient(accessToken, minCal, minCarb, minProt, minFat)
      .then((res) => {
        console.log(res);
        SetMaxNutrient(accessToken, maxCal, maxCarb, maxProt, maxFat)
          .then((res) => {
            console.log(res);
            alert("성공적으로 등록되었습니다");
          })
          .catch((err) => {
            console.log(err);
            alert("영양정보 등록에 실패했습니다");
          });
      })
      .catch((err) => {
        console.log(err);
        alert("영양정보 등록에 실패했습니다");
      });
  };

  // 네비게이션 함수
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
        setEmail(res.data.user.email);
        setProfileImg(res.data.user.profileImg);
        setMinCal(res.data.user.minCalories);
        setMinCarb(res.data.user.minCarbs);
        setMinProt(res.data.user.minProtein);
        setMinFat(res.data.user.minFat);
        setMaxCal(res.data.user.maxCalories);
        setMaxCarb(res.data.user.maxCarbs);
        setMaxProt(res.data.user.maxProtein);
        setMaxFat(res.data.user.maxFat);
        if (res.data.favoriteFoodInfoList) {
          setFavoriteFood(res.data.favoriteFoodInfoList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  useEffect(() => {
    if (favoriteFood && favoriteFood[0]) {
      setFoodImgSource1(
        favoriteFood[0].image.substring(1, favoriteFood[0].image.length - 1)
      );
      setFoodImgSource2(
        favoriteFood[1].image.substring(1, favoriteFood[1].image.length - 1)
      );
      setFoodImgSource3(
        favoriteFood[2].image.substring(1, favoriteFood[2].image.length - 1)
      );
      setFoodImgSource4(
        favoriteFood[3].image.substring(1, favoriteFood[3].image.length - 1)
      );
      setFoodImgSource5(
        favoriteFood[4].image.substring(1, favoriteFood[4].image.length - 1)
      );
      setFoodName1(favoriteFood[0].name_ko);
      setFoodName2(favoriteFood[1].name_ko);
      setFoodName3(favoriteFood[2].name_ko);
      setFoodName4(favoriteFood[3].name_ko);
      setFoodName5(favoriteFood[4].name_ko);
    }
  }, [favoriteFood]);

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
              height: "800px",
              borderRight: "2px solid #a5a5a5",
            }}
          >
            <h2
              style={{
                maginTop: "10px",
                fontFamily: "NotoSans",
              }}
            >
              기본 정보
            </h2>
            {/* 프로필사진 */}
            <div
              style={{
                paddingTop: "10px",
                paddingRight: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={profileImg ? profileImg : UserDefaultImg}
                alt="profileIMG"
                style={{
                  width: "200px",
                  height: "200px",
                  border: "4px solid #a5a5a5",
                }}
              />

              <button
                onClick={showModal}
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
                  width: "100%",
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

              {/* <button
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
              </button> */}
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
              placeholder={email}
            />
          </div>

          {/* Right */}
          <div
            style={{
              width: "calc(50% - 2px)",
              height: "800px",
              position: "relative", // 추가: 부모 요소에 상대적인 위치 지정
            }}
          >
            <h2
              style={{
                maginTop: "10px",
                marginLeft: "10px",
                marginBottom: "0",
                fontFamily: "NotoSans",
              }}
            >
              영양 정보
            </h2>
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "50%" }}>
                {/* 최소칼로리 */}
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
                  최소칼로리(kcal)
                </div>

                <input
                  type="text"
                  value={minCal}
                  onChange={handleChangeMinCal}
                  style={{
                    width: "calc(100% - 10px)",
                    height: "40px",
                    marginTop: "5px",
                    marginLeft: "10px",
                    display: "block",
                    padding: "10px",
                    boxSizing: "border-box",
                    fontFamily: "NotoSans",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
              </div>
              <div style={{ width: "50%" }}>
                {/* 최소탄수화물 */}
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
                  최소탄수화물(g)
                </div>

                <input
                  type="text"
                  value={minCarb}
                  onChange={handleChangeMinCarb}
                  style={{
                    width: "calc(100% - 10px)",
                    height: "40px",
                    marginTop: "5px",
                    marginLeft: "10px",
                    display: "block",
                    padding: "10px",
                    boxSizing: "border-box",
                    fontFamily: "NotoSans",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>

            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "50%" }}>
                {/* 최소단백질 */}
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
                  최소단백질(g)
                </div>

                <input
                  type="text"
                  value={minProt}
                  onChange={handleChangeMinProt}
                  style={{
                    width: "calc(100% - 10px)",
                    height: "40px",
                    marginTop: "5px",
                    marginLeft: "10px",
                    display: "block",
                    padding: "10px",
                    boxSizing: "border-box",
                    fontFamily: "NotoSans",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
              </div>
              <div style={{ width: "50%" }}>
                {/* 최소지방 */}
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
                  최소지방(g)
                </div>

                <input
                  type="text"
                  value={minFat}
                  onChange={handleChangeMinFat}
                  style={{
                    width: "calc(100% - 10px)",
                    height: "40px",
                    marginTop: "5px",
                    marginLeft: "10px",
                    display: "block",
                    padding: "10px",
                    boxSizing: "border-box",
                    fontFamily: "NotoSans",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>

            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "50%" }}>
                {/* 최대칼로리 */}
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
                  최대칼로리(kcal)
                </div>

                <input
                  type="text"
                  value={maxCal}
                  onChange={handleChangeMaxCal}
                  style={{
                    width: "calc(100% - 10px)",
                    height: "40px",
                    marginTop: "5px",
                    marginLeft: "10px",
                    display: "block",
                    padding: "10px",
                    boxSizing: "border-box",
                    fontFamily: "NotoSans",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
              </div>
              <div style={{ width: "50%" }}>
                {/* 최대탄수화물 */}
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
                  최대탄수화물(g)
                </div>

                <input
                  type="text"
                  value={maxCarb}
                  onChange={handleChangeMaxCarb}
                  style={{
                    width: "calc(100% - 10px)",
                    height: "40px",
                    marginTop: "5px",
                    marginLeft: "10px",
                    display: "block",
                    padding: "10px",
                    boxSizing: "border-box",
                    fontFamily: "NotoSans",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>

            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ width: "50%" }}>
                {/* 최대단백질 */}
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
                  최대단백질(g)
                </div>

                <input
                  type="text"
                  value={maxProt}
                  onChange={handleChangeMaxProt}
                  style={{
                    width: "calc(100% - 10px)",
                    height: "40px",
                    marginTop: "5px",
                    marginLeft: "10px",
                    display: "block",
                    padding: "10px",
                    boxSizing: "border-box",
                    fontFamily: "NotoSans",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
              </div>
              <div style={{ width: "50%" }}>
                {/* 최대지방 */}
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
                  최대지방(g)
                </div>

                <input
                  type="text"
                  value={maxFat}
                  onChange={handleChangeMaxFat}
                  style={{
                    width: "calc(100% - 10px)",
                    height: "40px",
                    marginTop: "5px",
                    marginLeft: "10px",
                    display: "block",
                    padding: "10px",
                    boxSizing: "border-box",
                    fontFamily: "NotoSans",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSaveCalories}
              style={{
                width: "calc(100% - 10px)",
                height: "40px",
                marginTop: "10px",
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
              칼로리&영양소 정보 상/하한 변경
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
                  src={FoodImgSource1 ? FoodImgSource1 : NoFoodImg}
                  alt="testIMG"
                  style={{ width: "100%", height: "92px" }}
                />
                <span>{FoodName1}</span>
              </div>

              {/* 선호음식 2 */}
              <div
                style={{ width: "calc((100% - 40px) / 5)", marginLeft: "10px" }}
              >
                <img
                  src={FoodImgSource2 ? FoodImgSource2 : NoFoodImg}
                  alt="testIMG"
                  style={{ width: "100%", height: "92px" }}
                />
                <span>{FoodName2}</span>
              </div>

              {/* 선호음식 3 */}
              <div
                style={{ width: "calc((100% - 40px) / 5)", marginLeft: "10px" }}
              >
                <img
                  src={FoodImgSource3 ? FoodImgSource3 : NoFoodImg}
                  alt="testIMG"
                  style={{ width: "100%", height: "92px" }}
                />
                <span>{FoodName3}</span>
              </div>

              {/* 선호음식 4 */}
              <div
                style={{ width: "calc((100% - 40px) / 5)", marginLeft: "10px" }}
              >
                <img
                  src={FoodImgSource4 ? FoodImgSource4 : NoFoodImg}
                  alt="testIMG"
                  style={{ width: "100%", height: "92px" }}
                />
                <span>{FoodName4}</span>
              </div>

              {/* 선호음식 5 */}
              <div
                style={{ width: "calc((100% - 40px) / 5)", marginLeft: "10px" }}
              >
                <img
                  src={FoodImgSource5 ? FoodImgSource5 : NoFoodImg}
                  alt="testIMG"
                  style={{ width: "100%", height: "92px" }}
                />
                <span>{FoodName5}</span>
              </div>
            </div>
            <button
              type="submit"
              onClick={showModal4}
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

      {/* 프로필 사진 변경 모달 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ChangeProfileImgForm
          accessToken={accessToken}
          closeModal={closeModal}
          setProfileImg={setProfileImg}
        />
      </Modal>

      {/* 사용자명 변경 모달 */}
      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <NameChangeForm accessToken={accessToken} />
      </Modal>

      {/* 선호음식 변경 모달 */}
      <Modal
        isOpen={modal4IsOpen}
        onRequestClose={closeModal4}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FavorFoodForm accessToken={accessToken} userName={userName} />
      </Modal>
    </>
  );
}
