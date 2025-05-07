<template>
  <div style="padding: 20px">
<!--    <Carousel loop dots="inside" arrow="always">-->
<!--      <CarouselItem v-for="(item,index) in dataList">-->
        <img v-img:group class="comp-intro-banner" :src="imgUrl">
<!--      </CarouselItem>-->
<!--    </Carousel>-->
    <p v-if="this.$store.getters.getShowMethod == 1" class="comp-intro-content">
      山东豪克国际橡胶工业有限公司，属中国橡胶工业协会轮胎分会会员单位、中国机电产品进出口商会会员单位、山东省橡胶行业协会常务理事单位。公司位于莱州经济技术开发区，占地面积50余万平方米，现有职工1200人，其中高中级工程技术人员358人，质保体系优效，技术力量雄厚。公司引进一整套美国、意大利、德国、荷兰等世界顶级轮胎制造设备和化验检测设备。有德国产双复合压出生产线、荷兰产挤出裁断生产线、德国产多转子重型新式密炼机、裁断机、意大利钢丝压延机、美国产锭子房和美国、日本产系列化验检测设备。主要产品有全钢巨型工程机械轮胎；全钢载重汽车轮胎；全钢工程机械轮胎；工业车辆轮胎、农业子午胎等多系列规格型号轮胎。是国内专业轮胎生产制造企业。公司现拥有固定资产14亿元，年设计产能轮胎152万套。
      公司以先进的技术及设备为支撑，过硬的产品质量为基石，以诚信为立企之本，本公司生产的雄鹰、鹰霸、豪克、SUPERHAWK等品牌轮胎，深受国内外用户的信赖，产品畅销全国各地，并为陕西重汽、三一重工等众多知名汽车制造厂配套，远销美国、澳大利亚、比利时、墨西哥、智利、马来西亚、印度等国家，产品供不应求。近年来，公司以科技为先导，加大科技投入力度，现拥有国家发明、实用新型、外观等专利共18项。公司与哈尔滨工业大学合作承担了山东省科技重大专项-绿色高耐久低滚阻巨型工程子午胎产业化项目，37.00R57巨型工程子午线轮胎鉴定为国际先进水平。
      公司始终坚持“市场为本，质量是根，真诚服务，持续改进”的质量方针，先后通过了中国国家强制性产品3C认证、ISO9001:2015质量管理体系认证、ISO14001:2015环境管理体系认证、OHSAS18001:2007职业健康安全管理体系认证、知识产权管理规范体系认证、美国DOT及Smartway、欧洲E-mark（ECER54、ECER117)认证、海湾GCC等国际认证。“雄鹰”被国家工商总局商标局认定为中国驰名商标，“雄鹰”、“鹰霸”牌荣获山东省著名商标，“鹰霸”工程机械轮胎被评为山东省名牌产品，“SUPERHAWK”为山东省商务厅确定为山东省重点培育的国际自主品牌。公司为国家知识产权优势企业、省级企业技术中心、省级知识产权示范企业、山东省橡胶行业综合实力50强企业、烟台市节能先进企业，公司连年被市委市政府评为质量兴市先进单位。荣获中国专利山东省专利明星企业二等奖，烟台市科学技术发明专利三等奖。
      2017年公司与浙江物产签署供应链战略合作协议，开启发展新时代。豪克轮胎将大力推进技术创新、营销创新、服务创新和文化创新，着力打造精品轮胎，努力建设国内领先、世界知名的轮胎品牌。
    </p>
    <p v-else class="comp-intro-content">
      Shandong haoke international rubber industry co., LTD is a member of tire branch of China rubber industry
      association, a member of China chamber of commerce for import and export of mechanical and electrical products,
      and a standing director of shandong rubber industry association. The company is located in laizhou economic and
      technological development zone, covers an area of more than 500,000 square meters, and has 1200 employees, among
      which 358 are senior and intermediate engineers and technicians. The company introduces a set of the world's top
      tire manufacturing equipment and testing equipment, such as the United States, Italy, Germany, the Netherlands.
      There are double compound extrusion production line produced in Germany, extrusion cutting production line
      produced in Holland, multi-rotor heavy duty new mixer produced in Germany, cutting machine, Italian steel wire
      calender, spindle room produced in the United States and series of testing equipment produced in the United States
      and Japan. The main products are steel giant construction machinery tires; All-steel truck tyre; All-steel
      construction machinery tires; Industrial vehicle tires, agricultural radial tires, etc. Is the domestic
      specialized tire production manufacture enterprise. The company has fixed assets of 1.4 billion yuan, annual
      design capacity of 1.52 million sets of tires.
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
