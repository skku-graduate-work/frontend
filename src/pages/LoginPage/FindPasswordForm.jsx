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
    <div
      style={{
        width: "600px",
        height: "600px",
        border: "2px solid #a5a5a5",
        fontFamily: "NotoSans",
        fontWeight: "700",
      }}
    >
      <div style={{ width: "450px", height: "500px", margin: "50px 75px" }}>
        <div
          style={{
            height: "50px",
            textAlign: "center",
            fontSize: "38px",
          }}
        >
          비밀번호 찾기
        </div>
        <form
          style={{ width: "100%", height: "420px", marginTop: "30px" }}
          onSubmit={handleSubmit}
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
            Email
          </div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: "100%",
              height: "40px",
              display: "block",
              padding: "10px",
              boxSizing: "border-box",
              fontFamily: "NotoSans",
              fontWeight: "700",
              fontSize: "16px",
            }}
            placeholder="이메일을 입력해주세요"
            disabled={isEmailVerified}
          />

          {!isEmailVerified && (
            <div style={{ height: "40px", marginTop: "10px", display: "flex" }}>
              <button
                type="button"
                onClick={handleSendEmail}
                style={{
                  width: "120px",
                  height: "100%",
                  display: "inline-block",
                  backgroundColor: "#3498DB",
                  color: "#FFFFFF",
                  fontFamily: "NotoSans",
                  fontWeight: "700",
                  fontSize: "16px",
                  border: "0",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                인증메일 전송
              </button>

              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                style={{
                  width: "230px",
                  marginLeft: "10px",
                  display: "block",
                  padding: "10px",
                  boxSizing: "border-box",
                  fontFamily: "NotoSans",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
                placeholder="인증코드 입력"
              />

              <button
                type="button"
                onClick={handleCheckEmail}
                style={{
                  width: "80px",
                  display: "inline-block",
                  marginLeft: "auto",
                  padding: "5px",
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
                인증확인
              </button>
            </div>
          )}

          {isEmailVerified && (
            <span
              style={{
                display: "block",
                height: "40px",
                marginTop: "10px",
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
                  height: "20px",
                  marginTop: "10px",
                  paddingLeft: "5px",
                  display: "flex",
                  textAlign: "left",
                  alignItems: "center",
                }}
              >
                New Password
              </div>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                style={{
                  width: "100%",
                  height: "40px",
                  display: "block",
                  padding: "10px",
                  boxSizing: "border-box",
                  fontFamily: "NotoSans",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
                placeholder="새로운 비밀번호를 입력해주세요"
              />

              <div
                style={{
                  height: "20px",
                  marginTop: "10px",
                  paddingLeft: "5px",
                  display: "flex",
                  textAlign: "left",
                  alignItems: "center",
                }}
              >
                New Password Check
              </div>
              <input
                type="password"
                value={passwordCheck}
                onChange={handlePasswordCheckChange}
                style={{
                  width: "100%",
                  height: "40px",
                  display: "block",
                  padding: "10px",
                  boxSizing: "border-box",
                  fontFamily: "NotoSans",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
                placeholder="새로운 비밀번호를 한번 더 입력해주세요"
              />

              <button
                type="submit"
                style={{
                  marginTop: "130px",
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
    </div>
  );
};

export default SignupForm;
