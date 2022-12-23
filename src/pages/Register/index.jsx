import "./index.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import logo from "../../static/images/huaweilogo2.png";

function Register() {
  return (
    <form onSubmit="return register()">
      <div className="reg">
        <div className="head-background">
          <div className="head_center">
            <Link to="/" className="main-logo">
              <img src={logo} alt={"logo"} />
            </Link>
            <div className="website-name">
              <b
                style={{
                  fontSize: 23,
                  marginTop: -4,
                  float: "left",
                }}
              >
                |
              </b>
              <b
                style={{
                  fontSize: 23,
                  marginTop: -1,
                  float: "left",
                  marginLeft: 5,
                }}
              >
                华为商城
              </b>
            </div>
          </div>
        </div>
        <div className="wp1 relative">
          <div className="reg-content" id="registerForm">
            <div className="reg-tab">
              <a href="" className="tab-phone sel">
                手机号
              </a>
              <a href="" className="tab-email">
                电子邮箱{" "}
              </a>
            </div>
            <div className="login2 r">
              已有华为帐号
              <Link to={"/login"} className="login-a" title="登录">
                登录{" "}
              </Link>
              ▶
            </div>
            <div className="reg-detail">
              <h3 className="reg-title">注册华为帐号</h3>
              <p className="node-intro">
                华为帐号是您用于访问所有华为服务的帐号。使用华为帐号登录后，您将可以使用云服务、
                华为商城、花粉俱乐部、应用市场、EMUI产品、华为网盘和开发者联盟。
              </p>
              <div className="box-shadow-in"></div>
              <div className="node">
                <div className="node-title">华为帐号</div>
                <div className="node-intro">
                  输入手机号作为您的华为帐号，用于登录、重设密码、验证身份。
                </div>
                <div className="node-des mkcl">
                  <div className="node-input r mkcl">
                    <div className="short r">
                      <div className="dinput">
                        <input
                          type="text"
                          id="username"
                          name="formBean.username"
                          maxLength="50"
                          tabIndex="1"
                          style={{ zIndex: 1 }}
                          placeholder="输入手机号"
                        />
                      </div>
                    </div>
                    <div className="short">
                      <div className="ddrop" id="input_languageCode">
                        <input type="hidden" id="countryCode" value="0086" />
                        <input type="hidden" value="0086" />
                        <b className="dptick r"></b>
                        <span>+86(中国)</span>
                      </div>
                    </div>
                  </div>
                  <div className="input-intro">手机号：</div>
                </div>
                <div className="node-des mkcl">
                  <div className="node-input r">
                    <div className="short r">
                      <div>
                        <input
                          type="button"
                          className="dbtn2 r"
                          id="getValiCode"
                          intervaltime="60"
                          value="获取验证码"
                        />
                        <span
                          id="msg_getPhoneRandomCode"
                          style={{
                            position: "relative",
                            top: 34,
                          }}
                        ></span>
                      </div>
                    </div>
                    <div className="short">
                      <div className="dinput">
                        <input
                          type="text"
                          autoComplete="off"
                          className="verify vam ime-disabled"
                          id="authCode"
                          style={{
                            verticalAlign: "middle",
                            zIndex: 1,
                          }}
                          name="formBean.authCode"
                          maxLength="8"
                          tabIndex="3"
                          placeholder="短信验证码"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-intro">验证码：</div>
                </div>
              </div>
              <div className="box-shadow-in"></div>
              <div className="node">
                <div className="node-title">设置登录密码</div>
                <div className="node-intro">
                  密码由8-32位字符组成，需至少包含一个大写字母、一个小写字母和一个数字，建议不与其他密码相同
                </div>
                <div className="node-des mkcl">
                  <div className="node-input r">
                    <div className="dinput">
                      <input
                        type="password"
                        autoComplete="off"
                        className="text vam"
                        id="password"
                        name="formBean.password"
                        maxLength="32"
                        tabIndex="4"
                        placeholder="8~32个字符"
                        style={{ zIndex: 1 }}
                      />
                    </div>
                    <div className="pwd-letter">
                      <span>弱 </span>
                      <span> 中 </span>
                      <span> 强 </span>
                    </div>
                  </div>
                  <div className="input-intro">密码：</div>
                </div>
                <div className="node-des mkcl">
                  <div className="node-input r">
                    <div className="dinput">
                      <input
                        type="password"
                        autoComplete="off"
                        className="text vam"
                        id="password2"
                        name="checkPassword"
                        maxLength="32"
                        tabIndex="5"
                        id="input_label_0"
                        style={{ zIndex: 1 }}
                        placeholder="8~32个字符"
                      />
                    </div>
                    <span id="msg_checkPassword"></span>
                  </div>
                  <div className="input-intro">确认密码：</div>
                </div>
              </div>
              <div className="box-shadow-in"></div>
              <div className="node" id="chooseCountry">
                <div className="regAgrTitle node-title">华为帐号服务条款</div>
                <div className="node-title">国家/地区</div>
                <div className="foot-selectCountry-margin selectCountry-right">
                  <div className="selectedCountry_style">中国</div>
                </div>
                <div id="regXCountry" className="node-intro">
                  您正在注册中国的华为帐号
                </div>
              </div>
              <div className="box-shadow-in" id="chooseCountryShadow"></div>
              <div id="agreement">
                <div className="node">
                  <div className="node-intro">
                    <div className="agrLineH">
                      华为将为您创建唯一的华为帐号，来标识您和提供更优服务，且需搜集和处理以下信息：
                    </div>
                    <div className="agrLineH agrIndent">
                      您所有登录的设备信息，包括：IMEI、IMSI、SN、国家/地区、语言、型号和版本号；
                    </div>
                    <div className="agrLineH agrIndent">
                      您向我们提交的个人信息，包括：手机号、邮件地址、密码、头像、昵称、生日、姓名和性别；
                    </div>
                    <div className="agrLineH">
                      上述数据将会传输并保存至华为全球的服务器。您可通过销户删除所有个人数据。
                    </div>
                    <br />
                    <div className="agrLineH">
                      华为帐号用户可以通过手机号或邮件地址搜索到您，并可查看您的公开信息，包括：头像、昵称、城市等。您也可以在华为帐号的设置中关闭。
                    </div>
                    <br />
                    <div className="agrLineH">
                      点击“注册”，即表示您同意上述内容及
                      <a href="" className="loginAndRegLink">
                        华为帐号用户协议
                      </a>
                      并确认您已阅读
                      <a href="" className="loginAndRegLink">
                        华为隐私政策
                      </a>
                      。
                    </div>
                  </div>
                </div>
                <div className="box-shadow-in"></div>
              </div>
              <div className="reg-btn" align="center">
                {/*TODO 应该发送请求给后端,这里节约时间直接返回登录页面或者首页*/}
                <Link to={"/"}>
                  <input
                    type="submit"
                    className="btn btn-reg sel"
                    id="btnSubmit"
                    value="立即注册"
                    tabIndex="7"
                  />
                </Link>
              </div>
            </div>
            <div className="box-shadow"></div>
          </div>
        </div>
        <div className="wp1 ft">
          <div className="reg-content">
            <p className="footer">
              <a id="foot_privacy" href="" className="rule">
                华为隐私政策
              </a>
              <a id="foot_EULA" href="" className="rule">
                华为帐号用户协议
              </a>
              <a href="">
                <em style={{ fontStyle: "normal" }}>|</em>{" "}
              </a>
              <a href="" style={{ textDecoration: "underline" }}>
                常见问题
              </a>
            </p>
            <Footer />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
