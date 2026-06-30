function carregarCarrossel() {

    const projetos = getProjetos();
    const indicadores = document.getElementById("carouselIndicators");
    const carouselInner = document.getElementById("carouselInner");

    indicadores.innerHTML = "";
    carouselInner.innerHTML = "";

    projetos.slice(0,3).forEach((projeto, index) => {

        // Indicadores
        indicadores.innerHTML += `
            <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="${index}"
                class="${index === 0 ? "active" : ""}"
                ${index === 0 ? 'aria-current="true"' : ""}
                aria-label="Slide ${index + 1}">
            </button>
        `;

        // Slides
        carouselInner.innerHTML += `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img
                    src="${projeto.imagens[0].link}"
                    class="d-block w-100 carousel-img"
                    alt="${projeto.nome}"
                    style="height:500px; object-fit:cover;"
                >

                <div class="container">
                    <div class="carousel-caption">
                        <h1>${projeto.nome}</h1>
                        <p>${projeto.descricao}</p>

                        <p>
                            <a href="detalhes.html?id=${projeto.id}" class="btn">Detalhes</a>
                        </p>
                    </div>
                </div>
            </div>
        `;
    });
}

if (document.getElementById("carouselIndicators")) {
    carregarCarrossel();
}

function carregarCards(listaProjetos) {

    if(!listaProjetos){
        listaProjetos = getProjetos();
    }

    const container = document.getElementById("listaProjetos");

    container.innerHTML = "";


    listaProjetos.forEach((projeto) => {
        container.innerHTML += `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img
                        src="${projeto.imagens[0].link}"
                        class="card-img-top card-img-projeto"
                        alt="${projeto.nome}"
                    >

                    <div class="card-body">
                        <h5 class="card-title">${projeto.nome}</h5>
                        <p class="card-text">${projeto.descricao}</p>
                        
                        <div class="row"> 
                            <div class="col-8">
                                <a href="detalhes.html?id=${projeto.id}" class="btn">Detalhes</a>
                            </div>
                            <div class="col-4">
                                <button
    type="button"
    class="btn btn-secondary"
    onclick="adicionarFavorito(${projeto.id})"
    title="${projetoFavorito(projeto.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">

    <i class="bi ${projetoFavorito(projeto.id)
        ? 'bi-bookmark-heart-fill'
        : 'bi-bookmark-heart'}"></i>

</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", () => {

    if(document.getElementById("listaProjetos")){
        carregarCards();
    }

});

