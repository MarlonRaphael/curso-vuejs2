new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou te alertando!');
        },
        armzenaValor( event ) {
            this.valor = event.target.value;
        },
        alteraValor( event ) {
            this.valor = event.target.value;
        }
    }
});