<template>
    <div class="topnav">
        <div class="container-fluid">
            <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
                <div id="topnav-menu-content" class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <template v-for="(item, index) of menuItems">
                            <li class="nav-item dropdown" :key="index">
                                <a class="nav-link dropdown-toggle arrow-none" id="topnav-components" :href="item.route" role="button">
                                    <i :class="`bx ${item.icon} mr-2`"/>{{ item.label }}
                                </a>
                            </li>
                        </template>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return{
                menuItems : [
                    {
                        label   : 'Inicio',
                        icon    : 'bx-home',
                        route   :  '#'
                    },
                    {
                        label   : 'Categorias',
                        icon    : 'bx-grid',
                        route   :  '#'
                    },
                    {
                        label   : 'Productos',
                        icon    : 'bx-clipboard',
                        route   :  '#'
                    },
                    {
                        label   : 'Cotizaciones',
                        icon    : 'bx-file',
                        route   :  '#'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
