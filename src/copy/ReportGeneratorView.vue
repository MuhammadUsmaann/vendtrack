<template>
  <div class="report-generator bg-white px-3 py-4">
    <div class="row mx-0 align-item-center">
      <div class="col-md col-sm-6 col-12 px-0">
        <CHeading content="Report Generator" />
      </div>
      <div class="col-md col-sm-6 col-12 px-0 text-center">
        <button class="btn-light-orange btn">Sales</button>
        <button class="btn text-black font-18 font-weight-500 ml-2">Comparison</button>
      </div>
      <div class="col-md col-12 px-0 text-right">
        <span class="font-500 font-14 font-mono">Last Update: 02/18/2022</span>
        <button class="btn btn-orange ml-2 font-14"><i class="fa-solid fa-check"></i> Generate</button>
      </div>
    </div>
    <div class="border rounded-sm bg-light-gray p-2 mx-0 mt-3 justify-content-between row ">
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
          <v-select v-model="SelectFiltersValue" :items="SelectFilters" label="" multiple class="d-inline-block p-0 p-0">
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
    <div class="font-20 font-weight-700 font-black mt-3 mb-3">Results</div>
    <v-data-table :headers="headers" :items="reports" sort-by="calories" class="elevation-1">
      <template v-slot:[`item.actions`]="{ item }">
        <div small class="mr-2" @click="editItem(item)">
          <img src="../assets/UserInterface.png" alt="">
        </div>
      </template>

    </v-data-table>
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
  data: () => ({
    headers: [
      {
        text: 'Username',
        value: 'username',
      },
        { text: 'Email Address', value: 'emailAddress' },
        { text: 'User Type', value: 'userType' },
        { text: 'Access Level', value: 'accessLevel' },
        { text: 'Status', value: 'status' },
        { text: 'CYTD Login Count', value: 'CYTDLoginCount' },
        { text: 'Current Month Login Count', value: 'currentMonthLoginCount' },
        { text: 'Action', value: 'action' },
    ],
    reports: [],
    regions:['A','B','C','D'],
    regionsValue:['A','C'],
    Categories:['Candy','B','C','D'],
    categoryValue:['Candy','C'],
    Headers:['Brands','B','C','D'],
    headersValue:['Brands','C'],
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
    SelectFiltersValue: ['Customers','Distributors','Regions',],
  }),
}
</script>
