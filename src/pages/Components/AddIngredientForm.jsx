import { useEffect, useState } from "react";

import { GetUserInfo, PostIngredient } from "../../axios";

const AddIngredientForm = (props) => {
  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [image, setImage] = useState(null); // 이미지 상태 변수 추가
  const [mode, setMode] = useState(false); // false=일반입력모드 true=OCR모드

  // 이미지를 선택할 때 호출되는 함수
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // 식재료 등록함수
  const handleSubmit = (e) => {
    e.preventDefault();

    // 이미지가 null로 넘어가면 안돼서 예외처리
    if (image == null) {
      setImage("");
    }
    PostIngredient(accessToken, ingredient, image)
      .then((res) => {
        console.log(res);
        GetUserInfo(accessToken)
          .then((res) => {
            console.log(res);
            props.setIngredients(res.data.ingredients);
            alert("성공적으로 등록되었습니다.");
            props.closeModal();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        alert("식재료 등록에 실패했습니다.");
      });
  };

  // 입력모드 변경함수: 일반 입력모드
  const handleChangeMode = (e) => {
    e.preventDefault();
    setMode(false);
  };

  // 입력모드 변경함수: OCR 입력모드
  const handleChangeMode2 = (e) => {
    e.preventDefault();
    setMode(true);
  };

  // 사용자 정보 가져오기
  useEffect(() => {
    setAccessToken(props.accessToken);
  }, [props]);

  return (
    <div
      style={{
        width: "600px",
        height: "450px",
        border: "2px solid #a5a5a5",
        fontFamily: "NotoSans",
        fontWeight: "700",
      }}
    >
      <div
        style={{
          width: "450px",
          height: "350px",
          margin: "50px 75px",
          display: "flex", // 부모 요소에 display: flex 추가
          flexDirection: "column", // 세로 방향으로 배치
        }}
      >
        {/* title */}
        <div
          style={{
            height: "50px",
            textAlign: "center",
            fontSize: "38px",
          }}
        >
          재료 추가하기
        </div>

        {/* content area */}
        {/* 일반 입력 모드의 경우 */}
        {!mode && (
          <div
            style={{
              width: "100%",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                height: "20px",
                paddingLeft: "5px",
                display: "flex",
                textAlign: "left",
                alignItems: "center",
              }}
            >
              New Ingredient
            </div>

            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                marginTop: "5px",
                fontFamily: "NotoSans",
                fontWeight: "700",
                fontSize: "16px",
              }}
              placeholder="식재료명 입력"
            />

            {/* 첨부파일 영역: 이미지 선택 input 추가 */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{
                width: "100%",
                height: "40px",
                marginTop: "15px",
                fontFamily: "NotoSans",
                fontWeight: "700",
                fontSize: "16px",
              }}
            />

            <button
              type="button"
              onClick={handleSubmit}
              style={{
                width: "100%",
                height: "40px",
                marginTop: "15px",
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
              재료 추가하기
            </button>
          </div>
        )}

        {/* OCR 입력 모드의 경우 */}
        {mode && (
          <div
            style={{
              width: "100%",
              marginTop: "30px",
            }}
          >
            OCR입력모드입니다
          </div>
        )}

        {/* mode area */}
        <div
          style={{
            width: "100%",
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* normal mode */}
          <button
            type="button"
            onClick={handleChangeMode}
            style={{
              width: "calc(50% - 7.5px)",
              height: "40px",
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
            일반 입력모드
          </button>

          {/* OCR mode */}
          <button
            type="button"
            onClick={handleChangeMode2}
            style={{
              width: "calc(50% - 7.5px)",
              height: "40px",
              marginLeft: "15px",
              backgroundColor: "#3498DB",
              color: "#FFFFFF",
              border: "0",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "NotoSans",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            OCR 입력모드
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIngredientForm;
