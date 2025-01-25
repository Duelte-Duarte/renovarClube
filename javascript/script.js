const userList = document.getElementById('nomes-list');
const emputyMessage = document.getElementById('apagar-mensagem');

// Carregar do localStorage
function carregarNome() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length > 0) {
        users.forEach(user => addUserToList(user.nome, user.responsavel, user.telefone));
        if (emputyMessage) {
            emputyMessage.remove();
        }
    }
}

// Adicionar no localStorage
function addUser() {
    const nome = document.getElementById('nome').value.trim();
    const responsavel = document.getElementById('responsavel').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (nome && responsavel && telefone) {
        addUserToList(nome, responsavel, telefone);

        // Salvar no localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ nome, responsavel, telefone });
        localStorage.setItem('users', JSON.stringify(users));

        // Limpar os campos
        document.getElementById('nome').value = '';
        document.getElementById('responsavel').value = '';
        document.getElementById('telefone').value = '';
    }
}

// Mostrar nomes na lista
function addUserToList(nome, responsavel, telefone) {
    const newUser = document.createElement('li');
    newUser.textContent = `Nome: ${nome}, Responsável: ${responsavel}, Telefone: ${telefone}`;
    userList.appendChild(newUser);

    if (emputyMessage) {
        emputyMessage.remove();
    }
}

// // Limpar usuários do localStorage e da lista
// function clearUsers() {
//     localStorage.removeItem('users');
//     userList.innerHTML = '<li id="emptyMessage">Nenhum usuário adicionado ainda.</li>';
// }

// Carregar os nomes ao abrir a página
document.addEventListener('DOMContentLoaded', carregarNome);
