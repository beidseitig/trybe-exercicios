const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',  'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

const lista = document.querySelector('#states-list')
const option = document.createElement('option')


for (let i of estados) {
   let option = document.createElement('option');
   option.innerText = i;
   lista.appendChild(option)
}

function validateData () {
    let name = document.querySelector('[name=name]')
    if (name.value.length === 0) {
        alert('Nome inválido!');
    }
}

function prevent(event) {
    event.preventDefault();
    
    validateData();
    
}


window.onload = function() {
    let preventButton = document.querySelector('#submit-button')
    preventButton.addEventListener('click', prevent);
}


