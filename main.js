function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = '';

    if (numero >= 1 && numero <= 10) {
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            const linha = document.createElement('p');
            linha.textContent = `${numero} x ${i} = ${resultado}`;
            resultadoDiv.appendChild(linha);
        }
    } else {
        resultadoDiv.innerHTML = '<p>Por favor, insira um número entre 1 e 10.</p>';
    }
}