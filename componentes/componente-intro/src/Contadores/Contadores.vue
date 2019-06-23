<template>
    <div class="Contadores">
        <app-contador v-for="c in 5" :key="c"></app-contador>
    </div>
</template>

<script>
    import Contador from '../Contador/Contador';

    export default {
        components: { 'app-contador': Contador}
    };
</script>
