<template>
  <div class="report-generator rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col-md-auto px-0">
        <CHeading content="Who’s Reported" />
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
        <b-dropdown id="dropdown-1" text="Change View" variant="outline"
          class="d-inline-block inner-border-light-gray ml-md-2 ml-0 inner-font-14 font-weight-500 font-black shadow-sm bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <button class="btn border border-light-gray ml-md-2 ml-1 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/eye.png" alt=""> Show Query</button>
        <button class="btn border border-light-gray ml-md-2 ml-1 font-14 font-weight-500 px-2 font-black shadow-sm"><img
            src="../assets/UserInterface.svg" alt="">
          <div class="d-md-inline-block d-none"> Edit Query</div>
        </button>
        <button class="btn border border-light-gray ml-md-2 ml-1 px-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/excel.svg" alt="">
          <div class="d-md-inline-block d-none pl-2"> Export in Excel</div>
        </button>
      </div>
    </div>
    <v-data-table :headers="headers" :items="reports" class="elevation-1">
    </v-data-table>
    <div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
export default {
  name: 'WhosReported2',
  components: {
    CHeading
  },
  data: () => ({
    headers: [
      {
        text: 'Distributer Name',
        value: 'distributerName',
      },
      { text: 'Last Invoice Date Reported', value: 'lastInvoiceDateReported' ,align: 'right',width:'17%'},
      { text: 'Last Reported Date', value: 'lastReportedDate',align:'right' },
    ],

    reports: [
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013',
        align:'right'
      },
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },{
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },
      {
        distributerName: 'Devon Lane',
        lastInvoiceDateReported: '15/08/2017',
        lastReportedDate: '16/08/2013'
      },
      
    ],
  }),
}
</script>
