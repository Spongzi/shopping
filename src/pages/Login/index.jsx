import Footer from "../../components/Footer";
import "./index.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div
        style={{
          width: 1500,
          height: 30,
          backgroundColor: "black",
        }}
      >
        <div className="d1">简体中文(中国)</div>
      </div>
      <div className="box1">
        <div className="d2">帐号登录</div>
        <div className="d6">
          <input
            type="text"
            placeholder="&nbsp;&nbsp;帐号名/邮箱/手机号/"
            style={{
              height: 42,
              lineHeight: 42,
              background: "#ffffff",
              border: "1px solid #d4d4d4",
              borderRadius: 2,
              outline: "none",
              width: "100%",
              marginTop: 10,
              marginBottom: 10,
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="&nbsp;&nbsp;密码"
            style={{
              height: 42,
              lineHeight: 42,
              background: "#ffffff",
              border: "1px solid #d4d4d4",
              borderRadius: 2,
              outline: "none",
              width: "100%",
              marginTop: 10,
              marginBottom: 10,
            }}
          />
        </div>
        <div className="d3">短信验证码登录</div>
        <div>
          <input
            type="submit"
            value="登录"
            style={{
              display: "block",
              maxHeight: 48,
              padding: "15px 20px",
              width: "100%",
              textAlign: "center",
              backgroundColor: "#C7000B",
              border: "1px solid #C7000B",
              borderRadius: 4,
              fontSize: 18,
              fontWeight: 500,
              color: "#ffffff",
            }}
          />
        </div>
        <div className="d4">
          <Link to={"/register"} style={{ color: "#0000FF" }}>
            立即注册
          </Link>
          &nbsp;|&nbsp;
          <Link to={"/register"} style={{ color: "#0000FF" }}>
            忘记密码
          </Link>
          &nbsp;|&nbsp;
          <Link to={"/register"} style={{ color: "#0000FF" }}>
            修改密码
          </Link>
        </div>
        <div className="d6">点击获取更多帮助</div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
