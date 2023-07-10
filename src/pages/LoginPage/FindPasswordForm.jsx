import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // 이메일 인증 로직을 작성하세요
    // 인증이 완료되면 setIsVerified(true)로 설정하세요
    console.log("비밀번호 찾기 인증메일 전송");
    toast.success("인증메일이 전송되었습니다!");
  };

  const handleCheckEmail = (e) => {
    e.preventDefault();
    // 인증 코드 확인 로직을 작성하세요
    // 입력된 인증 코드와 일치하는지 확인한 후 setIsEmailVerified(true)로 설정하세요
    // 인증이 완료되면 토스트 메시지를 띄워줍니다.
    console.log("비밀번호 찾기 인증코드 확인");
    if (verificationCode === "123456") {
      setIsEmailVerified(true);
      toast.success("이메일이 인증되었습니다!");
    } else {
      toast.error("인증코드가 일치하지 않습니다.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("PasswordCheck:", passwordCheck);
    // 회원가입 처리 로직을 작성하세요
    // 입력된 이메일, 비밀번호, 사용자 이름을 사용하여 회원가입을 진행할 수 있습니다

    // 토스트 메시지 보이기
    const result = window.confirm("비밀번호를 변경하시겠습니까?");
    if (result) {
      // 확인 버튼을 클릭한 경우
      // 원하는 동작 수행
    } else {
      // 취소 버튼을 클릭한 경우
      // 원하는 동작 수행
    }
  };

  return (
    <div style={{ margin: "50px 120px" }}>
      <div
        style={{
          fontSize: "48px",
          fontFamily: "CookieRun",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        비밀번호 찾기
      </div>
      <form
        style={{ width: "600px", margin: "25px auto 0 auto" }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            textAlign: "left",
            fontSize: "24px",
            fontFamily: "CookieRun",
          }}
        >
          Email
        </div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{
            width: "100%",
            display: "block",
            fontSize: "24px",
            padding: "10px",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
          placeholder="이메일"
          disabled={isEmailVerified}
        />

        {!isEmailVerified && (
          <div style={{ display: "flex" }}>
            <button
              type="button"
              onClick={handleSendEmail}
              style={{
                display: "inline-block",
                fontSize: "18px",
                padding: "5px 10px",
                backgroundColor: "#0A3440",
                color: "#FFFFFF",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "CookieRun",
              }}
            >
              인증메일 보내기
            </button>

            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              style={{
                display: "block",
                fontSize: "24px",
                padding: "10px",
                marginLeft: "20px",
                boxSizing: "border-box",
              }}
              placeholder="인증코드 입력"
            />

            <button
              type="button"
              onClick={handleCheckEmail}
              style={{
                display: "inline-block",
                fontSize: "18px",
                marginLeft: "auto",
                padding: "5px 10px",
                backgroundColor: "#0A3440",
                color: "#FFFFFF",
                borderRadius: "4px",
                cursor: "pointer",
                fontFamily: "CookieRun",
              }}
            >
              인증확인
            </button>
          </div>
        )}

        {isEmailVerified && (
          <span
            style={{
              color: "green",
              marginLeft: "10px",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            ✓
          </span>
        )}
        {isEmailVerified && (
          <>
            <div
              style={{
                marginTop: "40px",
                textAlign: "left",
                fontSize: "24px",
                fontFamily: "CookieRun",
              }}
            >
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                width: "100%",
                display: "block",
                fontSize: "24px",
                padding: "10px",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
              placeholder="새로운 비밀번호"
            />

            <div
              style={{
                marginTop: "40px",
                textAlign: "left",
                fontSize: "24px",
                fontFamily: "CookieRun",
              }}
            >
              Password Check
            </div>
            <input
              type="password"
              value={passwordCheck}
              onChange={handlePasswordCheckChange}
              style={{
                width: "100%",
                display: "block",
                fontSize: "24px",
                padding: "10px",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
              placeholder="새로운 비밀번호 재확인"
            />

            <button
              type="submit"
              style={{
                marginTop: "55px",
                width: "100%",
                display: "block",
                fontSize: "24px",
                fontFamily: "CookieRun",
                padding: "10px 20px",
                backgroundColor: "#0A3440",
                color: "#FFFFFF",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              비밀번호 변경하기
            </button>
          </>
        )}
      </form>
      <ToastContainer
        position="bottom-center"
        limit={1}
        closeButton={false}
        autoClose={3000}
        hideProgressBar
        toastStyle={{
          fontFamily: "CookieRun",
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default SignupForm;
