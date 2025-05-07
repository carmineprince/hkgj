<template>
  <div class="content">
    <h2 v-if="this.$store.getters.getShowMethod == 1" class="product-tag-title">省级荣誉</h2>
    <h2 v-else class="product-tag-title">Provincial Honours</h2>
    <Row :gutter="30">
      <Col v-for="(item,index) in dataList" :key="item.imgId" class="product-item" :xs="24" :sm="24" :md="12" :lg="12"
           :xl="12" :xxl="12">
        <img v-img:group class="product-img" :src="item.imgUrl"/>
      </Col>
    </Row>
    <Page v-if="this.$store.getters.getShowMethod == 1" id="comp-activity-page-control" :total="total" prev-text="上一页"
          next-text="下一页" class-name="test" @on-change="changePage" :page-size="10"/>
    <Page v-else id="comp-activity-page-control" :total="total" prev-text="prev" next-text="next" class-name="test"
          @on-change="changePage" :page-size="10"/>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      dataList: [],
      total: 0,
      pageNumber: 1
    }
  },
  methods: {
    /**
     * 获取全部数据
     */
    getDataLsit () {
      var _this = this
      const url = 'website_bsm/website/getAlbumImgs'
      var data = {
        albumId: '22',
        showMethod: '1',
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3',
        pageNumber: this.pageNumber,
        sortOrder: 'ASC'
      }
      axios.get(url, {
        params: data
      }).then((res) => {
        this.dataList = res.data.data
        this.total = res.data.total
      })
    },
    /**
     * pageController
     */
    changePage (e) {
      this.pageNumber = e
      this.getDataLsit()
    }
  },
  created () {
    this.getDataLsit()
  }
}

</script>
<style scoped>
  .content {
    text-align: center;
    padding: 40px;
  }

  .product-tag-title {
    font-size: 24px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }

  .product-item {
    text-align: center;
    cursor: pointer;
  }

  .product-img {
    width: 100%;
    /*height: 338px;*/
    height: 280px;
    margin-top: 20px;
    object-fit: scale-down;
    display: block;
    /*background: #f0f0f0;*/
    border: solid 1px white;
  }

  .product-img:hover {
    border: solid 1px #e0e0e0;
  }

  .product-title {
    font-size: 20px;
    font-family: SourceHanSansCN-Bold;
    font-weight: bold;
    color: rgba(255, 0, 0, 1);
  }

  #comp-activity-page-control {
    margin-top: 40px;
  }
</style>
