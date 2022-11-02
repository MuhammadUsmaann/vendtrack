<template>
  <div class="report-generator rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col-md-auto px-0">
        <CHeading content="Athena Review" />
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
        <b-dropdown id="dropdown-1" text="Period" variant="outline"
          class="d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm mb-md-0 mb-1 bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-1" text="Frequency" variant="outline"
          class="d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm mb-md-0 mb-1 bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-1" text="All Sales" variant="outline"
          class="d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm mb-md-0 mb-1 bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-1" text="Cases" variant="outline"
          class="d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm mb-md-0 mb-1 bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <button class="btn border border-light-gray ml-2 bg-white font-14 font-weight-500 font-black shadow-sm mb-md-0 mb-1"><img
            src="../assets/pdf.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
      </div>
    </div>

    <b-row class="mt-2 mb-4">
      <v-col cols="12" md="6">
        <div class="bg-white shadow p-4 rounded-xl text-center">
          <apexchart type="pie" width="380" class="inner-mx-auto" :options="CYTDchartOptions" :series="CYTDseries">
          </apexchart>
          <div class="font-20 font-weight-700 font-black mt-3">CYTD Market Segment Sales Performance</div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="bg-white shadow p-4 rounded-xl text-center">
          <apexchart type="pie" width="380" class="inner-mx-auto" :options="PYTDchartOptions" :series="PYTDseries">
          </apexchart>
          <div class="font-20 font-weight-700 font-black mt-3">PYTD Market Category Sales Performance</div>
        </div>
      </v-col>
    </b-row>
    <div class="font-20 font-weight-700 font-black mt-3 mb-3">Market Segment Sales Performance</div>
    <v-data-table hide-default-footer :headers="marketSegmentSalesPerformanceHeader"
      :items="marketSegmentSalesPerformance" class="elevation-1">
    </v-data-table>
    <div class="font-20 font-weight-700 font-black mt-3 mb-3">GPO Sales Performance</div>
    <apexchart type="line" height="350" :options="barlinechartOptions" :series="barlineseries"></apexchart>

    <div class="font-20 font-weight-700 font-black mt-4 mb-3">GPO Sales Performance</div>
    <v-data-table hide-default-footer :headers="GOPheaders" :items="GOPreports" class="elevation-1">
    </v-data-table>

    <div class="font-20 font-weight-700 font-black mt-4 mb-3">Territory Sales Performance</div>
    <v-data-table hide-default-footer :headers="Territoryheaders" :items="Territoryreports" class="elevation-1">
    </v-data-table>

    <b-row class="mt-2 mb-4">
      <v-col cols="12" md="6">
        <div class="bg-white shadow p-4 rounded-xl">
          <div class="font-20 font-weight-700 font-black mb-4">Top 10 Customers / Chains</div>
          <div class="d-flex justify-content-between ">
            <div class="text-center">
              <h1 class="font-30 font-green font-weight-700">150,543 CS</h1>
              <p class="font-14 font-weight-700 font-black w-75 m-auto">Top 10 Customer CYTD Total Purchase</p>

            </div>
            <div class="text-center">
              <h1 class="font-30 font-green font-weight-700">59%</h1>
              <p class="font-14 font-weight-700 font-black ">% Off All Sales</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="bg-white shadow p-4 rounded-xl">
          <div class="font-20 font-weight-700 font-black mb-4">Bottom 10 Customers / Chainss</div>
          <div class="d-flex justify-content-between ">
            <div class="text-center">
              <h1 class="font-30 font-red font-weight-700">25,522 CS</h1>
              <p class="font-14 font-weight-700 font-black w-75 m-auto">Bottom 10 Customer CYTD Total Purchase</p>
            </div>
            <div class="text-center">
              <h1 class="font-30 font-red font-weight-700">2%</h1>
              <p class="font-14 font-weight-700 font-black ">% Off All Sales</p>
            </div>
          </div>
        </div>
      </v-col>
    </b-row>



    <div class="font-20 font-weight-700 font-black mt-4 mb-3">Top 10 Customers / Chain Performance</div>
    <v-data-table hide-default-footer :headers="topCustomersheaders" :items="topCustomersreports" class="elevation-1">
    </v-data-table>

    <div class="font-20 font-weight-700 font-black mt-4 mb-3">Bottom 10 Customers / Chains Performance</div>
    <v-data-table hide-default-footer :headers="bottomCustomersheaders" :items="bottomCustomersreports"
      class="elevation-1">
    </v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'AthenaReview2',
  components: {
    CHeading,
    apexchart: VueApexCharts,
  },
  data: () => ({
    marketSegmentSalesPerformanceHeader: [
      { text: 'Market Segment', value: 'productCategory', },
      { text: '2020 TD', value: 'TD2020', align: 'right' },
      { text: '2021 TD', value: 'TD2021', align: 'right' },
      { text: '2022 TD', value: 'TD2022', align: 'right' },
      { text: 'CHG 2022 vs 2021', value: 'CHG2022vs2021', align: 'right' },
      { text: 'CHG 2022 vs 2020', value: 'CHG2022vs2020', align: 'right' },
      { text: '%CHG 2022 vs 2021', value: 'CHG2022vs2021%', align: 'right' },
      { text: '%CHG 2022 vs 2020', value: 'CHG2022vs2020%', align: 'right' },
    ],
    marketSegmentSalesPerformance: [
      {
        productCategory: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        productCategory: 'Devon Lane',

        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        productCategory: 'Devon Lane',

        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        productCategory: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        productCategory: 'Devon Lane',

        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        productCategory: 'Devon Lane',

        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        productCategory: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        productCategory: 'Devon Lane',

        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        productCategory: 'Devon Lane',

        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        productCategory: 'Devon Lane',

        TD2020: '9,462',
        TD2021: '9,122',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },

    ],
    GOPheaders: [
      { text: 'GOP', value: 'GOP', },
      { text: '2020 TD', value: 'TD2020', align: 'right' },
      { text: '2021 TD', value: 'TD2021', align: 'right' },
      { text: '2022 TD', value: 'TD2022', align: 'right' },
      { text: 'CHG 2022 vs 2021', value: 'CHG2022vs2021', align: 'right' },
      { text: 'CHG 2022 vs 2020', value: 'CHG2022vs2020', align: 'right' },
      { text: '%CHG 2022 vs 2021', value: 'CHG2022vs2021%', align: 'right' },
      { text: '%CHG 2022 vs 2020', value: 'CHG2022vs2020%', align: 'right' },
    ],
    GOPreports: [
      {
        GOP: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        GOP: 'Devon Lane',

        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        GOP: 'Devon Lane',

        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        GOP: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        GOP: 'Devon Lane',

        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        GOP: 'Devon Lane',

        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        GOP: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        GOP: 'Devon Lane',

        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        GOP: 'Devon Lane',

        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        GOP: 'Devon Lane',

        TD2020: '4,600',
        TD2021: '4,600',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
    ],
    Territoryheaders: [
      { text: 'Territory', value: 'Territory', },
      { text: '2020 TD', value: 'TD2020', align: 'right' },
      { text: '2021 TD', value: 'TD2021', align: 'right' },
      { text: '2022 TD', value: 'TD2022', align: 'right' },
      { text: 'CHG 2022 vs 2021', value: 'CHG2022vs2021', align: 'right' },
      { text: 'CHG 2022 vs 2020', value: 'CHG2022vs2020', align: 'right' },
      { text: '%CHG 2022 vs 2021', value: 'CHG2022vs2021%', align: 'right' },
      { text: '%CHG 2022 vs 2020', value: 'CHG2022vs2020%', align: 'right' },
    ],
    Territoryreports: [
      {
        Territory: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        Territory: 'Devon Lane',

        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        Territory: 'Devon Lane',

        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        Territory: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        Territory: 'Devon Lane',

        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        Territory: 'Devon Lane',

        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        Territory: 'Devon Lane',
        CHG2022vs2020: '9,828',
        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        Territory: 'Devon Lane',

        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        Territory: 'Devon Lane',

        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        Territory: 'Devon Lane',

        TD2020: '8,987',
        TD2021: '6,782',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
    ],
    topCustomersheaders: [
      { text: 'Customer / Chain Name', value: 'CustomerChainName', },
      { text: 'ID', value: 'ID', align: 'right' },
      { text: '2020 TD', value: 'TD2020', align: 'right' },
      { text: '2021 TD', value: 'TD2021', align: 'right' },
      { text: '2022 TD', value: 'TD2022', align: 'right' },
      { text: 'CHG 2022 vs 2021', value: 'CHG2022vs2021', align: 'right' },
      { text: 'CHG 2022 vs 2020', value: 'CHG2022vs2020', align: 'right' },
      { text: '%CHG 2022 vs 2021', value: 'CHG2022vs2021%', align: 'right' },
      { text: '%CHG 2022 vs 2020', value: 'CHG2022vs2020%', align: 'right' },
    ],
    topCustomersreports: [
      {
        CustomerChainName: 'Devon Lane',
        CHG2022vs2020: '9,828',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        CHG2022vs2020: '9,828',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        CHG2022vs2020: '9,828',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
    ],
    bottomCustomersheaders: [
      { text: 'Customer / Chain Name', value: 'CustomerChainName' },
      { text: 'ID', value: 'ID', align: 'right' },
      { text: '2020 TD', value: 'TD2020', align: 'right' },
      { text: '2021 TD', value: 'TD2021', align: 'right' },
      { text: '2022 TD', value: 'TD2022', align: 'right' },
      { text: 'CHG 2022 vs 2021', value: 'CHG2022vs2021', align: 'right' },
      { text: 'CHG 2022 vs 2020', value: 'CHG2022vs2020', align: 'right' },
      { text: '%CHG 2022 vs 2021', value: 'CHG2022vs2021%', align: 'right' },
      { text: '%CHG 2022 vs 2020', value: 'CHG2022vs2020%', align: 'right' },
    ],
    bottomCustomersreports: [
      {
        CustomerChainName: 'Devon Lane',
        CHG2022vs2020: '9,828',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        CHG2022vs2020: '9,828',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        CHG2022vs2020: '9,828',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        'CHG2022vs2020%': '5,948',

      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
      {
        CustomerChainName: 'Devon Lane',
        ID: '12121',
        TD2020: '9,898',
        TD2021: '2022',
        TD2022: '9,359',
        CHG2022vs2021: '4,152',
        'CHG2022vs2021%': '5,948',
        CHG2022vs2020: '9,828',
        'CHG2022vs2020%': '5,948'
      },
    ],
    CYTDseries: [44, 55, 13, 43, 22],
    CYTDchartOptions: {
      colors: ["#FF7E1D", "#466ABB", "#873BD3", "#5BB878", "#fbe5d4"],
      chart: {
        animations: {
          enabled: false
        },
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            animations: {
              enabled: false
            },
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
      colors: ["#FF7E1D", "#466ABB", "#873BD3", "#5BB878", "#fbe5d4"],

      chart: {
        animations: {
          enabled: false
        },
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            animations: {
              enabled: false
            },
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


    barlineseries: [
      {
        name: '',
        type: 'column',
        data: [0, 0, 0, 0]
      },
      {
        name: 'USG',
        type: 'column',
        data: [120000, 130000, 90000]
      }, {
        name: 'Canteen',
        type: 'column',
        data: [130000, 150000, 90000]
      }, {
        name: 'Aramark',
        type: 'column',
        data: [150000, 110000, 90000]
      }, {
        name: 'Sodexo',
        type: 'column',
        data: [110000, 130000, 90000]
      }, {
        name: 'Total Business',
        type: 'line',
        data: [370000, 210000, 200000]
      }],
    barlinechartOptions: {
      colors: ["#444444", "#FF7E1D", "#466ABB", "#873BD3", "#5BB878"],

      chart: {
        animations: {
          enabled: false
        },
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [0, 0, 0, 0, 0, 4,]
      },
      xaxis: {
        categories: ["2022 TD", "2021 TD", "2022 TD"],
      }
    },
  }),
}
</script>
