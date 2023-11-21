import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { GetUserInfo, SetMinNutrient, SetMaxNutrient } from "../../axios";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import NameChangeForm from "../Components/NameChangeForm";
import FavorFoodForm from "../Components/FavorFoodForm";
import ChangeProfileImgForm from "../Components/ChangeProfileImgForm";
import NoFoodImg from "../../images/no_food.jpg";
import UserDefaultImg from "../../images/no-user.jpg";
import "./ProfilePage.css";

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
  const [FoodName1En, setFoodName1En] = useState("No data");
  const [FoodName2En, setFoodName2En] = useState("No data");
  const [FoodName3En, setFoodName3En] = useState("No data");
  const [FoodName4En, setFoodName4En] = useState("No data");
  const [FoodName5En, setFoodName5En] = useState("No data");
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
      setFoodName1En(favoriteFood[0].name_en);
      setFoodName2En(favoriteFood[1].name_en);
      setFoodName3En(favoriteFood[2].name_en);
      setFoodName4En(favoriteFood[3].name_en);
      setFoodName5En(favoriteFood[4].name_en);
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

      <div className="profile-background">
        {/* 이너 */}
        <div className="inner" style={{ width: "1024px", margin: "0 auto" }}>
          <div className="profile-area1">
            <p className="profile-title">기본 정보</p>
            <div className="profile-flexbox">
              <div>
                <p className="profile-subtitle">프로필 사진</p>
                <div>
                  <img
                    className="profile-img"
                    src={profileImg ? profileImg : UserDefaultImg}
                    alt="profile_img"
                  />
                </div>
                <button
                  className="profile-imgchange-button"
                  onClick={showModal}
                  type="submit"
                >
                  프로필사진 변경
                </button>
              </div>
              <div className="profile-flexcontent">
                <p className="profile-subtitle">사용자명</p>
                <p className="profile-text">{userName}</p>
                <p className="profile-subtitle">이메일</p>
                <p className="profile-text">{email}</p>
              </div>
            </div>
          </div>
          <div className="profile-area1">
            <p className="profile-title">영양 정보</p>
            <p className="profile-subtitle">칼로리</p>
            <div className="profile-ingre-row">
              <input
                className="profile-ingre-input"
                type="number"
                value={minCal}
                onChange={handleChangeMinCal}
              />
              <span className="profile-ingre-text">kcal 이상,</span>
              <input
                className="profile-ingre-input"
                type="number"
                value={maxCal}
                onChange={handleChangeMaxCal}
              />
              <span className="profile-ingre-text">kcal 이하</span>
            </div>
            <p className="profile-subtitle">탄수화물</p>
            <div className="profile-ingre-row">
              <input
                className="profile-ingre-input"
                type="number"
                value={minCarb}
                onChange={handleChangeMinCarb}
              />
              <span className="profile-ingre-text">g 이상,</span>
              <input
                className="profile-ingre-input"
                type="number"
                value={maxCarb}
                onChange={handleChangeMaxCarb}
              />
              <span className="profile-ingre-text">g 이하</span>
            </div>
            <p className="profile-subtitle">단백질</p>
            <div className="profile-ingre-row">
              <input
                className="profile-ingre-input"
                type="number"
                value={minProt}
                onChange={handleChangeMinProt}
              />
              <span className="profile-ingre-text">g 이상,</span>
              <input
                className="profile-ingre-input"
                type="number"
                value={maxProt}
                onChange={handleChangeMaxProt}
              />
              <span className="profile-ingre-text">g 이하</span>
            </div>
            <p className="profile-subtitle">지방</p>
            <div className="profile-ingre-row">
              <input
                className="profile-ingre-input"
                type="number"
                value={minFat}
                onChange={handleChangeMinFat}
              />
              <span className="profile-ingre-text">g 이상,</span>
              <input
                className="profile-ingre-input"
                type="number"
                value={maxFat}
                onChange={handleChangeMaxFat}
              />
              <span className="profile-ingre-text">g 이하</span>
            </div>
            <div className="profile-buttonarea">
              <h2 className="refri-hint2">
                원하는 영양 정보를 설정할 수 있습니다
              </h2>
              <button
                className="profile-ingre-save-button"
                type="submit"
                onClick={handleSaveCalories}
              >
                영양정보 저장
              </button>
            </div>
          </div>

          <div className="profile-area1">
            <p className="profile-title">선호 요리</p>
            <div className="recommend-list-row">
              <div className="recommend-list-item">
                <img
                  className="recommend-list-img"
                  src={FoodImgSource1 ? FoodImgSource1 : NoFoodImg}
                  alt="testIMG"
                />
                <h5
                  className="recommend-list-name"
                  style={{ color: "#aeaeae" }}
                >
                  {FoodName1En ? FoodName1En : "No Food Info"}
                </h5>
                <h5 className="recommend-list-name">
                  {FoodName1 ? FoodName1 : "음식 정보가 없습니다"}
                </h5>
              </div>
              <div className="recommend-list-item">
                <img
                  className="recommend-list-img"
                  src={FoodImgSource2 ? FoodImgSource2 : NoFoodImg}
                  alt="testIMG"
                />
                <h5
                  className="recommend-list-name"
                  style={{ color: "#aeaeae" }}
                >
                  {FoodName2En ? FoodName2En : "No Food Info"}
                </h5>
                <h5 className="recommend-list-name">
                  {FoodName2 ? FoodName2 : "음식 정보가 없습니다"}
                </h5>
              </div>
              <div className="recommend-list-item">
                <img
                  className="recommend-list-img"
                  src={FoodImgSource3 ? FoodImgSource3 : NoFoodImg}
                  alt="testIMG"
                />
                <h5
                  className="recommend-list-name"
                  style={{ color: "#aeaeae" }}
                >
                  {FoodName3En ? FoodName3En : "No Food Info"}
                </h5>
                <h5 className="recommend-list-name">
                  {FoodName3 ? FoodName3 : "음식 정보가 없습니다"}
                </h5>
              </div>
              <div className="recommend-list-item">
                <img
                  className="recommend-list-img"
                  src={FoodImgSource4 ? FoodImgSource4 : NoFoodImg}
                  alt="testIMG"
                />
                <h5
                  className="recommend-list-name"
                  style={{ color: "#aeaeae" }}
                >
                  {FoodName4En ? FoodName4En : "No Food Info"}
                </h5>
                <h5 className="recommend-list-name">
                  {FoodName4 ? FoodName4 : "음식 정보가 없습니다"}
                </h5>
              </div>
              <div className="recommend-list-item" style={{ marginRight: "0" }}>
                <img
                  className="recommend-list-img"
                  src={FoodImgSource5 ? FoodImgSource5 : NoFoodImg}
                  alt="testIMG"
                />
                <h5
                  className="recommend-list-name"
                  style={{ color: "#aeaeae" }}
                >
                  {FoodName5En ? FoodName5En : "No Food Info"}
                </h5>
                <h5 className="recommend-list-name">
                  {FoodName5 ? FoodName5 : "음식 정보가 없습니다"}
                </h5>
              </div>
            </div>

            <div className="refri-ingrebuttonarea">
              <button className="refri-button1" onClick={showModal4}>
                선호요리 변경
              </button>
            </div>
          </div>
          <div className="profile-down-button-area">
            <button className="profile-tomain-button" onClick={handleToMain}>
              메인으로 돌아가기
            </button>
          </div>
        </div>

        {/* 푸터 */}
        <Footer />
      </div>
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
        <FavorFoodForm
          accessToken={accessToken}
          userName={userName}
          closeModal={closeModal4}
          setFavoriteFood={setFavoriteFood}
        />
      </Modal>
    </>
  );
}
