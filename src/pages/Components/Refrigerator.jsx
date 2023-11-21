import { useEffect, useState } from "react";
import Modal from "react-modal";
import AddIngredientForm from "./AddIngredientForm";
import SearchFoodForm from "./SearchFoodForm";
import SearchFoodForm2 from "./SearchFoodForm2";
import "./Refrigerator.css";

const Refrigerator = (props) => {
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

  // 상태변수
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");
  const [ingredients, setIngredients] = useState([]); // 사용자 현재 냉장고 음식상태
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal2IsOpen, set2IsOpen] = useState(false);
  const [modal3IsOpen, set3IsOpen] = useState(false);
  const [bucket, setBucket] = useState([]); // 선택한 식재료를 담는 버킷
  const [minCal, setMinCal] = useState(0);
  const [minCarb, setMinCarb] = useState(0);
  const [minProt, setMinProt] = useState(0);
  const [minFat, setMinFat] = useState(0);
  const [maxCal, setMaxCal] = useState(0);
  const [maxCarb, setMaxCarb] = useState(0);
  const [maxProt, setMaxProt] = useState(0);
  const [maxFat, setMaxFat] = useState(0);

  // 재료 등록 창 모달 보임함수
  const showModal = () => {
    setIsOpen(true);
  };

  // 재료 등록 창 모달 숨김함수
  const closeModal = () => {
    setIsOpen(false);
  };

  // 음식 검색 창 모달 보임함수
  const showModal2 = () => {
    set2IsOpen(true);
  };

  // 음식 검색 창 모달 숨김함수
  const closeModal2 = () => {
    set2IsOpen(false);
  };

  // 음식 검색 창 모달 보임함수2
  const showModal3 = () => {
    set3IsOpen(true);
  };

  // 음식 검색 창 모달 숨김함수2
  const closeModal3 = () => {
    set3IsOpen(false);
  };

  // 체크박스 변화 감지함수
  const handleIngredientCheckboxChange = (index) => {
    setIngredients((prevIngredients) => {
      const updatedIngredients = prevIngredients.map((ingredient, i) =>
        i === index
          ? { ...ingredient, checked: !ingredient.checked }
          : ingredient
      );

      // 현재 상태에서 4개 이상이 선택되어 있는지 확인
      const checkedCount = updatedIngredients.filter(
        (ingredient) => ingredient.checked
      ).length;

      if (checkedCount > 3) {
        // 4개 이상이 선택된 경우
        alert("선택 가능한 식재료는 최대 3개입니다");
        return prevIngredients; // 변경사항 취소
      }

      setBucket((prevBucket) => {
        const selectedIngredient = updatedIngredients[index];

        if (!selectedIngredient.checked) {
          // 체크가 해제되어 있으면 삭제
          return prevBucket.filter(
            (name) => name !== selectedIngredient.name_ko
          );
        }

        if (prevBucket.includes(selectedIngredient.name_ko)) {
          // 이미 버킷에 있는 경우 추가하지 않음
          return prevBucket;
        }

        // 체크되어 있으면 추가
        return [...prevBucket, selectedIngredient.name_ko];
      });

      return updatedIngredients;
    });
  };

  // 사용자 정보 가져오기
  useEffect(() => {
    setAccessToken(props.accessToken);
    setUserName(props.userName);
    setMinCal(props.minCal);
    setMinCarb(props.minCarb);
    setMinProt(props.minProt);
    setMinFat(props.minFat);
    setMaxCal(props.maxCal);
    setMaxCarb(props.maxCarb);
    setMaxProt(props.maxProt);
    setMaxFat(props.maxFat);
    if (props.ingredients) {
      setIngredients(props.ingredients);
    }
  }, [props]);

  // 버킷이 변경될 때마다 출력
  useEffect(() => {
    console.log("ingredients", ingredients);
    console.log("Bucket:", bucket);
  }, [bucket]);

  return (
    <>
      <div className="refri-area1">
        <p className="refri-title">
          <span style={{ color: "#E2594C" }}>{userName}</span> 님의 식재료
        </p>

        <div className="refri-ingrearea">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                marginBottom: "10px",
                flexDirection: "row",
                alignItems: "center",
                width: "calc(25%)", // 한 줄에 4개씩
              }}
            >
              <img
                src={ingredient.image}
                alt={ingredient.name_ko}
                style={{
                  width: "80px",
                  height: "80px",
                  marginRight: "10px",
                }}
              />
              <h3
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontFamily: "NanumSquareNeoBd",
                }}
              >
                {ingredient.name_ko}
              </h3>
              <input
                type="checkbox"
                checked={ingredient.checked}
                onChange={() => handleIngredientCheckboxChange(index)}
                style={{
                  marginLeft: "auto",
                  marginRight: "15px",
                  width: "18px", // 원하는 가로 크기
                  height: "18px", // 원하는 세로 크기
                }}
              />
            </div>
          ))}
        </div>

        <h2 className="refri-hint">최대 3개의 재료를 선택할 수 있습니다</h2>

        <div className="refri-ingrebuttonarea">
          <button className="refri-button1" onClick={showModal}>
            식재료 추가하기
          </button>
          <button className="refri-button2" onClick={showModal2}>
            요리 검색
          </button>
        </div>
      </div>

      <div className="refri-area2">
        <p className="refri-title">
          <span style={{ color: "#E2594C" }}>{userName}</span> 님의 영양정보
        </p>
        <div className="refri-ingre-row">
          <p className="refri-ingre-info">
            <span style={{ fontFamily: "NanumSquareNeoBd" }}>칼로리:</span>{" "}
            <span style={{ color: "#E2594C" }}>{minCal}</span>kcal 이상,{" "}
            <span style={{ color: "#E2594C" }}>{maxCal}</span>kcal 이하
          </p>
        </div>
        <div className="refri-ingre-row">
          <p className="refri-ingre-info">
            <span style={{ fontFamily: "NanumSquareNeoBd" }}>탄수화물:</span>{" "}
            <span style={{ color: "#E2594C" }}>{minCarb}</span>g 이상,{" "}
            <span style={{ color: "#E2594C" }}>{maxCarb}</span>g 이하
          </p>
        </div>
        <div className="refri-ingre-row">
          <p className="refri-ingre-info">
            <span style={{ fontFamily: "NanumSquareNeoBd" }}>단백질:</span>{" "}
            <span style={{ color: "#E2594C" }}>{minProt}</span>g 이상,{" "}
            <span style={{ color: "#E2594C" }}>{maxProt}</span>g 이하
          </p>
        </div>
        <div className="refri-ingre-row">
          <p className="refri-ingre-info">
            <span style={{ fontFamily: "NanumSquareNeoBd" }}>지방:</span>{" "}
            <span style={{ color: "#E2594C" }}>{minFat}</span>g 이상,{" "}
            <span style={{ color: "#E2594C" }}>{maxFat}</span>g 이하
          </p>
        </div>
        <div className="refri-buttonarea2">
          <h2 className="refri-hint2">
            사용자가 설정한 영양정보로 요리를 검색합니다
          </h2>
          {/* 영양소 하한으로 검색 */}
          <button className="refri-button3" onClick={showModal3}>
            요리 검색
          </button>
        </div>
      </div>

      {/* Add Ingredient Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          portalClassName: "modal-portal", // 새로운 portal 클래스 추가
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "400px",
            height: "520px",
            margin: "auto",
            backgroundColor: "#FAFAFA",
            display: "flex",
            flexDirection: "column", // 세로 방향으로 나열
            justifyContent: "space-between", // 컨텐츠 사이의 간격을 최대화
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // 그림자 추가
            padding: "5px", // padding 제거
            animation: "slideIn 0.5s ease-out", // 슬라이딩 애니메이션
          },
        }}
        contentLabel="Add Ingredient Modal"
      >
        <AddIngredientForm
          setIngredients={setIngredients}
          accessToken={accessToken}
          closeModal={closeModal}
        />
      </Modal>

      {/* Search Food Modal */}
      <Modal
        style={customStyles}
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        contentLabel="Search Food Modal"
      >
        <SearchFoodForm ingreList={bucket} accessToken={accessToken} />
      </Modal>

      {/* Search Food Modal2 */}
      <Modal
        style={customStyles}
        isOpen={modal3IsOpen}
        onRequestClose={closeModal3}
        contentLabel="Search Food Modal2"
      >
        <SearchFoodForm2
          accessToken={accessToken}
          userName={userName}
          minCal={minCal}
          minCarb={minCarb}
          minProt={minProt}
          minFat={minFat}
        />
      </Modal>
    </>
  );
};

export default Refrigerator;
