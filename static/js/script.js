// Função para mostrar o spinner equanto o formulário está sendo enviado
document.getElementById('decode-form').addEventListener('submit',
    function() {
        // Mostrar spinner
        document.getElementById('loading-spinner').style.display = 'block';

        //Esconder resultado
        document.getElementById('result').style.display = 'none';
    }
)