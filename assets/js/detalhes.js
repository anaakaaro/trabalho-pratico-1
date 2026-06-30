function exibirDetalhes() {

    const projetos = getProjetos();

    const parametros = new URLSearchParams(window.location.search);

    const id = parametros.get("id");

    const projeto = projetos.find(p => p.id == id);

    if(!projeto){
        return;
    }

    document.getElementById("foto-projeto").src = `${projeto.imagens[0].link}`;

    document.getElementById("nome-projeto").innerText = projeto.nome;

    document.getElementById("detalhes-projeto").innerText = projeto.descricao;

    document.getElementById("localizacao-projeto").innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${projeto.local}`;

    document.getElementById("pessoas-atendidas").innerHTML = `<i class="bi bi-people-fill"></i> Pessoas atendidas: ${projeto.pessoas_atendidas}`;

    document.getElementById("voluntarios").innerHTML = `<i class="bi bi-person-vcard-fill"></i> Voluntários: ${projeto.voluntarios}`;

    document.getElementById("contato").innerHTML = `<i class="bi bi-telephone-fill"></i> Contato: ${projeto.redes_sociais[0].numero}`;

    carregarGaleria(projeto);
    atualizarBotaoFavorito(projeto.id);

}

if (document.getElementById("informacoesProjeto")) {
    exibirDetalhes();
}

function carregarGaleria(projeto) {
    const galeria = document.getElementById("galeria-projeto");

    galeria.innerHTML = projeto.imagens.map(imagem => `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card h-100 border-0 shadow-sm">
                <img
                    src="${imagem.link}"
                    alt="${imagem.titulo}"
                    class="card-img-top foto-galeria"
                >
                <div class="card-body">
                    <p class="card-text text-center mb-0">
                        ${imagem.titulo}
                    </p>
                </div>
            </div>
        </div>
    `).join("");
}