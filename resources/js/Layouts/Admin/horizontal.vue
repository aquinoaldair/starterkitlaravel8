<template>
    <div>
        <!-- Begin page -->
        <div id="layout-wrapper">
            <HorizontalTopBar/>
            <HorizontalNav />
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
                <Footer />
            </div>
            <!-- end main content-->
        </div>
        <!-- END layout-wrapper -->
        <RightBar />
    </div>
</template>
<script>
    import HorizontalTopBar from '../../components/horizontal-topbar'
    import HorizontalNav from "../../components/horizontal-nav";
    import RightBar from "../../components/right-bar";
    import Footer from "../../components/footer";

    export default {
        components: {
            HorizontalTopBar,
            HorizontalNav,
            Footer,
            RightBar
        },
        data() {
            return {};
        },
        created: () => {
            document.body.setAttribute("data-layout", "horizontal");
            // document.body.setAttribute("data-topbar", "dark");
            document.body.removeAttribute("data-sidebar", "dark");
            document.body.removeAttribute("data-layout-size", "boxed");
        },
        methods: {
            toggleRightSidebar() {
                document.body.classList.toggle("right-bar-enabled");
            },
            hideRightSidebar() {
                document.body.classList.remove("right-bar-enabled");
            }
        }
    };
</script>

