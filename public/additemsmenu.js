// Função para carregar o conteúdo HTML e inseri-lo na página
function loadHTML(file, elementId) {
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.log('Erro ao carregar o arquivo HTML:', error));
}

// Carrega o conteúdo de header.html dentro do elemento com ID 'header-container'
loadHTML('itemsMenu.html', 'containerItemsMenu');