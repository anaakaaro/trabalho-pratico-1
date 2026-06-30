function atualizarMenu() {

    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuario"));

    const itemLogin = document.getElementById("login");
    const itemUsuario = document.getElementById("usuario-logado");
    const nomeUsuario = document.getElementById("nome-usuario");
    const textoLogin = document.getElementById("text-login");
    const menuCadastrar = document.getElementById("menu-cadastrar");
    const menuFavoritos = document.getElementById("menu-favoritos");

    if (usuarioLogado) {

        usuario = usuarioLogado;

        nomeUsuario.innerHTML =
            `<i class="bi bi-person-circle"></i> ${usuario.nome}`;

        itemUsuario.classList.remove("d-none");

        textoLogin.innerText = "Logout";
        textoLogin.href = "#";

        textoLogin.onclick = function (e) {
            e.preventDefault();
            logoutUser();
        };
        menuFavoritos.classList.remove("d-none");

        if(usuario.admin){
            menuCadastrar.classList.remove("d-none");
        }else{
            menuCadastrar.classList.add("d-none");
        }

    } else {

        itemUsuario.classList.add("d-none");

        textoLogin.innerText = "Login";
        textoLogin.href = "login.html";
        menuCadastrar.classList.add("d-none");
        menuFavoritos.classList.add("d-none");

    }
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarMenu();
});