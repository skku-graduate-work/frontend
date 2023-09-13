const Refrigerator = (props) => {
  return (
    <div style={{ display: "flex", fontFamily: "NotoSans", fontWeight: "700" }}>
      <div style={{ width: "512px" }}>
        <h3>사용자 님의 냉장고</h3>
        <div>식재료 표 영역</div>
        <button
          type="submit"
          style={{
            width: "400px",
            height: "40px",
            margin: "30px auto 0 auto",
            border: "0",
            borderRadius: "4px",
            fontSize: "16px",
            color: "#FFFFFF",
            backgroundColor: "#5E5E5E",
            cursor: "pointer",
          }}
        >
          재료 추가하기
        </button>
      </div>
      <div style={{ width: "512px" }}>
        <h3>현재 식재료들로 만들 수 있는 요리 목록:</h3>
        <div>결과 표 영역</div>
      </div>
    </div>
  );
};

export default Refrigerator;
