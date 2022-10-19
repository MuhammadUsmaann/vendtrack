<template>
    <div class="report-generator  rounded bg-white px-3 py-4">
        <div class="row mx-0 align-item-center">
            <div class="col-md col-sm-6 col-12 px-0">
                <CHeading content="Report Generator" />
            </div>
            <div class="col-md col-sm-6 col-12 px-0 text-center">
                <router-link to="/filter-comparison-generator">
                    <button class="btn text-black font-18 font-weight-500 ml-2 font-18">Comparison</button>
                </router-link>
                <router-link to="/filter-report-generator">
                    <button class="btn-light-orange btn font-20 font-weight-700">Sales</button>
                </router-link>
                
            </div>
            <div class="col-md col-12 px-0 text-right">
                <span class="font-500 font-14 font-mono">Last Update: 02/18/2022</span>
                <!-- <button class="btn btn-orange ml-2 font-14"><i class="fa-solid fa-check"></i> Generate</button> -->
            </div>
        </div>

        <div class="row ">
            <div class="col-6 col-md-3 margin-1">

                <b-tooltip target="sdate-btn" placement="right">Tooltip Title</b-tooltip>
                <p class="input-label mb-1">Start Date <img id="sdate-btn" src="../assets/info.svg" alt="" /></p>
                <DatePicker v-model="startdate" format="YYYY-MM-DD" type="date"></DatePicker>

            </div>
            <div class="col-6 col-md-3 margin-1">
                <b-tooltip target="edate-btn" placement="right">Tooltip Title</b-tooltip>
                <p class="input-label mb-1">End Date <img id="edate-btn" src="../assets/info.svg" alt="" /></p>
                <DatePicker v-model="enddate" format="YYYY-MM-DD" type="date"></DatePicker>

            </div>
            <div class="col-6 col-md-3">
                <b-tooltip target="sales-btn" placement="right">Tooltip Title</b-tooltip>
                <p class="input-label pb-1">Sales To <img id="sales-btn" src="../assets/info.svg" alt="">
                </p>
                <b-form-select :options="dropselect"></b-form-select>
            </div>
            <div class="col-6 col-md-3">
                <b-tooltip target="display-btn" placement="right">Tooltip Title</b-tooltip>
                <p class="input-label pb-1">Display Reports By <img id="display-btn" src="../assets/info.svg" alt="">
                </p>
                <b-form-select :options="dropselect"></b-form-select>
            </div>
        </div>


        <div class="row mt-0">
            <div class="col-6">
                <b-tooltip target="unit-btn" placement="right">Tooltip Title</b-tooltip>
                <div class="input-label pb-1">Unit of Measures <img id="unit-btn" src="../assets/info.svg" alt="">
                </div>
                <div class="font-13 font-weight-600 font-black ">
                    <div>
                        <multiselect :searchable="false" placeholder="" v-model="value1" label="name" track-by="code"
                            :options="units" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <b-tooltip target="table-btn" placement="right">Tooltip Title</b-tooltip>
                <div class="input-label pb-1">Table Headers <img id="table-btn" src="../assets/info.svg" alt="">
                </div>
                <div class="font-13 font-weight-600 font-black ">
                    <div>

                        <multiselect :searchable="false" placeholder="" v-model="value2" label="name" track-by="code"
                            :options="header" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                    </div>
                </div>
            </div>
        </div>

        <b-tooltip target="filter-btn" placement="right">Tooltip Title</b-tooltip>
        <div class="input-label pt-4">Select Filters <img src="../assets/info.svg" id="filter-btn" alt="">
        </div>

        <div class="row pt-2">
            <div class="col-sm-6 col-12 ">
                <div class="d-flex  w-100">
                    <nav class="position-relative">
                        <div class="nav nav-tabs d-flex flex-column border-bott h-100" id="nav-tab" role="tablist">

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


                            <a class="nav-item nav-link font-black font-14" id="nav-regions-tab" data-toggle="tab"
                                href="#nav-regions" role="tab" aria-controls="nav-regions" aria-selected="true">Regions
                            </a>

                            <a class="nav-item nav-link font-black font-14" id="nav-states-tab" data-toggle="tab"
                                href="#nav-states" role="tab" aria-controls="nav-states" aria-selected="false">States
                            </a>

                            <a class="nav-item nav-link font-black font-14" id="nav-chains-tab" data-toggle="tab"
                                href="#nav-chains" role="tab" aria-controls="nav-chains"
                                aria-selected="false">Chains/National Account
                            </a>

                            <a class="nav-item nav-link font-black font-14" id="nav-GPO-tab" data-toggle="tab"
                                href="#nav-GPO" role="tab" aria-controls="nav-GPO" aria-selected="false">GPO/Buying
                                Groups
                            </a>

                            <a class="nav-item nav-link font-black font-14" id="nav-market-tab" data-toggle="tab"
                                href="#nav-market" role="tab" aria-controls="nav-market" aria-selected="false">Market
                                Segments
                            </a>
                            <a class="nav-item nav-link font-black font-14" id="nav-brands-tab" data-toggle="tab"
                                href="#nav-brands" role="tab" aria-controls="nav-brands" aria-selected="false">Brands
                            </a>
                            <a class="nav-item nav-link font-black font-14" id="nav-product-category-tab"
                                data-toggle="tab" href="#nav-product-category" role="tab"
                                aria-controls="nav-product-category" aria-selected="false">Product Category
                            </a>
                            <a class="nav-item nav-link font-black font-14" id="nav-product-sub-category-tab"
                                data-toggle="tab" href="#nav-product-sub-category" role="tab"
                                aria-controls="nav-product-sub-category" aria-selected="false">Product Sub-Category
                            </a>
                            <a class="nav-item nav-link font-black font-14" id="nav-product-tab" data-toggle="tab"
                                href="#nav-product" role="tab" aria-controls="nav-product" aria-selected="false">Product
                            </a>
                            <a class="nav-item nav-link font-black font-14" id="nav-customergroups-tab"
                                data-toggle="tab" href="#nav-customergroups" role="tab"
                                aria-controls="nav-customergroups" aria-selected="false">My Customer Groups
                            </a>
                            <a class="nav-item nav-link font-black font-14" id="nav-productgroups-tab" data-toggle="tab"
                                href="#nav-productgroups" role="tab" aria-controls="nav-productgroups"
                                aria-selected="false">My Product Groups
                            </a>
                            <a class="nav-item nav-link font-black font-14" id="nav-distributorgroups-tab"
                                data-toggle="tab" href="#nav-distributorgroups" role="tab"
                                aria-controls="nav-distributorgroups" aria-selected="false">My Distributor Groups
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


                        <div class="tab-pane fade show " id="nav-regions" role="tabpanel"
                            aria-labelledby="nav-regions-tab">
                            <v-checkbox class="checkbox" v-model="selectedregion" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="MasterCard" value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedregion" label="McDonald's" value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-states" role="tabpanel" aria-labelledby="nav-states-tab">
                            <v-checkbox v-model="selectedstates" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="Bank of America" value="Bank of America">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="Johnson & Johnson" value="Johnson & Johnson">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="MasterCard" value="MasterCard">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox v-model="selectedstates" label="McDonald's" value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-chains" role="tabpanel" aria-labelledby="nav-chains-tab">
                            <v-checkbox class="checkbox" v-model="selectedchain" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="MasterCard" value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedchain" label="McDonald's" value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-GPO" role="tabpanel" aria-labelledby="nav-GPO-tab">
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="MasterCard" value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedgpo" label="McDonald's" value="McDonald's">
                            </v-checkbox>
                        </div>

                        <div class="tab-pane fade show " id="nav-market" role="tabpanel"
                            aria-labelledby="nav-market-tab">
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="Starbucks"
                                value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="MasterCard"
                                value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="DebitCard"
                                value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedmarktetseg" label="McDonald's"
                                value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-brands" role="tabpanel" aria-labelledby="nav-brands-tab">
                            <v-checkbox v-model="selectedbrands" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="Bank of America" value="Bank of America">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="Johnson & Johnson" value="Johnson & Johnson">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="MasterCard" value="MasterCard">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox v-model="selectedbrands" label="McDonald's" value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-product-category" role="tabpanel"
                            aria-labelledby="nav-product-category-tab">
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="MasterCard"
                                value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodcat" label="McDonald's"
                                value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-product-sub-category" role="tabpanel"
                            aria-labelledby="nav-product-sub-category-tab">
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="MasterCard" value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="McDonald's" value="McDonald's">
                            </v-checkbox>
                        </div>


                        <div class="tab-pane fade show " id="nav-product" role="tabpanel"
                            aria-labelledby="nav-product-tab">
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="MasterCard" value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprod" label="McDonald's" value="McDonald's">
                            </v-checkbox>
                        </div>


                        <div class="tab-pane fade" id="nav-customergroups" role="tabpanel"
                            aria-labelledby="nav-customergroups-tab">
                            <v-checkbox v-model="selectedcustgrp" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="Bank of America" value="Bank of America">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="Johnson & Johnson" value="Johnson & Johnson">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="MasterCard" value="MasterCard">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox v-model="selectedcustgrp" label="McDonald's" value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-productgroups" role="tabpanel"
                            aria-labelledby="nav-productgroups-tab">
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="MasterCard"
                                value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selectedprodgrp" label="McDonald's"
                                value="McDonald's">
                            </v-checkbox>
                        </div>
                        <div class="tab-pane fade" id="nav-distributorgroups" role="tabpanel"
                            aria-labelledby="nav-distributorgroups-tab">
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="Facebook" value="Facebook">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="Bank of America"
                                value="Bank of America"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="Johnson & Johnson"
                                value="Johnson & Johnson"></v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="Starbucks" value="Starbucks">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="MasterCard"
                                value="MasterCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="Ferrari" value="Ferrari">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="DebitCard" value="DebitCard">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="Fortuner" value="Fortuner">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="Linkedin" value="Linkedin">
                            </v-checkbox>
                            <v-checkbox class="checkbox" v-model="selecteddistgrp" label="McDonald's"
                                value="McDonald's">
                            </v-checkbox>
                        </div>



                        <div class="tab-pane fade" id="nav-market" role="tabpanel" aria-labelledby="nav-market-tab">
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
                        <div class="tab-pane fade" id="nav-brands" role="tabpanel" aria-labelledby="nav-brands-tab">
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
                        <div class="tab-pane fade" id="nav-productcategory" role="tabpanel"
                            aria-labelledby="nav-productcategory-tab">
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
                        <div class="tab-pane fade" id="nav-productsubcategory" role="tabpanel"
                            aria-labelledby="nav-productsubcategory-tab">
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


                        <div class="tab-pane fade" id="nav-product" role="tabpanel" aria-labelledby="nav-product-tab">
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
                        <div class="tab-pane fade" id="nav-customergroups" role="tabpanel"
                            aria-labelledby="nav-customergroups-tab">
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
                        <div class="tab-pane fade" id="nav-productgroups" role="tabpanel"
                            aria-labelledby="nav-productgroups-tab">
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
                        <div class="tab-pane fade" id="nav-distributorgroups" role="tabpanel"
                            aria-labelledby="nav-distributorgroups-tab">
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
                    <p class="input-label pb-1">Customers</p>
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
                    <p class="input-label pb-1">Distributors</p>
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
                    <p class="input-label pb-1">Districts</p>
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
                    <p class="input-label pb-1">Territories</p>
                    <div>
                        <span v-for="(list, index) in selectedterritory" :key="index">
                            <span class="multiselect__tag"><span>{{ list }}</span> <i aria-hidden="true" tabindex="1"
                                    class="multiselect__tag-icon"></i></span><span
                                v-if="index+1 < selectedterritory.length">
                            </span>
                        </span>
                    </div>
                </div>
                <div class="pt-4">
                    <p class="input-label pb-1">Region</p>
                    <div>
                        <span v-for="(list, index) in selectedregion" :key="index">
                            <span class="multiselect__tag"><span>{{ list }}</span> <i aria-hidden="true" tabindex="1"
                                    class="multiselect__tag-icon"></i></span><span
                                v-if="index+1 < selectedterritory.length">
                            </span>
                        </span>
                    </div>
                </div>

                <div class="pt-4">
                    <p class="input-label pb-1">States</p>
                    <div>
                        <span v-for="(list, index) in selectedstates" :key="index">
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
            <button class="btn btn-light mr-3 d-inline-flex justify-content-center align-items-center">
                <img src="../assets/cancel.svg" alt="" class="mr-2" /> <span>Reset</span>
            </button>
            <router-link to="/report-generator" class="waves-effect">
                <button class="btn btn-orange d-inline-flex justify-content-center align-items-center">
                    <img src="../assets/check.svg" alt="" class="mr-2" /> Generate
                </button>
            </router-link>

        </div>
    </div>

</template>

<script>
import Multiselect from 'vue-multiselect'
import CHeading from '@/components/heading.vue';
import Vuetify from 'vuetify/lib/framework';
import DatePicker from "vue2-datepicker";
import 'vue2-datepicker/index.css';

export default {

    name: 'FilterReportGenerator',
    components: {
        CHeading, Multiselect, DatePicker
    },
    vuetify: new Vuetify(),

    data() {
        return {
            startdate: null,
            enddate: null,
            ex4: ['orange darken-3'],

            selectedcutomer: ["Starbucks", "Facebook", "Bank of America", "MasterCard"],
            selecteddistributers: ["Facebook", "Bank of America", "MasterCard"],
            selecteddistrict: ["Starbucks"],
            selectedterritory: ["Fortuner"],

            selectedregion: ["Starbucks", "Facebook", "Bank of America", "MasterCard"],
            selectedstates: ["Facebook", "Bank of America", "MasterCard"],
            selectedchain: ["Starbucks"],
            selectedgpo: ["Fortuner"],

            selectedmarktetseg: ["Starbucks", "Facebook", "Bank of America", "MasterCard"],
            selectedbrands: ["Facebook", "Bank of America", "MasterCard"],
            selectedsubcateg: ["Starbucks"],
            selectedprod: ["Fortuner"],

            selectedprodcat: ["Fortuner"],
            selectedcustgrp: ["Starbucks", "Facebook", "Bank of America", "MasterCard"],
            selectedprodgrp: ["Facebook", "Bank of America", "MasterCard"],
            selecteddistgrp: ["Starbucks"],

            value1: {
                name: 'Cases',
                contact: 'Cases@.com'
            },
            value2: {
                name: 'Heading',
                contact: 'Heading@.com'
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
                { name: 'Region', code: 'rgn' },
                { name: 'States', code: 'sts' },
                { name: 'Territories', code: 'trt' },
                { name: 'GPO/Buing Groups', code: 'gpo' },
                { name: 'Market Segment', code: 'mrktseg' },
                { name: 'Product Category', code: 'proc' },
                { name: 'Brand', code: 'brnd' },
                { name: 'Product', code: 'prodct' }

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
a:hover {
    text-decoration: none !important;
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
    border-radius: 5px 0 0 5px !important;
}

.nav-tabs .ad {
    border-right: 1px solid #CECECE;
}

.nav-tabs {
    border-bottom: none !important;
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

.margin-1 {
    margin-top: 1px
}
</style>
