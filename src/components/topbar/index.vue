<template>
    <div class="topbar">
        <!-- LOGO -->
        <div class="topbar-left">
            <a href="#" class="logo">
                <img alt="Vue logo" src="../../assets/logo.png" class="mw-100 px-2">
            </a>
        </div>
        <nav class="navbar-custom">
            <ul class="navbar-right list-inline float-right mb-0">
                <li class="dropdown notification-list list-inline-item">
                    <div class="dropdown notification-list nav-pro-img">
                        <a class="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" href="#"
                            role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="assets/images/user-4.jpg" alt="user" class="contact-img rounded-circle">
                            <span class="font-14 font-black ml-2">Vani Hedge</span>
                            <img class = "font-14 font-black ml-2" src="../../assets/headerdropdownicon.svg"/>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                            <!-- item-->
                            <router-link to="/profile" class="waves-effect dropdown-item font-14 ">
                                <i class="mdi mdi-account-circle"></i> MyVT <sup class="font-10 font-weight-500 certical-align-revert">TM</sup>
                            </router-link>

                            <router-link to="/client-VT" class="waves-effect dropdown-item font-14">
                                <span class="badge btn-orange float-right">11</span><i class="mdi mdi-account-circle"></i>
                                MyVT <sup class="font-10 font-weight-500 certical-align-revert">TM</sup>Admin
                            </router-link>

                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"><i class="mdi mdi-power text-danger"></i>
                                Logout</a>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="list-inline menu-left mb-0">
                <li class="float-left">
                    <button class="button-menu-mobile open-left waves-effect">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    props: {
        // msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
