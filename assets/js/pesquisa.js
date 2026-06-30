function pesquisarProjetos(event){

    const projetos = getProjetos();

    event.preventDefault();

    const texto = document.getElementById("pesquisaProjeto").value.trim().toLowerCase();

     if (texto === "") {
        carregarCards();
        return;
    }

    const resultado = projetos.filter(projeto =>
        projeto.nome.toLowerCase().includes(texto) ||
        projeto.local.toLowerCase().includes(texto) ||
        projeto.descricao.toLowerCase().includes(texto)
    );

    carregarCards(resultado);
}

document
    .getElementById("formPesquisa")
    .addEventListener("submit", pesquisarProjetos);

document.getElementById("pesquisaProjeto")
.addEventListener("input", function(){

    if(this.value.trim() === ""){
        carregarCards();
    }

});