<template>
  <div class=" rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col-lg-2 col-md-4 col-12 px-0">
        <CHeading content="Promotions" />
      </div>
      <div class="col-lg-7 col-md-8 col-12">
        <div class="d-flex justify-content-xl-center justify-content-end align-items-center">
          <span class="btn-light-orange py-2 rounded px-4 font-weight-700">
            Delicious Reward
          </span>
          <div class="pl-4 pr-5">
            <p class="font-weight-500 font-12 font-black">Theater Enrollment </p>
            <p class="font-weight-500 font-18 font-black">2021-2022</p>
          </div>
          <div>
            <p class="font-weight-500 font-12 font-black">Theater Enrollment </p>
            <p class="font-weight-500 font-18 font-black">2021-2022</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-12 px-0 text-right">
        <b-dropdown id="dropdown-1" text="All Application" variant="outline"
          class="d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm mb-md-0 mb-1 bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>

        <button
          class="btn border border-light-gray ml-2 bg-white font-14 font-weight-500 font-black shadow-sm mb-md-0 mb-1"><img
            src="../assets/excel.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in Excel</div>
        </button>
      </div>
    </div>


    <div class="overflow-auto"><b-table id="my-table" hover :fields="marketSegmentSalesPerformanceHeader" :items="marketSegmentSalesPerformance">
      <template v-slot:cell(DownloadForm)>
        <img src="../assets/download.svg" alt="">
      </template>
    </b-table></div>

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
      { label: ' Application Type', key: 'ApplicationType' },
      { label: 'Operator Code', key: 'OperatorCode', class: 'aligntdright' },
      { label: 'Operator Name', key: 'OperatorName', },
      { label: 'Territory Rep Name', key: 'TerritoryRepName', class: 'aligntdright' },
      { label: 'Submitted On', key: 'SubmittedOn', },
      { label: 'Approval Status', key: 'ApprovalStatus', class: 'aligntdcenter' },
      { label: 'Download Form', key: 'DownloadForm', class: 'aligntdcenter' },
    ],
    marketSegmentSalesPerformance: [
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
        ApprovalStatus: 'Pending',
        DownloadForm: ''
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },
      {
        ApplicationType: 'Some Type Name',
        OperatorCode: '6025',
        OperatorName: 'Denya Contadora',
        ApprovalStatus: 'Pending',
        TerritoryRepName: '1439',
        SubmittedOn: '18/09/2016',
      },


    ]

  })
}
</script>
  
<style >
.aligntdright {
  text-align: end !important;
  padding-right: 40px !important;
}

.aligntdcenter {
  text-align: center !important;
}
</style>