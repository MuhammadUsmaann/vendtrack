<template>
  <div class="report-generator rounded bg-white px-3 py-4 ">
    <div class="row mx-0 ">
      <div class="col-md-auto col-6 px-0 w-max-content">
        <CHeading content="Dashboard" />
        <p class="font-14 font-weight-500">All Values are "To-Date" mm/dd</p>
      </div>
      <div class="col-md col-6 px-0 text-right">
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
        <button class="btn border border-light-gray ml-2 bg-white font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/pdf.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in PDF</div>
        </button>
      </div>
    </div>

    <div class="mt-5">
      <div v-for="item in items" v-bind:key="item.id">

        <b-row class="  mx-0 bg-white borderRadius-13">
          <b-col class="p-1" lg="6" sm="12" xs="12">
            <div class="bg-white  px-3  text-center h-100">
              <div class="row  m-0">
                <div class="col-8 py-0 pl-1 text-left">
                  <h3 class="dashboard-subheading">{{ item.col1.name }}</h3>
                </div>
                <div class="col-4 text-right px-0 py-0">
                  <p class="font-20 font-weight-700 font-black">{{ item.col1.rate }}</p>
                </div>
              </div>
              <div class="row pt-0 pl-0 m-0">
                <div class="col-6 p-1">
                  <div class="bg-light-green rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/greenArrowUp.png" class="Arrowimggreen" alt="">
                      <p class="font-28 font-weight-700 font-green">{{ item.col1.profitperc }}</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center p-2 ">
                    <p class="font-20 font-weight-700 font-black">{{ item.col1.profityear }}</p>
                    <p class="font-20 font-weight-700 font-black">{{ item.col1.profit }}</p>
                  </div>
                </div>
                <div class="col-6 py-1 pl-1 pr-0">
                  <div class="bg-light-red rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/redArrowDown.png" class="Arrowimgred" alt="">
                      <p class="font-28 font-weight-700 font-red">{{ item.col1.lossperc }}</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center p-2 ">
                    <p class="font-20 font-weight-700 font-black">{{ item.col1.lossyear }}</p>
                    <p class="font-20 font-weight-700 font-black">{{ item.col1.loss }}</p>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col class="p-1" lg="6" sm="12" xs="12">
            <div class="bg-white  px-3  text-center h-100">
              <div class="row  m-0">
                <div class="col-8 py-0 pl-1 text-left">
                  <h3 class="dashboard-subheading">{{ item.col2.name }}</h3>
                </div>
                <div class="col-4 text-right px-0 py-0">
                  <p class="font-20 font-weight-700 font-black">{{ item.col2.rate }}</p>
                </div>
              </div>
              <div class="row pt-0 pl-0 m-0">
                <div class="col-6 p-1">
                  <div class="bg-light-green rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/greenArrowUp.png" class="Arrowimggreen" alt="">
                      <p class="font-28 font-weight-700 font-green">{{ item.col2.profitperc }}</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center p-2 ">
                    <p class="font-20 font-weight-700 font-black">{{ item.col2.profityear }}</p>
                    <p class="font-20 font-weight-700 font-black">{{ item.col2.profit }}</p>
                  </div>
                </div>
                <div class="col-6 py-1 pl-1 pr-0">
                  <div class="bg-light-red rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/redArrowDown.png" class="Arrowimgred" alt="">
                      <p class="font-28 font-weight-700 font-red">{{ item.col2.lossperc }}</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center p-2 ">
                    <p class="font-20 font-weight-700 font-black">{{ item.col2.lossyear }}</p>
                    <p class="font-20 font-weight-700 font-black">{{ item.col2.loss }}</p>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <!-- <b-col class="p-1" lg="4" sm="12" xs="12">
            <div class="bg-white  px-3  text-center h-100">
              <div class="row  m-0">
                <div class="col-8 py-0 pl-1 text-left">
                  <h3 class="dashboard-subheading">{{ item.col3.name }}</h3>
                </div>
                <div class="col-4 text-right px-0 py-0">
                  <p class="font-20 font-weight-700 font-black">{{ item.col3.rate }}</p>
                </div>
              </div>
              <div class="row pt-0 pl-0 m-0">
                <div class="col-6 p-1">
                  <div class="bg-light-green rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/greenArrowUp.png" class="Arrowimggreen" alt="">
                      <p class="font-28 font-weight-700 font-green">{{ item.col3.profitperc }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 ">
                      <p class="font-14 font-weight-700 font-light">{{ item.col3.profityear }}</p>
                      <p class="font-14 font-weight-700 font-green">{{ item.col3.profit }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-6 py-1 pl-1 pr-0">
                  <div class="bg-light-red rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/redArrowDown.png" class="Arrowimgred" alt="">
                      <p class="font-28 font-weight-700 font-red">{{ item.col3.lossperc }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 ">
                      <p class="font-14 font-weight-700 font-light">{{ item.col3.lossyear }}</p>
                      <p class="font-14 font-weight-700 font-red">{{ item.col3.loss }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col> -->
        </b-row>
      </div>
    </div>



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
    items: [
      {
        col1: { name: 'FYTD 22 CS', rate: '1,112,552', profit: '949,818', profitperc: '17%', profityear: 'FYTD 21 CS', loss: '1,128,041', lossyear: 'FYTD 19 CS', lossperc: '-1%' },
        col2: { name: 'FYTD 22 $', rate: '$31,452,866', profit: '$26,806,521', profitperc: '17%', profityear: 'FYTD 21 $', loss: '$33,998,292', lossyear: 'FYTD 19 $', lossperc: '-7%' },
      },
      {
        col1: { name: 'QTD 22 CS', rate: '357,231', profit: '339,918', profitperc: '5%', profityear: 'QTD 21 CS', loss: '378,573', lossyear: 'QTD 19 CS', lossperc: '-6%' },
        col2: { name: 'QTD 22 $', rate: '$10,111,526', profit: '$9,553,523', profitperc: '6%', profityear: 'QTD 21 $', loss: '$10,925,744', lossyear: 'QTD 19 $', lossperc: '-7%' },
      },
      {
        col1: { name: 'MTD 22 CS', rate: '123,793', profit: '116,146', profitperc: '7%', profityear: 'MTD 21 CS', loss: '127,717', lossyear: 'MTD 21 CS', lossperc: '-3%' },
        col2: { name: 'MTD 22  $', rate: '$3,507,211', profit: '$3,198,587', profitperc: '10%', profityear: 'MTD 19 $', loss: '$3,637,090', lossyear: 'MTD 19 $', lossperc: '-4%' },
      },
    ],



  }),

}
</script>
<style scoped >
.arrowsRight {
  right: 15px;
}

.Arrowimgred {
  background-color: white;
  border-radius: 50%;
  padding: 4px 7px;
  border: 2px solid #E95145;

}

.Arrowimggreen {
  background-color: white;
  border-radius: 50%;
  padding: 4px 7px;
  border: 2px solid #5BB878;

}

.borderRadius-13 {
  border-radius: 13px !important;
  margin-bottom: 36px !important;
  padding-top: 20px;
  padding-bottom: 18px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.12);
  border-radius: 13px;

}

.rounded-lg {
  border-radius: 8px !important;
}
</style>