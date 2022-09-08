<template>
  <div class="report-generator bg-white px-3 py-4">
    <div class="row mx-0 align-item-center">
      <div class="col-md-auto col-12 px-0 w-max-content">
        <CHeading content="YTD Purchases" />
      </div>
      <div class="col-md col-12 px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
        <v-text-field class="reverse-row text-black font-weight-500 pt-0 mt-0 w-max-content d-inline-block ml-md-2 ml-0"
          v-model="search" append-icon="mdi-magnify" label="Product or customer search..." single-line hide-details>
        </v-text-field>
        <button class="btn border border-light-gray p-10 ml-2"><img src="../assets/excel.png" alt="">
          <div class="d-md-inline-block d-none"> Export in Excel</div>
        </button>
      </div>
    </div>
    <div class="border rounded-sm bg-light-gray justify-content-between row mx-0 mt-3 mb-3">
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">Start Date</div>
        <div class="font-13 font-weight-600 font-black mt-3">03/08/2022</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">End Date</div>
        <div class="font-13 font-weight-600 font-black mt-3">03/08/2022</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">Unit of Measure</div>
        <div class="font-13 font-weight-600 font-black mt-3">Dollars</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">Sales to</div>
        <div class="font-13 font-weight-600 font-black mt-3">Distributors</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">Reports By</div>
        <div class="font-13 font-weight-600 font-black mt-3">Customers</div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">Regions</div>
        <div class="font-13 font-weight-600 font-black custom-input-hh">
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
        </div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">Category</div>
        <div class="font-13 font-weight-600 font-black custom-input-hh">
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
        </div>
      </div>
      <div class="px-2 col-md-auto col-6 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">Add Headers</div>
        <div class="font-13 font-weight-600 font-black custom-input-hh">
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
        </div>
      </div>
      <div class="px-2 col-md-auto col-12 col-sm-4">
        <div class="font-14 font-weight-700 font-black w-max-content">Select Filters(Up to 3)</div>
        <div class="font-13 font-weight-600 font-black custom-input-hh">
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
        </div>
      </div>
    </div>

    <div class="overflow-auto">

      <b-table id="my-table" hover :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage">
        <template #cell(action)>
          <div small class="mr-2 text-center" @click="row.editItem(item)">
            <img src="../assets/UserInterface.png" alt="">
          </div>
        </template>
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
    computed: {
      rows() {
        return this.items.length
      }
    },
    name: 'YtdPurchaseList',
    components: {
      CHeading
    },
  
    data: () => ({
  
      search: '',
      fields: [
        { label: 'Operator Name', key: 'operatorName', },
        { label: 'Operator ID', key: 'operatorID', class: 'rightAligned' },
        { label: 'GPO', key: 'GPO', class: 'rightAligned' },
        { label: 'Chain / National Account', key: 'chainNationalAccount', class: 'rightAligned' },
        { label: 'Market Segment', key: 'marketSegment', class: 'rightAligned' },
        { label: '2022 TD Cases', key: 'TDCases2022', class: 'rightAligned' },
        { label: '2021 TD Cases', key: 'TDCases2021', class: 'rightAligned' },
        { label: '$ YTD', key: 'YTD', class: 'rightAligned' },
        { label: '$ PYTD', key: 'PYTD', class: 'rightAligned' },
      ],
      items: [
        {
          operatorName: 'Devon Lane',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Marvin McKinney',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Jane Cooper',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Esther Howard',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Bessie Cooper',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Jacob Jones',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Marvin McKinney',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Jane Cooper',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Esther Howard',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Bessie Cooper',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Jacob Jones',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Jane Cooper',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Esther Howard',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Bessie Cooper',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
        {
          operatorName: 'Jacob Jones',
          operatorID: 1342,
          GPO: 213421,
          chainNationalAccount: 64366,
          marketSegment: 5645,
          TDCases2022: 54204,
          TDCases2021: 4532,
          YTD: 65354,
          PYTD: 536533,
        },
  
      ],
      currentPage: 1,
      perPage: 10,
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
  