<template>
  <div class="home">
    <div class="home-backend-img">
    <img src="../assets/images/backend/index_bg.svg" alt="index background">
    </div>
    <div>
      <div class="subLogo">
        <img src="../assets/images/logo/subLogo.svg" alt="logo_BIKE全書">
      </div>
      <div class="content">
        <div class="mainLogo">
          <img src="../assets/images/logo/BikeBOOK_logo.svg" alt="logo_BIKE全書">
        </div>
        <div class="tabs">
          <div class="tab tab_active">
            <svg viewBox="0 0 24 24">
              <path :d="icons.mdiMapMarkerRadius" />
            </svg>
            <h4>YouBike站點</h4>
          </div>
          <div class="tab">
            <svg class="svg_mdiBikeFast" viewBox="0 0 24 24">
              <path :d="icons.mdiBikeFast" />
            </svg>
            <h4>自行車道路線</h4>
          </div>
        </div>
        <div class="radios">
          <h3 class="title">搜尋條件</h3>
          <div>
            <el-radio v-model="radio1" label="1">該縣市全部</el-radio>
            <el-radio v-model="radio1" label="2">目前位置附近</el-radio>
          </div>
        </div>
        <div class="select">
          <h3 class="title">目的地</h3>
          <el-select v-model="destination" placeholder="請選擇前往的縣/市">
            <el-option></el-option>
          </el-select>
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
  data () {
    return {
      destination: ''
    }
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
