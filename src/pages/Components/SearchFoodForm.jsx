import { useEffect, useState } from "react";
import { GetFood } from "../../axios";

const SearchFoodForm = (props) => {
  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [ingreList, setIngreList] = useState([]);
  const [foodList, setFoodList] = useState([]);

  // 재료 목록 가져오기
  useEffect(() => {
    setAccessToken(props.accessToken);
    setIngreList(props.ingreList);
  }, [props]);

  // 제작 가능 음식 받아오기
  useEffect(() => {
    if (ingreList.length === 0) {
      // ingreList의 길이가 0이면 아무것도 하지 않음
      return;
    } else if (ingreList.length == 1) {
      // ingreList의 길이가 1 이상이면 GetFood 함수 실행
      GetFood(accessToken, ingreList[0], "", "")
        .then((res) => {
          console.log(res);
          setFoodList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (ingreList.length == 2) {
      // ingreList의 길이가 2 이상이면 GetFood 함수 실행
      GetFood(accessToken, ingreList[0], ingreList[1], "")
        .then((res) => {
          console.log(res);
          setFoodList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // ingreList의 길이가 2 이상이면 GetFood 함수 실행
      GetFood(accessToken, ingreList[0], ingreList[1], ingreList[2])
        .then((res) => {
          console.log(res);
          setFoodList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [ingreList]);

  return (
    <div
      style={{
        width: "1000px",
        height: "600px",
        border: "2px solid #a5a5a5",
        fontFamily: "NotoSans",
        fontWeight: "700",
      }}
    >
      {/* 여기를 채워줘 */}
    </div>
  );
};

export default SearchFoodForm;
