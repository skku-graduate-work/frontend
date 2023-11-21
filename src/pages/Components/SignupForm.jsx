import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Signup } from "../../axios";

import "react-toastify/dist/ReactToastify.css";

const SignupForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [username, setUsername] = useState("");
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

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // 이메일 인증 로직을 작성하세요
    // 인증이 완료되면 setIsVerified(true)로 설정하세요
    console.log("인증메일 전송");
    toast.success("인증메일이 전송되었습니다!");
  };

  const handleCheckEmail = (e) => {
    e.preventDefault();
    // 인증 코드 확인 로직을 작성하세요
    // 입력된 인증 코드와 일치하는지 확인한 후 setIsEmailVerified(true)로 설정하세요
    // 인증이 완료되면 토스트 메시지를 띄워줍니다.
    console.log("인증코드 확인");
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
    console.log("Username:", username);

    // 회원가입 처리 로직을 작성하세요
    // 입력된 이메일, 비밀번호, 사용자 이름을 사용하여 회원가입을 진행할 수 있습니다
    if (email == "") {
      toast.error("이메일을 입력해주세요");
    } else if (password == "") {
      toast.error("비밀번호를 입력해주세요");
    } else if (username == "") {
      toast.error("사용자명을 입력해주세요");
    } else if (password !== passwordCheck) {
      toast.error("입력한 비밀번호가 일치하지 않습니다");
    } else {
      Signup(email, password, username)
        .then((res) => {
          console.log(res);
          toast.success("회원가입에 성공했습니다");

          // 1초 대기 후 closeModal 함수 실행
          setTimeout(() => {
            props.closeModal();
          }, 1000); // 1000 밀리초 (1초)
        })
        .catch((err) => {
          console.log(err);
          toast.error("회원가입에 실패했습니다");
        });
    }
  };

  return (
    <>
      <div className="login-region-1">
        <h2 className="login-region-1-title">회원가입</h2>
        {/* 이메일 입력창 */}
        <div className="email-region">
          <input
            className="email-input"
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일"
          />
        </div>
        {/* 비밀번호 입력창 */}
        <div className="password-region">
          <input
            className="password-input"
            style={{ color: "black" }}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호"
          />
        </div>
        {/* 비밀번호 확인창 */}
        <div className="password-region">
          <input
            className="password-input"
            style={{ color: "black" }}
            type="password"
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
            placeholder="비밀번호 재입력"
          />
        </div>
        {/* 사용자명 입력창 */}
        <div className="password-region">
          <input
            className="email-input"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="사용자명"
          />
        </div>
        <div className="login-button-area" style={{ marginTop: "100px" }}>
          {/* 회원가입 버튼 */}
          <button className="login-button-2" onClick={handleSubmit}>
            회원가입
          </button>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        limit={1}
        closeButton={false}
        autoClose={1000}
        hideProgressBar
        toastStyle={{
          fontFamily: "NotoSans",
          textAlign: "center",
        }}
      />
    </>
  );
};

export default SignupForm;
