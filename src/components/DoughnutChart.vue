
<template>
  <div class="small">
    <p class="headings-3 f-w text-center txtc-w">Monthly Income Distrubution</p>
    <div v-if="getData">
      <DoughnutCharts :chart-data="getData" :options="options"></DoughnutCharts>
      <h3 class="text-center txtc-w font-wr">
        <span class=" font-wr txtc-l">Income of</span>
        {{localityWiseData.locality}}
        <span class="txtc-l">  area</span>
        <span class=" f-wm">
          {{ localityWiseData.income }}
          <span class="font-wr txtc-l headin">Rs.</span>
        </span>
      </h3>
    </div>
    <div v-else>
      <img src="../assets/empty-box.png" class="empty_image1" alt="emptyImage" />

      <div class="headings-4 font-wr txtc-w text-center">
        <h3 class="mb-n-10">No Data Available</h3>
        <h4>Monthly Income Distrubution</h4>
      </div>
    </div>
  </div>
</template>
<script>
import DoughnutCharts from './DoughnutCharts.js'

export default {
  components: {
    DoughnutCharts
  },
  name: 'DoughnutChart',
  props: ['localityWiseData'],
  computed: {
    getData () {
      if (
        this.localityWiseData &&
        this.localityWiseData.income &&
        this.localityWiseData.locality
      ) {
        return {
          labels: [this.localityWiseData.locality],
          datasets: [
            {
              backgroundColor: ['#41B883'],
              data: [this.localityWiseData.income]
            }
          ]
        }
      } else {
        return false
      }
    }
  },
  data () {
    return {
      options: {
        legend: {
          labels: {
            fontColor: 'white',
            fontSize: 16
          }
        }
      }
    }
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin: auto;
}
</style>
