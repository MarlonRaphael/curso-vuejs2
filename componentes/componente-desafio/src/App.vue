<template>
    <v-app>
        <app-navbar></app-navbar>
        <app-toolbar></app-toolbar>
        <v-content>
            <app-carousel></app-carousel>
        </v-content>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
	import Navbar from './components/template/Navbar/Navbar';
	import Toolbar from './components/template/Toolbar/Toolbar';
	import Carousel from './components/widgets/Carousel/Carousel';
	import Footer from './components/template/Footer/Footer';

    export default {
        components: {
            'app-navbar': Navbar,
            'app-toolbar': Toolbar,
            'app-carousel': Carousel,
            'app-footer': Footer,
        }
    }
</script>
