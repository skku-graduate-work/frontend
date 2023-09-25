import testImage from "../../../images/Food_Login03.jpg";
import testImage2 from "../../../images/Kurly_Logo03.jpg";

const UserInfoForm = (props) => {
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
        border: "2px solid #a5a5a5",
        fontFamily: "NotoSans",
        fontWeight: "700",
      }}
    >
      <div
        style={{
          width: "700px",
          height: "500px",
          margin: "50px",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "50px",
            textAlign: "center",
            fontSize: "38px",
            position: "relative",
            zIndex: 1, // 텍스트 요소의 쌓임 순서를 높게 설정
          }}
        >
          <span
            style={{
              position: "relative",
              backgroundColor: "white",
              padding: "0 5px",
            }}
          >
            회원정보 수정
          </span>
        </div>

        {/* 중간선을 그리는 가상 요소 */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "5%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "1px",
            backgroundColor: "gray",
            zIndex: 0, // 선 요소의 쌓임 순서를 낮게 설정
          }}
        ></span>

        <div style={{ width: "100%", display: "flex" }}>
          {/* Left */}
          <div
            style={{
              width: "50%",
              height: "460px",
              borderRight: "2px solid #a5a5a5",
              boxSizing: "border-box",
              paddingTop: "10px",
              paddingRight: "10px",
            }}
          >
            {/* 프로필 사진 */}
            <div style={{ textAlign: "center" }}>
              <img
                src={testImage2}
                alt="사용자프로필사진"
                style={{
                  width: "200px",
                  height: "200px",
                  border: "4px solid #a5a5a5",
                }}
              />

              <button
                type="submit"
                style={{
                  marginTop: "25px",
                  width: "100%",
                  height: "40px",
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
                프로필 사진 변경하기
              </button>
            </div>

            {/* 사용자명 */}
            <div
              style={{
                height: "20px",
                marginTop: "20px",
                paddingLeft: "5px",
                display: "flex",
                textAlign: "left",
                alignItems: "center",
              }}
            >
              사용자명
            </div>
            <input
              type="text"
              value={""}
              onChange={console.log()}
              disabled
              style={{
                width: "100%",
                height: "40px",
                marginTop: "5px",
                display: "block",
                padding: "10px",
                boxSizing: "border-box",
                fontFamily: "NotoSans",
                fontWeight: "700",
                fontSize: "16px",
              }}
              placeholder={props.userName}
            />

            {/* 이메일 */}
            <div
              style={{
                height: "20px",
                marginTop: "20px",
                paddingLeft: "5px",
                display: "flex",
                textAlign: "left",
                alignItems: "center",
              }}
            >
              이메일
            </div>
            <input
              type="text"
              value={""}
              onChange={console.log()}
              disabled
              style={{
                width: "100%",
                height: "40px",
                marginTop: "5px",
                display: "block",
                padding: "10px",
                boxSizing: "border-box",
                fontFamily: "NotoSans",
                fontWeight: "700",
                fontSize: "16px",
              }}
              placeholder={props.userName}
            />
          </div>

          {/* Right */}
          <div
            style={{
              width: "50%",
              height: "450px",
              paddingTop: "10px",
              paddingLeft: "10px",
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
              선호 음식
            </div>
            <div style={{ height: "175px", marginTop: "5px", display: "flex" }}>
              <div style={{ height: "100%", textAlign: "center" }}>
                <img
                  src={testImage}
                  alt="시험용이미지"
                  style={{ width: "110px", height: "150px" }}
                />
                <div style={{ height: "20px", margin: "0", fontSize: "16px" }}>
                  음식명
                </div>
              </div>

              <div
                style={{
                  height: "100%",
                  marginLeft: "5px",
                  textAlign: "center",
                }}
              >
                <img
                  src={testImage}
                  alt="시험용이미지"
                  style={{ width: "110px", height: "150px" }}
                />
                <div style={{ height: "20px", margin: "0", fontSize: "16px" }}>
                  음식명
                </div>
              </div>

              <div
                style={{
                  height: "100%",
                  marginLeft: "5px",
                  textAlign: "center",
                }}
              >
                <img
                  src={testImage}
                  alt="시험용이미지"
                  style={{ width: "110px", height: "150px" }}
                />
                <div style={{ height: "20px", margin: "0", fontSize: "16px" }}>
                  음식명
                </div>
              </div>
            </div>
            <div
              style={{ height: "175px", marginTop: "10px", display: "flex" }}
            >
              <div style={{ height: "100%", textAlign: "center" }}>
                <img
                  src={testImage}
                  alt="시험용이미지"
                  style={{ width: "110px", height: "150px" }}
                />
                <div style={{ height: "20px", margin: "0", fontSize: "16px" }}>
                  음식명
                </div>
              </div>

              <div
                style={{
                  height: "100%",
                  marginLeft: "5px",
                  textAlign: "center",
                }}
              >
                <img
                  src={testImage}
                  alt="시험용이미지"
                  style={{ width: "110px", height: "150px" }}
                />
                <div style={{ height: "20px", margin: "0", fontSize: "16px" }}>
                  음식명
                </div>
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: "25px",
                width: "100%",
                height: "40px",
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
              선호 음식 변경하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;
