<template>
  <div class="">
    <div class="clientvtview rounded bg-white px-3 py-4">
      <div class="row mx-0 align-item-center mb-3">
        <div class="col-sm col-12 px-0">
          <CHeading content="">
            MyVT <sup class="font-14 font-orange font-weight-400 certical-align-revert">TM</sup> Admin
          </CHeading>
        </div>
        <div class="col-sm col-12 px-0 text-center">
          <router-link to="/my-VT-admin">
            <button class="btn text-black font-18 font-weight-500">Access</button>
          </router-link>
          <router-link to="/client-VT">
            <button class="font-18 btn-light-orange btn font-weight-700 ml-2">Client VT</button>
          </router-link>
        </div>
        <div class="col px-0 text-right">
        </div>
      </div>
      <div class="client-information-form-hh">
        <b-form>
          <div class="sub-heading-hhh font-weight-700 font-20 font-black">
            <img src="../assets/person.svg" alt="" height="17px" class="mt-n1 mr-1">
            Client Information
          </div>
          <b-row class="mx-n1 mt-3 inner-font-black inner-font-14 pb-5">
            <v-col cols="12" md="3" class="p-1">
              <b-form-group label="First Name" label-for="FirstName" class="mb-0 input-label">
                <b-form-input id="FirstName"></b-form-input>
              </b-form-group>
            </v-col>
            <v-col cols="12" md="3" class="p-1">
              <b-form-group label="Last Name" label-for="LastName" class="mb-0 input-label">
                <b-form-input id="LastName"></b-form-input>
              </b-form-group>
            </v-col>
            <v-col cols="12" md="3" class="p-1">
              <b-form-group label="Email" label-for="Email" class="mb-0 input-label">
                <b-form-input id="Email" type="email"></b-form-input>
              </b-form-group>
            </v-col>

            <v-col cols="12" md="3" class="p-1">
              <p class="mb-5px input-label">Access Level</p>
              <multiselect :searchable="false" placeholder="" v-model="accesslevelselected" label="name" track-by="code"
                :options="accesslevel"></multiselect>
            </v-col>
          </b-row>
          <div class="sub-heading-hhh font-weight-700 font-20 font-black">
            <img src="../assets/AddFeatures.svg" alt="" height="17px" class="mt-n1 mr-1">
            Add Features
          </div>
          <b-row class="mx-n1 mt-3 inner-font-black inner-font-14 pb-5 ">
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Report Generator
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Dashboard
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Operator Target
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Athena Review
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Saved Reports
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Rapid Reports
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Rebate Calcuator
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                WOW
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                GAP Analysis
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                My VT
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Warehouse Withdrawal
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Trade Spend
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Broker Scorecard
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Client Tracking
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Hermes
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                CPRS
              </b-form-checkbox>
            </v-col>
            <v-col cols="12" md="3" class="p-1 mb-2">
              <b-form-checkbox name="check-button" class="font-weight-500" switch>
                Reporting Status
              </b-form-checkbox>
            </v-col>
          </b-row>
        </b-form>
      </div>
      <div class="text-center pt-3 mt-2">
        <button class="btn btn-light mr-3">
          <i class="fa-solid fa-times"></i> Cancel
        </button>
        <button class="btn btn-orange">
          <i class="fa-solid fa-check"></i> Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CHeading from '@/components/heading.vue';
import Multiselect from 'vue-multiselect'

export default {
  name: 'ClientVT',
  components: {
    CHeading, Multiselect
  },

  data: () => ({
    accesslevelselected: null,
    accesslevel: [
      { name: 'All Sales', code: 'cs' },
      { name: 'All Sales', code: 'ds' },
      { name: 'All Sales', code: 'os' }
    ],

  }),
}
</script>
<style scoped>
.clientvtview {
  height: 100vh !important;
  overflow-y: auto;
}
</style>