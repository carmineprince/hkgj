<template>
  <div style="text-align: center;">
    <div style="text-align: left;padding: 30px;min-height: 500px">
      <h2 class="article-title">{{articleDetailData.title}}</h2>
      <p class="article-date">{{articleDetailData.created_at}}</p>
      <!--      <div class="article-img-div">-->
      <img class="article-main-img" :src="articleDetailData.mainImg">
      <!--      </div>-->
      <div class="content article-html-content" v-html="articleDetailData.details">

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
      pageStyles: {
        'margin-top': '30px'
      },
      pageNumber: 1
    }
  },
  mounted () {
    this.getArticleDetail()
  },
  computed: {
    showMethod () {
      return this.$store.getters.getShowMethod
    }
  },
  watch: {
    showMethod: function (newQuestion, oldQuestion) {
      this.getArticleDetail()
    }
  },
  methods: {
    /**
     * 获取文章详情
     **/
    getArticleDetail: function (articleId) {
      var _this = this
      var url = 'website_bsm/website/getArticle'
      var data = {
        articleId: '38',
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
    width: 150px;
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    .news-img {
      width: 220px;
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

  #comp-activity-page-control {
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

  .content {
    font-size: 1.5em;
    text-indent: 2em;
    line-height: 30px;
    font-size: 16px;
  }

  p img {
    /*display: block;*/
    margin: 0 auto;
  }
</style>

<style>
  .ivu-breadcrumb a:hover {
    color: #FF4141;
  }
  .ql-align-center{
    display: flex;
    justify-content: center;
  }
</style>
