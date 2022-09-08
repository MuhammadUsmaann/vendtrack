<template>
    <div class="report-generator bg-white px-3 py-4">
        <div class="row mx-0 align-item-center">
            <div class="col-md col-sm-6 col-12 px-0">
                <CHeading content="Report Generator" />
            </div>
            <div class="col-md col-sm-6 col-12 px-0 text-center">
                <router-link to="/report-generator">
                    <button class="btn text-black font-18 font-weight-500 ml-2">Sales</button>
                </router-link>
                <router-link to="/report-generator-comparison-view">
                    <button class="btn-light-orange btn font-20 font-weight-700">Comparison</button>
                </router-link>
            </div>
            <div class="col-md col-12 px-0 text-right">
                <span class="font-500 font-14 font-mono">Last Update: 02/18/2022</span>
                <!-- <button class="btn btn-orange ml-2 font-14"><i class="fa-solid fa-check"></i> Generate</button> -->
            </div>
        </div>
        <div class="row">
            <div class="col-10">
                <p class="appFilters">Applied Filters</p>
            </div>
            <div class="col-2 ">
                <router-link to="/filter-comparison-generator" class="waves-effect">
                    <p class="mb-0 font-weight-600 font-orange font-13 text-right font-mono font-style-underline">Change
                        Filters
                    </p>
                </router-link>
            </div>
        </div>
        <div class="border rounded-sm bg-light-gray p-2 mx-0 mt-3 justify-content-between row ">
            <div class="px-2 col-md-auto col-6 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">Start Date</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">03/08/2022</div>
            </div>
            <div class="px-2 col-md-auto col-6 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">End Date</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">03/08/2022</div>
            </div>
            <div class="px-2 col-md-auto col-6 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">Unit of Measure</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">Dollars</div>
            </div>
            <div class="px-2 col-md-auto col-6 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">Sales to</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">Distributors</div>
            </div>
            <div class="px-2 col-md-auto col-6 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">Reports By</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">Customers</div>
            </div>
            <div class="px-2 col-md-auto col-6 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">Regions</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">A,D,G</div>
                <!-- <div class="font-13 font-weight-600 font-black custom-input-hh">
            <v-select v-model="regionsValue" :items="regions" label="" multiple class="d-inline-block p-0">
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0" class="bg-extra-light-ornge rounded-0 px-2 py-2">
                  <span class="">{{ item }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text text-caption btn-orange px-2 py-2 rounded-sm">
                  +{{ regionsValue.length - 1 }}
                </span>
              </template>
            </v-select>
          </div> -->
            </div>
            <div class="px-2 col-md-auto col-6 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">State</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">NY,SF,NV</div>

                <!-- <div class="font-13 font-weight-600 font-black custom-input-hh">
            <v-select v-model="categoryValue" :items="Categories" label="" multiple class="d-inline-block p-0">
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0" class="bg-extra-light-ornge rounded-0 px-2 py-2">
                  <span class="">{{ item }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text text-caption btn-orange px-2 py-2 rounded-sm">
                  +{{ categoryValue.length - 1 }}
                </span>
              </template>
            </v-select>
          </div> -->
            </div>
            <div class="px-2 col-md-auto col-6 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">National Account</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">Some Info 1, Info,2</div>

                <!-- <div class="font-13 font-weight-600 font-black custom-input-hh">
            <v-select v-model="headersValue" :items="Headers" label="" multiple class="d-inline-block p-0">
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0" class="bg-extra-light-ornge rounded-0 px-2 py-2">
                  <span class="">{{ item }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text text-caption btn-orange px-2 py-2 rounded-sm">
                  +{{ headersValue.length - 1 }}
                </span>
              </template>
            </v-select>
          </div> -->
            </div>
            <div class="px-2 col-md-auto col-12 col-sm-4">
                <div class="font-14 font-weight-700 font-black w-max-content">Distributors</div>
                <div class="font-13 font-weight-600 font-black mt-1 font-mono">Alex Hales, Jackson Morrison</div>

                <!-- <div class="font-13 font-weight-600 font-black custom-input-hh">
            <v-select v-model="SelectFiltersValue" :items="SelectFilters" label="" multiple
              class="d-inline-block p-0 p-0">
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0" class="bg-extra-light-ornge rounded-0 px-2 py-2">
                  <span class="">{{ item }}</span>
                </v-chip>
                <span v-if="index === 1" class="grey--text text-caption btn-orange px-2 py-2 rounded-sm">
                  +{{ SelectFiltersValue.length - 1 }}
                </span>
              </template>
            </v-select>
          </div> -->
            </div>
        </div>
        <div class="font-20 font-weight-700 font-black mt-4 mb-1">Results</div>
        <!-- <v-data-table :headers="headers" :items="reports" sort-by="calories" class="elevation-1 " hide-default-footer>
        <template v-slot:[`item.actions`]="{ item }">
          <div small class="mr-2" @click="editItem(item)">
            <img src="../assets/UserInterface.png" alt="">
          </div>
        </template>
      </v-data-table>
      <div class=" paginationclass pt-5">
        <div class="font-mono font-14 mb-3">
          {{ rows }} Total Listings
        </div>
        <div>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="rows" aria-controls="my-table">
          </b-pagination>
        </div>
  
      </div> -->

        <div class="overflow-auto">

            <b-table id="my-table" hover :fields="fields" :items="items" :per-page="perPage"
                :current-page="currentPage">
            </b-table>

        </div>
        <div class=" paginationclass pt-5">
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
        perPage: 10,
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
  
