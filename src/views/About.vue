<template>
  <div class="about sub-top-div" style="background: #000000;">
    <div style="margin: 0 auto; position: relative;">
      <img class="banner" src="../assets/banner_single.jpg"/>

      <div
        style="max-width: 1200px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;display: flex;align-items: center;justify-content: flex-end;">
        <!--        <img class="banner-img-float" src="../assets/banner_2_h1.jpg">-->
<!--        <div class="banner-title">About Us</div>-->
      </div>
    </div>
    <!--  -->
    <div class="section1">
      <div style="max-width: 1200px;margin: 0 auto;">
        <h1 v-if="this.$store.getters.getShowMethod == 1" class="page-title">关于我们</h1>
        <h1 v-else class="page-title">About Us</h1>
        <Row class="about-row">
          <Col class="about-col-silder" :md="24" :lg="6" :xl="5" :xxl="4">
            <div v-if="this.$store.getters.getShowMethod == 1">
              <Menu :active-name="activeName" width="auto" ref="side_menu">
                <MenuItem name="1" to="/about/">公司简介</MenuItem>
                <MenuItem name="2" to="/about/developmentHistory">发展历程</MenuItem>
                <MenuItem name="3" to="/about/enterpriseCulture">企业文化</MenuItem>
                <MenuItem name="4" to="/about/compFacility">厂区设施</MenuItem>
                <MenuItem name="5" to="/about/recruitment">人才招聘</MenuItem>
              </Menu>
            </div>
            <div v-else>
              <Menu :active-name="activeName" width="auto" ref="side_menu">
                <MenuItem name="1" to="/about/">Company profile</MenuItem>
                <MenuItem name="2" to="/about/developmentHistory">Development course</MenuItem>
                <MenuItem name="3" to="/about/enterpriseCulture">Enterprise culture</MenuItem>
                <MenuItem name="4" to="/about/compFacility">Factory facilities</MenuItem>
                <MenuItem name="5" to="/about/recruitment">Talent Recruitment</MenuItem>
              </Menu>
            </div>
          </Col>
          <Col :md="24" :lg="{span:'17',offset:'1'}" :xl="{span:'18',offset:'1'}" :xxl="{span:'19',offset:'1'}"
               class="s1-content-col">
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
    if (mainNavState !== 'about') {
      this.$store.commit('setMainNavState', 'about')
    }
    if (typeof (this.$route.query.activeName) !== 'undefined' && this.$route.query.activeName !== null && this.$route.query.activeName.length !== 0) {
      this.activeName = this.$route.query.activeName.toString()
      // if (this.activeName == '5') {
      //   if (typeof (this.$route.query.isDetail) != 'undefined') {
      //     this.$router.push({
      //       path: '/about/Recruitment',
      //       query: {
      //         isDetail: this.$route.query.isDetail,
      //         articleId: this.$route.query.articleId
      //       }
      //     })
      //   }
      // }
    }
    this.$nextTick(() => {
      this.$refs.side_menu.updateActiveName()
    })
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

  .ivu-menu-light.ivu-menu-vertical
  .ivu-menu-item-active:not(.ivu-menu-submenu):after {
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

  .about-col-silder {
    margin-bottom: 40px;
  }

  .about {
    padding: 0;
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
    padding: 67px;
    background: rgba(229, 229, 229, 1);
    margin-top: -5px;
  }

  .section1 {
    padding: 15px;
    background: rgba(229, 229, 229, 1);
    margin-top: -5px;
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
    background: white;
    /*padding: 2rem !important;*/
  }

  /* 屏幕大于768 */
  @media screen and (min-width: 768px) {
    .section1 {
      padding: 20px 67px 67px 67px;
    }

    .s1-content-col {
      /*padding: 4rem !important;*/
      padding: 50px 30px;
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

  /* 屏幕大于768 */
  @media screen and (min-width: 1280px) {

    .banner-title {
      display: inline;
      font-size: 68px;
      font-weight: normal;
      color: rgba(153, 153, 153, 1);
      /*position: absolute;*/
      /*right: 200px;*/
      /*bottom: 50px;*/
    }
  }
</style>
