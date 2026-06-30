
function projetoFavorito(idProjeto) {
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    if (!usuario || !usuario.favoritos) {
        return false;
    }

    return usuario.favoritos.includes(idProjeto);
}

function adicionarFavorito(idProjeto) {

    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    if (!usuario) {
        alert("Faça login para adicionar favoritos.");
        return;
    }

    const usuarios = getUsuarios();

    const usuarioEncontrado = usuarios.find(u => u.id === usuario.id);

    if (!usuarioEncontrado.favoritos) {
        usuarioEncontrado.favoritos = [];
    }

    const indice = usuarioEncontrado.favoritos.indexOf(idProjeto);

    if (indice >= 0) {
        usuarioEncontrado.favoritos.splice(indice, 1);
    } else {
        usuarioEncontrado.favoritos.push(idProjeto);
    }

    salvarUsuarios(usuarios);
    sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

    if (document.getElementById("listaProjetos")) {
        carregarCards();
    }

    if (document.getElementById("listaProjetos") &&
        window.location.pathname.includes("favoritos")) {

        carregarFavoritos();

    }
}

function atualizarBotaoFavorito(idProjeto) {

    const icone = document.getElementById("icone-favorito");

    if (!icone) {
        return;
    }

    if (projetoFavorito(idProjeto)) {
        icone.className = "bi bi-bookmark-heart-fill";
    } else {
        icone.className = "bi bi-bookmark-heart";
    }
}

function alternarFavorito() {

    const parametros = new URLSearchParams(window.location.search);
    const idProjeto = Number(parametros.get("id"));

    adicionarFavorito(idProjeto);

    atualizarBotaoFavorito(idProjeto);
}

