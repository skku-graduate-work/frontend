import React from "react";

import FoodCard from "./FoodCard";

const Reccomendation = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="title"
        style={{
          fontSize: "60px",
          fontFamily: "CookieRun",
          textAlign: "center",
        }}
      >
        추천레시피
      </div>
      <div
        className="subTitle"
        style={{
          fontSize: "30px",
          fontFamily: "CookieRun",
          color: "#a0a0a0",
          textAlign: "center",
        }}
      >
        회원님의 선호도를 기반으로 레시피를 추천해드릴게요.
      </div>
      <div
        className="imageRegion"
        style={{ display: "flex", marginTop: "20px" }}
      >
        <div
          className="left"
          style={{ width: "calc(50% - 10px)", paddingRight: "10px" }}
        >
          <div style={{ height: "8oopx" }}>
            <FoodCard width={790} height={800} />
          </div>
          <div style={{ display: "flex", width: "100%", marginTop: "15px" }}>
            <div style={{ height: "400px", paddingRight: "10px" }}>
              <FoodCard width={385} height={400} />
            </div>
            <div style={{ height: "400px", paddingLeft: "10px" }}>
              <FoodCard width={385} height={400} />
            </div>
          </div>
        </div>

        <div
          className="right"
          style={{ width: "calc(50% - 10px)", paddingLeft: "10px" }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ height: "400px", paddingRight: "10px" }}>
              <FoodCard width={385} height={400} />
            </div>
            <div style={{ height: "400px", paddingLeft: "10px" }}>
              <FoodCard width={385} height={400} />
            </div>
          </div>
          <div style={{ height: "8oopx", marginTop: "15px" }}>
            <FoodCard width={790} height={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reccomendation;
