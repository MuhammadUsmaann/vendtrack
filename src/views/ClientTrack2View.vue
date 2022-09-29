<template>
  <div class="report-generator bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-1">
      <div class="col-md-auto px-0">
        <CHeading>
          Client Track<sup class="font-14 font-black font-weight-400">TM</sup>
        </CHeading>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update: 02/18/2022</span>
        <b-dropdown id="dropdown-1" text="Timeframe" variant="outline"
          class="d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-1" text="Cases" variant="outline"
          class="d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <button class="btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/print.svg" alt="" class="pr-1"><div class="d-md-inline-block d-none">  Print </div></button>
            <button class="btn border border-light-gray ml-2 bg-white font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/pdf.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
        
      </div>
    </div>
    <div class="font-20 font-weight-700 font-black mb-3">Distributor Market Segment Analysis</div>
    <v-data-table :headers="headers" :items="reports" class="elevation-1 mb-3">
    </v-data-table>
    <apexchart type="rangeBar" height="350" :options="barchartOptions" :series="barseries"></apexchart>
    <div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'ClientTrack2',
  components: {
    CHeading,
    apexchart: VueApexCharts,
  },
  data: () => ({
    headers: [
      { text: 'Market Segment', value: 'MarketSegment', },
      { text: 'YTD CS', value: 'YTDCS', },
      { text: 'PYTD CS', value: 'PYTDCS', },
      { text: 'CHG CS', value: 'CHGCS', },
      { text: '% CHG', value: 'CHG%', },
    ],
    reports: [],
    barseries: [{ name: 'CYTD',
      data: [{
        x: 'Mkt Seg 1',
        y: [0, 6.090]
      },
      {
        x: 'Mkt Seg 2',
        y: [0, 6.000]
      },
      {
        x: 'Mkt Seg 4',
        y: [0, 11.090]
      },
      {
        x: 'Mkt Seg 5',
        y: [0, 11.090]
      }]
    }, { name: 'PYTD',
      data: [{
        x: 'Mkt Seg 1',
        y: [0, 11.090]
      },
      {
        x: 'Mkt Seg 2',
        y: [0, 4.690]
      },
      {
        x: 'Mkt Seg 4',
        y: [0, 3.020]
      },
      {
        x: 'Mkt Seg 5',
        y: [0, 5.090]
      }]
    }],
    barchartOptions: {
      chart: {
        animations: {
            enabled: false
          },
        type: 'rangeBar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
    },
  }),
}
</script>
