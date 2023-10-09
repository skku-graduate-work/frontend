import { useEffect, useState } from "react";
import Modal from "react-modal";

import { GetFood } from "../../axios";

import AddIngredientForm from "./AddIngredientForm";
import SearchFoodForm from "./SearchFoodForm";

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
  const [bucket, setBucket] = useState([]); // 선택한 식재료를 담는 버킷

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
    if (props.ingredients) {
      setIngredients(props.ingredients);
    }
  }, [props]);

  // 요리 목록 가져오기
  useEffect(() => {
    if (ingredients && ingredients[0]) {
      GetFood(
        accessToken,
        ingredients[2].name_ko,
        ingredients[3].name_ko,
        ingredients[5].name_ko
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {});
    }
  }, [ingredients]);

  // 버킷이 변경될 때마다 출력
  useEffect(() => {
    console.log("ingredients", ingredients);
    console.log("Bucket:", bucket);
  }, [bucket]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            height: "270px",
            overflowY: "scroll", // 세로 scrollbar만 표시
            overflowX: "hidden", // 가로 scrollbar는 숨김
            flex: 7,
            padding: "20px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "NotoSans",
            }}
          >{`${userName} 님의 냉장고`}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "10px",
                  width: "calc(33.33% - 20px)", // 한 줄에 세 개씩
                }}
              >
                <img
                  src={ingredient.image}
                  alt={ingredient.name_ko}
                  style={{ width: "60px", height: "60px", marginRight: "10px" }}
                />
                <h3
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    fontFamily: "NotoSans",
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
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 3,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Your content on the right section */}
          <button
            onClick={showModal}
            style={{
              width: "250px",
              height: "40px",
              marginBottom: "10px",
              backgroundColor: "#5E5E5E",
              color: "#FFFFFF",
              fontFamily: "NotoSans",
              fontWeight: "700",
              fontSize: "16px",
              border: "0",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            식재료 추가하기
          </button>
          <button
            onClick={showModal2}
            style={{
              width: "250px",
              height: "40px",
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
            선택한 재료 조합으로 검색
          </button>
        </div>
      </div>

      {/* Add Ingredient Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
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
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Search Food Modal"
      >
        <SearchFoodForm ingreList={bucket} accessToken={accessToken} />
      </Modal>
    </>
  );
};

export default Refrigerator;
