import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../../utils/Cookie";

const SocialLoginHandeler = (props) => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  //인가코드 백으로 보내는 코드
  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "POST",
        url: `http://localhost:8080/login/oauth2/code/kakao/?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*", //이건 cors 에러때문에 넣어둔것. 당신의 프로젝트에 맞게 지워도됨
        },
      })
        .then((res) => {
          console.log("엑세스토큰은: ", res.data.accessToken);

          // 토큰을 브라우저 쿠키에 저장
          setCookie("accessToken", res.data.accessToken, {
            path: "/",
            sameSite: "strict",
          });
          navigate("/main");
        })
        .catch((err) => {
          console.log(err);
          alert("로그인에 실패했습니다");
        });
    };
    kakaoLogin();
  }, [props.history]);

  return (
    <div className="SocialLoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default SocialLoginHandeler;
