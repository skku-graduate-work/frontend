import { useEffect, useState } from "react";
import Modal from "react-modal";

import { GetFood } from "../../axios";

import AddIngredientForm from "./AddIngredientForm";

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

  // 재료 등록 창 모달 보임함수
  const showModal = () => {
    setIsOpen(true);
  };

  // 재료 등록 창 모달 숨김함수
  const closeModal = () => {
    setIsOpen(false);
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
        .catch((err) => {
          console.log(err);
        });
    }
  }, [ingredients]);

  return (
    <div style={{ display: "flex", fontFamily: "NotoSans", fontWeight: "700" }}>
      <div
        style={{
          width: "512px",
          paddingRight: "15px",
          boxSizing: "border-box",
        }}
      >
        <h3>{userName} 님의 냉장고</h3>
        <div>
          <div
            style={{
              display: "flex",
              marginBottom: "15px",
              borderBottom: "4px solid #3498DB",
            }}
          >
            <div style={{ width: "100px" }}>이름</div>
            <div style={{ width: "100px" }}>칼로리</div>
            <div style={{ width: "100px" }}>탄수화물</div>
            <div style={{ width: "100px" }}>단백질</div>
            <div style={{ width: "100px" }}>지방</div>
          </div>

          {/* ingredients 배열을 돌면서 속성을 출력 */}
          {ingredients.map((ingredient, index) => (
            <div
              style={{
                display: "flex",
                borderBottom: "2px solid #a5a5a5",
              }}
            >
              <div style={{ width: "100px" }}>{ingredient.name_ko}</div>
              <div style={{ width: "100px" }}>{ingredient.calories}</div>
              <div style={{ width: "100px" }}>{ingredient.carbs}</div>
              <div style={{ width: "100px" }}>{ingredient.protein}</div>
              <div style={{ width: "100px" }}>{ingredient.fat}</div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={showModal}
          style={{
            width: "100%",
            height: "40px",
            margin: "30px auto 0 auto",
            border: "0",
            borderRadius: "4px",
            fontSize: "16px",
            color: "#FFFFFF",
            backgroundColor: "#5E5E5E",
            cursor: "pointer",
          }}
        >
          재료 추가하기
        </button>
      </div>
      <div style={{ width: "512px" }}>
        <h3>현재 식재료들로 만들 수 있는 요리 목록:</h3>
        <div>결과 표 영역</div>
      </div>

      {/* 재료 등록 모달 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <AddIngredientForm
          setIngredients={setIngredients}
          accessToken={accessToken}
        />
      </Modal>
    </div>
  );
};

export default Refrigerator;
