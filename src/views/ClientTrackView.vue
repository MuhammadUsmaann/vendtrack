<template>
  <div class="report-generator bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col-md-auto px-0">
        <CHeading>
          Client Track<sup class="font-14 font-black font-weight-400">TM</sup>
        </CHeading>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
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
            src="../assets/pdf.png" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
        <button class="btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/print.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Print </div>
        </button>
      </div>
    </div>
    <b-row class="mb-3 mx-0">
      <v-col class="row mx-0 px-0 pb-2" cols="12" md="6">
        <v-col class="p-0 col-sm mb-sm-0 mb-2 col-12">
          <div class="font-20 font-weight-700 font-black">Distributor Details</div>
          <div class="font-14 font-weight-500 font-black">Some Names</div>
        </v-col>
        <v-col class="p-0 col-sm col-12">
          <div class="font-20 font-weight-700 font-black">Region</div>
          <div class="font-14 font-weight-500 font-black">Some Region Name</div>
        </v-col>
      </v-col>
    </b-row>
    <b-row class="mt-2 mb-4">
      <v-col cols="12" md="6">
        <div class="bg-white shadow p-4 rounded-xl text-center">
          <apexchart type="pie" width="380" class="inner-mx-auto" :options="CYTDchartOptions" :series="CYTDseries">
          </apexchart>
          <div class="font-20 font-weight-700 font-black mt-3">Distributor Product Mix</div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="bg-white shadow p-4 rounded-xl text-center">
          <apexchart type="pie" width="380" class="inner-mx-auto" :options="PYTDchartOptions" :series="PYTDseries">
          </apexchart>
          <div class="font-20 font-weight-700 font-black mt-3">Regional Product Mix</div>
        </div>
      </v-col>
    </b-row>
    <b-row class="mt-2 mb-4">
      <v-col cols="12" md="6">
        <v-data-table :headers="distributorDetailsHeaders" :items="distributorDetails" class="elevation-1"
          hide-default-footer>
        </v-data-table>
      </v-col>
      <v-col cols="12" md="6">
        <apexchart type="rangeBar" height="350" :options="barchartOptions" :series="barseries"></apexchart>
      </v-col>
    </b-row>
    <div>
    </div>






    <!-- <div class="row mx-0 align-item-center mb-1">
      <div class="col-md-auto px-0">
        <CHeading>
          Client Track<sup class="font-14 font-black font-weight-400">TM</sup>
        </CHeading>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Sales Data Available Up To:
          02/18/2022</span>
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
            src="../assets/pdf.png" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
        <button class="btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/print.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Print </div>
        </button>
      </div>
    </div> -->
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
    <apexchart type="rangeBar" height="350" :options="WarehouseOptions" :series="Warehousebarseries"></apexchart>
    <div class="font-20 font-weight-700 font-black mb-3">Distributor Top 10 Customers</div>
    <v-data-table :headers="distributorTopCutomerheaders" :items="distributorTopCutomer" class="elevation-1 mt-3"
      hide-default-footer>
    </v-data-table>
    <div>
    </div>



    <!-- <div class="row mx-0 align-item-center mb-1">
      <div class="col-md-auto px-0">
        <CHeading>
          Client Track<sup class="font-14 font-black font-weight-400">TM</sup>
        </CHeading>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
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
            src="../assets/pdf.png" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
        <button class="btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/print.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Print </div>
        </button>
      </div>
    </div> -->
    <div class="font-20 font-weight-700 font-black mt-4 mb-3">Distributor Market Segment Analysis</div>
    <v-data-table :headers="distributorMarketSegmentHeader" :items="distributorMarketSegment" class="elevation-1 mb-3"
      hide-default-footer>
    </v-data-table>
    <div class="mb-5"></div>
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
  name: 'ClientTrack',
  components: {
    CHeading,
    apexchart: VueApexCharts,
  },
  data: () => ({
    distributorDetailsHeaders: [
      { text: 'Product Category', value: 'productCategory', },
      { text: 'YTD CS', value: 'YTDCS', },
      { text: 'PYTD CS', value: 'PYTDCS', },
      { text: 'CHG CS', value: 'CHGCS', },
      { text: '% CHG', value: 'CHG', },
    ],
    distributorDetails: [
      {
        productCategory: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        productCategory: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        productCategory: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        productCategory: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        productCategory: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        productCategory: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
    ],

    distributorTopCutomerheaders: [
      { text: 'Customer Name', value: 'CustomerName',width:'10%' },
      { text: 'Operator ID', value: 'OperatorID',align:'right',width:'12%' },
      { text: 'YTD CS', value: 'YTDCS', align:'right',width:'15%'},
      { text: 'PYTD CS', value: 'PYTDCS', align:'right',width:'12%'},
      { text: 'CHG CS', value: 'CHGCS', align:'right',width:'15%'},
      { text: '% CHG', value: 'CHG', align:'right',width:'15%'},
    ],
    distributorTopCutomer: [
      {
        CustomerName: 'Vidal Plantas',
        OperatorID: '4,600',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        CustomerName: 'Vidal Plantas',
        OperatorID: '4,600',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        CustomerName: 'Vidal Plantas',
        OperatorID: '4,600',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        CustomerName: 'Vidal Plantas',
        OperatorID: '4,600',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        CustomerName: 'Vidal Plantas',
        OperatorID: '4,600',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        CustomerName: 'Vidal Plantas',
        OperatorID: '4,600',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
    ],

    distributorMarketSegmentHeader: [
      { text: 'Market Segment', value: 'MarketSegment',width:'30%' },
      { text: 'YTD CS', value: 'YTDCS', align:'center',width:'20%'},
      { text: 'PYTD CS', value: 'PYTDCS',align:'center',width:'15%' },
      { text: 'CHG CS', value: 'CHGCS', align:'center',width:'28%'},
      { text: '% CHG', value: 'CHG', align:'center',width:'7%'},
    ],
    distributorMarketSegment: [
      {
        MarketSegment: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        MarketSegment: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        MarketSegment: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        MarketSegment: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        MarketSegment: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
      },
      {
        MarketSegment: 'Some Placeholder Text',
        YTDCS: '6025',
        PYTDCS: '6025',
        CHGCS: '6025',
        CHG: '6025'
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
    barseries: [{
      name: 'CYTD',
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
    }, {
      name: 'PYTD',
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
      colors: ["#FF7E1D","#873BD3" ],
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
    Warehousebarseries: [{
      name: 'CYTD',
      data: [{
        x: 'Purchases',
        y: [0, 10.090]
      },
      {
        x: 'Sales',
        y: [0, 8.000]
      }],

    }],
    WarehouseOptions: {
      colors: ["#FF7E1D", ],
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
