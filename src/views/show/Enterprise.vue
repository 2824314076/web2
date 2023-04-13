<template>
  <div class="all">
    <div class="policy">
      <div class="policy-list" v-for="(item,index) in list" :key="index">
        <div class="policy-name" @click="policyGo(item.zcUrl)">{{item.zcName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnterPrise",
  data(){
    return {
      list:[]
    }
  },
  mounted() {
   // this.list = this.$route.params.list
  },
  methods:{
    policyGo(url){
      window.open(url)
    }
  }
}
</script>

<style scoped>
.all{
  width: 100%;
  height: 100%;
  min-height: 48vh;
  margin: 0;
  padding: 0;
  background-image:url("@/assets/enterprise/shanshui.png");
  background-size: 100% 100%;
}
.policy{
  width: 80%;
  margin-left: 10%;
  min-height: 48vh;
  background: white;
  display: flex;
}
.policy-list{
  width: 15%;
  height: 7vh;
  margin: 1% 1%;
  text-align: center;
  line-height: 7vh;
  border-radius: 20vh;
  box-shadow: 0px 0px 10px 10px #07d2ff;
  /*text-shadow:5px 5px 5px #07d2ff;*/
  /*color: blue;*/
  cursor:pointer;
}
.policy-name{
  font-size:1vw;
  font-weight: 700;
}
.policy-list :hover{
   font-size:2vw;
   font-weight: 700;
 }
</style>