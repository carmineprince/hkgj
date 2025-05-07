<template>
  <div class="about sub-top-div" style="background:  rgba(229, 229, 229, 1);">
    <div style="margin: 0 auto;">
      <img class="banner" src="https://file.codingswifter.com/hkgj/banner4.png"/>
    </div>
    <!--  -->
    <div class="section1">
      <div style="max-width: 1200px;margin: 0 auto;">
        <h1 v-if="this.$store.getters.getShowMethod == 1" class="page-title"> 企业荣誉</h1>
        <h1 v-else class="page-title"> Enterprise Honor</h1>
        <Row class="about-row">
          <Col v-if="this.$store.getters.getShowMethod == 1" class="col-silder" :md="24" :lg="6" :xl="5" :xxl="4">
            <Menu :active-name="activeName" width="auto">
              <MenuItem name="1" to="/honor/compInnovate">科技创新</MenuItem>
              <MenuItem name="2" to="/honor/honorApprove">省级荣誉</MenuItem>
              <MenuItem name="3" to="/honor/approve3c">3c认证</MenuItem>
            </Menu>
          </Col>
          <Col v-else class="col-silder" :md="24" :lg="6" :xl="5" :xxl="4">
            <Menu active-name="1" width="auto">
              <MenuItem name="1" to="/honor/compInnovate">Technology innovation</MenuItem>
              <MenuItem name="2" to="/honor/honorApprove">Honorary certificate</MenuItem>
              <MenuItem name="3" to="/honor/approve3c">3 c authentication</MenuItem>
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
    if (mainNavState !== 'honor') {
      this.$store.commit('setMainNavState', 'honor')
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
    /*height: 120px !important;*/
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

    .banner {
      width: 100%;
      height: 486px !important;
      object-fit: cover;
    }
  }

  /*!* 屏幕大于1280 *!*/
  /*@media screen and (min-width: 1281px) {*/
  /*  .banner {*/
  /*    width: 100%;*/
  /*    height: 486px !important;*/
  /*    object-fit: cover;*/
  /*  }*/
  /*}*/

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
    padding: 50px 30px;
    /* margin-left: 31px; */
  }
</style>
