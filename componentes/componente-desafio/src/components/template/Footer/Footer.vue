<template>
    <div class="Footer">
        <v-footer class="pa-3" app>
            <v-spacer></v-spacer>
            <div>Curso Vue &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
