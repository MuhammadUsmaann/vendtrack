<template>
    <div class="left side-menu">
        <div class="slimscroll-menu" id="remove-scroll">
            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu" id="side-menu">
                    <li>
                        <router-link to="/WOW" class="waves-effect">
                            <img src="../../assets/home.png" alt="">
                            <span> Home </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/whos-reported" class="waves-effect">
                            <img src="../../assets/SavedReports.png" alt="">
                            <span> Saved Reports </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/report-generator" class="waves-effect">
                            <img src="../../assets/ReportGenerator.png" alt="">
                            <span> Report Generator </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/purchase" class="waves-effect">
                            <img src="../../assets/Dashboard.png" alt="">
                            <span> Dashboard </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/rapid-reports" class="waves-effect">
                            <img src="../../assets/RapidReports.png" alt="">
                            <span> Rapid Reports </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/client-track" class="waves-effect">
                            <img src="../../assets/ClientTrack.png" alt="">
                            <span> Client Track </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/review-list" class="waves-effect">
                            <img src="../../assets/GapAnalysis.png" alt="">
                            <span> Gap Analysis </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/profile" class="waves-effect">
                            <img src="../../assets/BrokerScorecard.png" alt="">
                            <span> Broker Scorecard </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/client-VT" class="waves-effect">
                            <img src="../../assets/WarehouseWithdrawal.png" alt="">
                            <span> Warehouse Withdrawal </span>
                        </router-link>
                    </li>
                    
                    <li>
                        <router-link to="/client-track3" class="waves-effect">
                            <img src="../../assets/OperatorTargets.png" alt="">
                            <span> Operator Targets </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/client-track2" class="waves-effect">
                            <img src="../../assets/CPRs.png" alt="">
                            <span> CPRs </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/client-track" class="waves-effect">
                            <img src="../../assets/RebateCalculator.png" alt="">
                            <span> Rebate Calculator </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/athena-review" class="waves-effect">
                            <img src="../../assets/TradeSpend.png" alt="">
                            <span> Trade Spend </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/athena-review-2" class="waves-effect">
                            <img src="../../assets/AthenaReview.png" alt="">
                            <span> Athena Review </span>
                        </router-link>
                    </li>
                    
                    <li>
                        <router-link to="/ytd-purchaselist" class="waves-effect">
                            <img src="../../assets/WarehouseWithdrawal.png" alt="">
                            <span> Ytd Purchase </span>
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
</style>
