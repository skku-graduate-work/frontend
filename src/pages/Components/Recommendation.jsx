import { useEffect, useState } from "react";

import { GetRecommendation } from "../../axios/model";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import AltFoodImage from "../../images/no_food.jpg";
import { autocompleteClasses } from "@mui/material";

const Recommendation = (props) => {
  // 상태변수
  const [userName, setUserName] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [recommendFood, setRecommendFood] = useState([]);

  // Spoonacular API 키
  const apiKey = "a4ddf5c135114a29b5644d98695c2960";

  // 특정 Food ID
  const [recommendID, setRecommendID] = useState([]);

  // 선호 요리 받아오기
  useEffect(() => {
    setUserName(props.userName);
    if (props.favorite) {
      let temp = [];
      props.favorite.map((element, index) => {
        temp.push(element.name_en);
      });
      setFavorite(temp);
    }
  }, [props]);

  // 추천 요리 받아오기
  useEffect(() => {
    if (favorite.length) {
      GetRecommendation(favorite)
        .then((res) => {
          console.log(res);
          let temp = [];
          for (let i = 0; i < Math.min(5, res.data.result.length); i++) {
            temp.push(res.data.result[i].id);
          }
          setRecommendID(temp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [favorite]);

  // Spoonacular API 호출
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const promises = recommendID.map(async (id) => {
          const apiEndpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
          const response = await fetch(apiEndpoint);
          const data = await response.json();
          return data;
        });

        const results = await Promise.all(promises);
        setRecommendFood(results);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    if (recommendID.length === 5) {
      fetchRecommendations();
    }
  }, [recommendID]);

  console.log(recommendFood);

  return (
    <div style={{ width: "1024px", fontFamily: "NotoSans", fontWeight: "700" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ color: "#0a0a5c" }}>{userName}</h2>
        <h2 style={{ marginLeft: "5px", fontWeight: "400" }}>
          님의 선호도를 바탕으로 요리를 추천해드릴게요.
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <ArrowBackIosIcon style={{ marginRight: "auto", fontSize: "64px" }} /> */}
        <div style={{ width: "160px", height: "240px" }}>
          <img
            src={recommendFood[0] ? recommendFood[0]?.image : AltFoodImage}
            alt="음식이미지"
            style={{
              width: "100%",
              height: "160px",
              marginBottom: "auto",
              border: "2px solid #a5a5a5",
              boxSizing: "border-box",
            }}
          />
          <h5 style={{ margin: 0, textAlign: "center" }}>
            {recommendFood[0]
              ? recommendFood[0]?.title
              : "추천 음식이 없습니다"}
          </h5>
        </div>

        <div style={{ width: "160px", height: "240px", marginLeft: "15px" }}>
          <img
            src={recommendFood[1] ? recommendFood[1]?.image : AltFoodImage}
            alt="음식이미지"
            style={{
              width: "100%",
              height: "160px",
              marginBottom: "auto",
              border: "2px solid #a5a5a5",
              boxSizing: "border-box",
            }}
          />
          <h5 style={{ margin: 0, textAlign: "center" }}>
            {recommendFood[1]
              ? recommendFood[1]?.title
              : "추천 음식이 없습니다"}
          </h5>
        </div>

        <div style={{ width: "160px", height: "240px", marginLeft: "15px" }}>
          <img
            src={recommendFood[2] ? recommendFood[2]?.image : AltFoodImage}
            alt="음식이미지"
            style={{
              width: "100%",
              height: "160px",
              marginBottom: "auto",
              border: "2px solid #a5a5a5",
              boxSizing: "border-box",
            }}
          />
          <h5 style={{ margin: 0, textAlign: "center" }}>
            {recommendFood[2]
              ? recommendFood[2]?.title
              : "추천 음식이 없습니다"}
          </h5>
        </div>

        <div style={{ width: "160px", height: "240px", marginLeft: "15px" }}>
          <img
            src={recommendFood[3] ? recommendFood[3]?.image : AltFoodImage}
            alt="음식이미지"
            style={{
              width: "100%",
              height: "160px",
              marginBottom: "auto",
              border: "2px solid #a5a5a5",
              boxSizing: "border-box",
            }}
          />
          <h5 style={{ margin: 0, textAlign: "center" }}>
            {recommendFood[3]
              ? recommendFood[3]?.title
              : "추천 음식이 없습니다"}
          </h5>
        </div>

        <div style={{ width: "160px", height: "240px", marginLeft: "15px" }}>
          <img
            src={recommendFood[4] ? recommendFood[4]?.image : AltFoodImage}
            alt="음식이미지"
            style={{
              width: "100%",
              height: "160px",
              marginBottom: "auto",
              border: "2px solid #a5a5a5",
              boxSizing: "border-box",
            }}
          />
          <h5 style={{ margin: 0, textAlign: "center" }}>
            {recommendFood[4]
              ? recommendFood[4]?.title
              : "추천 음식이 없습니다"}
          </h5>
        </div>

        {/* <ArrowForwardIosIcon style={{ marginLeft: "auto", fontSize: "64px" }} /> */}
      </div>
    </div>
  );
};

export default Recommendation;
