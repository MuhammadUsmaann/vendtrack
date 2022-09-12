<template>
  <div class="report-generator rounded bg-white px-3 py-4 ">
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
    <p class="font-14 font-weight-500">All Values are "To-Date" mm/dd</p>

    <div class="mt-5">
      <div v-for="item in items" v-bind:key="item.id">

        <b-row class="  mx-0 bg-white borderRadius-13">
          <b-col class="p-1" lg="4" sm="12" xs="12">
            <div class="bg-white  px-3  text-center h-100">
              <div class="row  m-0">
                <div class="col-8 py-0 pl-1 text-left">
                  <h3 class="font-22 font-weight-700 font-black">{{ item.col1.name }}</h3>
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
                      <p class="font-28 font-weight-700 font-green">{{ item.col1.profit }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 ">
                      <p class="font-14 font-weight-700 font-light">{{ item.col1.profityear }}</p>
                      <p class="font-14 font-weight-700 font-green">{{ item.col1.profitperc }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-6 py-1 pl-1 pr-0">
                  <div class="bg-light-red rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/redArrowDown.png" class="Arrowimgred" alt="">
                      <p class="font-28 font-weight-700 font-red">{{ item.col1.profit }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 ">
                      <p class="font-14 font-weight-700 font-light">{{ item.col1.profityear }}</p>
                      <p class="font-14 font-weight-700 font-red">{{ item.col1.profitperc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col class="p-1" lg="4" sm="12" xs="12">
            <div class="bg-white  px-3  text-center h-100">
              <div class="row  m-0">
                <div class="col-8 py-0 pl-1 text-left">
                  <h3 class="font-22 font-weight-700 font-black">{{ item.col2.name }}</h3>
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
                      <p class="font-28 font-weight-700 font-green">{{ item.col2.profit }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 ">
                      <p class="font-14 font-weight-700 font-light">{{ item.col2.profityear }}</p>
                      <p class="font-14 font-weight-700 font-green">{{ item.col2.profitperc }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-6 py-1 pl-1 pr-0">
                  <div class="bg-light-red rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/redArrowDown.png" class="Arrowimgred" alt="">
                      <p class="font-28 font-weight-700 font-red">{{ item.col2.profit }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 ">
                      <p class="font-14 font-weight-700 font-light">{{ item.col2.profityear }}</p>
                      <p class="font-14 font-weight-700 font-red">{{ item.col2.profitperc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col class="p-1" lg="4" sm="12" xs="12">
            <div class="bg-white  px-3  text-center h-100">
              <div class="row  m-0">
                <div class="col-8 py-0 pl-1 text-left">
                  <h3 class="font-22 font-weight-700 font-black">{{ item.col2.name }}</h3>
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
                      <p class="font-28 font-weight-700 font-green">{{ item.col2.profit }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 ">
                      <p class="font-14 font-weight-700 font-light">{{ item.col2.profityear }}</p>
                      <p class="font-14 font-weight-700 font-green">{{ item.col2.profitperc }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-6 py-1 pl-1 pr-0">
                  <div class="bg-light-red rounded-lg">
                    <div class="d-flex justify-content-between align-items-center pt-2 px-2 ">
                      <img src="../assets/redArrowDown.png" class="Arrowimgred" alt="">
                      <p class="font-28 font-weight-700 font-red">{{ item.col2.profit }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center p-2 ">
                      <p class="font-14 font-weight-700 font-light">{{ item.col2.profityear }}</p>
                      <p class="font-14 font-weight-700 font-red">{{ item.col2.profitperc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>



    <!-- <b-row class="mb-4 mx-0">
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-4 mx-0">
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mb-4 mx-0">
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="p-1" lg="3" sm="6" xs="12">
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
                <img src="../assets/greenArrowUp.png" class="greenArrowimg" alt="">
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex justify-content-between align-items-center bg-light-red p-2 rounded">
                <div>
                  <p class="font-14 font-weight-700 font-black">40,200</p>
                  <p class="font-14 font-weight-700 font-black">-12,82%</p>
                </div>
                <img src="../assets/redArrowDown.png" class="Arrowimg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row> -->

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
        col1: { name: '2022 CS Sales', rate: '45,200', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
        col2: { name: '2022 $ Sales', rate: '$1,225,300', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
        col3: { name: '2022 Customers', rate: '45,200', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
      },
      {
        col1: { name: 'Q3 CS Sales', rate: '45,200', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
        col2: { name: 'Q3 $ Sales', rate: '$1,225,300', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
        col3: { name: 'Q3 Customers', rate: '45,200', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
      },
      {
        col1: { name: 'SEP 2022 CS Sale', rate: '45,200', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
        col2: { name: 'SEP 2022  $ Sales', rate: '$1,225,300', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
        col3: { name: 'SEP 2022  Customers', rate: '45,200', profit: '40,200', profitperc: '12,82%', profityear: '40,200', loss: '50,100', lossyear: '2020', lossperc: '-10,29' },
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