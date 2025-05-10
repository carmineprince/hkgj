<template>
  <div style="padding: 20px">
<!--    <Carousel loop dots="inside" arrow="always">-->
<!--      <CarouselItem v-for="(item,index) in dataList">-->
        <img v-img:group class="comp-intro-banner" :src="imgUrl">
<!--      </CarouselItem>-->
<!--    </Carousel>-->
      <p class="comp-intro-content">
        Shandong Yuanfeng Tire Co., Ltd was established in 2015, mainly engaged in the production and sales of Steel radial tires. The company is based on "green and low-carbon development", adheres to "intelligent manufacturing", and produces equipment
      </p>
      <p class="comp-intro-content">
        The preparation, inspection and testing equipment and instruments are at the leading level in China. The company has fully introduced "6S" management, Strict production process flow, from raw material procurement, production processing to tire sales, after-sales service, etc Adopting an ERP system for control, effectively allocating resources, greatly reducing costs, and improving product quality Quantity and production efficiency.
      </p>
      <p class="comp-intro-content">
        The company adheres to market-oriented, customer-centric, innovation driven development, and quality oriented approach Life, R&D and production of low rolling resistance tires, ultra-high mileage tires, fuel-efficient and environmentally friendly tires, and running tires Pneumatic tires (safety tires) and "intelligent tires" are suitable for various complex road conditions, with high quality Affordable, wear-resistant and durable, safe and environmentally friendly, deeply trusted by users.
      </p>
      <p class="comp-intro-content">
        The company will continue to strengthen cooperation with well-known universities and research institutes both domestically and internationally, focusing on improving We strive to build an Industry 4.0 smart factory with independent innovation capabilities and core competitiveness.
      </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      dataList: [],
      imgUrl: ''
    }
  },
  mounted () {
    this.getDataList()
  },
  methods: {
    /**
     * 获取全部数据
     */
    getDataList () {
      var _this = this
      const url = 'website_bsm/website/getAlbumImgs'
      var data = {
        albumId: '24',
        showMethod: '1',
        uniqueId: 'A2522EFC1118D13272620CEAE7630AE3',
        pageNumber: this.pageNumber,
        pageSize: '10'
      }
      axios.get(url, {
        params: data
      }).then((res) => {
        this.dataList = res.data.data
        this.imgUrl = res.data.data[0].imgUrl
      })
    }
  }
}
</script>

<style scoped>
  .comp-intro-banner {
    width: 100%;
    max-height: 316px;
    object-fit: cover;
  }

  /* 大于992 */
  @media screen and (min-width: 992px) {
    .comp-intro-banner {
      max-height: 400px;
    }
  }

  @media screen and (min-width: 1600px) {
    .comp-intro-banner {
      max-height: 600px;
    }
  }

  .comp-intro-content {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-top: 30px;
    line-height: 30px;
  }
</style>
