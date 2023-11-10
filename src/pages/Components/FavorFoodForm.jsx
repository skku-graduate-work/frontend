import { useEffect, useState } from "react";

import { GetUserInfo, GetRandomFood, ChangeFavoriteFood } from "../../axios";

const FavorFoodForm = (props) => {
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");
  const [randomFood, setRandomFood] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [selected, setSelected] = useState([]);

  // 랜덤음식 리스트 새로고침
  const handleRefresh = () => {
    setRefresh(!refresh);
    setSelected([]);
  };

  // 음식 선택함수
  const handleSelectFood = (index) => {
    console.log("현재 선택한 음식은:", randomFood[index]);
    let newselected = [...selected];
    if (!newselected.includes(randomFood[index])) {
      if (selected.length >= 5) {
        alert("최대 5개까지만 선택할 수 있습니다");
        return;
      }
      newselected.push(randomFood[index]);
    }

    // 이미 선택한 음식 선택할 시 선택에서 제거
    else {
      newselected = newselected.filter(
        (element) => element !== randomFood[index]
      );
    }
    setSelected(newselected);
  };

  // 선호음식 선택결과 전송함수
  const handleSubmit = () => {
    if (selected.length < 5) {
      alert("음식 5개를 선택해주세요");
      return;
    } else {
      ChangeFavoriteFood(
        accessToken,
        selected[0].food_id,
        selected[1].food_id,
        selected[2].food_id,
        selected[3].food_id,
        selected[4].food_id
      )
        .then((res) => {
          console.log(res);
          alert("정상적으로 수정되었습니다");
          GetUserInfo(accessToken).then((res) => {
            if (res.data.favoriteFoodInfoList) {
              if (props.setFavoriteFood != "") {
                props.setFavoriteFood(res.data.favoriteFoodInfoList);
              }
            }
          });
          props.closeModal();
        })
        .catch((err) => {
          console.log(err);
          alert("수정에 실패했습니다");
        });
    }
  };

  // 사용자 정보 받아오기
  useEffect(() => {
    setAccessToken(props.accessToken);
    setUserName(props.userName);
  }, [props]);

  // 랜덤한 음식 받아오기
  useEffect(() => {
    GetRandomFood(accessToken)
      .then((res) => {
        console.log(res);
        setRandomFood(res.data.randomFoodList);
        setRefresh(true);
        setSelected([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken, refresh]);

  console.log("현재 선택상태는: ", selected);

  return (
    <div
      style={{
        width: "1000px",
        height: "600px",
        border: "2px solid #a5a5a5",
        fontFamily: "NotoSans",
        fontWeight: "700",
        padding: "30px",
        overflowY: "scroll", // 세로 scrollbar만 표시
        overflowX: "hidden", // 가로 scrollbar는 숨김
      }}
    >
      <h1>{`${userName}님, 선호하시는 음식을 5개 선택해주세요`}</h1>
      <h3>회원님의 선호도를 기반으로 좋아하실 만한 음식을 추천해드릴게요.</h3>

      <button
        onClick={handleRefresh}
        style={{
          width: "200px",
          height: "40px",
          marginBottom: "15px",
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
        새로고침
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "15px",
        }}
      >
        {randomFood.map((food, index) => (
          <div
            key={index}
            onClick={() => handleSelectFood(index)}
            style={{
              textAlign: "center",
              border: "4px solid #F39C12",
              borderRadius: "4px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {/* 해당 음식이 선택되었으면 배경 및 체크 표시 */}
            {selected.includes(food) && (
              <>
                <div
                  style={{
                    position: "absolute",
                    top: "-4px",
                    left: "-4px",
                    width: "calc(100% + 8px)",
                    height: "calc(100% + 8px)",
                    background: "rgba(105, 105, 105, 0.7)", // 회색 계열의 투명한 배경
                    borderRadius: "4px",
                  }}
                ></div>

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#FFF",
                    fontSize: "72px",
                  }}
                >
                  ✓
                </div>
              </>
            )}

            <img
              src={food.image.substring(1, food.image.length - 1)}
              alt={food.name_ko}
              style={{ width: "140px", height: "140px", marginTop: "15px" }}
            />
            <p style={{ margin: "5px", fontSize: "14px", color: "#aeaeae" }}>
              {food.name_en}
            </p>
            <p style={{ margin: "5px", fontSize: "14px" }}>{food.name_ko}</p>
          </div>
        ))}
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        style={{
          width: "200px",
          height: "40px",
          marginTop: "15px",
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
        선택결과 저장
      </button>
    </div>
  );
};

export default FavorFoodForm;
