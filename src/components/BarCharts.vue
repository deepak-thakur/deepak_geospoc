
<template>
  <div class="small">
    <p class="headings-3 f-w text-center txtc-w">Monthly Expenditure</p>
    <div v-if="getExpenditure">
      <BarChart :chart-data="getExpenditure" :options="options"></BarChart>
    </div>
    <div v-else>
      <img src="../assets/empty-box.png" class="empty_image1" alt="emptyImage" />
      <div class="headings-4 font-wr txtc-w text-center">
        <h3 class="mb-n-10">No Data Available</h3>
        <h4>Expenditure</h4>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from './BarChart.js'

export default {
  components: {
    BarChart
  },
  props: ['pincodeWiseLocalityData'],
  computed: {
    options () {
      if (this.pincodeWiseLocalityData && this.pincodeWiseLocalityData.pincode) {
        let optionData = {
          legend: {
            labels: {
              fontColor: 'white' // this here
            }
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                ticks: {
                  fontColor: 'white' // this here
                },
                scaleLabel: {
                  display: true,
                  labelString: `Expenditure for people with pin code ${this.pincodeWiseLocalityData.pincode}`,
                  fontColor: 'white' // this here
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true
                },
                ticks: {
                  fontColor: 'white'
                }
              }
            ]
          }
        }
        return optionData
      }
    },
    getExpenditure () {
      if (this.pincodeWiseLocalityData && this.pincodeWiseLocalityData.pincode) {
        let expenditure = {
          labels: [],
          datasets: [
            {
              label: `Expenditure Rs.`,
              backgroundColor: '#73f3b2',
              pointBackgroundColor: 'white',
              borderWidth: 2,
              pointBorderColor: 'white',
              data: []
            }
          ]
        }
        for (let [key, value] of Object.entries(this.pincodeWiseLocalityData)) {
          if (key !== 'pincode') {
            expenditure.labels.push(key)
            expenditure.datasets[0].data.push(value)
          }
        }

        return expenditure
      }
    }
  },
  name: 'BarCharts',
  data () {
    return {
      datacollection: null,
      pincode: null
    }
  },
  mounted () {},
  methods: {
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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
