<template>
  <div class="home">
    <div>
      <div class="subLogo">
        <img src="../assets/images/logo/subLogo.svg" alt="logo_BIKE全書">
      </div>
      <div class="content">
        <div class="mainLogo">
          <img src="../assets/images/logo/BikeBOOK_logo.svg" alt="logo_BIKE全書">
        </div>
        <div class="tabs">
          <div>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#E6E6E6" :d="icons.mdiMapMarkerRadius" />
            </svg>
            <h4>YouBike站點</h4>
          </div>
          <div>
            <svg class="svg_mdiBikeFast" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#E6E6E6" :d="icons.mdiBikeFast" />
            </svg>
            <h4>自行車道路線</h4>
          </div>
        </div>
        <div class="radios">
          <h3>搜尋條件</h3>
          <div>
            <el-radio v-model="radio1" label="1">該縣市全部</el-radio>
            <el-radio v-model="radio1" label="2">目前位置附近</el-radio>
          </div>
        </div>
        <div class="select">
          <h3>目的地</h3>
          <el-button round>
            請選擇前往的縣/市
            <svg class="svg_mdiBikeFast" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#0000000C" :d="icons.mdiChevronDown" />
            </svg>
          </el-button>
        </div>
        <el-button type="primary" round>OPEN BOOK</el-button>
      </div>
      <h6 class="state">SouSoü © 2021. Design by jümanji</h6>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mdiMapMarkerRadius, mdiBikeFast, mdiChevronDown } from '@mdi/js'
export default {
  name: 'Home',
  components: {
  },
  setup () {
    const icons = { mdiMapMarkerRadius, mdiBikeFast, mdiChevronDown }
    return {
      icons,
      radio1: ref('1')
    }
  }
}
</script>
<style lang="scss">
.svg_mdiBikeFast{
  transform: scale(1,-1) rotate(180deg);
}
</style>
