import { useEffect, useState } from "react";

import { GetRandomFood } from "../../axios";

const FavorFoodForm = (props) => {
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");
  const [randomFood, setRandomFood] = useState([]);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accessToken]);

  return (
    <div
      style={{
        width: "1000px",
        height: "600px",
        border: "2px solid #a5a5a5",
        fontFamily: "NotoSans",
        fontWeight: "700",
        padding: "30px",
        overflow: "scroll",
      }}
    >
      <h1>{`${userName}님, 선호하시는 음식을 5개 선택해주세요`}</h1>
      <h3>회원님의 선호도를 기반으로 좋아하실 만한 음식을 추천해드릴게.</h3>

      <button style={{ marginBottom: "15px" }}>다음</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "10px",
        }}
      >
        {randomFood.map((food, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={food.image}
              alt={food.name_ko}
              style={{ width: "60px", height: "60px" }}
            />
            <p style={{ fontSize: "12px" }}>{food.name_ko}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavorFoodForm;
