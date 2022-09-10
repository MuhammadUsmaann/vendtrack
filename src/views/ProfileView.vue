<template>
  <div class="">
    <div class="myvt bg-white px-3 py-4">
      <div class="row mx-0 align-item-center">
        <div class="col px-0">
          <CHeading>
            MyVT <sup class="font-14 font-orange font-weight-400 certical-align-revert">TM</sup>
          </CHeading>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 p-2">
          <div class="bg-light-grayish px-3 pt-3 pb-1 rounded h-100">
            <div class="d-flex align-items-center pb-3">
              <ImgPreviewerPicker />
              <div class="heading-title pl-3">
                <CHeading content="Vani Hedge" />
                <div class="font-14 font-weight-500 font-black">vani_hedges@gmail.com</div>
              </div>
            </div>
            <div class="row mx-n2 mt-2 mb-3">
              <div class="col-md-6 px-2 py-1">
                <b-form-group label="First Name" label-for="FirstName" class="mb-0 font-black font-weight-500 font-14">
                  <b-form-input id="FirstName"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6 px-2 py-1">
                <b-form-group label="Last Name" label-for="LastName" class="mb-0 font-black font-weight-500 font-14">
                  <b-form-input id="LastName"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6 px-2 py-1">
                <b-form-group label="Email" label-for="Email" class="mb-0 font-black font-weight-500 font-14">
                  <b-form-input id="Email" type="email"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6 px-2 py-1">
                <b-form-group label="User Type" label-for="UserType" class="mb-0 font-black font-weight-500 font-14">
                  <b-form-input id="UserType"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6 px-2 py-1">
                <b-form-group label="Access Level" label-for="AccessLevel"
                  class="mb-0 font-black font-weight-500 font-14">
                  <b-form-input id="AccessLevel"></b-form-input>
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-2">
          <div class="bg-light-grayish px-3 pt-3 pb-1 rounded h-100">
            <div class="font-20 font-weight-700 font-black mb-1"><img src="../assets/password.svg" alt="" height="17px"
                class="mt-n1 mr-1">Password</div>
            <div class="row mx-n2 mt-2 mb-3">
              <div class="col-md-6 px-2 py-1">
                <b-form-group label="Current Password" label-for="CurrentPassword"
                  class="mb-0 font-black font-weight-500 font-14">
                  <b-form-input id="CurrentPassword" type="password"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-6 px-2 py-1">
                <b-form-group label="New Password" label-for="NewPassword"
                  class="mb-0 font-black font-weight-500 font-14">
                  <b-form-input id="NewPassword" type="password"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6 px-2 py-1">
                <b-form-group label="Confirm New Password" label-for="ConfirmNewPassword"
                  class="mb-0 font-black font-weight-500 font-14">
                  <b-form-input id="ConfirmNewPassword" type="password"></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="font-20 font-weight-700 font-black mb-1"><img src="../assets/key.svg" alt="" height="17px"
                class="mt-n1 mr-1">Login Count</div>
            <div class="row mx-n2 mt-2 mb-3">
              <div class="col-md-6 px-2 py-1">
                <div class="bg-white px-2 py-4 rounded text-center">
                  <div class="d-flex align-items-center justify-content-center">
                    <img src="../assets/calender.png" alt="" height="17px" class=" mr-2">
                    <CHeading content="25,192" class="d-inline-block" />
                  </div>
                  <div class="font-14 pt-1 font-weight-500">CYTD Login Count</div>
                </div>
              </div>
              <div class="col-md-6 px-2 py-1">
                <div class="bg-white px-2 py-4 rounded text-center">
                  <div class="d-flex align-items-center justify-content-center">
                    <img src="../assets/calender.png" alt="" height="17px" class=" mr-2">
                    <CHeading content="3,117" class="d-inline-block" />
                  </div>
                  <div class="font-14 pt-1 font-weight-500">Current Month Login Count</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-2">
          <div class="bg-light-grayish px-3 pt-3 pb-1 rounded h-100">
            <div class="font-20 font-weight-700 font-black mb-1"><img src="../assets/approveFile.png" alt=""
                height="17px" class="mt-n1 mr-1"> My VT Features</div>
            <v-data-table :headers="MyVTFeaturesheaders" hide-default-footer dense :items="MyVTFeatures"
              class="elevation-1">
              <template v-slot:[`item.action`]="{ item }">
                <div small class="mr-3 text-right" @click="editItem(item)">
                  <img src="../assets/download.png" alt="">
                </div>
              </template>
            </v-data-table>
          </div>
        </div>
        <div class="col-md-6 p-2">
          <div class="bg-light-grayish px-3 pt-3 h-100 rounded  pb-5">
            <div class="table-hhh-main">
              <div class="row mx-0">
                <div class="col px-0">
                  <div class="font-20 font-weight-700 font-black mb-1"><img src="../assets/user.png" height="17px"
                      class="mt-n1 mr-1" alt="">Customer Group</div>
                </div>
                <div class="col px-0 text-right">
                  <button class="font-16 btn btn-orange ml-2 mb-2" @click="$bvModal.show('addNewGroup')"><i
                      class="fa-solid fa-plus"></i> Add </button>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <p class="font-14 font-weight-700">My Customer Group</p>
                <p class="font-14 font-weight-700 pr-3">Action</p>
              </div>
              <b-table :fields="CustomerGroupheaders" :items="CustomerGroup" class="elevation-1" 
                dense thead-class="hidden_header">
                <template v-for="field in editableField" v-slot:[`cell(${field.key})`]="{ item ,value}">
                  <span :key="field.key" v-if="!item.editing">
                    {{ value }}
                  </span>
                  <b-input :key="field.index" v-else v-model="item.temp[field.key]"
                    @keydown.enter.exact="doSave(item)" />
                </template>

                <template #cell(action)={item}>

                  <div class="">
                    <div small class="mr-3 cursor-pointer" v-if="!item.editing" @click="doEdit(item)">
                      <i class="fas fa-edit"></i>
                    </div>
                    <span class="p-1 cursor-pointer" v-if="item.editing" @click="doSave(item)" variant="success">
                      <i class="fas fa-save"></i>
                    </span>
                    <span class="p-1 cursor-pointer" v-if="item.editing" @click="doCancel(item)" variant="danger">
                      <i class="fa fa-times " aria-hidden="true"></i>
                    </span>
                  </div>
                </template>
              </b-table>
            </div>

            <div class="table-hhh-main pt-4">
              <div class="d-flex justify-content-between align-items-center">
                <p class="font-14 font-weight-700">My Product Group</p>
                <p class="font-14 font-weight-700 pr-3">Action</p>
              </div>
              <b-table :fields="MyProductGroupheaders" :items="MyProductGroup" class="elevation-1 mt-2" thead-class="hidden_header"
                 dense>
                <template v-for="field in editableFields" v-slot:[`cell(${field.key})`]="{ item ,value}">
                  <span :key="field.key" v-if="!item.editing">
                    {{ value }}
                  </span>
                  <b-input :key="field.index" v-else v-model="item.temp[field.key]"
                    @keydown.enter.exact="doSave(item)" />
                </template>

                <template #cell(action)={item}>

                  <div class="d-flex justify-content-end align-items-center">
                    <div small class="mr-3  cursor-pointer" v-if="!item.editing" @click="doEdit(item)">
                      <i class="fas fa-edit"></i>
                    </div>
                    <span class="p-1 cursor-pointer" v-if="item.editing" @click="doSave(item)" variant="success">
                      <i class="fas fa-save"></i>
                    </span>
                    <span class="p-1 cursor-pointer" v-if="item.editing" @click="doCancel(item)" variant="danger">
                      <i class="fa fa-times " aria-hidden="true"></i>
                    </span>
                  </div>
                </template>
              </b-table>
            </div>
            <div class="select-main-hhh">
              <div class="font-weight-700 font-14 font-black my-3">Customer Group</div>
              <div class="row">
                <div class="col-md-6 ">
                  <v-menu bottom :close-on-content-click="closeOnContentClick">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="border shadow-none bg-white text-left border-light-gray rounded" block
                        v-bind="attrs" v-on="on">
                        <div class="d-flex justify-content-between w-100">
                          <div class="">Select</div>
                          <div><i class="fa fa-angle-down"></i></div>
                        </div>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title>
                          <b-form-checkbox class="d-inline-block"><span class="mt-1 d-inline-block"> {{ item.title }}
                            </span></b-form-checkbox>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pt-3 mt-2">
        <button class="btn btn-outline-secondary mr-3">
          <i class="fa-solid fa-times"></i> Cancel
        </button>
        <button class="btn btn-orange">
          <i class="fa-solid fa-check"></i> Save
        </button>
      </div>
    </div>
    <b-modal id="addNewGroup" hide-footer size="md" centered>
      <template #modal-title>
        <span class="font-20 font-weight-700">Add New Group</span>
      </template>
      <div class="d-block">
        <b-form>
          <b-row class="mx-0  inner-font-black inner-font-14">
            <v-col cols="12" md="12" class="p-1">
              <v-text-field label="Enter group name" outlined></v-text-field>
            </v-col>
          </b-row>
          <div class="text-center pt-2">

            <button type="submit" @click="$bvModal.hide('addNewGroup')"
              class="text-white px-3 mt-3 btn btn-orange">Save</button>

          </div>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import CHeading from '@/components/heading.vue';
import ImgPreviewerPicker from '@/components/ImgPreviewerPicker.vue';
export default {
  name: 'ProfileView',
  components: {
    CHeading,
    ImgPreviewerPicker
  },
  computed: {
    editableFields() {
      return this.MyProductGroupheaders.filter(field => field.editable)
    },
    editableField() {
      return this.CustomerGroupheaders.filter(field => field.editable)
    }
  },
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
  data: () => ({
    MyVTFeaturesheaders: [
      { text: 'Name', value: 'name' },
      { text: 'Action', value: 'action', align: 'right', sortable: false },
    ],
    MyVTFeatures: [
      { name: 'Report Generator' },
      { name: 'Saved Reports' },
      { name: 'Report Generator' },
      { name: 'Report Generator' },
      { name: 'Report Generator' },
      { name: 'Report Generator' },
      { name: 'Saved Reports' },
      { name: 'Report Generator' },
      { name: 'Report Generator' },
      { name: 'Report Generator' },


    ],
    CustomerGroupheaders: [
      { label: 'My Customer Group', key: 'myCustomerGroup', editable: true },
      { label: 'Action', key: 'action', class: 'text-end', sortable: false },
    ],
    CustomerGroup: [
      { myCustomerGroup: 'Medium Customer Name', },
      { myCustomerGroup: 'Second Medium Customer Name', },
      { myCustomerGroup: 'Third Level Customer Name', },
      { myCustomerGroup: 'Third Level Customer Name', },
    ],
    MyProductGroupheaders: [
      { label: 'My Product Group', key: 'myProductGroup', editable: true },
      { label: 'Action', key: 'action', class: 'text-end', sortable: false },
    ],
    MyProductGroup: [
      { myProductGroup: 'Medium Customer Name', },
      { myProductGroup: 'Second Medium Customer Name', },
      { myProductGroup: 'Third Level Customer Name', },
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
    items: [
      { title: 'Select All' },
      { title: 'Medium Customer Group' },
      { title: 'Second Customer Group' },
      { title: 'What Else Customer Group' },
      { title: 'Newest Customer Group' },
      { title: 'Translating Customer Group' },
    ],
    closeOnContentClick: false,
  }),
}
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.cursor-pointer:hover {
  color: #FF7E1D !important;
}
</style>