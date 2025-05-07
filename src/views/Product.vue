<template>
  <div class="about sub-top-div" style="background: #000000;">
    <div style="margin: 0 auto; position: relative;">
      <img class="banner" src="../assets/product_top_banner.jpg"/>
      <!--      <div class="banner-title">Product Display</div>-->
      <div
        style="max-width: 1200px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;display: flex;align-items: center;justify-content: flex-end;">
        <!--        <img class="banner-img-float" src="../assets/banner_2_h1.jpg">-->
<!--        <div class="banner-title" style="color: white;">Product Display</div>-->
      </div>
    </div>
    <!--  -->
    <div class="section1">
      <div style="max-width: 1200px;margin: 0 auto;">
        <h1 v-if="this.$store.getters.getShowMethod == 1" class="page-title">豪克轮胎</h1>
        <h1 v-else class="page-title">Product Display</h1>
        <Row class="about-row">
          <Col class="col-silder" :md="24" :lg="6" :xl="5" :xxl="4">
            <Menu id="product-menu" width="auto" :active-name="activeName" accordion
                  ref="side_menu"
                  :open-names="sideOpenNames"
                  @on-select="changeSideSelect" @on-open-change="openSide">
              <!--              <MenuItem v-for="(item,index) in groupDataList" :name="item.pgroupId">{{item.name}}</MenuItem>-->
              <Submenu v-for="(item,index) in groupDataList" :name="item.productGroup.pgroupId">
                <template slot="title">
                  {{item.productGroup.name}}
                </template>
                <MenuItem :name="item2.tag.tagId" v-for="(item2,index2) in item.pgroupTags"
                          style="display: flex;flex-direction: row;justify-content: center">
                  <span class="yuan" v-show="item2.tag.tagId == activeName"></span>
                  {{item2.tag.tagName}}
                </MenuItem>
              </Submenu>
            </Menu>
          </Col>
          <Col id="s1-content-col" class="s1-content-col" :md="24" :lg="{span:'17',offset:'1'}"
               :xl="{span:'18',offset:'1'}"
               :xxl="{span:'19',offset:'1'}">
            <div v-if="isDetail === 0">
              <h2 class="product-tag-title">{{tagName}}</h2>
              <Row>
                <Col v-for="(item,index) in dataList" class="product-item" :xs="24" :sm="24" :md="12" :lg="8" :xl="6"
                     :xxl="6">
                  <img class="product-img" :src="item.mainImg" @click="touchProduct(item)"/>
                  <h3 class="product-title">{{item.name}}</h3>
                </Col>
              </Row>

              <Page v-if="this.$store.getters.getShowMethod == 1" id="comp-activity-page-control" :total="total"
                    prev-text="上一页" next-text="下一页" class-name="test" @on-change="pageNumberChange" :page-size="8"/>
              <Page v-else id="comp-activity-page-control" :total="total" prev-text="prev" next-text="next"
                    class-name="test" @on-change="pageNumberChange" :page-size="8"/>
            </div>
            <div v-else style="text-align: left">
              <Breadcrumb v-if="this.$store.getters.getShowMethod == 1" class="product-breadcrumb-item" separator=">">
                <BreadcrumbItem>豪克轮胎</BreadcrumbItem>
                <BreadcrumbItem><a @click="backToPGroupAction">{{tagName}}</a></BreadcrumbItem>
                <BreadcrumbItem v-if="typeof (currentItem.product) == 'undefined'">{{currentItem.name}}</BreadcrumbItem>
                <BreadcrumbItem v-else>{{currentItem.product.name}}</BreadcrumbItem>
              </Breadcrumb>

              <Breadcrumb v-else class="product-breadcrumb-item" separator=">">
                <BreadcrumbItem>Product Display</BreadcrumbItem>
                <BreadcrumbItem><a @click="backToPGroupAction">{{tagName}}</a></BreadcrumbItem>
                <BreadcrumbItem v-if="typeof (currentItem.product) == 'undefined'">{{currentItem.name}}</BreadcrumbItem>
                <BreadcrumbItem v-else>{{currentItem.product.name}}</BreadcrumbItem>
              </Breadcrumb>

              <Divider/>
              <template>
                <div style="width: 100%;" v-if="typeof (currentItem.product) == 'undefined'">
                  <img v-img:group v-for="(item,index) in currentItem.detailImg.split(',')" :src="item" style="width: 100%"/>
                </div>
                <div style="width: 100%;" v-else>
                  <img v-img:group v-for="(item,index) in currentItem.product.detailImg.split(',')" :src="item"
                       style="width: 100%"/>
                </div>
              </template>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      groupDataList: [],
      activeName: this.$route.query.tagId,
      pgroupId: this.$route.query.pgroupId,
      tagName: '',
      dataList: [],
      total: 0,
      isDetail: this.$route.query.isDetail,
      currentItem: this.$store.state.currentProductItem,
      tests: 'www.baidu.com',
      pageNumber: 1,
      sideOpenNames: [this.$route.query.pgroupId]
    }
  },
  created () {
    //  如果是从顶部导航栏直接进入,设定默认打开第一个分栏
    if (typeof (sideOpenNames) == 'undefined' || sideOpenNames.length == 0) {
      this.sideOpenNames = [23]
    }
    //  如果当前主菜单不是product，设置成product
    var mainNavState = this.$store.state.mainNavState
    if (mainNavState !== 'product') {
      this.$store.commit('setMainNavState', 'product')
    }
    //  获取产品信息
    this.getProductGroups()
    //  是否查看产品详情。（顶部导航进入、更多进入、直接点击产品进入）
    if (typeof (this.$route.query.isDetail) !== 'undefined') {
      this.isDetail = parseInt(this.$route.query.isDetail)
    } else {
      this.isDetail = 0
    }
    if (this.isDetail === 1) {
      //  如果是查看产品详情，从store中获取当前查看的数据
      this.currentItem = this.$store.getters.getCurrentProductItem
    }
    //  更新侧边导航栏状态
    this.$nextTick(() => {
      this.$refs.side_menu.updateOpened()
      this.$refs.side_menu.updateActiveName()
    })
  },
  mounted () {
    if (typeof (this.$route.query.pgroupId) !== 'undefined' && this.$route.query.pgroupId !== null && this.$route.query.pgroupId.length !== 0) {
      this.sideOpenNames = [this.$route.query.pgroupId]
      this.$nextTick(() => {
        this.$refs.side_menu.updateOpened()
        this.$refs.side_menu.updateActiveName()
      })
    }
  },
  updated () {
    this.$nextTick(() => {
      this.$refs.side_menu.updateOpened()
      this.$refs.side_menu.updateActiveName()
    })
  },
  computed: {
    //  监听中英文状态
    showMethod () {
      return this.$store.getters.getShowMethod
    }
  },
  watch: {
    //  监听中英文状态
    showMethod: function (newQuestion, oldQuestion) {
      this.getProductGroups()
    }
  },
  methods: {

    /**
     * 发送获取一级菜单的 website/getProductGroups
     */
    getProductGroups () {
      var _this = this
      var url = '/website_bsm/website/getProductGroups'
      var data = {
        uniqueId: this.$store.state.uniqueId,
        showMethod: this.$store.state.showMethod,
        websiteId: '4'
      }
      axios.get(url, {
        params: data
      }).then(res => {
        if (res.data.code !== 0) {
          this.$Message.info(res.data.msg)
        } else {
          // console.log('开始找')
          _this.groupDataList = res.data.data
          if (res.data.data.length !== 0) {
            //  如果是查看商品详情
            if (this.isDetail === 1) {
              //  获取分组ID
              if (typeof (_this.$route.query.pgroupId) != 'undefined') {
                _this.pgroupId = _this.$route.query.pgroupId
              }
              // _this.sideOpenNames[0] = parseInt(this.$route.query.pgroupId)
              //  获取标签ID,上级界面返回
              if (typeof (_this.$route.query.tagId) != 'undefined') {
                _this.activeName = parseInt(_this.$route.query.tagId)
              }
              // console.log('开始找')
              //  遍历找到标签名称
              for (var i = 0; i < _this.groupDataList.length; i++) {
                var pgroupTags = _this.groupDataList[i].pgroupTags
                for (var j = 0; j < pgroupTags.length; j++) {
                  var item = pgroupTags[j]
                  if (item.tag.tagId === _this.activeName) {
                    _this.tagName = item.tag.tagName
                    // console.log('找到了标签名称')
                  }
                  // break
                }
              }
            } else {
              //  如果不是查看商品详情：顶部导航进入、更多进入
              if (typeof (_this.activeName) === 'undefined' || _this.activeName.length == 0) {
                _this.pgroupId = res.data.data[0].productGroup.pgroupId
                _this.activeName = res.data.data[0].pgroupTags[0].tag.tagId
                _this.tagName = res.data.data[0].pgroupTags[0].tag.tagName
              } else {
                for (var i = 0; i < _this.groupDataList.length; i++) {
                  var pgroupTags = _this.groupDataList[i].pgroupTags
                  for (var j = 0; j < pgroupTags.length; j++) {
                    var item = pgroupTags[j]
                    if (item.tag.tagId === parseInt(_this.activeName)) {
                      _this.tagName = item.tag.tagName
                      // console.log('找到了标签名称')
                    }
                    // break
                  }
                }
              }
            }
            this.$nextTick(() => {
              this.$refs.side_menu.updateOpened()
              this.$refs.side_menu.updateActiveName()
            })
            _this.getProducts(_this.activeName)
          }
        }
      })
    },
    /**
     * 发送获取该分组下的产品 website/getProducts
     **/
    getProducts (tagId) {
      var _this = this
      var url = '/website_bsm/website/getGroupProducts'
      var data = {
        uniqueId: this.$store.state.uniqueId,
        showMethod: this.$store.state.showMethod,
        pgroupId: this.pgroupId,
        tagId: this.activeName,
        pageNumber: this.pageNumber,
        pageSize: '8'
      }
      axios.get(url, {
        params: data
      }).then(res => {
        if (res.data.code !== 0) {
          this.$Message.info(res.data.msg)
        } else {
          // console.log(res.data.data)
          // console.log(res.data.total)
          _this.dataList = res.data.data
          _this.total = res.data.total
        }
      })
    },
    /**
     * 改变了侧边栏目 changeSideSelect
     */
    changeSideSelect (e) {
      this.activeName = e
      this.isDetail = 0
      this.pageNumber = 1
      for (var i = 0; i < this.groupDataList.length; i++) {
        var pgroupTags = this.groupDataList[i].pgroupTags
        for (var j = 0; j < pgroupTags.length; j++) {
          var item = pgroupTags[j]
          if (item.tag.tagId === e) {
            this.tagName = item.tag.tagName
          }
          // break
        }
      }
      this.getProducts(this.activeName)
      if (this.$store.state.screenWidth < 768) {
        document.getElementById('s1-content-col').scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    },
    /**
     * 打开了侧边栏
     */
    openSide (e) {
      this.pgroupId = e[0]
    },

    /**
     * 点击了商品
     */
    touchProduct (item) {
      this.isDetail = 1
      this.currentItem = item
    },
    /**
     *
     */
    backToPGroupAction () {
      this.isDetail = 0
    },
    /**
     * 改变了页码
     */
    pageNumberChange (e) {
      this.pageNumber = e
      this.getProducts(this.activeName)
    }
  }

}
</script>
<style scoped>
  .banner-title {
    display: none;
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
    background: white;
    padding: 31px;
    text-align: center;
  }

  .product-tag-title {
    font-size: 24px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    /*margin-top: 60px;*/
  }

  .product-item {
    padding: 40px;
    text-align: center;
    cursor: pointer;
  }

  .product-item:hover .product-img {
    /* margin-top: 0;
        margin-bottom: 20px; */
    transform: translateY(-20px)
  }

  .product-img {
    width: 100%;
    height: auto;
    min-height: 160px;
    margin-top: 20px;
    object-fit: cover;
    transition: .2s;
  }

  .product-title {
    font-size: 20px;
    font-family: SourceHanSansCN-Bold;
    font-weight: bold;
    /*color: rgba(255, 0, 0, 1);*/
    color: #666;
  }

  .yuan {
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: rgba(255, 0, 0, 1);
    display: block;
    float: left;
    margin: 6px 5px;
  }
</style>
<style>
  #product-menu .ivu-menu-submenu {
    text-align: center !important;
    font-size: 24px !important;
    font-weight: 400 !important;
    /* color: rgba(255, 255, 255, 1) !important; */
  }

  #product-menu .ivu-menu-item:hover,
  .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #FF4141;
  }

  #product-menu.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    /*background: #E22222;*/
    background: white;
    color: black;
  }

  #product-menu.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    width: 0;
  }

  #product-menu .ivu-menu-vertical .ivu-menu-item,
  .ivu-menu-vertical .ivu-menu-submenu-title {
    font-size: 1rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: center;
  }

  .ivu-menu-opened .ivu-menu-submenu-title {
    /*background: #FF4141;*/
    /*color: white;*/
    color: #FF4141;
  }

  .ivu-breadcrumb a:hover {
    color: #FF4141;
  }
</style>
