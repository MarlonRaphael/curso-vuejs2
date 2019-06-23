<template>
    <div class="Contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                contador: 0
            }
        },
        methods: {
            adicionar() {
                this.contador++;
            },
            subtrair() {
                this.contador--;
            }
        }
    };
</script>

<style scoped>
    .Contador span {
        height: 30px;
        padding: 5px 25px;
        border-bottom: 1px solid #ccc;
    }

    .Contador button {
        height: 30px;
        width: 30px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
        background-color: coral;
        margin-left: 10px;
        outline: none;
    }
</style>