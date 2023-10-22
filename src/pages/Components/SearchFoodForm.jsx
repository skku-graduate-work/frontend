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
        padding: "40px",
        boxSizing: "border-box",
        border: "2px solid #a5a5a5",
        fontFamily: "NotoSans",
        fontWeight: "700",
        overflow: "hidden",
      }}
    >
      <h1 style={{ margin: "0", fontSize: "36px", fontFamily: "NotoSans" }}>
        선택한 재료로 만들 수 있는 요리입니다.
      </h1>
      <div
        style={{
          height: "450px",
          overflowY: "scroll", // 세로 scrollbar만 표시
          overflowX: "hidden", // 가로 scrollbar는 숨김
        }}
      >
        <table
          style={{
            width: "100%",
            marginTop: "15px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: "50%",
                  background: "#EAEAEA",
                  border: "1px solid #dddddd",
                }}
              >
                이미지
              </th>
              <th
                style={{
                  width: "50%",
                  background: "#EAEAEA",
                  border: "1px solid #dddddd",
                }}
              >
                요리명
              </th>
            </tr>
          </thead>
          <tbody>
            {foodList.map((food, index) => (
              <tr
                key={index}
                style={{
                  height: "150px",
                  marginTop: "10px",
                }}
              >
                {console.log(food.image.substring(1, food.image.length - 1))}
                <td
                  style={{
                    width: "50%",
                    textAlign: "center",
                    borderBottom: "2px solid #aeaeae",
                  }}
                >
                  <img
                    src={food.image.substring(1, food.image.length - 1)} // foodList에 있는 이미지 소스 경로
                    alt={food.name_ko} // 이미지 대체 텍스트
                    style={{ width: "130px", height: "130px" }} // 이미지 크기 조절
                  />
                </td>
                <td
                  style={{
                    width: "50%",
                    textAlign: "center",
                    borderBottom: "2px solid #aeaeae",
                  }}
                >
                  <h3
                    style={{
                      marginTop: "0",
                      fontSize: "16px",
                      color: "#aeaeae",
                    }}
                  >
                    {food.name_en.substring(1, food.name_en.length - 1)}
                  </h3>
                  {food.name_ko}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchFoodForm;
