<template>
  <div class="list-container">
    <swiper indicator-dots="true" indicator-color="#34ba" autoplay="true" interval="10000" indicator-active-color="red">
      <swiper-item v-for="(item,i) in items" :key="i">
        <img :src="item" alt>
      </swiper-item>
    </swiper>
    <listTmp v-for="(item,i) in listTmp" :key="i" :item='item' :index='i'/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import listTmp from '../list_template/list_template'
export default {
  components:{
    listTmp
  },
  beforeMount() {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['listTmp'])
  },
  data() {
    return {
      items:[
        "../../../static/images/112.jpg",
        "../../../static/images/timg.jpg",
        "../../../static/images/user.png"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.list-container {
  swiper {
    width: 100%;
    height: 400rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
