<template>
  <div id="app">
    <!-- <Toolbar /> -->
    <router-view />
  </div>
</template>

<script>
// import Toolbar from './components/Toolbar'
import API_SEVICES from './services/api.services'
export default {
  name: 'App',
  components: {
    // Toolbar
  },

  created: function () {
    API_SEVICES.getLocalityData().then(result => {
      this.$store.dispatch('storeLocalities', result.data)
    })
    API_SEVICES.getIncomeData().then(result => {
      this.$store.dispatch('storeIncome', result.data)
    })
    API_SEVICES.getPinocdeData().then(result => {
      this.$store.dispatch('storePincode', result.data)
    })
    API_SEVICES.getExpenditureData().then(result => {
      this.$store.dispatch('storeExpenditure', result.data)
    })
  }
}
</script>

<style lang="scss">
@import "./styles/main.scss";
@import "./styles/medias.scss";
</style>
