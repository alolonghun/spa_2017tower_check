<template>
  <div class="container">
    <div class="failed"></div>
    <div class="info">
      <span class="info_fail"></span>
      <span class="info_way">请联系校长邦大会组委会</span>
    </div>
    <div class="myPhone myPhone_1">
      <span class="phone_code">吴晓昕 13004174578</span>
      <span class="phone_icon" @click="showMenu1"></span>
    </div>
    <div class="myPhone myPhone_2">
      <span class="phone_code">王红燕 17802168249</span>
      <span class="phone_icon" @click="showMenu2"></span>
    </div>
    <div class="myPhone myPhone_2">
      <span class="phone_code">丁梦佳 18217256283</span>
      <span class="phone_icon" @click="showMenu3"></span>
    </div>
    <div class="other">
      <img src="../img/image/fail_QR_code.png">
      <span>扫码关注校长得道</span>
      <span class="logo"></span>
    </div>
    <transition name="fold">
      <div class="bottom-menu" v-if="showSelect1 || showSelect2 || showSelect3">
        <div class="menu-select call">拨打 <a :href="'tel:'+[phoneNumber]">{{ phoneNumber }}</a></div>
        <div class="menu-select cancel" @click.prevent="hideMenu">取消</div>
      </div>
    </transition>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSelect1: false,
      showSelect2: false,
      showSelect3: false,
    }
  },
  computed: {
    phoneNumber: function() {
      return this.showSelect1 ? '13004174578' : this.showSelect2 ? '17802168249' : '18217256283';
    }
  },
  methods: {
    showMenu1: function () {
      this.showSelect1 = true;  
      this.showSelect2 = false;
      this.showSelect3 = false;
    },
    showMenu2: function () {
      this.showSelect1 = false;
      this.showSelect2 = true;
      this.showSelect3 = false;
    },
    showMenu3: function () {
      this.showSelect1 = false;
      this.showSelect2 = false;
      this.showSelect3 = true;
    },
    hideMenu: function () {
      this.showSelect1 = false;
      this.showSelect2 = false;
      this.showSelect3 = false;
    }
  }
}
</script>

<style lang="less" scoped>

@import "./../styles/pages/_fail.less";

</style>
