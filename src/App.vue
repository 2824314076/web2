<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*#app{*/
/*  filter:progid:DXImageTransform.Microsoft.BasicImage(graysale=1);*/
/*  -webkit-filter: grayscale(100%);*/
/*}*/
[v-cloak] {
  /* 元素隐藏    */
  display: none;
}

.ql-align-center {
  text-align: center;
}

.ql-align-right {
  text-align: right;
}

.ql-indent-1 {
  padding-left: 16px;
}

.ql-indent-2 {
  padding-left: 32px;
}

.ql-indent-3 {
  padding-left: 48px;
}

.ql-indent-4 {
  padding-left: 64px;
}

.ql-indent-5 {
  padding-left: 80px;
}

.ql-indent-6 {
  padding-left: 96px;
}

.ql-indent-7 {
  padding-left: 112px;
}

.ql-indent-8 {
  padding-left: 128px;
}

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 4043722 */
  src: url('//at.alicdn.com/t/c/font_4043722_sw3mhu7p35c.woff2?t=1682654051852') format('woff2'),
  url('//at.alicdn.com/t/c/font_4043722_sw3mhu7p35c.woff?t=1682654051852') format('woff'),
  url('//at.alicdn.com/t/c/font_4043722_sw3mhu7p35c.ttf?t=1682654051852') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
