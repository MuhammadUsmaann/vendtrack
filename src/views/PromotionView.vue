<template>
    <div class=" rounded bg-white px-3 py-4">
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
          <button class="btn border border-light-gray ml-2 bg-white font-14 font-weight-500 font-black shadow-sm"><img
              src="../assets/excel.svg" alt="" class="pr-1">
            <div class="d-md-inline-block d-none"> Export in Excel</div>
          </button>
        </div>
      </div>
  
     
      <div class="font-20 font-weight-700 font-black mt-3 mb-3">Market Segment Sales Performance</div>
      <v-data-table hide-default-footer :headers="marketSegmentSalesPerformanceHeader"
        :items="marketSegmentSalesPerformance" class="elevation-1">
      </v-data-table>
      
  
     
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import CHeading from '@/components/heading.vue';
  
  export default {
    name: 'PromotionView',
    components: {
      CHeading,
    },
    data: () => ({
      marketSegmentSalesPerformanceHeader: [
      { text: ' Application Type', value: 'ApplicationType', },
      { text: 'Operator Code', value: 'OperatorCode', align: 'right' },
      { text: 'Operator Name', value: 'OperatorName ', align: 'right' },
      { text: 'Territory Rep Name', value: 'TerritoryRepName', align: 'right' },
      { text: 'Submitted On', value: 'SubmittedOn', align: 'right' },
      { text: 'Approval Status', value: 'ApprovalStatus', align: 'right' },
      { text: 'Download Form', value: 'DownloadForm%', align: 'right' },
    ],
    marketSegmentSalesPerformance: [
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      {
        productCategory: 'Some Type Name',
        CHG2022vs2020: '6025',
        TD2020: 'Denya Contadora',
        TD2021: '1439',
        TD2022: '18/09/2016',
        CHG2022vs2021: 'Pending',
       
      },
      

    ]
      
  })
}
  </script>
  