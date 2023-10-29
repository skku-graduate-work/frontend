const express = require("express");
const httpProxy = require("http-proxy");

const app = express();
const proxy = httpProxy.createProxyServer();

// CORS 허용을 위한 미들웨어 추가
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 프록시 미들웨어
app.use("/api", (req, res) => {
  // 프록시 서버에서의 실제 요청 대상 주소
  const targetUrl = "http://127.0.0.1:8080";

  // 프록시 서버에서 서버로 요청 중계
  proxy.web(req, res, { target: targetUrl });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
