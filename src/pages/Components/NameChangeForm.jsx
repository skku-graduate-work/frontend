import { useEffect, useState } from "react";

const NameChangeForm = (props) => {
  // 상태 변수
  const [accessToken, setAccessToken] = useState("");
  const [name, setName] = useState("");

  // 사용자명 변경함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("사용자명 변경: ", name);
  };

  // 사용자 정보 가져오기
  useEffect(() => {
    setAccessToken(props.accessToken);
  }, [props]);

  return (
    <div
      style={{
        width: "400px",
        height: "80px",
        border: "2px solid #a5a5a5",
        fontFamily: "NotoSans",
        fontWeight: "700",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "240px",
            marginRight: "auto",
            fontFamily: "NotoSans",
            fontWeight: "700",
            fontSize: "16px",
          }}
          placeholder="변경할 이름 입력"
        />

        <button
          type="button"
          onClick={handleSubmit}
          style={{
            width: "100px",
            marginLeft: "auto",
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
          변경하기
        </button>
      </div>
    </div>
  );
};

export default NameChangeForm;
