import exampleImage from "../../../images/Food_Login01.jpg";

const FoodCard = (props) => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <img
        src={exampleImage}
        alt="exampleImage"
        style={{
          width: props.width,
          height: props.height - 150,
          cursor: "pointer",
        }}
      />
      <div
        style={{
          marginTop: "15px",
          marginLeft: "25px",
          fontSize: "24px",
          fontFamily: "CookieRun",
          color: "#a0a0a0",
        }}
      >
        RecipeTags
      </div>
      <div
        style={{
          marginTop: "15px",
          marginLeft: "25px",
          fontSize: "36px",
          fontFamily: "CookieRun",
        }}
      >
        RecipeTitle
      </div>
    </div>
  );
};

export default FoodCard;
