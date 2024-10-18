function gerarTabuada() {
    var numero = document.getElementById('numero').value;
    var listaTabuada = document.getElementById('listaTabuada');

    // Verifica se o valor do número é válido
    if (numero === '' || numero <= 0) {
        alert('Por favor, insira um número válido.');
        return;
    }

    // Limpa a lista de resultados
    listaTabuada.innerHTML = '';

    // Gera a tabuada do número
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        var item = document.createElement('li');
        item.textContent = `${numero} x ${i} = ${resultado}`;
        listaTabuada.appendChild(item);
    }
}
