<template>
  <div class="report-generator bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col-md-auto px-0">
        <CHeading content="Athena Review" />
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
        <b-dropdown id="dropdown-1" text="All Sales" variant="outline"
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
            src="../assets/pdf.png" alt="" class="pr-1">
          <div class="d-inline-block"> Export in PDF</div>
        </button>
      </div>
    </div>

    <b-row class="mt-2 mb-4">
      <v-col cols="12" md="6">
        <div class="bg-white shadow p-4 rounded-xl text-center">
          <apexchart type="pie" width="380" class="inner-mx-auto" :options="CYTDchartOptions" :series="CYTDseries">
          </apexchart>
          <div class="font-20 font-weight-700 font-black mt-3">CYTD Product Category Sales Performance</div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="bg-white shadow p-4 rounded-xl text-center">
          <apexchart type="pie" width="380" class="inner-mx-auto" :options="PYTDchartOptions" :series="PYTDseries">
          </apexchart>
          <div class="font-20 font-weight-700 font-black mt-3">PYTD Product Category Sales Performance</div>
        </div>
      </v-col>
    </b-row>
    <v-data-table :headers="headers" :items="reports" class="elevation-1">
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
  name: 'AthenaReview',
  components: {
    CHeading,
    apexchart: VueApexCharts,
  },
  data: () => ({
    headers: [
      { text: 'Product Category', value: 'productCategory', },
      { text: '2020 TD', value: 'TD2020', },
      { text: '2021 TD', value: 'TD2021', },
      { text: '2022 TD', value: 'TD2022', },
      { text: 'CHG 2022 vs 2021', value: 'CHG2022vs2021', },
      { text: '%CHG 2022 vs 2021', value: 'CHG2022vs2021%', },
      { text: '%CHG 2022 vs 2020', value: 'CHG2022vs2020%', },
    ],
    reports: [
      {
        productCategory: 'Devon Lane',
        TD2020: 'Tio Félix',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948'
      },
      {
        productCategory: 'Devon Lane',
        TD2020: 'Tio Félix',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948'
      },
      {
        productCategory: 'Devon Lane',
        TD2020: 'Tio Félix',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948'
      },
    ],
    CYTDseries: [44, 55, 13, 43, 22],
    CYTDchartOptions: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
    PYTDseries: [44, 55, 13, 43, 22],
    PYTDchartOptions: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  }),
}
</script>
