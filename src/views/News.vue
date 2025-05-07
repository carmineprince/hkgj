<template>
  <div class="about sub-top-div" style="background: #000000;">
    <div style="margin: 0 auto; position: relative;">
      <img class="banner" src="../assets/news_top_banner.jpg"/>
      <!--      <div class="banner-title">News</div>-->
      <div
        style="max-width: 1200px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;display: flex;align-items: center;justify-content: flex-end;">
        <!--        <img class="banner-img-float" src="../assets/banner_2_h1.jpg">-->
<!--        <div class="banner-title" style="color: white;">News</div>-->
      </div>
    </div>
    <!--  -->
    <div class="section1">
      <div style="max-width: 1200px;margin: 0 auto;">
        <h1 v-if="this.$store.getters.getShowMethod == 1" class="page-title"> 新闻动态</h1>
        <h1 v-else class="page-title"> News</h1>
        <Row class="about-row">
          <Col v-if="this.$store.getters.getShowMethod == 1" class="col-silder" :md="24" :lg="6" :xl="5" :xxl="4">
            <Menu :active-name="activeName" width="auto" ref="side_menu">
              <MenuItem name="1" :to="{path:'/news/',query:{activeName:1}}">企业宣传片</MenuItem>
              <MenuItem name="2" :to="{path:'/news/compActivity',query:{activeName:2}}">新闻热点</MenuItem>
              <MenuItem name="3" :to="{path:'/news/biddingActivities',query:{activeName:3}}">招标活动</MenuItem>
            </Menu>
          </Col>
          <Col v-else class="col-silder" :md="24" :lg="6" :xl="5" :xxl="4">
            <Menu :active-name="activeName" width="auto" ref="side_menu">
              <MenuItem name="1" :to="{path:'/news/',query:{activeName:1}}">Corporate video</MenuItem>
              <MenuItem name="2" :to="{path:'/news/compActivity',query:{activeName:2}}">News hotspots</MenuItem>
              <MenuItem name="3" :to="{path:'/news/biddingActivities',query:{activeName:3}}">Bidding activities</MenuItem>
            </Menu>
          </Col>
          <Col class="s1-content-col" :md="24" :lg="{span:'17',offset:'1'}" :xl="{span:'18',offset:'1'}"
               :xxl="{span:'19',offset:'1'}">
            <router-view/>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 1
    }
  },
  updated () {
    if (typeof (this.$route.query.activeName) !== 'undefined' && this.$route.query.activeName !== null && this.$route.query.activeName.length !== 0) {
      this.activeName = this.$route.query.activeName.toString()
      this.$nextTick(() => {
        this.$refs.side_menu.updateActiveName()
      })
    }
  },
  created () {
    var mainNavState = this.$store.state.mainNavState
    if (mainNavState !== 'news') {
      this.$store.commit('setMainNavState', 'news')
    }
    if (typeof (this.$route.query.activeName) !== 'undefined' && this.$route.query.activeName !== null && this.$route.query.activeName.length !== 0) {
      this.activeName = this.$route.query.activeName.toString()
    } else {
      this.activeName = '1'
    }
  },
}
</script>
<style scoped>
  .banner-title {
    display: none;
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: rgba(226, 34, 34, 1);
    color: rgba(255, 255, 255, 1);
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {

    width: 0;
  }

  .ivu-menu-vertical .ivu-menu-item,
  .ivu-menu-vertical .ivu-menu-submenu-title {
    font-size: 1rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: center;
  }

  .about {
    padding: 0;
  }

  .col-silder {
    margin-bottom: 40px;
  }

  .banner {
    width: 100%;
    /*height: 200px !important;*/
    /*object-fit: cover;*/
    max-height: 324px !important;
    min-height: 200px !important;
    object-fit: cover;
  }

  .section1 {
    padding: 15px;
    background: rgba(229, 229, 229, 1);
    margin-top: -5px;
  }

  /* 屏幕大于768 */
  @media screen and (min-width: 768px) {
    .section1 {
      padding: 20px 67px 67px 67px;
    }

    .banner-title {
      display: inline;
      font-size: 68px;
      font-weight: normal;
      color: rgba(153, 153, 153, 1);
      position: absolute;
      right: 100px;
      bottom: 50px;
    }

    .banner {
      height: 486px !important;
    }
  }

  .page-title {
    font-size: 3rem;
    /* font-family: PingFangSC-Medium; */
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    margin-top: 20px;
  }

  .about-row {
    margin-top: 20px;
  }

  .s1-container {
    height: auto;
    width: 100%;
    background: white;
  }

  .s1-content-col {
    /*margin-top: 50px;*/
    background: white;
    padding: 0;
  }

  /*大于768*/
  @media screen and (min-width: 768px) {
    .s1-content-col {
      padding: 50px 30px;
    }
  }
</style>
