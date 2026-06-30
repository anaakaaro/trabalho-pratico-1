document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    // Apenas usuários logados podem acessar
    if (!usuario) {
        window.location.href = "login.html";
        return;
    }

    carregarFavoritos();

});

function carregarFavoritos() {

    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    const listaProjetos = document.getElementById("listaProjetos");

    const projetos = getProjetos();

    const favoritos = projetos.filter(projeto =>
        usuario.favoritos &&
        usuario.favoritos.includes(projeto.id)
    );

    if (favoritos.length === 0) {

        listaProjetos.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center py-5">

                    <i class="bi bi-bookmark-heart fs-1"></i>

                    <h4 class="mt-3">
                        Você ainda não possui projetos favoritos.
                    </h4>

                    <p class="text-muted">
                        Navegue pela página inicial e favorite alguns projetos.
                    </p>

                    <a href="index.html" class="btn">
                        Ver Projetos
                    </a>

                </div>
            </div>
        `;

        return;
    }

    carregarCards(favoritos);

}