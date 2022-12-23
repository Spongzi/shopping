import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "./index.css";
import Header from "../../components/Header";
import logo_app from "../../static/images/logo_app.png";
import rongyao8 from "../../static/images/1478173617511.jpg";

function ShoppingCar() {
  return (
    <div id="container">
      <Header />
      <div className="order-header">
        <div className="g">
          <div className="fl">
            <div className="logo logo-index">
              <Link to="/" title="华为商城">
                <img
                  src={logo_app}
                  alt="华为商城"
                  style={{
                    width: "50%",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="fr">
            <div className="progress-area progress-area-3">
              <div
                id="progress-cart"
                className="progress-sc-area hide"
                style={{ display: "block" }}
              >
                我的购物车
              </div>
              <div id="progress-confirm" className="progress-co-area hide">
                填写核对订单信息
              </div>
              <div id="progress-submit" className="progress-sso-area hide">
                成功提交订单
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout">
        <div className="sc-list">
          <div className="sc-pro-list">
            <div className="sc-pro-title-area">
              <div className="h">
                <table border="0" cellPadding="0" cellSpacing="0">
                  <thead>
                    <tr>
                      <th className="tr-check">
                        <input
                          id="checkAll-top"
                          type="checkbox"
                          className="vam"
                          name="all"
                          autoComplete="off"
                        />
                      </th>
                      <th className="tr-pro">商品</th>
                      <th className="tr-price">
                        单价<em>（元）</em>
                      </th>
                      <th className="tr-quantity">数量</th>
                      <th className="tr-subtotal">
                        小计<em>（元）</em>
                      </th>
                      <th className="tr-operate">操作</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <form id="cart-form" autoComplete="off" method="get">
              <input type="hidden" name="state" value="1" />
              <span id="cart-list">
                <div className="sc-pro-area selected" id="order-pro">
                  <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody id="cartContent">
                      <tr className="sc-pro-item">
                        <td className="tr-check">
                          <input
                            id="box"
                            className="checkbox"
                            type="checkbox"
                            name="choose"
                          />
                        </td>
                        <td className="tr-pro">
                          <div className="pro-area clearfix">
                            <p className="p-img">
                              <Link to={""}>
                                <img src={rongyao8} alt={"荣耀8"} />
                              </Link>
                            </p>
                            <p className="p-name">荣耀8</p>
                          </div>
                        </td>
                        <td className="tr-price">
                          <span>¥2299.00</span>
                        </td>
                        <td className="tr-quantity">
                          <div className="sc-stock-area">
                            <div className="stock-area">
                              <Link
                                to=""
                                class="icon-minus-3 vam"
                                title="减"
                              ></Link>
                              <input
                                id="quantity"
                                type="text"
                                className="shop-quantity textbox vam shop1"
                                value="1"
                              />
                              <Link
                                to=""
                                class="icon-plus-3 vam"
                                title="加"
                              ></Link>
                            </div>
                          </div>
                        </td>
                        <td className="tr-subtotal">
                          <b>
                            ¥<span className="priTotal">2299.00</span>
                          </b>
                        </td>
                        <td className="tr-operate">
                          <Link to="" class="icon-sc-del" title="删除">
                            删除
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </span>
            </form>
          </div>
          <div className="hr-20"></div>
          <div id="cart-total-area" className="sc-total-area clearfix">
            {/*<div className="sc-total-control">*/}
            {/*  <input*/}
            {/*    id="checkAll"*/}
            {/*    type="checkbox"*/}
            {/*    name="all"*/}
            {/*    className="vam"*/}
            {/*    autoComplete="off"*/}
            {/*  />*/}
            {/*  <label className="vam" htmlFor="checkAll">*/}
            {/*    全选*/}
            {/*  </label>*/}
            {/*  <br />*/}
            {/*  <br />*/}
            {/*  <input*/}
            {/*    id="checkReverse"*/}
            {/*    type="checkbox"*/}
            {/*    name=""*/}
            {/*    className="vam"*/}
            {/*    autoComplete="off"*/}
            {/*  />*/}
            {/*  <label className="vam" htmlFor="checkReverse">*/}
            {/*    反选*/}
            {/*  </label>*/}
            {/*</div>*/}
            <div className="sc-total-price">
              <table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <th>总计金额：</th>
                    <td id="sc-cartInfo-totalOriginalPrice">
                      ¥<span className="totalAll">0.00</span>
                    </td>
                  </tr>
                  <tr>
                    <th>共节省：</th>
                    <td id="sc-cartInfo-minusPrice">¥0.00</td>
                  </tr>
                  <tr>
                    <th>
                      <em>
                        合计(不含运费)：<em></em>
                      </em>
                    </th>
                    <td>
                      <b id="sc-cartInfo-totalPrice">
                        ¥<span className="totalAll">0.00</span>
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="hr-25"></div>
          <div className="sc-action-area clearfix">
            <Link className="button-style-4 button-go-shopping-3" to="/">
              继续购物
            </Link>
            <Link
              className="button-style-1 button-go-checkout-2"
              to=""
              seed="cart-pay"
            >
              去结算
            </Link>
          </div>
          {/*<div id="cart-empty-msg" className="sc-empty-area">*/}
          {/*  亲，您购物车里还没有物品哦，快去逛逛吧！*/}
          {/*</div>*/}
        </div>
        <div className="hr-35"></div>
        <div className="hr-25"></div>
      </div>
      <div className="hr-75"></div>
      <div className="slogan-container">
        <div className="slogan">
          <ul>
            <li className="s1">
              <i></i>500强企业&nbsp;品质保证
            </li>
            <li className="s2">
              <i></i>7天退货&nbsp;15天换货
            </li>
            <li className="s3">
              <i></i>
              <span>99元起免运费</span>
            </li>
            <li className="s4">
              <i></i>448家维修网点&nbsp;全国联保
            </li>
          </ul>
        </div>
      </div>
      <div className="service-container">
        <div className="service">
          <dl className="s1">
            <dt>
              <i></i>帮助中心
            </dt>
            <dd>
              <ol>
                <li>
                  <Link to="">购物指南</Link>
                </li>
                <li>
                  <Link to="">配送方式</Link>
                </li>
                <li>
                  <Link to="">支付方式</Link>
                </li>
                <li>
                  <Link to="">常见问题</Link>
                </li>
              </ol>
            </dd>
          </dl>
          <dl className="s2">
            <dt>
              <i></i>售后服务
            </dt>
            <dd>
              <ol>
                <li>
                  <Link to="">保修政策</Link>
                </li>
                <li>
                  <Link to="">退换货政策</Link>
                </li>
                <li>
                  <Link to="">退换货流程</Link>
                </li>
                <li>
                  <Link to="">保修状态查询</Link>
                </li>
              </ol>
            </dd>
          </dl>
          <dl className="s3">
            <dt>
              <i></i>技术支持
            </dt>
            <dd>
              <ol>
                <li>
                  <Link to="">售后网点</Link>
                </li>
                <li>
                  <Link to="">荣耀零售店铺</Link>
                </li>
                <li>
                  <Link to="">预约维修</Link>
                </li>
                <li>
                  <Link to="">手机寄修服务</Link>
                </li>
                <li>
                  <Link to="">维修配件价格查询</Link>
                </li>
                <li>
                  <Link to="">软件下载</Link>
                </li>
              </ol>
            </dd>
          </dl>
          <dl className="s4">
            <dt>
              <i></i>关于商城
            </dt>
            <dd>
              <ol>
                <li>
                  <Link to="">公司介绍</Link>
                </li>
                <li>
                  <Link to="">华为商城简介</Link>
                </li>
                <li>
                  <Link to="">联系客服</Link>
                </li>
              </ol>
            </dd>
          </dl>
          <dl className="s5">
            <dt>
              <i></i>关注我们
            </dt>
            <dd>
              <ol>
                <li>
                  <Link className="sina" rel="nofollow" to="">
                    新浪微博
                  </Link>
                </li>
                <li>
                  <Link className="qq" rel="nofollow" to="">
                    腾讯微博
                  </Link>
                </li>
                <li>
                  <Link className="huafen" to="">
                    花粉俱乐部
                  </Link>
                </li>
                <li>
                  <Link to="">商城手机版</Link>
                </li>
              </ol>
            </dd>
          </dl>
        </div>
      </div>
      <div className="hungBar" id="tools-nav">
        <Link
          to={""}
          title="返回顶部"
          className="hungBar-top"
          id="hungBar-top"
          style={{ display: "block", opacity: 1 }}
        >
          返回顶部
        </Link>
        <Link
          to={""}
          id="tools-nav-survery"
          title="意见反馈"
          className="hungBar-feedback hide"
          style={{ display: "block" }}
        >
          意见反馈
        </Link>
        <Link
          to={""}
          id="tools-nav-service-robotim"
          title="在线客服"
          className="hungBar-olcs-web hide"
          style={{ display: "block" }}
        >
          在线客服
        </Link>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default ShoppingCar;
