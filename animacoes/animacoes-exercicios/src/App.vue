<template>
    <div id="app" class="container-fluid">
        <h1>Animações</h1>
        <hr>

        <b-button variant="primary" class="mb-4" @click="exibir = !exibir">
            Mostrar mensagem
        </b-button>

        <transition name="fade">
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>

        <transition name="slide">
            <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
        </transition>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                msg: 'Uma mensagem de informação para o usuário',
                exibir: false
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-size: 1.5rem;
    }

    /**
    ** Transition Fade
    **/

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 2s;
    }

    /**
    ** Transition Slide
    **/

    @keyframes slide-in {
        from {
            -webkit-transform: translateY(40px);
            -moz-transform: translateY(40px);
            -ms-transform: translateY(40px);
            -o-transform: translateY(40px);
            transform: translateY(40px);
        }
        to {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
        }
        to {
            -webkit-transform: translateY(40px);
            -moz-transform: translateY(40px);
            -ms-transform: translateY(40px);
            -o-transform: translateY(40px);
            transform: translateY(40px);
        }
    }

    .slide-enter-active {
        animation: slide-in 2s ease;
    }

    .slide-leave-active {
        animation: slide-out 2s ease;
    }

</style>
