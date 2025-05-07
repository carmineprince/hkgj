<template>
  <div style="text-align: center;">
    <h2 v-if="this.$store.getters.getShowMethod == 1" style="line-height:60px">招标活动</h2>
    <h2 v-else style="margin-bottom: 30px">Bidding activities</h2>
    <div v-if="isDetail == 0">
      <div v-for="(item,index) in articleData" class="news-item" @click="touchItemAction(item)">
        <img class="news-img" :src="item.mainImg">
        <div class="news-info-div">
          <h2 class="news-title">{{item.title}}</h2>
          <p class="news-abstract">{{item.intro}}</p>
          <p class="news-date">{{item.created_at}}</p>
        </div>
      </div>
      <Page v-if="this.$store.getters.getShowMethod == 1" class="comp-activity-page-control" :total="total"
            prev-text="上一页"
            next-text="下一页" :styles="pageStyles"
            class-name="test"
            @on-change="pageNumberChange"
            :page-size="10"
      />
      <Page v-else class="comp-activity-page-control" :total="total" prev-text="prev" next-text="next"
            :styles="pageStyles"
            class-name="test"
            @on-change="pageNumberChange"
            :page-size="10"
      />
    </div>

    <div class="article-container" v-else style="text-align: left;min-height: 500px">
      <Breadcrumb v-if="this.$store.getters.getShowMethod == 1" class="breadcrumb-item" separator=">">
        <BreadcrumbItem><a @click="backToGroupAction">招标活动</a></BreadcrumbItem>
        <BreadcrumbItem>详情</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb v-else class="breadcrumb-item" separator=">">
        <BreadcrumbItem><a @click="backToGroupAction">Bidding activities</a></BreadcrumbItem>
        <BreadcrumbItem>Detail</BreadcrumbItem>
      </Breadcrumb>
      <h2 class="article-title">{{articleDetailData.title}}</h2>
      <p class="article-date">{{articleDetailData.created_at}}</p>
      <!--      <div class="article-img-div">-->
      <img class="article-main-img" :src="articleDetailData.mainImg">
      <!--      </div>-->
      <div class="content" v-html="articleDetailData.details">

      </div>

    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      isDetail: 0,
      articleData: [],
      articleDetailData: {},
      total: 0,
      articleId: 0,
      pageStyles: {
        'margin-top': '30px'
      },
      pageNumber: 1
    }
  },
  mounted () {
    this.getArticles()
    if (this.isDetail === 1) {
      this.articleId = this.$route.query.articleId
      this.getArticleDetail(parseInt(this.$route.query.articleId))
    }
  },
  computed: {
    showMethod () {
      return this.$store.getters.getShowMethod
    }
  },
  watch: {
    showMethod: function (newQuestion, oldQuestion) {
      this.getArticles()
      if (this.isDetail == 1) {
        this.getArticleDetail(this.articleId)
      }
    }
  },
  methods: {
    /**
     * 发送获取新闻动态的请求 website/getArticles
     */
    getArticles: function () {
      var _this = this
      var url = 'website_bsm/website/getArticles'
      var data = {
        groupId: '27',
        pageNumber: this.pageNumber,
        pageSize: '10',
        showMethod: this.$store.getters.getShowMethod,
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3'
      }
      axios.get(url, {
        params: data
      })
        .then(function (res) {
          _this.articleData = res.data.data
          _this.total = res.data.total
        })
    },
    /**
     * 获取文章详情
     **/
    getArticleDetail: function (articleId) {
      var _this = this
      var url = 'website_bsm/website/getArticle'
      var data = {
        articleId: articleId,
        showMethod: this.$store.getters.getShowMethod,
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3',
      }
      axios.get(url, {
        params: data
      })
        .then(function (res) {
          _this.articleDetailData = res.data.data
        })
    },
    /**
     * 点击了item
     **/
    touchItemAction: function (item) {
      // console.log(item)
      this.articleId = item.articleId
      this.getArticleDetail(item.articleId)
      this.isDetail = 1
    },

    /**
     * 点击了返回列表
     */
    backToGroupAction: function () {
      this.isDetail = 0
    },

    /**
     * 改变了页码
     */
    pageNumberChange (e) {
      this.pageNumber = e
      this.getArticles()
    }
  }
}
</script>

<style scoped>
  .news-item {
    display: flex;
    flex-direction: row;
    height: 180px;
    width: 100%;
    border-bottom: solid #F5F7F9 1px;
    /* margin-bottom: 20px; */
    cursor: pointer;
    padding: 20px;
    transition: background-color .5s;
    -moz-transition: background-color .5s;
    /* Firefox 4 */
    -webkit-transition: background-color .5s;
    /* Safari and Chrome */
    -o-transition: background-color .5s;
    /* Opera */
  }

  .news-item:hover {
    background: #F0F0F0;
  }

  .news-img {
    height: 90%;
    width: 150px !important;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    .news-img {
      width: 220px !important;
    }
  }

  .news-info-div {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 0 0 30px;
    text-align: left;
  }

  .news-title {
    font-size: 19px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
  }

  .news-abstract {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    /* 多行超出长度隐藏 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* 向显示多少行就给多大值 */
    -webkit-box-orient: vertical;
  }

  .news-date {
    font-size: 9px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .test .ivu-page-item {
    background: #42B983 !important;
  }

  .comp-activity-page-control {
    padding-bottom: 40px;
  }

  .article-title {
    font-size: 30px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    margin-top: 10px;
  }

  .article-date {
    margin-top: 10px;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .article-img-div {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }

  .article-main-img {
    margin: 10px auto;
    width: 100%;
  }

  .content img {
    text-align: center;
  }

</style>

<style>
  .ivu-breadcrumb a:hover {
    color: #FF4141;
  }

  .article-container {
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    .article-container {
      padding: 30px;
    }
  }
</style>
