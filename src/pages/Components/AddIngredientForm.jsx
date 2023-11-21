import { useEffect, useState } from "react";
import {
  GetUserInfo,
  PostIngredient,
  PostObjectDetection,
  ReportODResult,
} from "../../axios";
import "./AddIngredientForm.css";

const AddIngredientForm = (props) => {
  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [image, setImage] = useState(null); // 이미지 상태 변수 추가
  const [image2, setImage2] = useState(null); // 이미지 상태 변수 추가2
  const [mode, setMode] = useState(false); // false=일반입력모드 true=객체탐지모드
  const [results, setResults] = useState([]);

  // 새로운 상태 변수 추가
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);

  // 이미지를 선택할 때 호출되는 함수
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // 이미지를 선택할 때 호출되는 함수(객체탐지모드)
  const handleImageChange2 = (e) => {
    setImage2(e.target.files[0]);
  };

  // 식재료 등록함수(일반)
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

  // 객체탐지 사진 전송함수
  const handleSubmit2 = (e) => {
    e.preventDefault();

    // 이미지가 null로 넘어가면 안돼서 예외처리
    if (image == null) {
      setImage("");
    }

    PostObjectDetection(accessToken, image2)
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 버튼 클릭 처리 함수 (원하는 로직으로 대체하세요)
  const handleDropdownButtonClick = () => {
    // 이미지가 null로 넘어가면 안돼서 예외처리
    if (image2 == null) {
      setImage2("");
    }

    ReportODResult(
      accessToken,
      results[selectedResultIndex].description_ko,
      image2
    )
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

  // 입력모드 변경함수: 객체탐지 입력모드
  const handleChangeMode2 = (e) => {
    e.preventDefault();
    setMode(true);
  };

  // 사용자 정보 가져오기
  useEffect(() => {
    setAccessToken(props.accessToken);
  }, [props]);

  return (
    <>
      <div className="login-region-1">
        <h2 className="login-region-1-title">식재료 추가</h2>
        {/* 일반 입력 모드의 경우 */}
        {!mode && (
          <>
            {/* 식재료명 입력창 */}
            <div className="email-region">
              <input
                className="email-input"
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                placeholder="식재료명"
              />
            </div>
            {/* 첨부파일 영역: 이미지 선택 input 추가 */}
            <div className="password-region">
              <input
                className="password-input"
                type="file"
                accept="image/*"
                style={{ border: "0", padding: "0", backgroundColor: "white" }}
                onChange={handleImageChange}
              />
            </div>
            <div className="login-button-area">
              {/* 식재료 추가 버튼 */}
              <button
                className="add-ingre-button"
                onClick={handleSubmit}
                style={{ marginTop: "55px" }}
              >
                식재료 추가
              </button>
            </div>
          </>
        )}
        {/* 객체탐지 입력 모드의 경우 */}
        {mode && (
          <>
            {/* 첨부파일 영역: 이미지 선택 input 추가 */}
            <div className="email-region">
              <input
                className="password-input"
                type="file"
                accept="image/*"
                style={{ border: "0", padding: "0", backgroundColor: "white" }}
                onChange={handleImageChange2}
              />
            </div>
            <div className="login-button-area">
              {/* 객체 탐지 버튼 */}
              <button className="add-ingre-button2" onClick={handleSubmit2}>
                객체 탐지
              </button>
            </div>
            {/* 결과 드롭다운과 버튼 */}
            {results.length != 0 && (
              <>
                <div className="password-region">
                  <select
                    className="add-ingre-oddropdown"
                    value={selectedResultIndex}
                    onChange={(e) =>
                      setSelectedResultIndex(parseInt(e.target.value))
                    }
                  >
                    {results.map((result, index) => (
                      <option key={index} value={index}>
                        {result.description_ko}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="login-button-area">
                  <button
                    className="add-ingre-button"
                    type="button"
                    onClick={handleDropdownButtonClick}
                  >
                    식재료 추가
                  </button>
                </div>
              </>
            )}
          </>
        )}
        {/* 구분선 */}
        <div className="line-area">
          <hr style={{ flex: "1", borderTop: "1px solid #ccc" }} />
          <span
            style={{
              padding: "0 20px",
              color: "#ccc",
              fontWeight: "700",
              fontFamily: "NanumSquareNeoRg",
            }}
          >
            등록 모드 변경
          </span>
          <hr style={{ flex: "1", borderTop: "1px solid #ccc" }} />
        </div>
        <div className="login-button-area">
          {/* 일반 입력 모드 */}
          <button className="add-ingre-button" onClick={handleChangeMode}>
            일반 입력 모드
          </button>
        </div>
        <div className="login-button-area">
          {/* 객체 탐지 입력 모드 */}
          <button className="add-ingre-button2" onClick={handleChangeMode2}>
            객체 탐지 입력 모드
          </button>
        </div>
      </div>
    </>
  );
};

export default AddIngredientForm;
