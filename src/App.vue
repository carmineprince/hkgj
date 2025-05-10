<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <div class="layout-container">
          <Header class="header">
            <div v-show="screenWidth >= 992" style="max-width: 1922px;margin: 0 auto;">
              <Menu mode="horizontal" theme="light" :active-name="this.$store.state.mainNavState" @on-select="onSelect">
                <div class="layout-logo">
                  <img class="brand-img" src="@/assets/company-logo.png">
                </div>
                <div class="layout-nav">
                  <!-- <MenuItem name="7"> -->
                  <!-- <p v-if="this.$store.state.showMethod == 1"
                     style="color: white; margin-right: 30px;margin-left:30px;cursor: pointer;position: absolute;top: -40px;right: -2px;font-size: 9px;"
                     @click="touchShowMethod"><span style="color: #FF4141;">中文</span>/EN</p>
                  <p v-else
                     style="color: white; margin-right: 30px;margin-left:30px;cursor: pointer;position: absolute;top: -40px;right: -2px;font-size: 9px;"
                     @click="touchShowMethod">
                    中文/<span style="color: #FF4141;">EN</span></p> -->
                  <!-- </MenuItem> -->
                  <!-- <MenuItem v-if="this.$store.state.showMethod == 1" name="contactUs" to="/contactUs">
                    联系我们
                  </MenuItem>
                  <MenuItem v-else name="contactUs" to="/contactUs">
                    ContactUs
                  </MenuItem> -->
                  <!-- <MenuItem v-if="this.$store.state.showMethod == 1" name="honor" to="/honor">
                    企业荣誉
                  </MenuItem>
                  <MenuItem v-else name="honor" to="/honor">
                    Honor
                  </MenuItem> -->
                  <MenuItem v-if="this.$store.state.showMethod == 1" name="product" to="/product">
                    豪克轮胎
                  </MenuItem>
                  <MenuItem v-else name="product" to="/product">
                    Products
                  </MenuItem>
                  <!-- <MenuItem v-if="this.$store.state.showMethod == 1" name="news" to="/news">
                    新闻动态
                  </MenuItem>
                  <MenuItem v-else name="news" to="/news">
                    News
                  </MenuItem> -->
                  <MenuItem v-if="this.$store.state.showMethod == 1" name="about" to="/about">
                    关于我们
                  </MenuItem>
                  <MenuItem v-else name="about" to="/about">
                    AboutUs
                  </MenuItem>
                  <MenuItem v-if="this.$store.state.showMethod == 1" name="home" to="/">
                    山东豪克
                  </MenuItem>
                  <MenuItem v-else name="home" to="/">
                    Home
                  </MenuItem>
                </div>
              </Menu>
            </div>
            <div v-show="screenWidth < 992">
              <Menu mode="horizontal" theme="light" @on-select="value1 = !value1" active-name="1">
                <div class="layout-logo">
<!--                  <img class="brand-img-sm" src="./assets/redLogo_240*64.png">-->
                  <img class="brand-img-sm" src="@/assets/company-logo.png">
                </div>
                <div class="layout-nav">
                  <MenuItem name="1" style="float: right;">
                    <Icon type="md-list"/>
                  </MenuItem>
                  <!--<p style="float: right;color: white; margin-right: 30px;margin-left:30px;cursor: pointer;"><span-->
                  <!--style="color: #FF4141;">中文</span>/EN</p>-->
                  <!-- <p v-if="this.$store.state.showMethod == 1"
                     style="float: right;color: white; margin-right: 30px;margin-left:30px;cursor: pointer;"
                     @click="touchShowMethod"><span
                    style="color: #FF4141;">中文</span>/EN</p>
                  <p v-else
                     style="float: right;color: white; margin-right: 30px;margin-left:30px;cursor: pointer;"
                     @click="touchShowMethod">
                    中文/<span
                    style="color: #FF4141;">EN</span></p> -->
                </div>
                <Drawer :closable="false" v-model="value1" :styles="styles">
                  <Menu theme="light"
                        mode="vertical"
                        width="auto"
                        :active-name="this.$store.state.mainNavState"
                        @on-select="onSelect2"
                        ref="side_menu">
                    <MenuItem v-if="this.$store.state.showMethod == 1" name="home" to="/">
                      山东豪克
                    </MenuItem>
                    <MenuItem v-else name="home" to="/">
                      Home
                    </MenuItem>
                    <MenuItem v-if="this.$store.state.showMethod == 1" name="about" to="/about">
                      关于我们
                    </MenuItem>
                    <MenuItem v-else name="about" to="/about">
                      AboutUs
                    </MenuItem>
                    <!-- <MenuItem v-if="this.$store.state.showMethod == 1" name="news" to="/news">
                      新闻动态
                    </MenuItem>
                    <MenuItem v-else name="news" to="/news">
                      News
                    </MenuItem> -->
                    <MenuItem v-if="this.$store.state.showMethod == 1" name="product" to="/product">
                      豪克轮胎
                    </MenuItem>
                    <MenuItem v-else name="product" to="/product">
                      Products
                    </MenuItem>
                    <!-- <MenuItem v-if="this.$store.state.showMethod == 1" name="honor" to="/honor">
                      企业荣誉
                    </MenuItem>
                    <MenuItem v-else name="honor" to="/honor">
                      Honor
                    </MenuItem> -->
                    <!-- <MenuItem v-if="this.$store.state.showMethod == 1" name="contactUs" to="/contactUs">
                      联系我们
                    </MenuItem>
                    <MenuItem v-else name="contactUs" to="/contactUs">
                      ContactUs
                    </MenuItem> -->
                  </Menu>
                </Drawer>
              </Menu>
            </div>

          </Header>

          <Row>
            <Col span="12" class="gradual-line">
            </Col>
            <Col span="12" class="line-red">
            </Col>
          </Row>
        </div>
      </Layout>
      <Content>
        <router-view/>
      </Content>
      <div class="footer">
        <!-- 底部留言信息栏 -->
        <!--        <div v-if="this.$store.getters.getShowMethod == 1" class="footer-contact"-->
        <!--             style="max-width: 1200px;margin: 0 auto;">-->
        <!--          <Row type="flex" justify="space-around" align="middle">-->
        <!--            <Col class="footer-col wow fadeInLeft" style="padding:40px;" >-->
        <!--              <h2 class="footer-c-chat">我们来聊聊</h2>-->
        <!--              <img class="footer-c-img" src="./assets/erweima.png"/>-->
        <!--              <h3 class="footer-c-gong">关注豪克国际官方微信公众号</h3>-->
        <!--              <div class="footer-c-wechat"><img src="./assets/weixin.png" style="width:23px;height: 23px;">微信服务号：16001332175-->
        <!--              </div>-->
        <!--              <div class="footer-c-qq"><img src="./assets/qq.png" style="width:23px;height: 23px;">qq服务号：16001332175-->
        <!--              </div>-->
        <!--            </Col>-->
        <!--            <Col class="footer-col wow fadeInLeft" style="padding:40px" data-wow-delay="0.2s">-->
        <!--              <h2 class="footer-z-t">留下您的联系方式,</h2>-->
        <!--              <h2 class="footer-z-t2">为您提供更好的服务</h2>-->
        <!--              <div class="footer-form-text">联系方式：</div>-->
        <!--              <input v-model="phoneNumber" class="footer-input" placeholder=""/>-->
        <!--              <br>-->
        <!--              <div class="footer-form-text">邮箱：</div>-->
        <!--              <input v-model="email" class="footer-input" placeholder=""/>-->
        <!--              <br>-->
        <!--              <button type="button" class="leaveMsgButton btn" @click="touchLeaveMessageAction">提交</button>-->
        <!--            </Col>-->
        <!--            <Col class="footer-col wow fadeInLeft" style="padding:40px" data-wow-delay="0.4s">-->
        <!--              <h2 class="footer-z-t">快速反馈？</h2>-->
        <!--              <h2 class="footer-z-t2">主动撩我们！</h2>-->
        <!--              <div class="footer-c-phone">-->
        <!--                &lt;!&ndash; <img src="./assets/dianhua.png" style="width:23px;height: 23px;"> &ndash;&gt;-->
        <!--                <p>-->
        <!--                  <Icon type="ios-call" size="20"/>-->
        <!--                  0535-2717088(国内销售)-->
        <!--                </p>-->
        <!--                <p>-->
        <!--                  <Icon type="ios-call" size="20" color="#2D2D2D"/>-->
        <!--                  0535-2717088(国内销售)-->
        <!--                </p>-->
        <!--                <p>-->
        <!--                  <Icon type="ios-call" size="20" color="#2D2D2D"/>-->
        <!--                  0535-2717088(国内销售)-->
        <!--                </p>-->
        <!--              </div>-->
        <!--              <div class="footer-c-phone">-->
        <!--                &lt;!&ndash; <img src="./assets/youxiang.png" style="width:23px;height: 23px;"> &ndash;&gt;-->
        <!--                <p>-->
        <!--                  <Icon type="ios-mail" size="20"/>&nbsp;6528464@163.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
        <!--                </p>-->

        <!--                <ul class="footer-ul-phone">-->
        <!--                  <li></li>-->
        <!--                </ul>-->
        <!--              </div>-->
        <!--              <img src="./assets/dizhi.png" style="max-width:238px" class="dizhi"/>-->
        <!--            </Col>-->
        <!--          </Row>-->
        <!--        </div>-->

        <!-- 底部留言信息栏 -->
        <!--        <div v-else class="footer-contact" style="max-width: 1200px;margin: 0 auto;">-->
        <!--          <Row type="flex" justify="space-around" align="middle">-->
        <!--            <Col class="footer-col wow fadeInLeft" style="padding:40px">-->
        <!--              <h2 class="footer-c-chat">Have a chat</h2>-->
        <!--              <img class="footer-c-img" src="./assets/erweima.png"/>-->
        <!--              <h3 class="footer-c-gong">Follow hawker official WeChat account</h3>-->
        <!--              <div class="footer-c-wechat"><img src="./assets/weixin.png" style="width:23px;height: 23px;">WeChat：16001332175-->
        <!--              </div>-->
        <!--              <div class="footer-c-qq"><img src="./assets/qq.png" style="width:23px;height: 23px;">QQ：16001332175-->
        <!--              </div>-->
        <!--            </Col>-->
        <!--            <Col class="footer-col wow fadeInLeft" style="padding:40px" data-wow-delay="0.2s">-->
        <!--              <h2 class="footer-z-t">Leave contact information,</h2>-->
        <!--              <h2 class="footer-z-t2">Better service</h2>-->
        <!--              <div class="footer-form-text">Phone：</div>-->
        <!--              <input v-model="phoneNumber" class="footer-input" placeholder=""/>-->
        <!--              <br>-->
        <!--              <div class="footer-form-text">Email：</div>-->
        <!--              <input v-model="email" class="footer-input" placeholder=""/>-->
        <!--              <br>-->
        <!--              <button type="button" class="leaveMsgButton btn" @click="touchLeaveMessageAction">Submission</button>-->
        <!--            </Col>-->
        <!--            <Col class="footer-col wow fadeInLeft" style="padding:40px;" data-wow-delay="0.4s">-->
        <!--              <h2 class="footer-z-t">Quick feedback？</h2>-->
        <!--              <h2 class="footer-z-t2">Contact us！</h2>-->
        <!--              <div class="footer-c-phone">-->
        <!--                &lt;!&ndash; <img src="./assets/dianhua.png" style="width:23px;height: 23px;"> &ndash;&gt;-->
        <!--                <p>-->
        <!--                  <Icon type="ios-call" size="20" color="#2D2D2D"/>-->
        <!--                  0535-2717088(China sales)-->
        <!--                </p>-->
        <!--                <p>-->
        <!--                  <Icon type="ios-call" size="20" color="#2D2D2D"/>-->
        <!--                  0535-2717088(China sales)-->
        <!--                </p>-->
        <!--                <p>-->
        <!--                  <Icon type="ios-call" size="20" color="#2D2D2D"/>-->
        <!--                  0535-2717088(China sales)-->
        <!--                </p>-->
        <!--              </div>-->
        <!--              <div class="footer-c-phone">-->
        <!--                &lt;!&ndash; <img src="./assets/youxiang.png" style="width:23px;height: 23px;"> &ndash;&gt;-->
        <!--                <p>-->
        <!--                  <Icon type="ios-mail" size="20"/>&nbsp;6528464@163.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
        <!--                </p>-->

        <!--                <ul class="footer-ul-phone">-->
        <!--                  <li></li>-->
        <!--                </ul>-->
        <!--              </div>-->
        <!--              <img src="./assets/dizhi2.png" style="max-width:238px" class="dizhi"/>-->
        <!--            </Col>-->
        <!--          </Row>-->
        <!--        </div>-->
        <div v-if="this.$store.getters.getShowMethod == 1" class="footer1-container">
          <Row style="max-width: 1200px;margin: 0 auto;">
            <Col :xl="{span:14,offset:2}" :md="{span: 22, offset:1}" :xs="{span: 22, offset:1}">
              <p class="wow fadeInLeft footer-sitemap-ch">网站地图</p>
              <p class="wow fadeInLeft footer-sitemap-en">Sitemap</p>
              <div class="footer-nav-container">
                <div class="footer-nav-item wow fadeInLeft" data-wow-delay="0.1s">
                  <p class="footer-title-sub">关于我们</p>
                  <router-link :to="{path:'/about/',query:{activeName:1}}"><p class="footer-nav-to">公司简介</p>
                  </router-link>
                  <router-link :to="{path:'/about/developmentHistory',query:{activeName:2}}"><p class="footer-nav-to">
                    发展历程</p></router-link>
                  <router-link :to="{path:'/about/enterpriseCulture',query:{activeName:3}}"><p class="footer-nav-to">
                    企业文化</p></router-link>
                  <router-link :to="{path:'/about/compFacility',query:{activeName:4}}"><p class="footer-nav-to">厂区设施</p>
                  </router-link>
                  <router-link :to="{path:'/about/recruitment',query:{activeName:5}}"><p class="footer-nav-to">人才招聘</p>
                  </router-link>
                </div>
                <div class="footer-nav-item wow fadeInLeft" data-wow-delay="0.2s">
                  <p class="footer-title-sub">新闻动态</p>
                  <router-link :to="{path:'/news/',query:{activeName:1}}"><p class="footer-nav-to">企业宣传片</p>
                  </router-link>
                  <router-link :to="{path:'/news/compActivity',query:{activeName:2}}"><p class="footer-nav-to">新闻热点</p>
                  </router-link>
                  <router-link :to="{path:'/news/biddingActivities',query:{activeName:3}}"><p class="footer-nav-to">
                    招标活动</p></router-link>
                </div>
                <div class="footer-nav-item wow fadeInLeft" data-wow-delay="0.3s">
                  <p class="footer-title-sub">产品中心</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(23)">豪克系列</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(22)">sup系列</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(21)">鹰霸系列</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(20)">雄鹰系列</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(19)">舒玛系列</p>
                </div>
                <div class="footer-nav-item wow fadeInLeft" data-wow-delay="0.4s">
                  <p class="footer-title-sub">企业荣誉</p>
                  <router-link :to="{path:'/honor/',query:{activeName:1}}"><p class="footer-nav-to">科技创新</p>
                  </router-link>
                  <router-link :to="{path:'/honor/honorApprove',query:{activeName:2}}"><p class="footer-nav-to">荣誉认证</p>
                  </router-link>
                  <router-link :to="{path:'/honor/approve3c',query:{activeName:3}}"><p class="footer-nav-to">3C认证</p>
                  </router-link>
                </div>
                <div class="footer-nav-item wow fadeInLeft" data-wow-delay="0.5s">
                  <p class="footer-title-sub">联系我们</p>
                  <p class="footer-nav-to">0535-2717088(国内销售)</p>
                  <p class="footer-nav-to">0535-2717088(国内销售)</p>
                  <p class="footer-nav-to">0535-2717088(国内销售)</p>
                  <p class="footer-nav-to">6528464@163.com (邮箱）</p>
                  <p class="footer-nav-to">6528464@163.com (邮箱）</p>
                  <p class="footer-nav-to">6528464@163.com (邮箱）</p>
                </div>
              </div>
            </Col>
            <Col class="wow fadeInRight" :xl="{span:4,offset:2}" :md="{span: 22, offset:1}" :xs="{span: 22, offset:1}">
              <p class="footer-gongzhong-ch">豪克国际公众号</p>
              <img class="footer-c-img" src="./assets/erweima.png"/>
              <p class="footer-nav-to">山东豪克官网</p>
              <p class="footer-nav-to">豪克轮胎</p>
            </Col>
          </Row>
          <Row style="max-width: 1200px;margin: 0 auto; margin-top: 73px;margin-bottom: 20px">
            <Col class="wow fadeInLeft" data-wow-delay="0.1s" :xl="{span:9,offset:2}" :md="{span: 22, offset:1}"
                 :xs="{span: 22, offset:1}">
              <span class="footer-bottom-first">地址：</span><span
              class="footer-bottom-secd">山东省烟台市莱州经济技术开发区凤凰工业园</span>
            </Col>
            <Col class="wow fadeInLeft" data-wow-delay="0.2s" :xl="{span:5,offset:1}" :md="{span: 22, offset:1}"
                 :xs="{span: 22, offset:1}">
              <span class="footer-bottom-first">微信服务号：</span> <span class="footer-bottom-secd">16001332175</span>
            </Col>
            <Col class="wow fadeInLeft" data-wow-delay="0.3s" :xl="{span:6,offset:1}" :md="{span: 22, offset:1}"
                 :xs="{span: 22, offset:1}">
              <span class="footer-bottom-first">QQ号：</span> <span class="footer-bottom-secd">16001332175</span>
            </Col>
          </Row>
        </div>
        <div v-else class="footer1-container">
          <Row style="max-width: 1200px;margin: 0 auto;">
            <Col :xl="{span:14,offset:2}" :md="{span: 22, offset:1}" :xs="{span: 22, offset:1}">
              <p class="footer-sitemap-ch">Sitemap</p>
              <div class="footer-nav-container">
                <div class="footer-nav-item">
                  <router-link class="footer-title-sub" :to="{path:'/about/',query:{activeName:1}}">AboutUs</router-link>
                  <!-- <router-link :to="{path:'/about/',query:{activeName:1}}"><p class="footer-nav-to">Company profile</p>
                  </router-link>
                  <router-link :to="{path:'/about/developmentHistory',query:{activeName:2}}"><p class="footer-nav-to">
                    Development course</p></router-link>
                  <router-link :to="{path:'/about/enterpriseCulture',query:{activeName:3}}"><p class="footer-nav-to">
                    Enterprise culture</p></router-link>
                  <router-link :to="{path:'/about/compFacility',query:{activeName:4}}"><p class="footer-nav-to">Factory
                    facilities</p></router-link>
                  <router-link :to="{path:'/about/recruitment',query:{activeName:5}}"><p class="footer-nav-to">Talent
                    Recruitment</p></router-link> -->
                </div>
                <!-- <div class="footer-nav-item">
                  <p class="footer-title-sub">News</p>
                  <router-link :to="{path:'/news/',query:{activeName:1}}"><p class="footer-nav-to">Corporate video</p>
                  </router-link>
                  <router-link :to="{path:'/news/compActivity',query:{activeName:2}}"><p class="footer-nav-to">News
                    hotspots</p></router-link>
                  <router-link :to="{path:'/news/biddingActivities',query:{activeName:3}}"><p class="footer-nav-to">
                    Bidding activities</p></router-link>
                </div> -->
                <div class="footer-nav-item">
                  <router-link class="footer-title-sub" :to="{path:'/product/',query:{activeName:1}}">Product Display</router-link>
                  <!-- <p class="footer-nav-to" @click="touchSection4ItemAction(23)">Hawk Series</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(22)">SupHawk Series</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(21)">Eagle Battle Series</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(20)">Eagle Series</p>
                  <p class="footer-nav-to" @click="touchSection4ItemAction(19)">Shuma Series</p> -->
                </div>
                <!-- <div class="footer-nav-item">
                  <p class="footer-title-sub">Honor</p>
                  <router-link :to="{path:'/honor/',query:{activeName:1}}"><p class="footer-nav-to">Technology
                    innovation</p></router-link>
                  <router-link :to="{path:'/honor/honorApprove',query:{activeName:2}}"><p class="footer-nav-to">Honorary
                    certificate</p></router-link>
                  <router-link :to="{path:'/honor/approve3c',query:{activeName:3}}"><p class="footer-nav-to">3 c
                    authentication</p></router-link>
                </div> -->
                <div class="footer-nav-item">
                  <router-link class="footer-title-sub" :to="{path:'/contactUs/',query:{activeName:1}}">ContactUs</router-link>
                  <!-- <p class="footer-nav-to">0535-2717088(Domestic sales)</p>
                  <p class="footer-nav-to">0535-2717088(Domestic sales)</p>
                  <p class="footer-nav-to">0535-2717088(Domestic sales)</p>
                  <p class="footer-nav-to">6528464@163.com (Email）</p>
                  <p class="footer-nav-to">6528464@163.com (Email）</p>
                  <p class="footer-nav-to">6528464@163.com (Email）</p> -->
                </div>
              </div>
            </Col>
            <!-- <Col :xl="{span:4,offset:2}" :md="{span: 22, offset:1}" :xs="{span: 22, offset:1}">
              <p class="footer-gongzhong-ch">Hawk Public Number</p>
              <img class="footer-c-img" src="./assets/erweima.png"/>
            </Col> -->
          </Row>
          <Row style="max-width: 1200px;margin: 0 auto; margin-top: 73px;margin-bottom: 20px">
            <Col :xl="{span:9,offset:2}" :md="{span: 22, offset:1}" :xs="{span: 22, offset:1}">
              <span class="footer-bottom-first"></span><span
              class="footer-bottom-secd"></span>
            </Col>
            <Col :xl="{span:5,offset:1}" :md="{span: 22, offset:1}" :xs="{span: 22, offset:1}">
              <!-- <span class="footer-bottom-first">Wechat：</span> <span class="footer-bottom-secd">16001332175</span> -->
            </Col>
            <Col :xl="{span:6,offset:1}" :md="{span: 22, offset:1}" :xs="{span: 22, offset:1}">
              <!-- <span class="footer-bottom-first">QQ：</span> <span class="footer-bottom-secd">16001332175</span> -->
            </Col>
          </Row>
        </div>
        <div class="footer-info">
          <!-- 鲁ICP备19028032号 Copyright©2019-2022 豪客官网hawkrubber.com 版权所有 -->
        </div>
        <!-- <a class="qq-online" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2215879440&site=qq&menu=yes"><img
          border="0" src="./assets/qqimg.jpg" alt="点击这里给我发消息" title="点击这里给我发消息" style="width: 70px;height:70px"/></a> -->

        <!--        <a target="_blank" href=" ">< img border="0" src="http://wpa.qq.com/pa?p=2:2215879440:53" alt="点击这里给我发消息" title="点击这里给我发消息"/></a >-->
        <!-- <div @mouseenter="wechatEnter" @mouseleave="wechatLeave">
          <img class="wechat-online" src="./assets/wechatimg.jpg">
          <img v-bind:class="{ erweiOnlineE:isEnterWechat}" src="./assets/erweima.png" class="erweiOnline">
        </div> -->
        <!-- 底部栏目 -->
      </div>

      </Layout>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
import { WOW } from 'wowjs'

export default {
  data () {
    return {
      screenWidth: document.body.clientWidth, // 屏幕尺寸
      theme1: 'light',
      value1: false,
      styles: {
        padding: 0,
        background: 'black'
      },
      phoneNumber: '',
      email: '',
      mainNavState: 'news',
      isEnterWechat: 0
    }
  },
  created () {
    var showMethod = this.$store.state.showMethod
    var mainNavState = this.$store.state.mainNavState
    var subNavState = this.$store.state.subNavState
    if (showMethod == null) {
      this.$store.commit('setShowMethod', '1')
    }
    if (mainNavState == null) {
      this.$store.commit('setMainNavState', 'home')
    }
    if (subNavState == null) {
      this.$store.commit('setSubNavState', '1')
    }
  },
  mounted () {
    new WOW().init()
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        window.screenHeight = document.documentElement.clientHeight
        that.screenWidth = window.screenWidth
        that.screenHeight = window.screenHeight
        this.$store.commit('setScreenHeight', window.screenHeight)
        this.$store.commit('setScreenWidth', window.screenWidth)
      })()
    }
    window.screenWidth = document.body.clientWidth
    window.screenHeight = document.documentElement.clientHeight
    that.screenWidth = window.screenWidth
    that.screenHeight = window.screenHeight
    this.$store.commit('setScreenHeight', window.screenHeight)
    this.$store.commit('setScreenWidth', window.screenWidth)
    this.mainNavState = this.$store.state.mainNavState
    this.$nextTick(() => {
      this.$refs.side_menu.updateOpened()
      this.$refs.side_menu.updateActiveName()
    })
  },
  methods: {
    /**
     * 点击了品牌 touchSection4ItemAction
     **/
    touchSection4ItemAction: function (pgroupId) {
      var tagId = 0
      switch (pgroupId) {
        case 23:
          tagId = 36
          break
        case 22:
          tagId = 41
          break
        case 21:
          tagId = 42
          break
        case 20:
          tagId = 47
          break
        case 19:
          tagId = 51
          break
      }
      this.$store.commit('setMainNavState', 'product')
      this.$router.push({
        path: '/product',
        query: {
          isDetail: 0,
          pgroupId: pgroupId,
          tagId: tagId
        }
      })
    },
    /**
     * 点击了中英文
     */
    touchShowMethod () {
      // console.log('0')
      var nextShowMethod = '1'
      if (this.$store.state.showMethod === '1') {
        nextShowMethod = '2'
      }
      this.$store.commit('setShowMethod', nextShowMethod)
    },
    /**
     *  点击了导航菜单
     */
    onSelect (e) {
      this.$store.commit('setMainNavState', e)
    },
    /**
     * 点击了侧边菜单
     */
    onSelect2 (e) {
      // console.log(e)
      this.value1 = !this.value1
      this.$store.commit('setMainNavState', e)
    },
    /**
     * 点击了留言提交
     */
    touchLeaveMessageAction () {
      if (this.phoneNumber.length === 0 || this.email.length === 0) {
        this.$Message.info('请输入手机号和邮箱')
      } else {
        this.addMessage()
      }
    },
    /**
     * 发送添加留言的请求
     */
    addMessage () {
      var _this = this
      var url = '/website_bsm/message/addMessage'
      var data = {
        websiteId: '4',
        phone: this.phoneNumber,
        email: this.email
      }
      data = qs.stringify(data)
      axios.post(url, data)
        .then(function (response) {
          if (response.data.code !== 0) {
            _this.info(response.data.msg)
          } else {
            _this.info('留言成功，工作人员将尽快联系您')
          }
        })
    },
    /**
     * 微信图标进入 wechatEnter
     **/
    wechatEnter () {
      this.isEnterWechat = 1
    },
    /**
     * 微信图标进入 wechatEnter
     **/
    wechatLeave () {
      this.isEnterWechat = 0
    },

    /**
     * info
     */
    info (msg) {
      this.$Message.info(msg)
    }
  }

}
</script>

<style scoped>
  .layout-container {
    position: fixed;
    width: 100%;
    /*background-color: #666;*/
    background: -webkit-linear-gradient(#626262, #323232); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#626262, #323232); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#626262, #323232); /* Firefox 3.6 - 15 */
    background: linear-gradient(#626262, #323232); /* 标准的语法 */
    z-index: 999;
  }

  .dizhi {
    margin-top: 30px;
  }

  .header {
    background: rgba(0, 0, 0, 0);
    margin-top: 0;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-col {
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    .footer-col {
      text-align: left;
    }
  }

  /* 大于992px */
  @media screen and (min-width: 992px) {
    .header {
      margin-top: 34px;
    }
  }

  .ivu-layout-header {
    background: rgba(0, 0, 0, 0);
    height: 60px;
  }

  .layout {
    /* border: 1px solid #d7dde4; */
    background: #f5f7f9;
    position: relative;
    /* border-radius: 4px; */
    overflow: hidden;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    height: 0;
  }

  .layout-nav {
    width: 840px;
    margin: 0 auto;
    margin-right: 0;
    float: right
  }

  .layout-nav .ivu-menu-item {
    float: right !important;
  }

  .layout-footer-center {
    text-align: center;
  }

  .ivu-layout-header {
    padding: 0;
  }

  .brand-img {
    max-width: 220px;
    max-height: 58px;
    position: absolute;
    z-index: 2;
    top: -35px;
    left: 0;
    /*transform: skewX(-10deg);*/
    /*margin-left: 100px;*/
    margin-top: 18px;
  }

  .brand-img-sm {
    max-width: 130px;
    max-height: 34px;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    /*transform: skewX(-10deg);*/
    /*margin-left: -10px;*/
    margin-left: 20px;
    margin-top: 14px;
  }

  .ivu-menu-light {
    background: rgba(0, 0, 0, 0);
  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: #FFFFFF;
    background: #FF6719;
    border-bottom: 0;
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #FFFFFF;
    background: #FF6719;
    border-bottom: 0;
  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item,
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    color: #FFFFFF;
  }

  .ivu-menu-vertical .ivu-menu-item,
  .ivu-menu-vertical .ivu-menu-submenu-title {
    color: #FFFFFF;
  }

  .gradual-line {
    height: 4px;
    background: #FF6719;
    background: -webkit-linear-gradient(left, black, #FF6719);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, black, #FF6719);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, black, #FF6719);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, black, #FF6719);
    /* 标准的语法 */
  }

  .line-red {
    height: 4px;
    background: #FF6719;
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    width: 0;
  }

  .footer {
    /*background: #2D2D2D;*/
    /* margin-top: -30px; */
    background: -webkit-linear-gradient(#626262, #323232); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#626262, #323232); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#626262, #323232); /* Firefox 3.6 - 15 */
    background: linear-gradient(#626262, #323232); /* 标准的语法 */
  }

  .footer-contact {
    width: 100%;
    background: #2D2D2D;
  }

  .footer-info {
    width: 100%;
    height: 41px;
    /*background: rgba(28, 28, 28, 1);*/
    /*background-color: #2D2D2D;*/
    font-size: 9px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    /*color: rgba(102, 102, 102, 1);*/
    color: rgba(153, 153, 153, 1);
    line-height: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-form-text {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    color: rgba(153, 153, 153, 1);
  }

  .footer-c-chat {
    font-size: 44px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    margin-top: 63px;
    /* margin-left: 67px; */
  }

  .footer-c-img {
    margin-top: 42px;
    /* margin-left: 67px; */
    max-height: 166px;
    max-width: 166px;
  }

  .footer-c-gong {
    font-size: 16px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    line-height: 3px;
    /* margin-left: 67px; */
    margin-top: 20px;
  }

  .footer-c-wechat {
    font-size: 16px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    line-height: 3px;
    /* margin-left: 67px; */
    margin-top: 20px;
  }

  .footer-c-qq {
    font-size: 16px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    line-height: 3px;
    /* margin-left: 67px; */
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .footer-z-t {
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    line-height: 37px;
    margin-top: 40px;
  }

  .footer-z-t2 {
    font-size: 24px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    line-height: 37px;
    margin-bottom: 28px;
  }

  .footer-copy {
    width: 100%;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(28, 28, 28, 1);
    font-size: 9px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(102, 102, 102, 1);
    line-height: 3px;
  }

  .ivu-input {
    background: rgba(22, 22, 22, 1) !important;
    /* box-shadow: 0px 2px 1px 0px rgba(229, 229, 229, 0.7), 0px 2px 1px 0px rgba(17, 17, 17, 0.7); */
    border: 0;
    height: 59px;
    color: white;
    margin-top: 20px;
    max-width: 300px;
  }

  .leaveMsgButton {
    width: 100%;
    height: 42px;
    background: #FF6719;
    background: -webkit-linear-gradient(left, #FF6719, #FF6719);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #FF6719, #FF6719);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #FF6719, #FF6719);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(right, #FF6719, #FF6719);
    border-radius: 59px;
    font-size: 16px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    margin-top: 61px;
    max-width: 300px;
    border: 0;
    cursor: pointer;
  }

  .leaveMsgButton:hover {
    width: 100%;
    height: 42px;
    background: #FF6719;
    background: -webkit-linear-gradient(left, #FF6719, #FF6719);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #FF6719, #FF6719);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #FF6719, #FF6719);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(right, #FF6719, #FF6719);
    border-radius: 59px;
    font-size: 16px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    margin-top: 61px;
    max-width: 300px;
    border: 0;
    cursor: pointer;
  }

  .footer-c-phone {
    height: auto;
    font-size: 15px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    /* line-height: 3px; */
  }

  .footer-c-phone p {
    margin-bottom: 2px;
  }

  .footer-ul-phone {
    /* margin-top: -28px;
        margin-left: 28px; */
    list-style-type: none;
  }

  .footer-c-email {
    font-size: 15px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    line-height: 3px;
  }

  .footer-input {
    background: rgba(200, 200, 200, 1);
    border: 0;
    height: 59px;
    color: white;
    max-width: 300px;
    width: 90%;
    padding: 10px;
    min-width: 257px;
    margin-top: 8px;
  }

  .footer-input::-webkit-input-placeholder {
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .footer-input:-moz-placeholder {
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .footer-input:-ms-input-placeholder {
    font-size: 15px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .qq-online {
    position: fixed;
    right: 0;
    bottom: 300px;
    z-index: 999;
    padding-left: 10px;
    padding-right: 10px;
    height: 70px;
  }

  .wechat-online {
    position: fixed;
    right: 0;
    bottom: 220px;
    z-index: 999;
    padding-left: 10px;
    padding-right: 10px;
    width: 90px;
    height: 70px;
  }

  .erweiOnline {
    position: fixed;
    right: -210px;
    bottom: 220px;
    transition: .2s;
    width: 150px;
    height: 150px;
    z-index: 998;
  }

  .erweiOnlineE {
    /*position: fixed;*/
    /*right: 30px;*/
    /*bottom: 100px;*/
    transform: translateX(-300px);
  }

  .footer1-container {

  }

  .footer-sitemap-ch {
    font-size: 24px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #FF6719;
    /*margin-left: 50px;*/
    margin-top: 73px;
  }

  .footer-sitemap-en {
    font-size: 24px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    /*margin-left: 50px;*/
    margin-top: 2px;
  }

  .footer-gongzhong-ch {
    font-size: 24px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #FF6719;
    margin-top: 73px;
  }

  .footer-title-sub {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-top: 29px;
    margin-bottom: 21px;
  }

  .footer-nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

  }

  .footer-nav-item {

  }

  .footer-nav-to {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(210, 208, 208, 1);
    margin-bottom: 5px;
    min-width: 100px;
    cursor: pointer;
  }

  .footer-nav-to:hover {
    color: white;
  }

  .footer-bottom-first {
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #FFFFFF;
  }

  .footer-bottom-secd {
    font-size: 16px;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    color: #CCCCCC;
  }
</style>

<!-- pageControl总样式 -->
<style>
  .ivu-page-item-active {
    border: 0 !important;
    border-radius: 0 !important;
    background-color: #FF4141 !important;
  }

  .ivu-page-item-active a {
    color: white !important;
  }

  .ivu-page-item {
    border-radius: 0 !important;
  }

  .ivu-page-item:hover {
    border-color: #FF6719 !important;
  }

  .ivu-page-item:hover a {
    color: #515a6e !important;
  }

  .ivu-page-item-jump-next a {
    color: #FF6719 !important;
  }

  .ivu-page-next:hover a {
    color: #FF6719 !important;
  }

  .ivu-page-prev:hover a {
    color: #FF6719 !important;
  }

  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
    border-bottom: 0 !important;
  }
</style>
<!-- 轮播图小圆点 -->
<style>
  .ivu-carousel-dots li button {
    background: white !important;
    height: 10px !important;
    width: 10px !important;
    border-radius: 10px !important;
    opacity: 1 !important;
  }

  .ivu-carousel-dots .ivu-carousel-active button {
    background: #FF6719 !important;
    width: 20px !important;
  }

  .ivu-carousel-dots-inside {
    bottom: 36px !important;
  }
</style>
<!-- layout样式 -->
<style>
  .ivu-layout {
    background: #666 !important;
  }

  .ql-align-center {
    display: flex;
    justify-content: center;
  }

</style>

<style>
  .content p {
    font-size: 16px;
    line-height: 30px;
    text-indent: 2em;
  }

  .news-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

</style>
