<template>
  <div class="clienttrack rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-start mb-3">
      <div class="col-md-auto px-0">
        <CHeading content="">
          Client Track <sup class="font-14 font-weight-500 certical-align-revert">TM</sup>
        </CHeading>
        <p class="line-height-24 font-20 font-weight-700">Select Business Review Type</p>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1  w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
      </div>
    </div>

   
    <div class="d-flex flex-lg-row flex-column justify-content-center align-items-center pt-5">
      <router-link to="/client-track">
        <div class="blocks ">
          <div class="pb-5 bg-image-orange">
            <div class="bg-div pt-5">
              <img src="../assets/clienttrackcustomer.svg" alt="" />
            </div>
          </div>
          <p class="font-30 font-weight-700 pt-4 font-black linkstyle">Customer</p>
        </div>
      </router-link>
     
      <router-link to="/client-track">
        <div class="blocks ">
          <div class="pb-5 bg-image-orange">
            <div class="bg-div pt-5">
              <img src="../assets/clienttrackdistributer.svg" alt="" />
            </div>
          </div>

          <p class="font-30 pt-4 font-weight-700 font-black linkstyle ">Distributor</p>
        </div>
      </router-link>


    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';

export default {
  name: 'ClientTrackSelect',
  components: {
    CHeading
  },

}
</script>
<style scoped>
.blocks {
  background: #FFFFFF;
  border: 1px solid #E6E3E3;
  box-shadow: 0px 16px 50px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 350px;
  height: 343px;
  margin: 35px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.clienttrack {
  height: 100vh;
  overflow-y: auto;
}

.bg-image-orange {
  background-image: url('../assets/backgorundcolororange.svg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}

.bg-div {
  width: 178.8px;
  height: 169.28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.line-height-30 {
  line-height: 30px;
}

.line-height-24 {
  line-height: 24px;
}

.font-weight-500 {
  font-weight: 500;
}
.linkstyle{
  text-decoration: none !important;
}
</style>
