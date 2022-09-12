<template>
  <div class=" report-generator rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-1">
      <div class="col-md-auto px-0">
        <CHeading>
          WOW
        </CHeading>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
        <b-dropdown id="dropdown-1" text="All Sales" variant="outline"
          class=" d-inline-block inner-border-light-gray ml-md-2 inner-font-14 font-weight-500 font-black shadow-sm bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-1" text="Cases" variant="outline"
          class=" d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <button class=" btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/excel.png" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in Excel</div>
        </button>
        <button class=" btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/pdf.png" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
      </div>
    </div>
    <b-row class="mb-4 mx-0">
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-black">39.20%</div>
          <div class="font-14 font-weight-700 font-black">% CHG CS WK # VS WK #</div>
        </div>
      </v-col>
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-black">39.20%</div>
          <div class="font-14 font-weight-700 font-black">% CHG CS CYTD VS PYTD</div>
        </div>
      </v-col>
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-black">39.20%</div>
          <div class="font-14 font-weight-700 font-black">% CHG CUST CYTD VS PYTD</div>
        </div>
      </v-col>
      <v-col class="p-1" cols="12" md="">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="font-30 font-weight-700 font-black">39.20%</div>
          <div class="font-14 font-weight-700 font-black">To be decided</div>
        </div>
      </v-col>
    </b-row>
    <div class="font-20 font-weight-700 font-black mb-3">WOW Sales Perforance (cs)</div>
    <apexchart type="line" height="350" :options="wowchartOptions" :series="wowseries"></apexchart>
    <div class="font-20 font-weight-700 font-black mb-3">POP Sales Performance (CS)</div>
    <apexchart type="line" height="350" :options="popchartOptions" :series="popseries"></apexchart>
    <div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'WOW',
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
    wowseries: [{
      name: "2022",
      data: [100000, 255000, 300000, 105600, 298000, 100000, 230000, 240000, 108800, 277800, 320000, 200000]
    },
    {
      name: "2021",
      data: [180000, 206760, 300000, 105600, 298000, 265500, 234000, 240870, 108970, 274300, 320124, 212300]

    },
    {
      name: '2020',
      data: [123456, 298769, 312345, 234513, 297650, 198660, 265700, 267600, 125480, 277800, 234400, 323000]

    }
    ],
    wowchartOptions: {
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [4, 4, 4],
        curve: 'straight',
      },
      xaxis: {
        categories: ['WK 1', 'WK 2', 'WK 3', 'WK 4', 'WK 5', 'WK 6', 'WK 7', 'WK 8', 'WK 9', 'WK 10', 'WK 11', 'WK 12',],
      },
      grid: {
        borderColor: '#E3E3E3',
      }
    },
    popseries: [{
      name: "2022",
      data: [100000, 255000, 300000, 105600, 298000, 100000, 230000, 240000, 108800, 277800, 320000, 200000]
    },
    {
      name: "2021",
      data: [180000, 206760, 300000, 105600, 298000, 265500, 234000, 240870, 108970, 274300, 320124, 212300]

    },
    {
      name: '2020',
      data: [123456, 298769, 312345, 234513, 297650, 198660, 265700, 267600, 125480, 277800, 234400, 323000]

    }
    ],
    popchartOptions: {
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [4, 4, 4],
        curve: 'straight',
      },
      xaxis: {
        categories: ['WK 1', 'WK 2', 'WK 3', 'WK 4', 'WK 5', 'WK 6', 'WK 7', 'WK 8', 'WK 9', 'WK 10', 'WK 11', 'WK 12',],
      },
      grid: {
        borderColor: '#E3E3E3',
      }
    },

  }),
}
</script>
