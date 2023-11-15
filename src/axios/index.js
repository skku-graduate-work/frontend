import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true,
});

// Login
const Login = async (email, password) => {
  return await instance.post("/user/login", {
    email,
    password,
  });
};

// SocialLogin
const SocialLogin = async (type) => {
  let instance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });
  return await instance.post(`/oauth2/authorization/${type}`);
};

// Signup
const Signup = async (email, password, name) => {
  return await instance.post("/user/signup", {
    email: email,
    password: password,
    nickname: name,
  });
};

// GetUserInfo
const GetUserInfo = async (accessToken) => {
  return await instance.get("/user/ingredient", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const PatchProfileImg = async (accessToken, image) => {
  // FormData 생성
  const formData = new FormData();

  // 이미지 파일 추가
  formData.append("image", image);

  // 데이터 전송
  return await instance.post("/user/update-image", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// SetMinNutrient
const SetMinNutrient = async (
  accessToken,
  minCal,
  minCarb,
  minProt,
  minFat
) => {
  return await instance.put(
    "/user/min-nutrients",
    {
      calories: minCal,
      carbs: minCarb,
      fat: minFat,
      protein: minProt,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// SetMaxNutrient
const SetMaxNutrient = async (
  accessToken,
  maxCal,
  maxCarb,
  maxProt,
  maxFat
) => {
  return await instance.put(
    "/user/max-nutrients",
    {
      calories: maxCal,
      carbs: maxCarb,
      fat: maxFat,
      protein: maxProt,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// PostIngredient
const PostIngredient = async (accessToken, ingredient, image) => {
  // FormData 생성
  const formData = new FormData();

  // JSON 데이터 추가
  formData.append(
    "ingredientRequestDto",
    JSON.stringify({
      name: ingredient,
      expiration_date: "2023-10-30",
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
    })
  );

  // 이미지 파일 추가
  formData.append("image", image);

  // 데이터 전송
  return await instance.post("/ingredient-by-user", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// PostObjectDetection
const PostObjectDetection = async (accessToken, image) => {
  // FormData 생성
  const formData = new FormData();

  // 이미지 파일 추가
  formData.append("image", image);

  // 데이터 전송
  return await instance.post("/ingredient/detect-label-from-image", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// ReportODResult
const ReportODResult = async (accessToken, name, image) => {
  // FormData 생성
  const formData = new FormData();

  // 이미지 파일 추가
  formData.append("image", image);

  return await instance.post(
    `/ingredient/detect-label-from-image/user-result?name_ko=${encodeURIComponent(
      name
    )}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

// GetFood
const GetFood = async (accessToken, ingredient1, ingredient2, ingredient3) => {
  return await instance.post(
    "/food-by-ingredient",
    {
      food1: ingredient1,
      food2: ingredient2,
      food3: ingredient3,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// GetFoodByNut
const GetFoodByNut = async (accessToken) => {
  return await instance.get("/food-by-nutrients", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// GetRandomFood
const GetRandomFood = async (accessToken) => {
  return await instance.get("/favorite-food/random-food", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// ChangeFavoriteFood
const ChangeFavoriteFood = async (
  accessToken,
  FoodID1,
  FoodID2,
  FoodID3,
  FoodID4,
  FoodID5
) => {
  return await instance.patch(
    "/favorite-food",
    {
      favoriteFoodList: [FoodID1, FoodID2, FoodID3, FoodID4, FoodID5],
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export {
  Login,
  SocialLogin,
  Signup,
  GetUserInfo,
  PatchProfileImg,
  SetMinNutrient,
  SetMaxNutrient,
  PostIngredient,
  PostObjectDetection,
  ReportODResult,
  GetFood,
  GetFoodByNut,
  GetRandomFood,
  ChangeFavoriteFood,
};
