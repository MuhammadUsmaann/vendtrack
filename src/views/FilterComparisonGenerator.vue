<template>
    <div class="report-generator rounded bg-white px-3 py-4">
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
            <div class="col-12 col-lg-6 m-0">
                <p class="pb-1  font-14 font-weight-700 font-black m-0 "> Time and Frequency <img
                        src="../assets/info.svg" alt=""/><span class="font-10 font-mono pl-3 ">All Comparison reports
                        will be run
                        period to date</span></p>

                <div class="row minus-margin">

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
            <div class="col-6 col-lg-3 m-0">
                <p class="font-14 font-weight-700 font-black m-0 pb-1">Sales To <img src="../assets/info.svg" alt="" />
                </p>
                <b-form-select :options="dropselect"></b-form-select>
            </div>
            <div class="col-6 col-lg-3 m-0">
                <p class="font-14 font-weight-700 font-black m-0 pb-1">Display Reports By <img src="../assets/info.svg" alt="" />
                </p>
                <b-form-select :options="dropselect"></b-form-select>
            </div>
        </div>


        <div class="row">
            <div class="col-6 pt-0">
                <div class="font-14 font-weight-700 font-black pb-1">Unit of Measures <img src="../assets/info.svg"
                        alt="">
                </div>
                <div class="font-13 font-weight-600 font-black ">
                    <div>

                        <multiselect :searchable="false" placeholder="" v-model="value1" label="name" track-by="code"
                            :options="units" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                    </div>
                </div>
            </div>
            <div class="col-6 pt-0">
                <div class="font-14 font-weight-700 font-black pb-1">Table Headers <img src="../assets/info.svg" alt="">
                </div>
                <div class="font-13 font-weight-600 font-black ">
                    <div>

                        <multiselect :searchable="false" placeholder="" v-model="value2" label="name" track-by="code"
                            :options="header" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                    </div>
                </div>
            </div>
        </div>

        <div class="font-14 font-weight-700 font-black pt-4">Select Filters <img src="../assets/info.svg" alt="">
        </div>
        <div class="row pt-2">
            <div class="col-sm-6 col-12 ">
                <div class="d-flex  w-100">
                    <nav class="position-relative">
                        <div class="nav nav-tabs d-flex flex-column border-bottom-0 h-100" id="nav-tab" role="tablist">

                            <a class="nav-item nav-link active font-black font-14" id="nav-customers-tab"
                                data-toggle="tab" href="#nav-customers" role="tab" aria-controls="nav-customers"
                                aria-selected="true">Customers
                            </a>

                            <a class="nav-item nav-link font-black font-14" id="nav-distributors-tab" data-toggle="tab"
                                href="#nav-distributors" role="tab" aria-controls="nav-distributors"
                                aria-selected="false">Distributors
                            </a>

                            <a class="nav-item nav-link font-black font-14" id="nav-districts-tab" data-toggle="tab"
                                href="#nav-districts" role="tab" aria-controls="nav-districts"
                                aria-selected="false">Districts
                            </a>

                            <a class="nav-item nav-link font-black font-14" id="nav-distributer-tab" data-toggle="tab"
                                href="#nav-distributer" role="tab" aria-controls="nav-distributer"
                                aria-selected="false">Territories
                            </a>

                        </div>

                    </nav>
                    <div class="tab-content p-3" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-customers" role="tabpanel"
                            aria-labelledby="nav-customers-tab">
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="MasterCard"
                                value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedcutomer" label="McDonald's"
                                value="McDonald's">
                            </v-checkbox>
                        </div>

                        <div class="tab-pane fade" id="nav-distributors" role="tabpanel"
                            aria-labelledby="nav-distributors-tab">
                            <v-checkbox v-model="selecteddistributers" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox v-model="selecteddistributers" label="Bank of America" value="Bank of America">
                            </v-checkbox>
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
                        <div class="tab-pane fade" id="nav-districts" role="tabpanel"
                            aria-labelledby="nav-districts-tab">
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="MasterCard"
                                value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistrict" label="McDonald's"
                                value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-distributer" role="tabpanel"
                            aria-labelledby="nav-distributer-tab">
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="Starbucks"
                                value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="MasterCard"
                                value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="DebitCard"
                                value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedterritory" label="McDonald's"
                                value="McDonald's">
                            </v-checkbox>
                        </div>

                    </div>
                </div>

            </div>
            <div class="col-sm-6 col-12 ">
                <div>
                    <p class="font-14 font-weight-700 font-black pb-1">Customers</p>
                    <div>
                        <span v-for="(list, index) in selectedcutomer" :key="index">
                            <span class="multiselect__tag"><span>{{ list }}</span> <i aria-hidden="true" tabindex="1"
                                    class="multiselect__tag-icon"></i></span><span
                                v-if="index+1 < selectedcutomer.length">
                            </span>
                        </span>
                    </div>
                </div>

                <div class="pt-4">
                    <p class="font-14 font-weight-700 font-black pb-1">Distributors</p>
                    <div>
                        <span v-for="(list, index) in selecteddistributers" :key="index">
                            <span class="multiselect__tag"><span>{{ list }}</span> <i aria-hidden="true" tabindex="1"
                                    class="multiselect__tag-icon"></i></span><span
                                v-if="index+1 < selecteddistributers.length">
                            </span>
                        </span>
                    </div>
                </div>

                <div class="pt-4">
                    <p class="font-14 font-weight-700 font-black pb-1">Districts</p>
                    <div>
                        <span v-for="(list, index) in selecteddistrict" :key="index">
                            <span class="multiselect__tag"><span>{{ list }}</span> <i aria-hidden="true" tabindex="1"
                                    class="multiselect__tag-icon"></i></span><span
                                v-if="index+1 < selecteddistrict.length">
                            </span>
                        </span>
                    </div>
                </div>

                <div class="pt-4">
                    <p class="font-14 font-weight-700 font-black pb-1">Territories</p>
                    <div>
                        <span v-for="(list, index) in selectedterritory" :key="index">
                            <span class="multiselect__tag"><span>{{ list }}</span> <i aria-hidden="true" tabindex="1"
                                    class="multiselect__tag-icon"></i></span><span
                                v-if="index+1 < selectedterritory.length">
                            </span>
                        </span>
                    </div>
                </div>


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
    vuetify: new Vuetify(),

    data() {
        return {
            selectedcutomer: ["Starbucks", "Facebook", "Bank of America", "MasterCard"],
            selecteddistributers: ["Facebook", "Bank of America", "MasterCard"],
            selecteddistrict: ["Starbucks"],
            selectedterritory: ["Fortuner"],

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


.v-input {
    margin-top: 0 !important;
}


.font-10 {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.05em;
}

nav {
    width: 313px;
    border-right: 1px solid #CECECE;
    border-radius: 0px 0px 0px 0px !important;
}

.nav-tabs .nav-link.active {
    position: relative;
    right: -2px;
    color: #495057;
    background-color: #fff;
    border-color: #CECECE transparent #CECECE #CECECE !important;
    font-weight: 700;
    border-radius: 5px 0px 0px 5px !important;
}

.nav-tabs .nav-link.active::after {
    content: url(../assets/lessthan.svg);
    position: absolute;
    right: 6px;
}

.nav-tabs .nav-link:hover {
    background-color: #f4f2f2;
}

.nav-tabs .ad {
    border-right: 1px solid #CECECE;
}

.nav-link {
    border-radius: 0 !important;
}

.tab-content {
    border: 1px solid #CECECE;
    border-left: 0 !important;
    width: 269px;
    border-radius: 0px 5px 5px 0px !important;
}

.minus-margin {
    margin-top: -11px
}
</style>
