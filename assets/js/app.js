if(!localStorage.getItem("projetos")) {
    const projetos = [
            {
                "id": 1,
                "nome": "Casa da Comunidade",
                "descricao": "Apoio comuntário a jovens e adultos na região metropolitana de Belo Horizonte.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 681,
                "voluntarios": 56,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1695938746747-ec185ea81325?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Reunião mensal dos participantes"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Festa e oficinas de Carnaval"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Entrega de doações para famílias carentes"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1618521715147-29e4b97e2ebd?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Voluntariado: Natureza mais limpa"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "5531000000"
                    }
                ]
            },
            {
                "id": 2,
                "nome": "Jogadores em Ação",
                "descricao": "Projeto que tira crianças da rua e as tornam jogadores de futebol.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 136,
                "voluntarios": 15,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Brincadeiras pós aula"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1580560230671-61e01dfdb285?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpYW4lQzMlQTdhJTIwZnV0ZWJvbHxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Futebol comunitário na comunidade Santa Maria"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1604651684549-962bd68d7c5c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JpYW4lQzMlQTdhJTIwZnV0ZWJvbHxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "2º campeonato municipal do Jogadores em Ação"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1611812695436-b0da42923bd6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyaWFuJUMzJUE3YSUyMGZ1dGVib2x8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Amistoso contra a escola Conceição Brito"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "5531555555"
                    }
                ]
            },
            {
                "id": 3,
                "nome": "Mães Amigas",
                "descricao": "Encontro de mães para troca de experiências.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 1987,
                "voluntarios": 462,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1758513359379-a1ccce73b09e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Ensaio de fotos das integrantes do Mães Amigas"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Mamães reunidas para arrasar no desfile do projeto"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Mamãe Amanda compartilha sua primeira experiência com o filho na praia"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1622352496174-9e1d969b1945?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "titulo": "Reunião mensal do mês 06/2026"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "5531555555"
                    }
                ]
            },
            {
                "id": 4,
                "nome": "Biblioteca para Todos",
                "descricao": "Projeto de incentivo à leitura com empréstimo gratuito de livros para crianças e adolescentes.",
                "local": "Betim",
                "pessoas_atendidas": 61,
                "voluntarios": 7,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
                        "titulo": "Acervo atualizado em Maio/26"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxlaXR1cmF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Leitora Milena concentrada no encontro semanal"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlaXR1cmF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "O homem-aranha convida as crianças para a sessão infantil de Julho/26"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1573142143200-2a6d95ae7352?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlaXR1cmF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Clique da voluntária Geovana desfrutando do nosso poderoso acervo"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553133333333"
                    }
                ]
            },
            {
                "id": 5,
                "nome": "Recicla BH",
                "descricao": "Promove educação ambiental e coleta seletiva em comunidades da região metropolitana.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 84,
                "voluntarios": 5,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
                        "titulo": "Pintura de lixeiras abondonadas na capital"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1610093674388-cee0337f2684?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaWNsYWdlbXxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Coleta de lixos pós folia de carnaval"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVjaWNsYWdlbXxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Entrega de pets para ponto de coleta em São João"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1561503412-852800622772?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVjaWNsYWdlbXxlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Resultado do multirão para arrecadar fundos para crianças carentes"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553144444444"
                    }
                ]
            },
            {
                "id": 6,
                "nome": "Música na Praça",
                "local": "Ibirité",
                "descricao": "Oficinas gratuitas de instrumentos musicais para jovens em situação de vulnerabilidade social.",
                "pessoas_atendidas": 300,
                "voluntarios": 19,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
                        "titulo": "Revitalização de instrumentos"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1583236753515-7e06aae56395?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bSVDMyVCQXNpY2ElMjBydWF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Oficina de trompete na praça Santa Tereza"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1651694721718-7a72df522ae3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bSVDMyVCQXNpY2ElMjBydWF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "2ª Mostra de talentos na praça Ouro Preto"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1720455730407-e59f735d1a91?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bSVDMyVCQXNpY2ElMjBydWF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "1ª Mostra de talentos na praça Ouro Preto"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553155555556"
                    }
                ]
            },
            {
                "id": 7,
                "nome": "Horta Comunitária Verde Vida",
                "descricao": "Cultivo coletivo de hortaliças para abastecer famílias em situação de vulnerabilidade.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 670,
                "voluntarios": 20,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
                        "titulo": "Evolução do plantio comunitário do mês de Junho/26"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9ydGF8ZW58MHx8MHx8fDI%3D",
                        "titulo": "Revitalização do nosso jardim comunitário"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvcnRhfGVufDB8fDB8fHwy",
                        "titulo": "Clique do plantio comunitário do mês de Junho/26"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvcnRhfGVufDB8fDB8fHwy",
                        "titulo": "Mão na Obra: nossos voluntários cuidando da nossa horta"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553188888888"
                    }
                ]
            },
            {
                "id": 8,
                "nome": "Programadores do Futuro",
                "descricao": "Cursos gratuitos de programação e tecnologia para estudantes do ensino médio.",
                "local": "Belo Horizonte",
                "pessoas_atendidas": 1600,
                "voluntarios": 30,
                "imagens": [
                    {
                        "id": 1,
                        "link": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
                        "titulo": "Código vencedor da nossa 1ª competição mirim"
                    },
                    {
                        "id": 2,
                        "link": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbWElQzMlQTclQzMlQTNvfGVufDB8fDB8fHwy",
                        "titulo": "O aluno fernando mostra que a constância de estudos também é importantes"
                    },
                    {
                        "id": 3,
                        "link": "https://images.unsplash.com/photo-1550439062-609e1531270e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2dyYW1hJUMzJUE3JUMzJUEzb3xlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Professor Thiago prepara os materiais para aulão comunitário"
                    },
                    {
                        "id": 4,
                        "link": "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2dyYW1hJUMzJUE3JUMzJUEzb3xlbnwwfHwwfHx8Mg%3D%3D",
                        "titulo": "Nossos voluntários prontos para sanar as dúvidas dos alunos"
                    }
                ],
                "redes_sociais": [
                    {
                        "id": 1,
                        "nome": "WhatsApp",
                        "numero": "553199999999"
                    }
                ]
            }
        ];

    localStorage.setItem("projetos", JSON.stringify(projetos));
}

if(!localStorage.getItem("usuarios")) {
    const usuarios = [
            {id: 1, nome: "Ana Carolina", login: "ana", senha: "ana123", email: "ana@gmail.com", admin: true, favoritos: []},
            {id: 2, nome: "Maria Clara", login: "maria", senha: "maria123", email: "maria@gmail.com", admin: false, favoritos: []}
        ];

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

const usuarios = JSON.parse(localStorage.getItem("usuarios"));
const projetos = JSON.parse(localStorage.getItem("projetos"));
    

//variável que mantem os dados do usuário logado
let usuario = null;

function checkLoggedUser(){
    const usuarioStr = sessionStorage.getItem('usuario');

    if(!usuarioStr){
        location.href = 'login.html';
    }

    usuario = JSON.parse(usuarioStr);
    return true;
}

function loginUser(login, senha){
    const usuarioObj = usuarios.find(elem => (elem.login === login) && (elem.senha === senha));

    if(!usuarioObj){
        return false;
    }
    else{
        sessionStorage.setItem('usuario', JSON.stringify(usuarioObj));
        return true;
    }
}

function cadastroUser(login, nome, email, senha){

    const emailExiste = usuarios.some(usuario => usuario.email === email);
    const loginExite = usuarios.some(usuario => usuario.login === login);
    
    if(emailExiste){
        alert("Este e-mail já está cadastrado!");
        return
    }

    if (loginExite) {
        alert("Este login já está em uso!");
        return;
    }

    usuarios.push({
        id: usuarios.length + 1,
        nome: nome,
        login: login,
        email: email,
        senha: senha,
        admin: false,
        favoritos: []
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert('Cadastro feito com sucesso!');
    location.href = 'login.html'
}

function logoutUser(){
    sessionStorage.clear();
    location.href = 'login.html';
}

function carregarCarrossel() {
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

function projetoFavorito(idProjeto) {
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    if (!usuario || !usuario.favoritos) {
        return false;
    }

    return usuario.favoritos.includes(idProjeto);
}

function carregarCards(listaProjetos = projetos) {
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

function pesquisarProjetos(event){

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


if (document.getElementById("listaProjetos")) {
    carregarCards();
}

function adicionarFavorito(idProjeto) {

    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    if (!usuario) {
        alert("Faça login para adicionar favoritos.");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));

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

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    sessionStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

    carregarCards();
}

function projetoFavorito(idProjeto){
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    if(!usuario || !usuario.favoritos){
        return false;
    }

    return usuario.favoritos.includes(idProjeto);
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

function exibirDetalhes() {
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

}

if (document.getElementById("informacoesProjeto")) {
    exibirDetalhes();
}

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
        textoLogin.href = "login.html";
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

document.getElementById("login").addEventListener("click", function (e) {

    if (sessionStorage.getItem("usuario")) {
        e.preventDefault();
        logoutUser();
    }

});

document.addEventListener("DOMContentLoaded", () => {
    atualizarMenu();
});

document
    .getElementById("formPesquisa")
    .addEventListener("submit", pesquisarProjetos);

document.getElementById("pesquisaProjeto")
.addEventListener("input", function(){

    if(this.value.trim() === ""){
        carregarCards();
    }

});


