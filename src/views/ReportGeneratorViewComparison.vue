<template>
  <div class="report-generator rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-center">
      <div class="col-md col-sm-6 col-12 px-0">
        <CHeading content="Report Generator" />
      </div>
      <div class="col-md col-sm-6 col-12 px-0 text-center">
        <router-link to="/report-generator-comparison-view">
          <button class="btn-light-orange btn font-20 font-weight-700">Comparison</button>
        </router-link>
        <router-link to="/report-generator">
          <button class="btn text-black font-18 font-weight-500 ml-2">Sales</button>
        </router-link>
       
      </div>
      <div class="col-md-5 col-12 px-0 text-right">

        <span class="font-500 font-14 font-mono">Last Update: 02/18/2022</span>
        <button class=" btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/excel.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in Excel</div>
        </button>
        <button class="btn btn-orange ml-2 font-14" @click="$bvModal.show('saveReport')"> Save Report</button>
      </div>
      <!-- popup -->
      <b-modal id="saveReport" hide-footer size="md" centered>
        <template #modal-title>
          <span class="font-20 font-weight-700">Report Title</span>
        </template>
        <div class="d-block">
          <b-form>
            <b-row class="mx-0  inner-font-black inner-font-14">
              <v-col cols="12" md="12" class="p-1">
                <b-form-input id="FirstName" placeholder="Type Here"></b-form-input>
              </v-col>
            </b-row>
            <div class="text-center pt-2">
              <router-link to="/whos-reported-reports">
              <button type="submit" @click="$bvModal.hide('saveReport')"
                class="px-3 mt-3 btn btn-orange">Generate</button>
              </router-link>
            </div>
          </b-form>
        </div>
      </b-modal>
      <!--  -->
    </div>
    <div class="row">
      <div class="col-9">
        <p class="appFilters">Applied Filters</p>
      </div>
      <div class="col-3">
        <router-link to="/filter-comparison-generator" class="waves-effect">
          <p class="mb-0 font-weight-600 font-orange font-13 text-right font-mono font-style-underline">Change
            Filters
          </p>
        </router-link>
      </div>
    </div>
    <div class="border rounded-sm bg-light-gray p-2 mx-0 mt-3 justify-content-between row ">
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="input-label">Start Date</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">03/08/2022</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="input-label">End Date</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">03/08/2022</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="input-label">Unit of Measure</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">Dollars</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="input-label">Sales to</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">Distributors</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="input-label">Reports By</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">Customers</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="input-label">Regions</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">A,D,G</div>

      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="input-label">State</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">NY,SF,NV</div>


      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="input-label">National Account</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">Some Info 1, Info,2</div>
      </div>
      <div class="px-2 col-md-auto col-12 col-sm-4">
        <div class="input-label">Distributors</div>
        <div class="font-13 font-weight-600 font-black mt-1 font-mono">Alex Hales, Jackson Morrison</div>
      </div>
    </div>
    <div class="font-20 font-weight-700 font-black mt-4 mb-1">Results</div>

    <div class="overflow-auto">

      <b-table id="my-table" hover :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage">
      </b-table>

    </div>
    <div class=" paginationclass pt-4">
      <div class="font-mono font-14 mb-3">
        {{ rows }} Total Listings
      </div>
      <div>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
        </b-pagination>
      </div>

    </div>

  </div>
</template>
  
<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
export default {
  name: 'ReportGenerator',
  components: {
    CHeading
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  data: () => ({
    perPage: 20,
    currentPage: 1,

    fields: [
      { label: 'Chain', key: 'chain' },
      { label: 'Customer', key: 'customer', },
      { label: 'Year', key: 'year' },
      { label: 'Q1', key: 'q1', class: 'rightAligned' },
      { label: 'Q2', key: 'q2', class: 'rightAligned' },
      { label: 'Q3', key: 'q3', class: 'rightAligned' },
      { label: 'YTD Total', key: 'ytdTotal', align: 'right', class: 'rightAligned' },
      { label: 'Total', key: 'total', align: 'right', class: 'rightAligned' },

    ],
    items: [
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,121'
      },
      {
        chain: 'Louis Vuitton',
        customer: 'Valerie Ahorro',
        year: 2022,
        q1: '7,791',
        q2: '5,545',
        q3: '4,544',
        ytdTotal: '10,121',
        total: '10,000'
      },
    ],
    regions: ['A', 'B', 'C', 'D'],
    regionsValue: ['A', 'C'],
    Categories: ['Candy', 'B', 'C', 'D'],
    categoryValue: ['Candy', 'C'],
    Headers: ['Brands', 'B', 'C', 'D'],
    headersValue: ['Brands', 'C'],
    SelectFilters: [
      'Customers',
      'Distributors',
      'Regions',
      'Districts',
      'Territories',
      'States',
      'Chains / National Account',
      'GPO / Buying Groups',
      'Market Segments',
      'Brands',
      'Product Category',
      'Product Sub-Category',
      'Products',
      'My Customer Groups',
      'My Product Groups',
      'My Distributor Groups'],
    SelectFiltersValue: ['Customers', 'Distributors', 'Regions',],
  }),
}
</script>
<style >
.v-data-footer {
  display: none !important;
}

.v-data-table tbody tr:nth-of-type(even),
.v-data-table thead tr:nth-of-type(even) {
  background-color: #F6F6F6;
}

.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th {
  background-color: white;
}

.paginationclass {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.rightAligned {
  text-align: end;
}
</style>
  
