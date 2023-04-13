<template>
  <div class="footer">
    <img src="/img/logo.png" class="logo"/>
    <div class="footer-right">
      <h2>联系我们</h2>
      <p>咨询热线：{{ hotPhone }}</p>
      <p>备案号：{{ beiAnHao }}</p>
      <p>总部地址：{{ address }}</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'ConnectUs',
  data() {
    return {
      //这几个从vuex取
      hotPhone: '1234-567-890',
      beiAnHao: '12345',
      address: 'xxxx'
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
a {
  text-decoration: none
}

.footer > div {
  float: left;
  height: 190px;
  margin-left: 200px;
}

.logo {
  width: 200px;
  float: left;
  margin-left: 300px;
}


.footer > div > p > a {
  color: grey;
}

.footer > div > p {
  color: grey;
}

</style>