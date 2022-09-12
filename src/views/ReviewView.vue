<template>
  <div class="report-generator rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col-md-auto px-0">
        <CHeading content="Athena Review" />
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1  w-md-100 d-inline-block mb-md-0 mb-2">Last Update: 02/18/2022</span>
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
            src="../assets/pdf.png" alt="" class="pr-1"> <div class="d-md-inline-block d-none"> Export in PDF</div></button>
      </div>
    </div>
    <div class="font-20 font-weight-700 font-black mt-3 mb-3">Brand Sales Performance</div>
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
  name: 'ReviewList',
  components: {
    CHeading
  },
  data: () => ({
    headers: [
      { text: 'Brand', value: 'brand',},
      { text: '2020 TD', value: 'TD2020',},
      { text: '2021 TD', value: 'TD2021',},
      { text: '2022 TD', value: 'TD2022',},
      { text: 'CHG 2022 vs 2021', value: 'CHG2022vs2021',},
      { text: 'CHG 2022 vs 2020', value: 'CHG2022vs2020',},
      { text: '%CHG 2022 vs 2021', value: 'CHG2022vs2021%',},
      { text: '%CHG 2022 vs 2020', value: 'CHG2022vs2020%',},
    ],
    reports: [],
  }),
}
</script>
