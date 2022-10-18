<template>
  <div class="rapid-reports px-3 py-4">
    <div class="row mx-0 align-item-center mb-1">
      <div class="col-md-auto px-0">
        <CHeading>
          Rapid Reports
        </CHeading>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1">Sales Data Available Up To: 02/18/2022</span>
        <div class="bg-white d-inline-block rounded ml-2">
          <b-dropdown id="dropdown-1" text="Cases" variant="outline"
            class="d-inline-block inner-border-light-gray inner-font-14 font-weight-500 font-black shadow-sm bg-transparent">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
          </b-dropdown>
        </div>
        <button class="btn border border-light-gray ml-2 bg-white font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/print.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Print</div>
        </button>
        <button class="btn border border-light-gray ml-2 bg-white font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/pdf.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
      </div>
    </div>
    <b-row class="mb-4 mx-0 bg-white shadow-0720 rounded-md">
      <v-col class="font-14 font-black" cols="12" md="4">
        <div class="font-weight-700">Operator Name / Operator ID</div>
        <div class="font-weight-500">Mark Jackson / 93022</div>
      </v-col>
      <v-col class="font-14 font-black" cols="12" md="4">
        <div class="font-weight-700">Region / Territory</div>
        <div class="font-weight-500">New York / New York</div>
      </v-col>
      <v-col class="font-14 font-black" cols="12" md="4">
        <div class="font-weight-700">Chain / National Account</div>
        <div class="font-weight-500">2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
      </v-col>
      <v-col class="font-14 font-black" cols="12" md="4">
        <div class="font-weight-700">Address</div>
        <div class="font-weight-500">2972 Westheimer Rd. Santa Ana, Illinois 85486</div>
      </v-col>
      <v-col class="font-14 font-black" cols="12" md="4">
        <div class="font-weight-700">Market Segment</div>
        <div class="font-weight-500">Mark Jackson / 93022</div>
      </v-col>
      <v-col class="font-14 font-black" cols="12" md="4">
        <div class="font-weight-700">Buying Group</div>
        <div class="font-weight-500">New York / New York</div>
      </v-col>
    </b-row>
    <div class="font-20 font-weight-700 font-black mb-3 mt-4">Purchase History (Cases)</div>
    <v-data-table :headers="Purchaseheaders" :items="Purchasereports" class="elevation-1 mt-3" hide-default-footer>
    </v-data-table>
    <div class="font-20 font-weight-700 font-black mb-3 mt-4">Distributor Purchases (Cases)</div>
    <v-data-table :headers="Distributorheaders" :items="Distributorreports" class="elevation-1 mt-3"
      hide-default-footer>
    </v-data-table>
    <div class="font-20 font-weight-700 font-black mb-3 mt-4">SKU Total (Cases)</div>
    <v-data-table :headers="SKUheaders" :items="SKUreports" class="elevation-1 mt-3" hide-default-footer>
    </v-data-table>
    <div class="font-20 font-weight-700 font-black mb-3 mt-4">Product Category Performance (Cases)</div>
    <v-data-table :headers="Performanceheaders" :items="Performancereports" class="elevation-1 mt-3"
      hide-default-footer>
    </v-data-table>
    <div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';

export default {
  name: 'RapidReports',
  components: {
    CHeading,
  },
  data: () => ({
    Purchaseheaders: [
      { text: 'Year', value: 'Year',width:'6.6%' },
      { text: 'Jan', value: 'Jan',width:'6.6%' },
      { text: 'Feb', value: 'Feb', width:'6.6%'},
      { text: 'Mar', value: 'Mar',width:'6.6%' },
      { text: 'Apr', value: 'Apr', width:'6.6%'},
      { text: 'May', value: 'May', width:'6.6%'},
      { text: 'Jun', value: 'Jun',width:'6.6%' },
      { text: 'July', value: 'July', width:'6.6%'},
      { text: 'Aug', value: 'Aug', width:'6.6%'},
      { text: 'Sep', value: 'Sep', width:'6.6%'},
      { text: 'Oct', value: 'Oct', width:'6.6%'},
      { text: 'Nov', value: 'Nov', width:'6.6%'},
      { text: 'Dec', value: 'Dec', width:'6.6%'},
      { text: 'YTD', value: 'YTD', width:'6.6%'},
      { text: 'Total', value: 'Total', width:'6.6%'},
    ],
    Purchasereports: [
      {
        Year: '2022',
        Jan: '4,600',
        Feb: '4,600',
        Mar: '4,600',
        Apr: '4,600',
        May: '4,600',
        Jun: '4,600',
        July: '4,600',
        Aug: '4,600',
        Sep: '4,600',
        Oct: '4,600',
        Nov: '4,600',
        Dec: '4,600',
        YTD: "6,000",
        Total: '6,000'

      },
      {
        Year: '2022',
        Jan: '4,600',
        Feb: '4,600',
        Mar: '4,600',
        Apr: '4,600',
        May: '4,600',
        Jun: '4,600',
        July: '4,600',
        Aug: '4,600',
        Sep: '4,600',
        Oct: '4,600',
        Nov: '4,600',
        Dec: '4,600',
        YTD: "6,000",
        Total: '6,000'

      },     

    ],
    Distributorheaders: [
      { text: 'Distributor Name', value: 'DistributorName', width: '37%' },
      { text: 'YTD', value: 'YTD', },
      { text: 'PYTD', value: 'PYTD', },
      { text: 'YR % Chg', value: 'YRChg', align: 'right', width: '8%' },
      { text: 'QTD', value: 'QTD', width: '7%', align: 'center' },
      { text: 'PQTD', value: 'PQTD', },
      { text: 'QTD % Chg', value: 'QTDChg', align: 'right' },
      { text: 'MTD', value: 'MTD', width: '7%', align: 'center' },
      { text: 'PMTD', value: 'PMTD', },
      { text: 'MTD Chg', value: 'MTDChg', align: 'right', width: '8%' },
    ],
    Distributorreports: [
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },

    ],
    SKUheaders: [
      { text: 'SKU No.', value: 'SKUNo', width: '11%' },
      { text: 'SKU Description', value: 'SKUDescription', width: '26%' },
      { text: 'YTD', value: 'YTD', },
      { text: 'PYTD', value: 'PYTD', },
      { text: 'YR % Chg', value: 'YRChg', align: 'right', width: '8%' },
      { text: 'QTD', value: 'QTD', width: '7%', align: 'center' },
      { text: 'PQTD', value: 'PQTD', },
      { text: 'QTD % Chg', value: 'QTDChg', align: 'right' },
      { text: 'MTD', value: 'MTD', width: '7%', align: 'center' },
      { text: 'PMTD', value: 'PMTD', },
      { text: 'MTD Chg', value: 'MTDChg', align: 'right', width: '8%' },
    ],
    SKUreports: [
      {
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        SKUDescription: 'Medium Information Display Here',
        SKUNo: 'CD9930202022',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },

    ],
    Performanceheaders: [
      { text: 'Product Category', value: 'ProductCategory', width: '37%' },
      { text: 'YTD', value: 'YTD', },
      { text: 'PYTD', value: 'PYTD', },
      { text: 'YR % Chg', value: 'YRChg', align: 'right', width: '8%' },
      { text: 'QTD', value: 'QTD', width: '7%', align: 'center' },
      { text: 'PQTD', value: 'PQTD', },
      { text: 'QTD % Chg', value: 'QTDChg', align: 'right' },
      { text: 'MTD', value: 'MTD', width: '7%', align: 'center' },
      { text: 'PMTD', value: 'PMTD', },
      { text: 'MTD Chg', value: 'MTDChg', align: 'right', width: '8%' },
    ],
    Performancereports: [
      {
        ProductCategory: 'Information Category Name',
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        ProductCategory: 'Information Category Name',
        PYTD: '2,120',

        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        ProductCategory: 'Information Category Name',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        ProductCategory: 'Information Category Name',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        ProductCategory: 'Information Category Name',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        ProductCategory: 'Information Category Name',
        DistributorName: 'Oralis Café',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        ProductCategory: 'Information Category Name',
        PYTD: '2,120',

        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        ProductCategory: 'Information Category Name',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        ProductCategory: 'Information Category Name',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },
      {
        DistributorName: 'Oralis Café',
        ProductCategory: 'Information Category Name',
        PYTD: '2,120',
        YTD: '4,600',
        YRChg: '7,791',
        QTD: '2,132',
        PQTD: '9,374',
        QTDChg: '2,798',
        MTD: '2,132',
        PMTD: '9,374',
        MTDChg: '2,798',
      },

    ],
  }),
}
</script>
<style>
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
  background-color: #F6F6F6 !important;
}

.theme--light.v-data-table>.v-data-table__wrapper>table>tr:first-child>th {
  padding: 0 20px !important;
}
</style>
