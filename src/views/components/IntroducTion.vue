<template>
  <div class="introduc">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>简介</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <h1 class="font">宁东物流大数据平台简介</h1>
      <div class="time">
        <div>发布时间:2022-02-21</div>
        <div>来源：宁东能源化工基地管委会</div>
        <div>作者：宁东管委会</div>
      </div>
      <hr style="border:none;border-top:1px dashed #ddd;margin-bottom: 3%;"/>
      <div class="introdic-hight">
        <div>
          宁东能源化工基地（以下简称宁东基地）是国务院批准的国家重点开发区，是国家重要的大型煤炭生产基地、“西电东送”火电基地、煤化工产业基地和循环经济示范区，是国家产业转型升级示范区、现代煤化工产业示范区、新型工业化产业示范基地和外贸转型升级基地，也是宁夏高质量发展示范区、高新技术产业开发区和化工园区。
          宁夏宁夏回族自治区人民政府《关于宁东能源化工基地现代煤化工产业示范区总体规划的批复》（宁政函〔2019〕49号）中提出：建成以煤制烯烃、乙二醇项目为龙头，发展通用树脂、合成橡胶、工程塑料及专用化学品等下游特色产业，形成具有较强竞争力的产业链和产业集群，着力推动现代煤化工产业创新发展，构建现代煤化工产业体系，打造技术领先、行业领军、世界一流的国家级现代煤化工产业示范区，为推进全区高质量发展和国家能源战略安全作出新的更大贡献。
          《宁东能源化工基地“十四五”发展规划》提出：加快建设数字化产业服务平台，实施宁东基地工业互联网发展和工业大脑建设项目，完成企业数字化转型和园区产业数字化，构建全要素、全产业链、全价值链全面连接的新型工业生产制造和服务体系，实现智能化生产、网络化协同、个性化定制、服务化延伸，支持第三方服务机构建立集营商服务、金融服务、科技服务、研发服务、商务服务、公共服务等为一体的开放性数字化公共服务平台，形成上下游产业链数字化、网络化、智能化协同创新的产业级工业互联网平台。
          强化危化品全链条管理，建立健全危化品安全生产责任链条，实施全链条、全流程、全风险安全监管，坚决防范较大及以上事故发生，有力防范化解危险化学品系统性安全风险。
        </div>
        <div>
          宁东物流大数据平台定位：建设宁东煤化工产业互联网服务平台，运用先进的信息技术，构建全要素、全产业链、全价值链的产业级工业互联网平台，推动宁东煤化工产业的数智化转型。
        </div>
        <div>
          利用区块链、物联网、北斗定位、移动互联网等先进技术，依托宁东煤化工产业链优势，打造宁东物流大数据平台，实现一下目标：
          （1）构建支持危化品货物运输的核心业务流程，支持多级调度、线上竞价、双重运输、客户互动、安全监控以及应急管理的危化品运输管理平台；
          （2）构建对危化品货物运输全流程监管的政府监管大数据平台；
          （3）对危化品的端到端物流管理，实现危化品运输全过程的可溯源管理；
          （4）构建平台-车队、车队-车辆两级托单调度体系；
          （5）支持双重、多级调度、线上竞价等业务模式，降低运输成本。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.introduc {
  margin: auto;

  .breadcrumb {
    height: 30px;
    background-color: rgb(226, 226, 226);

    .el-breadcrumb {
      padding-top: 8px;
      margin-left: 10px;

      ::v-deep .el-icon-arrow-right:before {
        color: black;
      }
    }
  }

  .font {
    text-align: center;
  }

  .time {
    display: flex;
    justify-content: center;
    margin: 2%;

    div {
      margin-left: 5%;
      color: #666;
    }
  }

  h1 {
    margin-top: 5%;
  }

  .introdic-hight {
    line-height: 35px;

    div {
      margin-bottom: 15px;
      text-indent: 2em;
    }
  }
}
</style>