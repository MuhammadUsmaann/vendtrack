<template>
    <div class="left side-menu">
        <div class="slimscroll-menu" id="remove-scroll">
            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu" id="side-menu">
                    <!-- <li>
                        <router-link to="/purchase" class="waves-effect">
                            <div class="active-li"></div>
                            <img src="../../assets/home.svg" alt="">
                            <span> Home </span>
                        </router-link>
                    </li> -->
                    <li>
                        <router-link to="/purchase" class="waves-effect">
                            <img src="../../assets/Dashboard.svg" alt="">
                            <span> Dashboard </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/saved-reports" class="waves-effect">
                            <img src="../../assets/SavedReports.svg" alt="">
                            <span> Saved Reports </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/whos-reported" class="waves-effect">
                            <img src="../../assets/whosreported.jpeg" class="whosreported-img" alt="">
                            <span> Who’s Reported </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/filter-comparison-generator" class="waves-effect">
                            <img src="../../assets/ReportGenerator.svg" alt="">
                            <span> Report Generator </span>
                        </router-link>
                    </li>
                   
                    <li>
                        <router-link to="/select-rapid-reports" class="waves-effect">
                            <img src="../../assets/RapidReports.svg" alt="">
                            <span> Rapid Reports </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/select-client-track" class="waves-effect">
                            <img src="../../assets/ClientTrack.svg" alt="">
                            <span> Client Track </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/''" class="waves-effect">
                            <img src="../../assets/GapAnalysis.svg" alt="">
                            <span> Gap Analysis </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/''" class="waves-effect">
                            <img src="../../assets/BrokerScorecard.svg" alt="">
                            <span> Broker Scorecard </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/''" class="waves-effect">
                            <img src="../../assets/WarehouseWithdrawal.svg" alt="">
                            <span> Warehouse Withdrawal </span>
                        </router-link>
                    </li>
                    
                    <li>
                        <router-link to="/''" class="waves-effect">
                            <img src="../../assets/OperatorTargets.svg" alt="">
                            <span> Operator Targets </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/''" class="waves-effect">
                            <img src="../../assets/CPRs.svg" alt="">
                            <span> CPRs </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/''" class="waves-effect">
                            <img src="../../assets/RebateCalculator.svg" alt="">
                            <span> Rebate Calculator </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/''" class="waves-effect">
                            <img src="../../assets/TradeSpend.svg" alt="">
                            <span> Trade Spend </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/athena-review" class="waves-effect">
                            <img src="../../assets/AthenaReview.svg" alt="">
                            <span> Athena Review </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/WOW" class="waves-effect">
                            <img src="../../assets/wow.svg" alt="">
                            <span> WOW </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/promotion" class="waves-effect">
                            <img src="../../assets/wow.svg" alt="">
                            <span> Promotion </span>
                        </router-link>
                    </li>
                    
                </ul>
            </div>
            <!-- Sidebar -->
            <div class="clearfix"></div>
        </div>
        <!-- Sidebar -left -->
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: {
        // msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whosreported-img{
    height: 17px;
    width: 18px;
}
</style>
