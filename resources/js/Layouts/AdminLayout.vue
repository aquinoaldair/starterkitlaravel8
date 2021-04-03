<template>
    <div id="layout-wrapper">
        <top-bar/>
        <nav-bar/>
        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                    <slot />
                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->
            <custom-footer/>
        </div>
        <!-- end main content-->
    </div>
</template>

<script>
    import TopBar from "../Partials/Admin/TopBar";
    import NavBar from "../Partials/Admin/NavBar";
    import CustomFooter from "../Partials/Admin/CustomFooter";
    export default {
        name: "AdminLayout",
        components: { CustomFooter,  NavBar,  TopBar},
        created() {
            document.body.setAttribute("data-layout", "horizontal");
            document.body.setAttribute("data-topbar", "dark");
        }
    }
</script>

<style scoped>

</style>
