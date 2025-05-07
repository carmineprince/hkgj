<template>
  <div>
    <div class="sub-top-div" style="background: #000000" @mouseenter="bannerMouseenter"
         @mouseleave="bannerMouseout">
      <!-- 轮播banner图 -->
      <Carousel :model="setting" :autoplay="setting.autoplay"
                :autoplay-speed="setting.autoplaySpeed"
                style="margin: 0 auto;"
      >
        <!--        <CarouselItem style="position:relative">-->
        <!--          <img class="banner-img" src="https://file.codingswifter.com/hkgj/banner_2_h.jpg"-->
        <!--               :style="{ height: this.$store.state.screenHeight-92 + 'px' }">-->
        <!--          <div-->
        <!--            style="max-width: 1200px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;display: flex;align-items: center;justify-content: flex-end;">-->
        <!--            <img class="banner-img-float" src="https://file.codingswifter.com/hkgj/banner_2_h1.jpg">-->
        <!--          </div>-->
        <!--        </CarouselItem>-->

        <!--        <CarouselItem style="position:relative">-->
        <!--          <img class="banner-img" src="https://file.codingswifter.com/hkgj/banner_3_h.jpg"-->
        <!--               :style="{ height: this.$store.state.screenHeight-92 + 'px' }">-->
        <!--          <div-->
        <!--            class="banner-img-float2-div">-->
        <!--            <img class="banner-img-float2" src="https://file.codingswifter.com/hkgj/banner_3_h1.jpg">-->
        <!--          </div>-->
        <!--        </CarouselItem>-->
        <CarouselItem style="position:relative">
          <img class="banner-img" src="https://file.codingswifter.com/website/beijing8.jpeg"
               :style="{ height: this.$store.state.screenHeight-92 + 'px' }">
          <div
            style="max-width: 1200px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;display: flex;align-items: center;justify-content: flex-start;">
            <img class="banner-img-float4" src="../assets/zi8.png">
          </div>
        </CarouselItem>

        <CarouselItem style="position:relative">
          <img class="banner-img" src="https://file.codingswifter.com/website/beijing6.jpeg"
               :style="{ height: this.$store.state.screenHeight-92 + 'px' }">
          <div
            style="max-width: 1200px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;display: flex;align-items: center;justify-content: flex-start;">
            <img class="banner-img-float3" src="../assets/zi3.png">
          </div>
        </CarouselItem>
      </Carousel>
    </div>

    <!-- 品牌 -->
    <div class="section4" style="margin-bottom: 1px">
      <div style="max-width: 1310px;margin: 0 auto;">
        <Row style="width: 100%">
          <Col :xl="{span:4,offset:2}" :md="6" :sm="12">
            <div @mouseenter="section4Mouseenter(1)"
                 @mouseleave="section4MouseLeave(1)"
                 @click="touchSection4ItemAction(22)"
                 class="section4-img-s1 wow fadeInRight"
                 style="display: flex;justify-content: center">
              <img v-if="s1==0" src="../assets/s1.png" style="margin:40px auto">
              <img v-else src="../assets/d1.png" style="margin:40px auto">
            </div>
          </Col>
          <Col :xl="4" :md="6" :sm="12">
            <div @mouseenter="section4Mouseenter(2)" @mouseleave="section4MouseLeave(2)"
                 @click="touchSection4ItemAction(23)"
                 class="section4-img-s1 wow fadeInRight"
                 style="display: flex;justify-content: center" data-wow-delay="0.2s">
              <img v-if="s2==0" src="../assets/s2.png" style="margin:40px auto">
              <img v-else src="../assets/d2.png" style="margin:40px auto">
            </div>
          </Col>
          <Col :xl="4" :md="6" :sm="12">
            <div @mouseenter="section4Mouseenter(3)" @mouseleave="section4MouseLeave(3)"
                 @click="touchSection4ItemAction(19)"
                 class="section4-img-s1 wow fadeInRight"
                 style="display: flex;justify-content: center" data-wow-delay="0.4s">
              <img v-if="s3==0" src="../assets/s3.png" style="margin:40px auto">
              <img v-else src="../assets/d3.png" style="margin:40px auto">
            </div>
          </Col>
          <Col :xl="4" :md="6" :sm="12">
            <div @mouseenter="section4Mouseenter(4)" @mouseleave="section4MouseLeave(4)"
                 @click="touchSection4ItemAction(20)"
                 class="section4-img-s1 wow fadeInRight"
                 style="display: flex;justify-content: center" data-wow-delay="0.6s">
              <img v-if="s4==0" src="../assets/s4.png" style="margin:40px auto">
              <img v-else src="../assets/d4.png" style="margin:40px auto">
            </div>
          </Col>
          <Col :xl="4" :md="0" :sm="0" :xs="24">
            <div @mouseenter="section4Mouseenter(5)" @mouseleave="section4MouseLeave(5)"
                 @click="touchSection4ItemAction(21)"
                 class="section4-img-s1 wow fadeInRight"
                 style="display: flex;justify-content: center" data-wow-delay="0.8s">
              <img v-if="s5==0" src="../assets/s5.png" style="margin:40px auto">
              <img v-else src="../assets/d5.png" style="margin:40px auto">
            </div>
          </Col>

        </Row>
      </div>
    </div>

    <!-- 豪克轮胎模块 -->
    <div class="section1" style="display: flex;align-items: center">
      <div class="product-container" style="max-width: 1200px;margin: 0 auto;" @mouseenter="productMouseenter"
           @mouseleave="productMouseleave">
        <!-- 豪克轮胎字样 -->
        <Row style="margin-top: 30px">
          <Col class="s1-cp-col" span="18" style="height: 75px;">
            <!--            <img v-if="this.$store.state.showMethod == 1" class="s1-title wow fadeInLeft"-->
            <!--                 src="../assets/chanpin.png" alt="豪克轮胎"/>-->
            <!--            <img v-else class="s1-title wow fadeInLeft" src="../assets/chanpin2.png" alt="豪克轮胎"/>-->
            <p v-if="this.$store.state.showMethod == 1" class="s1-title wow fadeInLeft">产品中心&nbsp;<span
              style="font-weight: bold;color: #999999;">PRODUCTS</span></p>
            <p v-else class="s1-title wow fadeInLeft">PRODUCTS</p>
          </Col>
          <Col class="s1-pd-col" span="6" style="height: 75px;">
            <Button v-if="this.$store.state.showMethod == 1" class="s1-pd-detail-btn wow fadeInRight" type="error"
                    @click="touchMoreProductAction(item)">
              更多
            </Button>
            <Button v-else class="s1-pd-detail-btn wow fadeInRight" type="error">MORE +</Button>
          </Col>
        </Row>
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-box wow fadeInRight">
          <!-- slides -->
          <swiper-slide class="swiper-item">
            <!-- 产品列表 -->
            <Row style="width: 96%;margin:30px auto;">
              <div v-for="(item,index) in productData" :key="index">
                <Col :xs="24" :sm="12" :md="12" :lg="{span:4,offset:0}" :xl="4" :xxl="4">
                  <div class="product-item wow fadeInUp" @click="touchProductAction(item)">
                    <img :src="item.product.mainImg" class="product-img" alt="产品">
                    <h2 class="product-title">{{item.product.name}}</h2>
                    <h3 class="product-subtitle">{{item.product.subtitle}}</h3>
                    <!--                    <p class="product-intro">{{item.productGroup.name}}</p>-->
                    <!--                  <div class="product-line"></div>-->
                  </div>
                </Col>
                <!--                <Col v-else-if="index == 4" :xs="24" :sm="0" :md="0" :lg="4" :xl="4" :xxl="4">-->
                <!--                  <div class="product-item wow fadeInUp" @click="touchProductAction(item)">-->
                <!--                    <img :src="item.product.mainImg" class="product-img" alt="产品">-->
                <!--                    <h2 class="product-title">{{item.product.name}}</h2>-->
                <!--                    <h3 class="product-subtitle">{{item.tag.tagName}}</h3>-->
                <!--                    <p class="product-intro">{{item.productGroup.name}}</p>-->
                <!--                    &lt;!&ndash;                  <div class="product-line"></div>&ndash;&gt;-->
                <!--                  </div>-->
                <!--                </Col>-->
                <!--                <Col v-else :xs="24" :sm="12" :md="12" :lg="4" :xl="4" :xxl="4">-->
                <!--                  <div class="product-item wow fadeInUp" @click="touchProductAction(item)">-->
                <!--                    <img :src="item.product.mainImg" class="product-img" alt="产品">-->
                <!--                    <h2 class="product-title">{{item.product.name}}</h2>-->
                <!--                    <h3 class="product-subtitle">{{item.tag.tagName}}</h3>-->
                <!--                    <p class="product-intro">{{item.productGroup.name}}</p>-->
                <!--                    &lt;!&ndash;                  <div class="product-line"></div>&ndash;&gt;-->
                <!--                  </div>-->
                <!--                </Col>-->
              </div>
            </Row>
          </swiper-slide>
          <!--          <swiper-slide v-if="productData2.length == 3" class="swiper-item">-->
          <!--            &lt;!&ndash; 产品列表 &ndash;&gt;-->
          <!--            <Row style="width: 90%;margin:30px auto;">-->
          <!--              <Col v-for="(item,index) in productData2" :key="index" :xs="24" :sm="12" :md="12" :lg="8" :xl="8"-->
          <!--                   :xxl="8">-->
          <!--                <div class="product-item wow fadeInUp" @click="touchProductAction(item)">-->
          <!--                  <img :src="item.mainImg" class="product-img" alt="产品">-->
          <!--                  <h2 class="product-title">{{item.name}}</h2>-->
          <!--                  <h3 class="product-subtitle">{{item.subtitle}}</h3>-->
          <!--                  <p class="product-intro">{{item.intro}}</p>-->
          <!--                  <div class="product-line"></div>-->
          <!--                </div>-->
          <!--              </Col>-->
          <!--            </Row>-->
          <!--          </swiper-slide>-->
          <!--          <swiper-slide v-if="productData3.length == 3" class="swiper-item">-->
          <!--            &lt;!&ndash; 产品列表 &ndash;&gt;-->
          <!--            <Row style="width: 90%;margin:30px auto;">-->
          <!--              <Col v-for="(item,index) in productData3" :key="index" :xs="24" :sm="12" :md="12" :lg="8" :xl="8"-->
          <!--                   :xxl="8">-->
          <!--                <div class="product-item wow fadeInUp" @click="touchProductAction(item)">-->
          <!--                  <img :src="item.mainImg" class="product-img" alt="产品">-->
          <!--                  <h2 class="product-title">{{item.name}}</h2>-->
          <!--                  <h3 class="product-subtitle">{{item.subtitle}}</h3>-->
          <!--                  <p class="product-intro">{{item.intro}}</p>-->
          <!--                  <div class="product-line"></div>-->
          <!--                </div>-->
          <!--              </Col>-->
          <!--            </Row>-->
          <!--          </swiper-slide>-->
          <!-- Optional controls -->
          <div id="product-swiper-pagination" class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>


    <!-- 新闻模块 -->
    <div class="section2" style="display: flex;align-items: center">
      <div class="product-container" style="max-width: 1200px; margin: 0 auto;" @mouseenter="newsMouseenter"
           @mouseleave="newsMouseleave">
        <!-- 新闻动态 -->
        <Row class="news-row">
          <Col class="s1-cp-col" span="12" style="height: 75px;">
            <!--            <img v-if="this.$store.state.showMethod == 1" class="s1-title wow fadeInLeft" src="../assets/xinwen.png"-->
            <!--                 alt="新闻动态"/>-->
            <!--            <img v-else class="s1-title wow fadeInLeft" src="../assets/xinwen2.png" alt="新闻动态"/>-->
            <p v-if="this.$store.state.showMethod == 1" class="s1-title s1-title-black wow fadeInLeft">新闻动态 &nbsp;<span
              style="font-weight: bold;color: #999999;">NEWS</span><span style="color: rgb(225, 225, 225)">山东豪克官网</span></p>
            <p v-else class="s1-title s1-title-black wow fadeInLeft">NEWS</p>
          </Col>
          <Col class="s1-pd-col" span="6" offset="6" style="height: 75px;">
            <Button v-if="this.$store.state.showMethod == 1" class="s1-pd-detail-btn wow fadeInRight" type="error"
                    @click="touchMoreNewsAction">
              更多新闻
            </Button>
            <Button v-else class="s1-pd-detail-btn wow fadeInRight" type="error" @click="touchMoreNewsAction">MORE +
            </Button>
          </Col>
        </Row>
        <swiper :options="swiperOption" ref="mySwiper2" class="swiper-box wow fadeInRight">
          <!-- slides -->
          <swiper-slide class="swiper-item">
            <!-- 新闻列表 -->
            <Row v-if="this.$store.getters.getShowMethod == 1" class="s2-xw-row" :gutter="20">
              <Col v-for="item in articleData" :key="item.articleId" class="s2-xw-col" :xs="24" :sm="12" :md="12"
                   :lg="8"
                   :xl="8" :xxl="8">
                <img :src="item.mainImg" class="news-img">
                <img src="../assets/wenzhang.png" class="news-img-info">
                <div class="s2-xw-info-div">
                  <p class="s2-xw-date">{{item.created_at}}</p>
                  <p class="s2-xw-title">{{item.title}}</p>
                  <p class="s2-xw-detail" @click="touchNewsItemAction(item)">查看</p>
                </div>
              </Col>
            </Row>
            <Row v-else class="s2-xw-row" :gutter="20">
              <Col v-for="item in articleData" :key="item.articleId" class="s2-xw-col wow fadeInRight" :xs="24" :sm="12"
                   :md="12" :lg="8"
                   :xl="8" :xxl="8">
                <img :src="item.mainImg" class="news-img">
                <img src="../assets/wenzhang.png" class="news-img-info">
                <div class="s2-xw-info-div">
                  <p class="s2-xw-date">{{item.created_at}}</p>
                  <p class="s2-xw-title">{{item.title}}</p>
                  <p class="s2-xw-detail" @click="touchNewsItemAction(item)">SEE</p>
                </div>
              </Col>
            </Row>
          </swiper-slide>
          <!--          <swiper-slide v-if="articleData2.length == 3" class="swiper-item">-->
          <!--            &lt;!&ndash; 新闻列表 &ndash;&gt;-->
          <!--            <Row v-if="this.$store.getters.getShowMethod == 1" class="s2-xw-row" :gutter="20">-->
          <!--              <Col v-for="item in articleData2" :key="item.articleId" class="s2-xw-col" :xs="24" :sm="12" :md="12"-->
          <!--                   :lg="8"-->
          <!--                   :xl="8" :xxl="8">-->
          <!--                <img :src="item.mainImg" class="news-img">-->
          <!--                <img src="../assets/wenzhang.png" class="news-img-info">-->
          <!--                <div class="s2-xw-info-div">-->
          <!--                  <p class="s2-xw-date">{{item.created_at}}</p>-->
          <!--                  <p class="s2-xw-title">{{item.title}}</p>-->
          <!--                  <p class="s2-xw-detail" @click="touchNewsItemAction(item)">查看</p>-->
          <!--                </div>-->
          <!--              </Col>-->
          <!--            </Row>-->
          <!--            <Row v-else class="s2-xw-row" :gutter="20">-->
          <!--              <Col v-for="item in articleData2" :key="item.articleId" class="s2-xw-col wow fadeInRight" :xs="24"-->
          <!--                   :sm="12"-->
          <!--                   :md="12" :lg="8"-->
          <!--                   :xl="8" :xxl="8">-->
          <!--                <img :src="item.mainImg" class="news-img">-->
          <!--                <img src="../assets/wenzhang.png" class="news-img-info">-->
          <!--                <div class="s2-xw-info-div">-->
          <!--                  <p class="s2-xw-date">{{item.created_at}}</p>-->
          <!--                  <p class="s2-xw-title">{{item.title}}</p>-->
          <!--                  <p class="s2-xw-detail" @click="touchNewsItemAction(item)">SEE</p>-->
          <!--                </div>-->
          <!--              </Col>-->
          <!--            </Row>-->
          <!--          </swiper-slide>-->
          <!--          <swiper-slide v-if="articleData3.length == 3" class="swiper-item">-->
          <!--            &lt;!&ndash; 新闻列表 &ndash;&gt;-->
          <!--            <Row v-if="this.$store.getters.getShowMethod == 1" class="s2-xw-row" :gutter="20">-->
          <!--              <Col v-for="item in articleData3" :key="item.articleId" class="s2-xw-col" :xs="24" :sm="12" :md="12"-->
          <!--                   :lg="8"-->
          <!--                   :xl="8" :xxl="8">-->
          <!--                <img :src="item.mainImg" class="news-img">-->
          <!--                <img src="../assets/wenzhang.png" class="news-img-info">-->
          <!--                <div class="s2-xw-info-div">-->
          <!--                  <p class="s2-xw-date">{{item.created_at}}</p>-->
          <!--                  <p class="s2-xw-title">{{item.title}}</p>-->
          <!--                  <p class="s2-xw-detail" @click="touchNewsItemAction(item)">查看</p>-->
          <!--                </div>-->
          <!--              </Col>-->
          <!--            </Row>-->
          <!--            <Row v-else class="s2-xw-row" :gutter="20">-->
          <!--              <Col v-for="item in articleData3" :key="item.articleId" class="s2-xw-col wow fadeInRight" :xs="24"-->
          <!--                   :sm="12"-->
          <!--                   :md="12" :lg="8"-->
          <!--                   :xl="8" :xxl="8">-->
          <!--                <img :src="item.mainImg" class="news-img">-->
          <!--                <img src="../assets/wenzhang.png" class="news-img-info">-->
          <!--                <div class="s2-xw-info-div">-->
          <!--                  <p class="s2-xw-date">{{item.created_at}}</p>-->
          <!--                  <p class="s2-xw-title">{{item.title}}</p>-->
          <!--                  <p class="s2-xw-detail" @click="touchNewsItemAction(item)">SEE</p>-->
          <!--                </div>-->
          <!--              </Col>-->
          <!--            </Row>-->
          <!--          </swiper-slide>-->
          <!-- Optional controls -->
          <div id="news-swiper-pagination" class="swiper-pagination" slot="pagination"></div>
        </swiper>

      </div>
    </div>
    <!-- 关于我们 -->
    <div class="section3">
      <div style="max-width: 1200px;margin: 0 auto; display: flex;flex-direction: column">
        <!-- 关于我们字样 -->
        <Row style="width: 100%">
          <Col class="s3-gy-col" span="24" style="z-index: 99;">
            <p v-if="this.$store.state.showMethod == 1" class="s1-title s1-title-black wow fadeInLeft about-title">
              关于我们&nbsp;<span style="font-weight: bold;color: #999999;">ABOUT US</span></p>
            <p v-else class="s1-title s1-title-black wow fadeInLeft">ABOUT US</p>
          </Col>
        </Row>
        <Row style="width: 100%">
          <Col class="s3-gy-d-col" :md="24" :lg="24" :xl="15">
            <!--            <div>-->

            <!--            </div>-->
            <div class="s3-gy-bg wow fadeInRight">
              <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
                            :options="playerOptions"></video-player>
              <div class="s3-line-red"></div>
              <img src="../assets/guanyuwomen_bg-t.jpg" style="width: 100%;height: 0;" class="wow fadeInRight">
            </div>
          </Col>
          <Col class="recruitment-col wow fadeInRight" :xs="{span:20,offset:2}" :md="{span:20,offset:2}"
               :lg="{span:22,offset:2}"
               :xl="{span:9,offset:0}">
            <p v-if="this.$store.state.showMethod == 1" class="c2-title s1-title-black ">人才招聘&nbsp;<span
              style="font-weight: bolder;color: #000000;">Recruitment</span></p>
            <p v-else class="c2-title wow fadeInLeft">Recruitment</p>
            <p class="recruitment-p" v-for="(item,index) in articleData2">
              <span>{{item.created_at.split(' ')[0]}}</span>
              <router-link
                :to="{path:'/about/Recruitment',query:{activeName:5,isDetail:1,articleId:item.articleId}}"
                class="recruitment-title">{{item.title}}
              </router-link>
            </p>
            <Button v-if="this.$store.state.showMethod == 1" class="c1-pd-detail-btn  wow fadeInRight" type="error"
                    @click="touchMoreReAction">
              查看更多
            </Button>
            <Button v-else class="c1-pd-detail-btn  wow fadeInRight" type="error" @click="touchMoreReAction">MORE +
            </Button>
          </Col>
        </Row>
      </div>
    </div>

  </div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import { WOW } from 'wowjs'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      s1: 0,
      s2: 0,
      s3: 0,
      s4: 0,
      s5: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2300
      },
      swiperOption: {
        autoplay: {
          delay: 3000, // 自动切换的时间间隔，单位ms
          stopOnLastSlide: false, //  当切换到最后一个slide时停止自动切换
          // disableOnInteraction: false, //  用户操作swiper之后，是否禁止autoplay。
          // waitForTransition: true // 等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
        // autoplay: 0,
        loop: false,
        autoHeight: false,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      },
      articleData: [],
      articleData2: [],
      articleData3: [],
      productData: [],
      productData2: [],
      productData3: [],
      playerOptions: {
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          src: 'https://file.codingswifter.com/wvideo/%E8%B1%AA%E5%85%8B%E8%BD%AE%E8%83%8E%E5%AE%A3%E4%BC%A0%E7%89%87.mp4' //url地址
        }],
        poster: 'https://file.codingswifter.com/hkgj/show.png', //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    }
  },
  created: function () {
    this.getArticles()
    this.getArticles2()
    // this.getArticles3()
    this.getProducts()
    // this.getProducts2()
    // this.getProducts3()
    var mainNavState = this.$store.state.mainNavState
    if (mainNavState !== 'home') {
      this.$store.commit('setMainNavState', 'home')
    }
  },
  computed: {
    showMethod () {
      return this.$store.getters.getShowMethod
    },
    screenWidth () {
      return this.$store.getters.getScreenWidth
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    swiper2 () {
      return this.$refs.mySwiper2.swiper
    }
  },
  watch: {
    showMethod: function (newQuestion, oldQuestion) {
      this.getArticles()
      this.getArticles2()
      // this.getArticles3()
      this.getProducts()
      // this.getProducts2()
      // this.getProducts3()
    },
    screenWidth: function (newQuestion, oldQuestion) {
      // console.log('new:', newQuestion)
      // console.log('old :', oldQuestion)
      if (newQuestion < 768) {
        this.swiper.autoplay.stop()
        this.swiper2.autoplay.stop()
      } else {
        this.swiper.autoplay.start()
        this.swiper2.autoplay.start()
      }
    }
  },
  /**
   * 鼠标进入产品item
   */
  select (e) {
    const index = e
    var productData = this.productData
    var item = productData[e]
    item.isFocus = item.isFocus ? 0 : 1
    productData[e] = item
    this.productData = productData
  },
  methods: {
    /**
     * 鼠标移入产品
     **/
    productMouseenter: function () {
      // // console.log(this.swiperOption.autoplay)
      // // console.log('enter product')
      // this.swiperOption.autoplay = 0
      // // console.log(this.swiperOption.autoplay)
      // console.log('鼠标进来了')
      this.swiper.autoplay.stop()
    },
    /**
     * 鼠标移出产品 productMouseout
     **/
    productMouseleave: function () {
      // console.log('鼠标出去了')
      this.swiper.autoplay.start()
    },
    /**
     * 鼠标移入产品
     **/
    newsMouseenter: function () {
      // // console.log(this.swiperOption.autoplay)
      // // console.log('enter product')
      // this.swiperOption.autoplay = 0
      // // console.log(this.swiperOption.autoplay)
      this.swiper2.autoplay.stop()
    },
    /**
     * 鼠标移出产品 productMouseout
     **/
    newsMouseleave: function () {
      this.swiper2.autoplay.start()
    },
    /**
     * 鼠标出产品
     */
    out (e) {
      const index = e
      var productData = this.productData
      var item = productData[e]
      item.isFocus = item.isFocus ? 0 : 1
      productData[e] = item
      this.productData = productData
    },
    /**
     * 发送获取新闻动态的请求 website/getArticles
     */
    getArticles: function () {
      var _this = this
      var url = 'website_bsm/website/getArticles'
      var data = {
        groupId: '22',
        pageNumber: '1',
        pageSize: '3',
        showMethod: this.$store.getters.getShowMethod,
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3'
      }
      axios.get(url, {
        params: data
      })
        .then(function (res) {
          _this.articleData = res.data.data
        })
    },
    /**
     * 发送获取人才招聘的请求 website/getArticles
     */
    getArticles2: function () {
      var _this = this
      var url = 'website_bsm/website/getArticles'
      var data = {
        groupId: '26',
        pageNumber: '1',
        pageSize: '4',
        showMethod: this.$store.getters.getShowMethod,
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3'
      }
      axios.get(url, {
        params: data
      })
        .then(function (res) {
          _this.articleData2 = res.data.data
        })
    },
    /**
     * 发送获取新闻动态的请求 website/getArticles
     */
    getArticles3: function () {
      var _this = this
      var url = 'website_bsm/website/getArticles'
      var data = {
        groupId: '22',
        pageNumber: '3',
        pageSize: '3',
        showMethod: this.$store.getters.getShowMethod,
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3'
      }
      axios.get(url, {
        params: data
      })
        .then(function (res) {
          _this.articleData3 = res.data.data
        })
    },

    /**
     * 发送获取产品的请求 website/getProducts
     **/
    getProducts: function () {
      var _this = this
      var url = 'website_bsm/website/getShowFirstProduct'
      var data = {
        websiteId: '4',
        pageNumber: '1',
        pageSize: '6',
        showMethod: this.$store.getters.getShowMethod,
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3'
      }
      axios.get(url, {
        params: data
      })
        .then(function (res) {
          _this.productData = res.data.data
        })
    },

    /**
     * 发送获取产品的请求 website/getProducts
     **/
    getProducts2: function () {
      var _this = this
      var url = 'website_bsm/website/getProducts'
      var data = {
        websiteId: '4',
        pageNumber: '2',
        pageSize: '3',
        showMethod: this.$store.getters.getShowMethod,
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3'
      }
      axios.get(url, {
        params: data
      })
        .then(function (res) {
          _this.productData2 = res.data.data
        })
    },

    /**
     * 发送获取产品的请求 website/getProducts
     **/
    getProducts3: function () {
      var _this = this
      var url = 'website_bsm/website/getProducts'
      var data = {
        websiteId: '4',
        pageNumber: '3',
        pageSize: '3',
        showMethod: this.$store.getters.getShowMethod,
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3'
      }
      axios.get(url, {
        params: data
      })
        .then(function (res) {
          _this.productData3 = res.data.data
        })
    },

    /**
     * 点击了更多产品
     */
    touchMoreProductAction: function () {
      this.$store.commit('setMainNavState', 'product')
      this.$router.push({
        path: 'product',
        query: {
          isDetail: 0,
          pgroupId: '',
          tagId: ''
        }
      })
    },

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
        path: 'product',
        query: {
          isDetail: 0,
          pgroupId: pgroupId,
          tagId: tagId
        }
      })
    },

    /**
     * 点击了商品
     */
    touchProductAction: function (item) {
      this.$store.commit('setMainNavState', 'product')
      this.$store.commit('setCurrentProductItem', item)
      this.$router.push({
        path: 'product',
        query: {
          isDetail: 1,
          pgroupId: item.tag.pgroupId,
          tagId: item.tag.tagId
        }
      })
    },

    /**
     * 点击了更多新闻
     **/
    touchMoreNewsAction: function () {
      this.$store.commit('setMainNavState', 'news')
      this.$router.push({
        path: '/news',
        query: {
          isDetail: 0,
          activeName: 1
        }
      })
    },

    /**
     * 点击了更多人才招聘 touchMoreReAction
     */
    touchMoreReAction: function () {
      this.$store.commit('setMainNavState', 'about')
      this.$router.push({
        path: '/about/Recruitment',
        query: {
          isDetail: 0,
          activeName: 5
        }
      })
    },

    /**
     * 点击了新闻
     **/
    touchNewsItemAction: function (item) {
      // console.log('点击了新闻')
      this.$store.commit('setMainNavState', 'news')
      this.$router.push({
        path: '/news/compActivity',
        query: {
          isDetail: 1,
          articleId: item.articleId,
          activeName: 2
        }
      })
    },
    /**
     * 点击了更多关于 touchAboutUsMoreAction
     **/
    touchAboutUsMoreAction: function () {
      this.$store.commit('setMainNavState', 'about')
      this.$router.push('about')
    },

    /**
     * 鼠标移入banner
     */
    bannerMouseenter () {
      // console.log('enter')
      this.setting.autoplay = false
    },

    /**
     * 鼠标移除banner
     */
    bannerMouseout () {
      // console.log('out')
      this.setting.autoplay = true
    },

    /**
     * 鼠标移入品牌
     */
    section4Mouseenter (e) {
      console.log('移入了')
      switch (e) {
        case 1:
          this.s1 = 1
          break
        case 2:
          this.s2 = 1
          break
        case 3:
          this.s3 = 1
          break
        case 4:
          this.s4 = 1
          break
        case 5:
          this.s5 = 1
          break
      }
    },

    /**
     * 鼠标移出品牌
     */
    section4MouseLeave (e) {
      switch (e) {
        case 1:
          this.s1 = 0
          break
        case 2:
          this.s2 = 0
          break
        case 3:
          this.s3 = 0
          break
        case 4:
          this.s4 = 0
          break
        case 5:
          this.s5 = 0
          break
      }
    }
  },
  mounted () {
    new WOW().init()
  }
}
</script>

<style>
  /*  全局修改顶部banner*/
  .sub-top-div {
    margin-top: 64px;
  }

  .ivu-carousel-arrow {
    width: 50px !important;
    height: 50px !important;
    font-size: 2.5em !important;
    border-radius: 0 !important;
    opacity: 1 !important;
    background-color: rgba(0, 0, 0, 0.15) !important;
  }

  #product-swiper-pagination .swiper-pagination-bullet-active {
    background: #FF2A2A;
  }

  #product-swiper-pagination .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
  }

  #news-swiper-pagination .swiper-pagination-bullet-active {
    background: #FF2A2A;
  }

  #news-swiper-pagination .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
  }

  @media screen and (min-width: 992px) {
    .sub-top-div {
      margin-top: 98px;
    }

    .ivu-carousel-arrow {
      width: 100px !important;
      height: 100px !important;
      font-size: 2.5em !important;
      border-radius: 0 !important;
    }
  }

  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px;
    background: rgba(0, 0, 0, 0);
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

</style>

<style scoped>
  .news-row {
    margin-bottom: 0;
  }

  .banner-img {
    width: 100%;
    /*height: 250px;*/
    object-fit: cover;
    position: relative;
  }

  .banner-img-float {
    position: relative;
    width: 440px;
    height: 300px;
  }

  .banner-img-float2-div {
    max-width: 1200px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .banner-img-float2 {
    position: relative;
    width: 350px;
    height: 200px;
  }

  .banner-img-float3 {
    position: relative;
    width: 330px;
    height: 100px;
  }

  .banner-img-float4 {
    position: relative;
    width: 400px;
    height: 140px;
  }

  .section1 {
    width: 100%;
    min-height: 518px;
    background: -webkit-linear-gradient(#1A1A1A, #4C4C4C, #1A1A1A);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#1A1A1A, #4C4C4C, #1A1A1A);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#1A1A1A, #4C4C4C, #1A1A1A);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(#1A1A1A, #4C4C4C, #1A1A1A);
    /* 标准的语法 */
    /*position: relative;*/
    /*margin-top: -5px;*/
    padding-bottom: 10px;
  }

  .product-container {
    width: 100%;
  }

  .s1-title {
    font-size: 24px;
    /*font-style: italic;*/
    font-family: '微软雅黑';
    color: rgba(255, 255, 255, 1);
    font-weight: 900;
    margin-left: 20px;
    /*margin-top: 40px;*/
    width: 100% !important;
  }

  .s1-title-black {
    color: #000000 !important;
    font-weight: bolder;
  }

  .s2-xw-row {
    padding-left: 20px;
    padding-right: 20px;
  }

  .s3-gy-info {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
    font-size: 14px;
    /*font-family: PingFangSC-Regular;*/
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    /*transform: skewX(10deg);*/
    /*padding-top: 17px;*/
    /*border-top: solid 1px red;*/
    text-align: justify;
    padding-right: 13px;
  }

  .about-title {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .s3-gy-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    /*background-image: url("../assets/guanyuwomen_bg_c.jpg");*/
    /*background-repeat: no-repeat;*/
    /*background-size: 100% 100%;*/
    /*-moz-background-size: 100% 100%;*/
    /*transform: skewX(-10deg);*/
    min-height: 100px;
    /*padding: 42px 56px 110px 66px;*/
    /*margin-bottom: 113px;*/
    padding: 0 20px;
  }

  .s3-detail-btn {
    width: 120px;
    height: 43px;
    float: right;
    border-radius: 22px;
    font-size: 20px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-top: 48px;
    background: -webkit-linear-gradient(left, #FF0000, #FF4141); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #FF0000, #FF4141); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #FF0000, #FF4141); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #FF0000, #FF4141);
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .c2-title {
    font-size: 24px;
    color: black;
    font-weight: normal;
    width: 100% !important;
    margin-bottom: 20px;
  }

  /* 屏幕大于768 */
  @media screen and (min-width: 768px) {
    .news-row {
      /*margin-bottom: 3.5rem;*/
    }

    .s1-title {
      font-size: 36px;
      /*font-style: italic;*/
      color: rgba(255, 255, 255, 1);
      font-weight: normal;
      /*margin-top: 40px;*/
      width: 100% !important;
      margin-left: 28px;
    }

    .c2-title {
      font-size: 36px;
    }

    .product-container {
      max-width: 1200px;
    }

    .banner-img-float {
      position: relative;
      width: 892px;
      height: 608px;
    }

    .banner-img-float2 {
      position: relative;
      width: 442px;
      height: 252px;
    }

    .banner-img-float2-div {
      max-width: 1200px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .banner-img-float3 {
      position: relative;
      width: 659px;
      height: 201px;
    }

    .banner-img-float4 {
      position: relative;
      width: 604px;
      height: 226px;
    }

    .s2-xw-row {
      padding-left: 28px;
      padding-right: 28px;
    }

    .s3-gy-bg {
      /*padding: 42px 56px 110px 66px;*/
      /*margin-top: 140px;*/
      /*padding: 0 100px;*/
      padding-left: 28px;
      padding-right: 100px;
      /*padding-left: 100px;*/
      min-height: 350px;
    }

    .about-title {
      margin-top: 16px;
      margin-bottom: 20px;
    }

    .banner-img {
      width: 100%;
      /*height: 500px;*/
      object-fit: cover;
    }

    .s3-gy-info {
      font-size: 18px;
    }

    .s3-detail-btn {
      /*margin-right: -35px;*/
    }

  }

  /* 屏幕大于1280px */
  @media screen and (min-width: 1280px) {
    .banner-img {
      width: 100%;
      /*height: 700px;*/
      object-fit: cover;
    }
  }

  .s1-cp-col {
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }

  .s1-pd-col {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .s1-pd-detail-btn {
    margin-right: 28px;
    border-radius: 0;
    border-width: 0;
    background: -webkit-linear-gradient(left, #FF0000, #FF4141); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #FF0000, #FF4141); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #FF0000, #FF4141); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #FF0000, #FF4141);
  }

  .product-item {
    padding: 15% 5% 0 5%;
    border: 1px solid rgba(0, 0, 0, 0);
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
    transition: .2s;
  }

  .product-item:hover {
    border: 1px solid #999999;
  }

  .product-item:hover .product-img {
    transform: translateY(-20px)
  }

  .product-item:hover .product-line {
    display: none;
  }

  .product-img {
    /* margin-top: 20px;
        margin-bottom: 20px; */
    width: 100% !important;
    transition: .2s;
  }

  /*
    .product-img-focus {
        margin-top: 0;
        margin-bottom: 40px;
        width: 100%;
    } */

  .product-title {
    font-size: 27px;
    font-family: SourceHanSansCN-Bold;
    font-weight: bold;
    /*color: rgba(255, 0, 0, 1);*/
    color: white;
    text-align: center;
    line-height: 30px;
  }

  .product-subtitle {
    font-size: 20px;
    font-family: SourceHanSansCN-Light;
    font-weight: 300;
    /*color: rgba(255, 255, 255, 1);*/
    /*color: rgba(159, 159, 159, 1);*/
    color: #666;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .product-intro {
    height: 20px;
    width: auto;
    font-size: 13px;
    font-family: SourceHanSansCN-Light;
    font-weight: 300;
    color: rgba(128, 128, 128, 1);
    text-align: center;
    margin-top: 24px;
    padding-bottom: 20px;
    margin-bottom: 29px;
    /* border-bottom: 1px solid #FF0000; */
  }

  .product-line {
    width: 60px;
    height: 1px;
    position: absolute;
    background: red;
    left: 50%;
    margin-left: -30px;
  }

  .section2 {
    /*background: #000000;*/
    /*background-image: url(https://file.codingswifter.com/hkgj/xinwenbeijing1.jpg);*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    /*-moz-background-size: 100% 100%;*/
    background-color: rgb(225, 225, 225);
    min-height: 518px;
  }

  .s2-xw-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 0;
    margin-bottom: 10px;
    box-shadow: 0px 10px 10px -10px #888888;
    cursor: pointer;
  }

  .s2-xw-col:hover .s2-xw-info-div {
    background-color: #FF2A2A;
  }

  .s2-xw-col:hover .s2-xw-date {
    color: white;
  }

  .s2-xw-col:hover .s2-xw-title {
    color: white;
  }

  .s2-xw-col:hover .s2-xw-detail {
    color: #000000;
    background-color: white;
    border-radius: 15px;
  }

  .news-img {
    /* margin-top: 20px;
        margin-bottom: 20px; */
    width: 100%;
    height: 220px;
    position: relative;
    object-fit: cover;
  }

  .news-img-info {
    position: absolute;
    bottom: 125px;
    left: 10px;
    width: 40px;
    height: 40px;
    z-index: 99;
  }

  .s2-xw-info-div {
    height: 125px;
    width: 100%;
    background: #FFFFFF;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    width: 100%;
    transition: background-color 0.5s;
    -moz-transition: background-color 0.5s; /* Firefox 4 */
    -webkit-transition: background-color 0.5s; /* Safari 和 Chrome */
    -o-transition: background-color 0.5s; /* Opera */
    text-align: left !important;
  }

  .s2-xw-date {
    font-size: 11px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(128, 128, 128, 1);
    /*line-height: 3px;*/
    transition: color 0.5s;
    -moz-transition: color 0.5s; /* Firefox 4 */
    -webkit-transition: color 0.5s; /* Safari 和 Chrome */
    -o-transition: color 0.5s; /* Opera */
  }

  .s2-xw-title {
    font-size: 13px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    /*line-height: 17px;*/
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    cursor: pointer;
    transition: background-color 0.5s;
    -moz-transition: background-color 0.5s; /* Firefox 4 */
    -webkit-transition: background-color 0.5s; /* Safari 和 Chrome */
    -o-transition: background-color 0.5s; /* Opera */
  }

  .s2-xw-detail {
    font-size: 10px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: white;
    background-color: #FF1919;
    cursor: pointer;
    transition: background-color 0.5s;
    -moz-transition: background-color 0.5s; /* Firefox 4 */
    -webkit-transition: background-color 0.5s; /* Safari 和 Chrome */
    -o-transition: background-color 0.5s; /* Opera */
    width: 60px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section3 {
    /*background: #FFFFFF;*/
    width: 100%;
    /*height: auto;*/
    /*background-image: url(https://file.codingswifter.com/hkgj/xinwenbeijing_new2.jpeg);*/
    /*background-repeat: no-repeat;*/
    /*background-size: 100% 100%;*/
    /*background-size: cover;*/
    /*-moz-background-size: 100% 100%;*/
    /*min-height: 768px;*/
    background-color: rgb(225, 225, 225);
    min-height: 468px;
  }

  .section4 {
    width: 100%;
    /*max-height: 154px;*/
    background-color: white;
  }

  .s3-gy-col {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
  }

  .s3-gy-d-col {
    position: relative;
  }


  .s3-line-red {
    height: 0px;
    width: 100%;
    background: rgba(255, 0, 0, 1);
    /*transform: skewX(10deg);*/
    margin-left: -80px;
  }

  .section4-img-s1 {
    max-height: 154px;
    width: 100%;
    cursor: pointer;
  }

  .section4-img-s1:hover {
    background-color: #f0f0f0;
  }

  .recruitment-col {
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    /*align-items: center;*/
    padding-right: 40px;
  }

  .recruitment-p {
    font-size: 16px;
    line-height: 40px;
    color: #000;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /*指定行数*/
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .recruitment-p span {
    font-size: 16px;
    margin-right: 30px;
  }

  .c1-pd-detail-btn {
    width: 80px;
    border: 0;
    border-radius: 0;
    background: -webkit-linear-gradient(left, #FF0000, #FF4141); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #FF0000, #FF4141); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #FF0000, #FF4141); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #FF0000, #FF4141);
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .recruitment-title {
    color: #000000;
  }

  .recruitment-title:hover {
    color: #FF0000;
  }
</style>
