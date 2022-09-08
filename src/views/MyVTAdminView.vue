<template>
  <div class="report-generator bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col-md col-12 px-0">
        <CHeading content="">
          MyVT <sup class="font-14 font-orange font-weight-400 certical-align-revert">TM</sup> Admin
        </CHeading> 
      </div>
      <div class="col-sm col-auto px-0 text-center">
        <router-link to="/my-VT-admin" >
          <button class=" btn-light-orange btn font-weight-700">Access</button>
        </router-link>
        <router-link to="/client-VT" >
          <button class="btn text-black font-18 font-weight-500 ml-2">Client VT</button>
        </router-link>
      </div>
      <div class="col-sm col-auto px-0 text-right">
        <button class="btn border border-light-gray ml-2 font-14 py-2 font-weight-500 font-black shadow-sm"><img
            src="../assets/excel.png" alt="">
          <div class="d-md-inline-block d-none"> Export in Excel</div>
        </button>
        <button class="btn btn-orange ml-2" @click="$bvModal.show('addUser')"><i class="fa-solid fa-plus"></i> Add
          <div class="d-md-inline-block d-none"> User</div>
        </button>
      </div>
    </div>
    <v-data-table :headers="headers" :items="reports" sort-by="calories" class="elevation-1">
      <template v-slot:[`item.action`]="{ item }">
        <div small class="mr-2 text-center" @click="editItem(item)">
          <img src="../assets/UserInterface.png" alt="">
        </div>
      </template>
    </v-data-table>

    <b-modal id="addUser" hide-footer>
      <template #modal-title>
        <span class="font-20 font-weight-700"> Add New User</span>
      </template>
      <div class="d-block">
        <b-form v-if="show">
          <b-row class="mx-0  inner-font-black inner-font-14 pb-5">
            <v-col cols="12" md="6" class="p-1">
              <v-text-field label="First Name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <v-text-field label="Last Name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <v-select :items="active" label="Active" outlined></v-select>
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <v-select :items="userType" label="User Type" outlined></v-select>
            </v-col>

            <v-col cols="12" md="6" class="p-1">
              <b-dropdown id="dropdown-1" text="Access Level" block variant="outline"
                class="text-left custom-dropdown border py-5 border-light-gray rounded">
                <b-dropdown-item>All Sales</b-dropdown-item>
                <b-dropdown id="dropdown-3" text="Region" variant="outline" dropright class="">
                  <b-dropdown-item>First Action 2</b-dropdown-item>
                  <b-dropdown-item>Second Action 2</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-2" text="Territory" variant="outline" dropright class="">
                  <b-dropdown-item>
                    <b-form-checkbox value="me">Barcelona</b-form-checkbox>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <b-form-checkbox value="me">Madrid</b-form-checkbox>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <b-form-checkbox value="me">Alicante</b-form-checkbox>
                  </b-dropdown-item>
                </b-dropdown>
              </b-dropdown>
            </v-col>
          </b-row>
          <div class="text-center">
            <b-button type="submit" @click="$bvModal.hide('addUser')" variant="orange" class="text-white px-3 mt-3"><i
                class="fas pr-1 fa-check"></i> Save</b-button>

          </div>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
export default {
  name: 'MyVTAdmin',
  components: {
    CHeading
  },
  data: () => ({
    headers: [
      { text: 'Username', value: 'username' },
      { text: 'Email Address', value: 'emailAddress' },
      { text: 'User Type', value: 'userType' },
      { text: 'Access Level', value: 'accessLevel' },
      { text: 'Status', value: 'status' },
      { text: 'CYTD Login Count', value: 'CYTDLoginCount', align: 'right' },
      { text: 'Current Month Login Count', value: 'currentMonthLoginCount', align: 'right' },
      { text: 'Action', value: 'action', width: '10%', align: 'center' },
    ],
    reports: [
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      }
    ],
    active: ['Active', 'Bar', 'Fizz', 'Buzz'],
    userType: ['Admin', 'Broker/Sales Ref', 'MFG',],
    show: true,
    isDropdown2Visible: false
  }),
  mounted: function () {
    this.$root.$on('bv::dropdown::show', bvEvent => {
      if (bvEvent.componentId === 'dropdown-2') {
        this.isDropdown2Visible = true;
      }
    })
    this.$root.$on('bv::dropdown::hide', bvEvent => {
      if (bvEvent.componentId === 'dropdown-2') {
        this.isDropdown2Visible = false;
      }
      if (this.isDropdown2Visible) {
        bvEvent.preventDefault()
      }
    })
  }
}
</script>
