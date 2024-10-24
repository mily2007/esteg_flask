// Função para mostrar o spinner enquanto o formulário está sendo usado 
document.getElementById('decode-form').addEventListener('submit',
    function() {
        // Mostra o spinner
        document.getElementById('loading-spinner').style.display = 'block';

        // Esconder resultado
        document.getElementById('result').style.display = 'none'
    }
) 