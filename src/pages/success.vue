<template>
  <div class="container">
    <div class="head">
      <span class="ch">感谢参加</span>
      <span class="en">CORDIAL INVITATION</span>
    </div>
    <div class="user">
      <span class="user_name">{{ name }}</span>
      <span class="user_sex">先生/女士</span>
    </div>
    <div class="line"></div>
    <div class="other">
      <img src="../img/image/success_QR_code.png" class="QR_code">
      <span class="scan">扫码关注校长邦</span>
      <span class="time">2017.10.29-10.31</span>
      <span class="address">上海.世贸商城 .1层（展区）.7层（会议）</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    const $this = this;
    $this.name = $this.$route.query.userName;
    setTimeout(function () {
      $this.$vux.toast.show({
        text: '验票成功',
        width: '2.3rem',
        position: 'middle',
        time: 2000
      })
    },500)
  }
}
</script>

<style lang="less" scoped>

@import "./../styles/pages/_success";

</style>
