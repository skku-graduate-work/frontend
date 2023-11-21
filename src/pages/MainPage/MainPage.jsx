import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Refrigerator from "../Components/Refrigerator";
import Recommendation from "../Components/Recommendation";
import FavorFoodForm from "../Components/FavorFoodForm";
import { GetUserInfo } from "../../axios";
import Modal from "react-modal";
import "./MainPage.css";
import randomImg1 from "../../images/main_img01.webp";
import randomImg2 from "../../images/main_img02.webp";
import randomImg3 from "../../images/main_img03.webp";
import randomImg4 from "../../images/main_img04.webp";
import randomImg5 from "../../images/main_img05.webp";
import randomImg6 from "../../images/main_img06.webp";
import randomImg7 from "../../images/main_img07.webp";
import randomImg8 from "../../images/main_img08.webp";
import randomImg9 from "../../images/main_img09.webp";
import randomImg10 from "../../images/main_img10.webp";
import randomImg11 from "../../images/main_img11.webp";

export default function MainPage() {
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

  // List of imported images
  const randomImages = [
    randomImg1,
    randomImg2,
    randomImg3,
    randomImg4,
    randomImg5,
    randomImg6,
    randomImg7,
    randomImg8,
    randomImg9,
    randomImg10,
    randomImg11,
  ];

  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [minCal, setMinCal] = useState(0);
  const [minCarb, setMinCarb] = useState(0);
  const [minProt, setMinProt] = useState(0);
  const [minFat, setMinFat] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  // State to store the current random image index
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * randomImages.length)
  );
  const [imageOpacity, setImageOpacity] = useState(1);

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

  // 선호음식 설정 모달 보임함수
  const showModal = () => {
    setIsOpen(true);
  };

  // 선호음식 설정 모달 숨김함수
  const closeModal = () => {
    setIsOpen(false);
  };

  // Function to change the image index and trigger a smooth transition
  const changeImage = () => {
    setImageOpacity(0); // Start fading out
    setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % randomImages.length
      );
      setImageOpacity(1); // Start fading in
    }, 300); // Adjust the timeout based on the transition duration
  };

  // Set up an interval to change the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(changeImage, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // Get the currently selected random image
  const selectedRandomImage = randomImages[currentImageIndex];

  // 초기 엑세스 토큰 설정
  useEffect(() => {
    setAccessToken(getCookie("accessToken"));
    window.scrollTo(0, 0);
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
        setMinCal(res.data.user.minCalories);
        setMinCarb(res.data.user.minCarbs);
        setMinProt(res.data.user.minProtein);
        setMinFat(res.data.user.minFat);
        setIngredients(res.data.ingredients);
        if (res.data.favoriteFoodInfoList) {
          setFavorite(res.data.favoriteFoodInfoList);
        } else {
          showModal();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <>
      {/* 네비게이션 바 */}
      <NavBar userName={userName} />
      <div className="main-bar"></div>
      <div className="main-background">
        <div className="main-imgarea">
          {/* Render the randomly selected image */}
          <img
            src={selectedRandomImage}
            alt="Random Main Image"
            style={{
              width: "100%",
              height: "auto",
              opacity: imageOpacity,
              transition: "opacity 1s ease-in-out", // Add a smooth opacity transition effect
            }}
          />
        </div>
        <div className="inner" style={{ width: "1024px", margin: "0 auto" }}>
          {/* 냉장고 */}
          <Refrigerator
            setIngredients={setIngredients}
            accessToken={accessToken}
            userName={userName}
            ingredients={ingredients}
            minCal={minCal}
            minCarb={minCarb}
            minProt={minProt}
            minFat={minFat}
          />

          {/* 추천 요리 */}
          <div style={{ marginTop: "30px" }}>
            <Recommendation userName={userName} favorite={favorite} />
          </div>
        </div>

        {/* 푸터 */}
        <Footer />
      </div>

      {/* 선호음식 변경 모달 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FavorFoodForm
          accessToken={accessToken}
          userName={userName}
          closeModal={closeModal}
          setFavoriteFood={""}
        />
      </Modal>
    </>
  );
}
