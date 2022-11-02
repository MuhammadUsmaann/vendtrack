<template>
  <div class="myvtadmin-access rounded bg-white px-3 py-4">
    <div class="row mx-0 align-item-center mb-3">
      <div class="col-md col-12 px-0">
        <CHeading content="">
          MyVT <sup class="font-14 font-orange font-weight-400 certical-align-revert">TM</sup> Admin
        </CHeading>
      </div>
      <div class="col-sm col-auto px-0 text-center">
        <router-link to="/my-VT-admin">
          <button class="font-18 btn-light-orange btn font-weight-700">Access</button>
        </router-link>
        <router-link to="/client-VT">
          <button class="btn text-black font-18 font-weight-500 ml-2">Client VT</button>
        </router-link>
      </div>
      <div class="col-sm col-auto px-0 text-right">
        <button class=" btn border border-light-gray ml-2 font-14 font-weight-500 font-black shadow-sm"><img
            src="../assets/excel.svg" alt="" class="pr-1">
          <div class="d-md-inline-block d-none"> Export in Excel</div>
        </button>
        <button class="btn btn-orange ml-2 d-inline-flex justify-content-center align-items-center"
          @click="$bvModal.show('addUser')"><img src="../assets/plus.svg" alt="" class="pr-1"> <span class = "pr-1">Add </span>
          <div class="d-md-inline-block d-none"> User</div>
        </button>
      </div>
    </div>
    <div class="overflow-auto">


      <b-table id="my-table" hover :fields="fields" :items="items" :per-page="perPage" :current-page="currentPage">

        <template v-for="field in editableField" v-slot:[`cell(${field.key})`]="{ item ,value}">

          <span :key="field.key" v-if="!item.editing">
            {{ value }}
          </span>

          <b-input :key="field.index" v-else v-model="item.temp[field.key]" @keydown.enter.exact="doSave(item)" />

        </template>

        
        


        <template #cell(action)>
          <div class="d-flex justify-content-center align-items-center">
            <div small class="mr-2 text-center cursor-pointer" @click="$bvModal.show('editUser')">
              <img src="../assets/UserInterface.svg" alt="">
            </div>
          </div>
        </template>
        <!-- <template #cell(action)={item}>
          <div class="d-flex justify-content-center align-items-center">
            <div small class="mr-2 text-center cursor-pointer" v-if="!item.editing" @click="doEdit(item)">
              <img src="../assets/UserInterface.svg" alt="">
            </div>
            <span class="p-1 cursor-pointer" v-if="item.editing" @click="doCancel(item)" variant="danger">
              <img src="../assets/x-circle.svg" alt="">
            </span>
            <span class="p-1 cursor-pointer" v-if="item.editing" @click="doSave(item)" variant="success">
              <img src="../assets/check-circle.svg" alt="">
            </span>
          </div>
        </template> -->


      </b-table>



    </div>
    <div class=" paginationclass pt-4">
      <div class="font-mono font-14 mb-3">
        {{ rows }} Total Listings
      </div>
      <div>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
        </b-pagination>
      </div>
    </div>

    <b-modal id="addUser" hide-footer>
      <template #modal-title>
        <span class="font-20 font-weight-700"> Add New User</span>
      </template>
      <div class="d-block">
        <b-form v-if="show">
          <b-row class="mx-0  inner-font-black inner-font-14 pb-5">
            
            <v-col cols="12" md="6" class="p-1">
              <b-form-group label="First Name" label-for="FirstName" class="mb-0 input-label">
                <b-form-input id="FirstName" type="text"></b-form-input>
              </b-form-group>
              <!-- <v-text-field label="First Name" outlined></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <b-form-group label="Last Name" label-for="LastName" class="mb-0 input-label">
                <b-form-input id="LastName" type="text"></b-form-input>
              </b-form-group>
              <!-- <v-text-field label="Last Name" outlined></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <b-form-group label="Email" label-for="Email" class="mb-0 input-label">
                <b-form-input id="Email" type="email"></b-form-input>
              </b-form-group>
              <!-- <v-text-field label="First Name" outlined></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">

              <b-form-group label="Password" label-for="Password" class="mb-0 input-label">
                <b-form-input id="Password" type="password"></b-form-input>
              </b-form-group>
              <!-- <v-text-field label="Last Name" outlined></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <p class="input-label pb-1">Active</p>
              <b-form-select :options="active"></b-form-select>
              <!-- <v-select :items="active" label="Active" outlined></v-select> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <p class="input-label pb-1">User Type</p>
              <b-form-select :options="userType"></b-form-select>
              <!-- <v-select :items="userType" label="User Type"  outlined></v-select> -->
            </v-col>

            <v-col cols="12" md="6" class="p-1">
              <p class="input-label pb-1">Access Level</p>
              <b-dropdown id="dropdown-1" text="Access Level" block variant="outline"
                class="text-left custom-dropdown dropbtn rounded">
                <b-dropdown-item>All Sales</b-dropdown-item>

                <b-dropdown id="dropdown-2" text="Region " variant="outline" dropright class="">
                  <div class="px-2">
                    <b-form-checkbox value="me">Barcelona</b-form-checkbox>
                    <b-form-checkbox value="me">Madrid</b-form-checkbox>
                    <b-form-checkbox value="me">Alicante</b-form-checkbox>
                  </div>

                </b-dropdown>
                <b-dropdown id="dropdown-2" text="Territory" variant="outline" dropright class="">
                  <div class="px-2">
                    <b-form-checkbox value="me">Barcelona</b-form-checkbox>
                    <b-form-checkbox value="me">Madrid</b-form-checkbox>
                    <b-form-checkbox value="me">Alicante</b-form-checkbox>
                  </div>

                </b-dropdown>
              </b-dropdown>
            </v-col>
          </b-row>
          <div class="text-center">
            <b-button type="submit" @click="$bvModal.hide('addUser')" variant="orange"
              class="  d-inline-flex justify-content-center align-items-center">
              <img src="../assets/check.svg" alt="" class="mr-2" /> Save
            </b-button>
          </div>
        </b-form>
      </div>
    </b-modal>




    <b-modal id="editUser" hide-footer>
      <template #modal-title>
        <span class="font-20 font-weight-700"> Edit User</span>
      </template>
      <div class="d-block">
        <b-form v-if="show">
          <b-row class="mx-0  inner-font-black inner-font-14 pb-5">
            
            <v-col cols="12" md="6" class="p-1">
              <b-form-group label="UserName" label-for="UserName" class="mb-0 input-label">
                <b-form-input id="UserName" type="text"></b-form-input>
              </b-form-group>
              <!-- <v-text-field label="First Name" outlined></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <b-form-group label="Email" label-for="Email" class="mb-0 input-label">
                <b-form-input id="Email" type="email"></b-form-input>
              </b-form-group>
              <!-- <v-text-field label="First Name" outlined></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">

              <b-form-group label="Password" label-for="Password" class="mb-0 input-label">
                <b-form-input id="Password" type="password"></b-form-input>
              </b-form-group>
              <!-- <v-text-field label="Last Name" outlined></v-text-field> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <p class="input-label pb-1">Active</p>
              <b-form-select :options="active"></b-form-select>
              <!-- <v-select :items="active" label="Active" outlined></v-select> -->
            </v-col>
            <v-col cols="12" md="6" class="p-1">
              <p class="input-label pb-1">User Type</p>
              <b-form-select :options="userType"></b-form-select>
              <!-- <v-select :items="userType" label="User Type"  outlined></v-select> -->
            </v-col>

            <v-col cols="12" md="6" class="p-1">
              <p class="input-label pb-1">Access Level</p>
              <b-dropdown id="dropdown-1" text="Access Level" block variant="outline"
                class="text-left custom-dropdown dropbtn rounded">
                <b-dropdown-item>All Sales</b-dropdown-item>

                <b-dropdown id="dropdown-2" text="Region " variant="outline" dropright class="">
                  <div class="px-2">
                    <b-form-checkbox value="me">Barcelona</b-form-checkbox>
                    <b-form-checkbox value="me">Madrid</b-form-checkbox>
                    <b-form-checkbox value="me">Alicante</b-form-checkbox>
                  </div>

                </b-dropdown>
                <b-dropdown id="dropdown-2" text="Territory" variant="outline" dropright class="">
                  <div class="px-2">
                    <b-form-checkbox value="me">Barcelona</b-form-checkbox>
                    <b-form-checkbox value="me">Madrid</b-form-checkbox>
                    <b-form-checkbox value="me">Alicante</b-form-checkbox>
                  </div>

                </b-dropdown>
              </b-dropdown>
            </v-col>
          </b-row>
          <div class="text-center">
            <b-button type="submit" @click="$bvModal.hide('editUser')" variant="orange"
              class="  d-inline-flex justify-content-center align-items-center">
              <img src="../assets/check.svg" alt="" class="mr-2" /> Save
            </b-button>
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
  computed: {
    rows() {
      return this.items.length
    },
    editableField() {
      return this.fields.filter(field => field.editable)
    }
  },
  data: () => ({
    fields: [
      { label: 'Username', key: 'username', editable: true },
      { label: 'Email Address', key: 'emailAddress', editable: true },
      { label: 'Password', key: 'password', editable: true },
      { label: 'User Type', key: 'userType', editable: true },
      { label: 'Access Level', key: 'accessLevel', editable: false },
      { label: 'Status', key: 'status', editable: false },
      { label: 'CYTD Login Count', key: 'CYTDLoginCount', class: 'rightAligned', editable: false },
      { label: 'Current Month Login Count', key: 'currentMonthLoginCount', class: 'rightAligned', editable: false },
      { label: 'Action', key: 'action', align: 'center', width: '20%' },
    ],
    items: [
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },

      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      },
      {
        username: 'Devon Lane',
        emailAddress: 'dolores.chambers@example.com',
        password: '@2323dsd@',
        userType: 'Admin',
        accessLevel: 'Admin',
        status: 'Active',
        CYTDLoginCount: '5,138',
        currentMonthLoginCount: '8,116',
      }

    ],
    currentPage: 1,
    perPage: 17,
    active: ['Active', 'Bar', 'Fizz', 'Buzz'],
    userType: ['Admin', 'Broker/Sales Ref', 'MFG',],
    show: true,
    isDropdown2Visible: false
  }),
  methods: {
    doEdit(item) {
      this.$set(item, 'temp', JSON.parse(JSON.stringify(item)))
      this.$set(item, 'editing', true)
    },
    doSave(item) {
      this.$set(item, 'editing', false)
      for (let key in item.temp) {
        if (item[key] != item.temp[key]) {
          item[key] = item.temp[key]
        }
      }
    },
    doCancel(item) {
      this.$set(item, 'editing', false)
      this.$delete(item, 'temp')
    }
  },
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
<style scoped>
.dropdown button[aria-expanded="true"] {
  background-color: #FF7E1D !important;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-pointer:hover {
  color: #FF7E1D !important;
}

.myvtadmin-access {
  /* height: 88vh !important;
  overflow-y: auto; */
}

.dropbtn {
  height: 40px !important;
  border: 1px solid #ced4da;
}
</style>