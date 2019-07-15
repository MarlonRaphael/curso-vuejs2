<template>
    <div class="NomeCompleto">
        <div class="wrap">
            <h1>{{ nome }} {{ sobrenome }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['nome', 'sobrenome'],
    };
</script>

<style scoped>

</style>