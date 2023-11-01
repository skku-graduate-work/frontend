import { useState, useEffect } from "react";

import { GetUserInfo, PatchProfileImg } from "../../axios";

const ChangeProfileImgForm = (props) => {
  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [image, setImage] = useState(null); // 이미지 상태 변수 추가

  // 이미지를 선택할 때 호출되는 함수
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // 프로필 사진 변경함수
  const handleSubmit = (e) => {
    e.preventDefault();

    // 이미지가 null로 넘어가면 안돼서 예외처리
    if (image == null) {
      setImage("");
    }

    PatchProfileImg(accessToken, image)
      .then((res) => {
        console.log(res);
        GetUserInfo(accessToken)
          .then((res) => {
            console.log(res);
            props.setProfileImg(res.data.user.profileImg);
            alert("성공적으로 등록되었습니다.");
            props.closeModal();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        alert("프로필 사진 변경에 실패했습니다.");
      });
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
          프로필 사진 변경
        </div>

        {/* content area */}
        <div
          style={{
            width: "100%",
            marginTop: "30px",
          }}
        >
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

          {/* 힌트 */}
          <div
            style={{
              height: "20px",
              paddingLeft: "5px",
              display: "flex",
              textAlign: "left",
              alignItems: "center",
              color: "#aeaeae",
            }}
          >
            변경할 사진을 업로드하고 버튼을 누르세요
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            style={{
              width: "100%",
              height: "40px",
              marginTop: "145px",
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
            프로필 사진 변경하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfileImgForm;
