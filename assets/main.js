const form = document.getElementById('form-atividade');
let linhas = '';
const imgaprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando"/>';
const imgreprovado = '<img src="./images/reprovado.png" alt="Emoji Decepcionado"/>';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value>=7 ? imgaprovado : imgreprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
})