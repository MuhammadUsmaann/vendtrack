<template>
  <div class="report-generator bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-1">
      <div class="col-md-auto px-0">
        <CHeading>
          Client Track<sup class="font-14 font-black font-weight-400">TM</sup>
        </CHeading>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Sales Data Available Up To: 02/18/2022</span>
        <b-dropdown id="dropdown-1" text="Quarters" variant="outline"
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
        <button class="btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/pdf.svg" alt="" class="pr-1"> <div class="d-md-inline-block d-none"> Export in PDF</div></button>
        
      </div>
    </div>
    <b-row class="mb-4 mx-0">
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-green">150,393 CS</div>
          <div class="font-14 font-weight-700 font-black">YTD Distributor Purchases</div>
        </div>
      </v-col>
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-green">150,393 CS</div>
          <div class="font-14 font-weight-700 font-black">YTD Distributor Sales</div>
        </div>
      </v-col>
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-green">150,393 CS</div>
          <div class="font-14 font-weight-700 font-black">Top 10 Customer CYTD Total Sales</div>
        </div>
      </v-col>
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-green">150,393 CS</div>
          <div class="font-14 font-weight-700 font-black">Total Distributor Sales CYTD</div>
        </div>
      </v-col>
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-green">43,20%</div>
          <div class="font-14 font-weight-700 font-black">Top 10 Customer Sales % of Total Sales</div>
        </div>
      </v-col>
    </b-row>
    <div class="font-20 font-weight-700 font-black mb-3">Warehouse Withdrawal</div>
    <apexchart type="rangeBar" height="350" :options="barchartOptions" :series="barseries"></apexchart>
    <div class="font-20 font-weight-700 font-black mb-3">Distributor Top 10 Customers</div>
    <v-data-table :headers="headers" :items="reports" class="elevation-1 mt-3">
    </v-data-table>
    <div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'ClientTrack3',
  components: {
    CHeading,
    apexchart: VueApexCharts,
  },
  data: () => ({
    headers: [
      { text: 'Customer Name', value: 'CustomerName', },
      { text: 'Operator ID', value: 'OperatorID', },
      { text: 'YTD CS', value: 'YTDCS', },
      { text: 'PYTD CS', value: 'PYTDCS', },
      { text: 'CHG CS', value: 'CHGCS', },
      { text: '% CHG', value: 'CHG%', },
    ],
    reports: [],
    // series: [{
    //   name: 'Net Profit',
    //   data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    // }, {
    //   name: 'Revenue',
    //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    // }, {
    //   name: 'Free Cash Flow',
    //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    // }],
    // chartOptions: {
    //   chart: {
    //     type: 'bar',
    //     height: 350
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: false,
    //       columnWidth: '55%',
    //       endingShape: 'rounded'
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     show: true,
    //     width: 2,
    //     colors: ['transparent']
    //   },
    //   xaxis: {
    //     categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    //   },
    //   yaxis: {
    //     title: {
    //       text: '$ (thousands)'
    //     }
    //   },
    //   fill: {
    //     opacity: 1
    //   },
    //   tooltip: {
    //     y: {
    //       formatter: function (val) {
    //         return "$ " + val + " thousands"
    //       }
    //     }
    //   }
    // },
    barseries: [{
      name: 'CYTD',
      data: [{
        x: 'Purchases',
        y: [0, 10.090]
      },
      {
        x: 'Sales',
        y: [0, 8.000]
      }]
    }],
    barchartOptions: {
      chart: {
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
