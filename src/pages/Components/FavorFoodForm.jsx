import { useEffect, useState } from "react";

import { GetRandomFood } from "../../axios";

const FavorFoodForm = (props) => {
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");
  const [randomFood, setRandomFood] = useState([]);
  const [refresh, setRefresh] = useState(true);

  // 랜덤음식 리스트 새로고침
  const handleRefresh = () => {
    setRefresh(!refresh);
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
        console.log(randomFood);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken, refresh]);

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
        다음
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "10px",
        }}
      >
        {randomFood.map((food, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              border: "2px solid #F39C12",
              cursor: "pointer",
            }}
          >
            <img
              src={food.image.substring(1, food.image.length - 1)}
              alt={food.name_ko}
              style={{ width: "125px", height: "125px" }}
            />
            <p style={{ margin: "5px 0 0 0", fontSize: "14px" }}>
              {food.name_ko}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavorFoodForm;
