<template>
    <div class="report-generator bg-white px-3 py-4">
        <div class="row mx-0 align-item-center">
            <div class="col-md col-sm-6 col-12 px-0">
                <CHeading content="Report Generator" />
            </div>
            <div class="col-md col-sm-6 col-12 px-0 text-center">
                <router-link to="/filter-report-generator">
                    <button class="btn text-black font-18 font-weight-500 ml-2">Sales</button>
                </router-link>
                <router-link to="/filter-comparison-generator">
                    <button class="btn-light-orange btn font-20 font-weight-700">Comparison</button>
                </router-link>
            </div>
            <div class="col-md col-12 px-0 text-right">
                <span class="font-500 font-14 font-mono">Last Update: 02/18/2022</span>
                <!-- <button class="btn btn-orange ml-2 font-14"><i class="fa-solid fa-check"></i> Generate</button> -->
            </div>
        </div>

        <div class="row ">
            <div class="col-6 m-0">
                <p class="pb-1  font-14 font-weight-700 font-black "> Time and Frequency <img src="../assets/Stroke.png"
                        alt=""><span class="font-10 font-mono pl-3 ">All Comparison reports will be run
                        period to date</span></p>

                <div class="row">

                    <div class="col-6 m-0">
                        <b-form-select :options="dropselect"></b-form-select>
                    </div>
                    <div class="col-6 m-0">
                        <div class="row">
                            <div class="col-6">

                                <b-form-select :options="dropselect"></b-form-select>

                            </div>
                            <div class="col-6">

                                <b-form-select :options="dropselect"></b-form-select>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 m-0">
                <p class="font-14 font-weight-700 font-black pb-1">Sales To</p>
                <b-form-select :options="dropselect"></b-form-select>
            </div>
            <div class="col-3 m-0">
                <p class="font-14 font-weight-700 font-black pb-1">Display Reports By</p>
                <b-form-select :options="dropselect"></b-form-select>
            </div>
        </div>


        <div class="row mt-3">
            <div class="col-6">
                <div class="font-14 font-weight-700 font-black pb-1">Unit of Measures <img src="../assets/Stroke.png"
                        alt="">
                </div>
                <div class="font-13 font-weight-600 font-black ">
                    <div>

                        <multiselect :searchable="false" placeholder="" v-model="value1" label="name" track-by="code"
                            :options="units" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="font-14 font-weight-700 font-black pb-1">Table Headers <img src="../assets/Stroke.png"
                        alt="">
                </div>
                <div class="font-13 font-weight-600 font-black ">
                    <div>

                        <multiselect :searchable="false" placeholder="" v-model="value2" label="name" track-by="code"
                            :options="header" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                    </div>
                </div>
            </div>
        </div>

        <div class="font-14 font-weight-700 font-black pt-4">Select Filters <img src="../assets/Stroke.png" alt=""></div>
        <div class="row pt-2">
            <div class="col-sm-6 col-12 ">
                <div class="row">
                    <div class="col-6 pr-0 position-relative">
                        <div class="nav  flex-column nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <a class="nav-link pl-2 font-black active position-relative" id="v-pills-home-tab"
                                data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home"
                                aria-selected="true">
                                Customers
                                <div class="whitediv"></div>
                            </a>
                            <a class="nav-link pl-2 font-black" id="v-pills-profile-tab" data-toggle="pill"
                                href="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                aria-selected="false">Distributors</a>
                            <a class="nav-link pl-2 font-black" id="v-pills-messages-tab" data-toggle="pill"
                                href="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                                aria-selected="false">Districts</a>
                            <a class="nav-link pl-2 font-black" id="v-pills-settings-tab" data-toggle="pill"
                                href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                                aria-selected="false">Territories</a>

                        </div>
                    </div>
                    <div class="col-6 p-0">
                        <div class="tab-content  py-3 pl-3 pr-1 border rounded" id="v-pills-tabContent">
                            <div class="tab-pane  fade show active " id="v-pills-home" role="tabpanel"
                                aria-labelledby="v-pills-home-tab">
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="Facebook"
                                    value="Facebook">
                                </v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="Bank of America"
                                    value="Bank of America"></v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="Johnson & Johnson"
                                    value="Johnson & Johnson"></v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="Starbucks"
                                    value="Starbucks">
                                </v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="MasterCard"
                                    value="MasterCard">
                                </v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="Ferrari" value="Ferrari">
                                </v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="DebitCard"
                                    value="DebitCard">
                                </v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="Fortuner"
                                    value="Fortuner">
                                </v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="Linkedin"
                                    value="Linkedin">
                                </v-checkbox>
                                <v-checkbox class="checkbox" v-model="selectedcutomer" label="McDonald's"
                                    value="McDonald's">
                                </v-checkbox>

                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                aria-labelledby="v-pills-profile-tab">

                                <v-checkbox v-model="selecteddistributers" label="Facebook" value="Facebook">
                                </v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="Bank of America"
                                    value="Bank of America"></v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="Johnson & Johnson"
                                    value="Johnson & Johnson"></v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="Starbucks" value="Starbucks">
                                </v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="MasterCard" value="MasterCard">
                                </v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="Ferrari" value="Ferrari">
                                </v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="DebitCard" value="DebitCard">
                                </v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="Fortuner" value="Fortuner">
                                </v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="Linkedin" value="Linkedin">
                                </v-checkbox>
                                <v-checkbox v-model="selecteddistributers" label="McDonald's" value="McDonald's">
                                </v-checkbox>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                aria-labelledby="v-pills-messages-tab">...</div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-12 ">
                <p class="font-14 font-weight-700 font-black pb-1">Customers</p>
                <span class="multiselect__tag"><span>{{ selectedcutomer }}</span> <i aria-hidden="true" tabindex="1"
                        class="multiselect__tag-icon"></i></span>
                <p class="font-14 font-weight-700 font-black pt-3 pb-1">Distributors</p>
                <span class="multiselect__tag"><span>{{ selecteddistributers }}</span> <i aria-hidden="true"
                        tabindex="1" class="multiselect__tag-icon"></i></span>
            </div>
        </div>
        <div class="text-center pt-5 pb-5">
            <button class="btn btn-outline-secondary mr-3"><i class="fa-solid fa-times"></i> Reset </button>
            <router-link to="/report-generator-comparison-view" class="waves-effect">
                <button class="btn btn-orange"><i class="fa-solid fa-check"></i> Generate </button>
            </router-link>
        </div>



    </div>

</template>

<script>
import Multiselect from 'vue-multiselect'
import CHeading from '@/components/heading.vue';
import Vuetify from 'vuetify/lib/framework';

export default {

    name: 'FilterComparisonGenerator',
    components: {
        CHeading, Multiselect
    },
    el: '#app',
    vuetify: new Vuetify(),

    data() {
        return {
            selectedcutomer: "Starbucks",
            selecteddistributers: "Starbucks",

            value1: {
                groupDivision: 'Government',
                name: 'Agriculture',
                contact: 'Agriculture@.com'
            },
            value2: {
                groupDivision: 'Government',
                name: 'Agriculture',
                contact: 'Agriculture@.com'
            },

            options: [

                { name: 'Agriculture', contact: 'Agriculture@.com' },
                { name: 'Police', contact: 'Police@.com' },
                { name: 'Medical', contact: 'Medical@.com' },
                { name: 'BBC', contact: 'BBC@.com' },
                { name: 'CNN', contact: 'CNN@.com' },
                { name: 'CBC', contact: 'CBC@.com' }

            ],
            dropselect: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'This is Second option' },
            ],

            units: [
                { name: 'Cases', code: 'cs' },
                { name: 'Dollars', code: 'ds' },
                { name: 'Open Source', code: 'os' }
            ],
            header: [
                { name: 'Customers', code: 'cu' },
                { name: 'Distributors', code: 'ds' },
                { name: 'States', code: 'sts' },
                { name: 'States', code: 'sts' },
                { name: 'Territories', code: 'trt' }

            ],

            items: [
                { title: 'Select All' },
                { title: 'Medium Customer Group' },
                { title: 'Second Customer Group' },
                { title: 'What Else Customer Group' },
                { title: 'Newest Customer Group' },
                { title: 'Translating Customer Group' },
            ],
            closeOnContentClick: false,
        }
    },
    methods: {
        addTag(newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.options.push(tag)
            this.value.push(tag)
        },
        customLabel(option) {
            return `${option.name}`
        }
    }
}


</script>
<style scoped>
.btn-orange {
    background: #FF7E1D;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
    color: #ffffff;
}

.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed .v-select__selections {
    min-height: 56px;
}

.v-sheet {
    border: 1px solid #4444 !important;
}

.v-menu__content {
    left: 557px !important;
    top: 370px !important;
    box-shadow: none !important;
}

.v-btn:not(.v-btn--round).v-size--default {
    /* z-index: 9; */
    border: 1px solid #4444;
    border-right: none !important;
    border-radius: 0 !important;
}

.tab-pane {
    height: 508px !important;
    overflow-y: auto;
    margin: 0 !important;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #4444;
    background-color: #ffff;
    border: 1px solid #4444;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-right: none;
    color: #444444;
    font-weight: 600;
    height: 40px !important;

}

.v-input {
    margin-top: 0 !important;
}

.nav {
    position: absolute;
    width: calc(97% - 2px);
    z-index: 1;
}

.font-10 {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.05em;
}


</style>
