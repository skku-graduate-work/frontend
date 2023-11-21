import { useEffect, useState } from "react";
import { GetSimilarFood, GetFoodInformation } from "../../axios/recommend";
import AltFoodImage from "../../images/no_food.jpg";
import "./Recommendation.css";

const Recommendation = (props) => {
  // 상태변수
  const [userName, setUserName] = useState("");
  const [favoriteFood, setFavoriteFood] = useState([]);
  const [favoriteFoodId, setFavoriteFoodId] = useState([]);
  const [recommendFood, setRecommendFood] = useState([]);
  const [recommendFoodInfo, setRecommendFoodInfo] = useState([]);

  // 선호 음식 받아오기
  useEffect(() => {
    setUserName(props.userName);
    if (props.favorite) {
      let temp = [];
      props.favorite.map((element) => {
        temp.push(element);
      });
      setFavoriteFood(temp);
    }
  }, [props]);

  // 선호 음식 ID 추출
  useEffect(() => {
    if (favoriteFood[0]) {
      let temp = [];
      favoriteFood.map((element) => {
        var url = element.image;
        var startIndex = url.lastIndexOf("/") + 1; // 마지막 슬래시 다음 인덱스부터 시작
        var endIndex = url.indexOf("-", startIndex); // 다음 하이픈 이전까지의 인덱스
        var recipeId = url.substring(startIndex, endIndex);
        temp.push(recipeId);
      });
      setFavoriteFoodId(temp);
    }
  }, [favoriteFood]);

  // 유사 요리 받아오기
  useEffect(() => {
    const fetchData = async () => {
      if (favoriteFoodId[0] && !recommendFood.length) {
        let temp = [];
        await Promise.all(
          favoriteFoodId.map(async (element) => {
            try {
              const res = await GetSimilarFood(element);
              if (res.data[0]) {
                temp.push(res.data[0]);
              } else {
                temp.push(null);
              }
            } catch (err) {
              console.log(err);
            }
          })
        );
        setRecommendFood(temp);
      }
    };

    fetchData();
  }, [favoriteFoodId]);

  // 유사 음식 세부정보 받아오기
  useEffect(() => {
    console.log("유사음식세부정보: ", recommendFood);
    let temp = [];
    recommendFood.map((element, index) => {
      if (element) {
        GetFoodInformation(element.id)
          .then((res) => {
            console.log(res);
            temp[index] = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        temp[index] = null;
      }
    });

    setRecommendFoodInfo(temp);
  }, [recommendFood]);

  return (
    <>
      <div className="recommend-area">
        <p className="recommend-title">
          <span style={{ color: "#E2594C" }}>{userName}</span> 님의 선호 요리와
        </p>
        <h2 className="recommend-hint">유사한 이 요리들은 어떠세요?</h2>

        <div className="recommend-list-row">
          <div className="recommend-list-item">
            <a
              href={recommendFood[0] ? recommendFood[0]?.sourceUrl : ""}
              target="_blank"
            >
              <img
                className="recommend-list-img"
                src={
                  recommendFoodInfo[0]
                    ? recommendFoodInfo[0]?.image
                    : AltFoodImage
                }
                alt="recommend_img_01"
              />
            </a>
            <h5 className="recommend-list-name">
              {recommendFood[0]
                ? recommendFood[0]?.title
                : "음식 정보가 없습니다"}
            </h5>
          </div>

          <div className="recommend-list-item">
            <a
              href={recommendFood[1] ? recommendFood[1]?.sourceUrl : ""}
              target="_blank"
            >
              <img
                className="recommend-list-img"
                src={
                  recommendFoodInfo[1]
                    ? recommendFoodInfo[1]?.image
                    : AltFoodImage
                }
                alt="recommend_img_02"
              />
            </a>
            <h5 className="recommend-list-name">
              {recommendFood[1]
                ? recommendFood[1]?.title
                : "음식 정보가 없습니다"}
            </h5>
          </div>

          <div className="recommend-list-item">
            <a
              href={recommendFood[2] ? recommendFood[2]?.sourceUrl : ""}
              target="_blank"
            >
              <img
                className="recommend-list-img"
                src={
                  recommendFoodInfo[2]
                    ? recommendFoodInfo[2]?.image
                    : AltFoodImage
                }
                alt="음식이미지"
              />
            </a>
            <h5 className="recommend-list-name">
              {recommendFood[2]
                ? recommendFood[2]?.title
                : "음식 정보가 없습니다"}
            </h5>
          </div>

          <div className="recommend-list-item">
            <a
              href={recommendFood[3] ? recommendFood[3]?.sourceUrl : ""}
              target="_blank"
            >
              <img
                className="recommend-list-img"
                src={
                  recommendFoodInfo[3]
                    ? recommendFoodInfo[3]?.image
                    : AltFoodImage
                }
                alt="음식이미지"
              />
            </a>
            <h5 className="recommend-list-name">
              {recommendFood[3]
                ? recommendFood[3]?.title
                : "음식 정보가 없습니다"}
            </h5>
          </div>

          <div className="recommend-list-item" style={{ marginRight: "0" }}>
            <a
              href={recommendFood[4] ? recommendFood[4]?.sourceUrl : ""}
              target="_blank"
            >
              <img
                className="recommend-list-img"
                src={
                  recommendFoodInfo[4]
                    ? recommendFoodInfo[4]?.image
                    : AltFoodImage
                }
                alt="음식이미지"
              />
            </a>
            <h5 className="recommend-list-name">
              {recommendFood[4]
                ? recommendFood[4]?.title
                : "음식 정보가 없습니다"}
            </h5>
          </div>
        </div>

        <h2 className="recommend-hint">
          이미지를 클릭하면 외부 레시피 주소로 이동합니다
        </h2>
      </div>
      <div
        style={{ width: "1024px", fontFamily: "NotoSans", fontWeight: "700" }}
      ></div>
    </>
  );
};

export default Recommendation;
