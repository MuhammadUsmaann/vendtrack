<template>
  <div class="clienttrack rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-start mb-3">
      <div class="col-md-auto px-0">
        <CHeading content="">
          Repid Reports
        </CHeading>
        <p class="line-height-24 font-20 font-weight-700">Select Repid Reports Type</p>
      </div>
      <div class="col px-0 text-right">
        <span class="font-500 font-14 font-mono mr-1  w-md-100 d-inline-block mb-md-0 mb-2">Last Update:
          02/18/2022</span>
      </div>
    </div>


    <div class=" pt-5 repid-reports-responsive">
      <div class="mx-lg-3 rapid-sub-div">
        <router-link to="/rapid-reports">
          <div class="blocks position-relative">

            <img src="../assets/operator.svg" alt="" />

            <p class="font-30 font-weight-700 pt-4 font-black linkstyle repidlink">Chain</p>
          </div>
        </router-link>
      </div>
      <div class="mx-lg-3 ">
        <router-link to="/rapid-reports">
          <div class="blocks position-relative">

            <img src="../assets/chain.svg" alt="" />

            <p class="font-30 font-weight-700 pt-4 font-black linkstyle repidlink">Chain/National Account</p>
          </div>
        </router-link>
      </div>
      <div class="mx-lg-3 rapid-sub-div">
        <router-link to="/rapid-reports">
          <div class="blocks position-relative">

            <img src="../assets/gpo.svg" alt="" />

            <p class="font-30 font-weight-700 pt-4 font-black linkstyle repidlink">GPO</p>
          </div>
        </router-link>
      </div>

    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';

export default {
  name: 'RepidReportSelect',
  components: {
    CHeading
  },

}
</script>
<style scoped>
.repidlink {
  position: absolute;
  bottom: 15px;
}

.blocks {

  background: #FFFFFF;
  border: 1px solid #E6E3E3;
  box-shadow: 0px 16px 50px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 370px;
  height: 350px;
  padding: 30px;
  display: flex;
  justify-content: center;
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

a:hover {
  text-decoration: none !important;
}

.repid-reports-responsive {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1430px) {
  .repid-reports-responsive {
    flex-direction: column !important;
  }
  .repid-reports-responsive .rapid-sub-div {
    margin: 10px 0 !important;
  }
}
</style>
