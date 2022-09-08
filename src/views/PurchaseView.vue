<template>
  <div class="report-generator bg-white px-3 py-4">
    <div class="row mx-0 align-item-center">
      <div class="col-md-auto col-12 px-0 w-max-content">
        <CHeading content="Dashboard" />
      </div>
      <div class="col-md col-12 px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1 w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
        <b-dropdown id="dropdown-1" text="All Sales" variant="outline"
          class=" d-inline-block inner-border-light-gray ml-md-2 inner-font-14 font-weight-500 font-black shadow-sm bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-1" text="Cases" variant="outline"
          class=" d-inline-block inner-border-light-gray ml-2 inner-font-14 font-weight-500 font-black shadow-sm bg-transparent">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
        </b-dropdown>
        <button class=" btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/pdf.png" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
      </div>
    </div>

    <b-row class="mb-4 mx-0">
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="d-flex py-3 h-100 position-relative">
          <div>
            <div class="font-30 font-weight-700 font-black">FYTD</div>
            <div class="d-flex">
              <p class=" font-20 font-weight-700 font-black">PYTD</p>
              <p class=" pl-5 font-20 font-weight-700 font-black">2 - PYTD</p>
            </div>
          </div>
          <img class="position-absolute  arrowsRight" src="../assets/arrowsright.png" alt="">
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">CS Sales</h3>
            <p class="font-20 font-weight-700 font-black">45,200</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">$ Sales</h3>
            <p class="font-20 font-weight-700 font-black">$1,225,300</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">Customers</h3>
            <p class="font-20 font-weight-700 font-black">10,403</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-4 mx-0">
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="d-flex py-3 h-100 position-relative">
          <div>
            <div class="font-30 font-weight-700 font-black">QTD</div>
            <div class="d-flex">
              <p class=" font-20 font-weight-700 font-black">PYTD</p>
              <p class=" pl-5 font-20 font-weight-700 font-black">2 - PYTD</p>
            </div>
          </div>
          <img class="position-absolute  arrowsRight" src="../assets/arrowsright.png" alt="">
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">CS Sales</h3>
            <p class="font-20 font-weight-700 font-black">45,200</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">$ Sales</h3>
            <p class="font-20 font-weight-700 font-black">$1,225,300</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">Customers</h3>
            <p class="font-20 font-weight-700 font-black">10,403</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-4 mx-0">
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="d-flex py-3 h-100 position-relative">
          <div>
            <div class="font-30 font-weight-700 font-black">MTD</div>
            <div class="d-flex">
              <p class=" font-20 font-weight-700 font-black">PYTD</p>
              <p class=" pl-5 font-20 font-weight-700 font-black">2 - PYTD</p>
            </div>
          </div>
          <img class="position-absolute  arrowsRight" src="../assets/arrowsright.png" alt="">
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">CS Sales</h3>
            <p class="font-20 font-weight-700 font-black">45,200</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">$ Sales</h3>
            <p class="font-20 font-weight-700 font-black">$1,225,300</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm = "6" xs = "12">
        <div class="bg-white shadow rounded-lg px-2 py-3 text-center h-100">
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-25 font-weight-700 font-black">Customers</h3>
            <p class="font-20 font-weight-700 font-black">10,403</p>
          </div>
          <div class="row pt-2">
            <div class="col-6 ">
              <div class="d-flex justify-content-between align-items-center bg-light-green p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">12,82%</p>
                </div>
                <img src="../assets/greenArrowUp.png" class = "greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class = "Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
export default {
  name: 'YtdPurchase',
  components: {
    CHeading
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Operator Name',
        value: 'operatorName',
      },
      { text: 'Operator ID', value: 'operatorID' },
      { text: 'GPO', value: 'GPO' },
      { text: 'Chain / National Account', value: 'chainNationalAccount' },
      { text: 'Market Segment', value: 'marketSegment' },
      { text: '2022 TD Cases', value: 'TDCases2022' },
      { text: '2021 TD Cases', value: 'TDCases2021' },
      { text: '$ YTD', value: 'YTD' },
      { text: '$ PYTD', value: 'PYTD' },
    ],
    desserts: [
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
<style scoped>
.arrowsRight {
  right: 15px;
}
.Arrowimg{
  background-color: white;
  border-radius: 50%;
  padding: 6px 9px;
}
</style>