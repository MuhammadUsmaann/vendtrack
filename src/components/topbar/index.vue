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
                            <img src="assets/images/user-4.jpg" alt="user" class="rounded-circle">
                            <span class="font-14 font-black ml-2">Vani Hedge</span>
                            <i class="fa-solid fa-angle-down ml-2 mt-1"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                            <!-- item-->
                            <a class="dropdown-item" href="#"><i class="mdi mdi-account-circle"></i> Profile</a>
                            <a class="dropdown-item d-block" href="#"><span
                                    class="badge btn-orange float-right">11</span><i class="mdi mdi-settings"></i>
                                Settings</a>
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
