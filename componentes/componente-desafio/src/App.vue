<template>
    <v-app>
        <Navbar/>
        <Toolbar/>
        <v-content>
            <Carousel/>
        </v-content>
        <Footer/>
    </v-app>
</template>

<script>
	import Navbar from '@/components/template/Navbar/Navbar';
	import Toolbar from '@/components/template/Toolbar/Toolbar';
	import Carousel from '@/components/widgets/Carousel/Carousel';
	import Footer from '@/components/template/Footer/Footer';

    export default {
        components: { Navbar, Toolbar, Carousel, Footer, }
    }
</script>
