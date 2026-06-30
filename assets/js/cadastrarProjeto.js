let idEdicao = null;

document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(sessionStorage.getItem("usuario"));

    if (!usuario || !usuario.admin) {
        alert("Apenas administradores podem acessar esta página.");
        location.href = "index.html";
        return;
    }

    carregarTabelaProjetos();

    limparFormulario();

    document
        .getElementById("btnSalvar")
        .addEventListener("click", salvarProjeto);

    document
        .getElementById("btnCancelar")
        .addEventListener("click", limparFormulario);

});


function carregarTabelaProjetos() {

    const tabela = document.getElementById("tabelaProjetos");

    const projetos = getProjetos();

    tabela.innerHTML = "";

    projetos.forEach(projeto => {

        tabela.innerHTML += `

            <tr>

                <td>
                    <img
                        src="${projeto.imagens[0].link}"
                        style="width:70px;height:70px;object-fit:cover"
                        class="rounded">
                </td>

                <td>${projeto.nome}</td>

                <td>${projeto.local}</td>

                <td>${projeto.pessoas_atendidas}</td>

                <td>${projeto.voluntarios}</td>

                <td>
                    <div class="d-flex gap-2">
                        <button
                            class="btn btn-sm"
                            onclick="editarProjeto(${projeto.id})">

                            <i class="bi bi-pencil"></i>

                        </button>

                        <button
                            class="btn btn-sm "
                            onclick="excluirProjeto(${projeto.id})">

                            <i class="bi bi-trash"></i>

                        </button>
                    </div>
                </td>

            </tr>

        `;

    });

}

function salvarProjeto() {

    const nome = document.getElementById("nome").value.trim();

    const descricao = document.getElementById("descricao").value.trim();

    const local = document.getElementById("local").value.trim();

    const pessoas = Number(document.getElementById("pessoas").value);

    const voluntarios = Number(document.getElementById("voluntarios").value);


    const contatos = [];

        document.querySelectorAll(".contato").forEach((contato, index) => {

            contatos.push({

                id: index + 1,

                nome: contato.querySelector(".tipoContato").value,

                numero: contato.querySelector(".valorContato").value

            });

        });

        const imagens = [];

        document.querySelectorAll(".imagem").forEach((imagem, index) => {

            imagens.push({

                id: index + 1,

                titulo: imagem.querySelector(".tituloImagem").value,

                link: imagem.querySelector(".linkImagem").value

            });

        });

    if (
        nome === "" ||
        descricao === "" ||
        local === "" 
    ) {

        alert("Preencha todos os campos.");

        return;

    }

    if (contatos.length === 0) {
        alert("Adicione pelo menos um contato.");
        return;
    }

    if (imagens.length === 0) {
        alert("Adicione pelo menos uma imagem.");
        return;
    }

    if (
        contatos.some(c => c.nome.trim() === "" || c.numero.trim() === "")
    ) {
        alert("Preencha todos os contatos.");
        return;
    }

    if (
        imagens.some(i => i.titulo.trim() === "" || i.link.trim() === "")
    ) {
        alert("Preencha todas as imagens.");
        return;
    }

    const projetos = getProjetos();



    if (idEdicao != null) {

        const projeto = projetos.find(p => p.id === idEdicao);

        projeto.nome = nome;
        projeto.descricao = descricao;
        projeto.local = local;
        projeto.pessoas_atendidas = pessoas;
        projeto.voluntarios = voluntarios;

        projeto.imagens = imagens;
        projeto.redes_sociais = contatos;

        salvarProjetos(projetos);

        alert("Projeto atualizado com sucesso!");

    }


    else {

        let novoId = 1;

        if (projetos.length > 0) {

            novoId = Math.max(...projetos.map(p => p.id)) + 1;

        }

        projetos.push({

            id: novoId,

            nome: nome,

            descricao: descricao,

            local: local,

            pessoas_atendidas: pessoas,

            voluntarios: voluntarios,

            imagens: imagens,

            redes_sociais: contatos

        });

        salvarProjetos(projetos);

        alert("Projeto cadastrado com sucesso!");

    }

    limparFormulario();

    carregarTabelaProjetos();

}

function editarProjeto(id) {

    const projetos = getProjetos();

    const projeto = projetos.find(p => p.id === id);

    idEdicao = id;

    document.getElementById("nome").value = projeto.nome;

    document.getElementById("descricao").value = projeto.descricao;

    document.getElementById("local").value = projeto.local;

    document.getElementById("pessoas").value =
        projeto.pessoas_atendidas;

    document.getElementById("voluntarios").value =
        projeto.voluntarios;

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

    document.getElementById("listaContatos").innerHTML = "";

    projeto.redes_sociais.forEach(contato => {

        adicionarContato(

            contato.nome,

            contato.numero

        );

    });


    document.getElementById("listaImagens").innerHTML = "";

    projeto.imagens.forEach(imagem => {

        adicionarImagem(

            imagem.link,

            imagem.titulo

        );

    });

}

function excluirProjeto(id) {

    if (!confirm("Deseja realmente excluir este projeto?")) {

        return;

    }

    let projetos = getProjetos();

    projetos = projetos.filter(p => p.id !== id);

    salvarProjetos(projetos);

    carregarTabelaProjetos();

    alert("Projeto removido com sucesso.");

}


function limparFormulario() {

    idEdicao = null;

    document.getElementById("nome").value = "";

    document.getElementById("descricao").value = "";

    document.getElementById("local").value = "";

    document.getElementById("pessoas").value = "";

    document.getElementById("voluntarios").value = "";

    document.getElementById("listaContatos").innerHTML = "";

    document.getElementById("listaImagens").innerHTML = "";

    adicionarContato("WhatsApp", "");

    adicionarImagem("", "");

}

function adicionarContato(nome = "", numero = "") {

    const container = document.getElementById("listaContatos");

    container.insertAdjacentHTML("beforeend", `

        <div class="row mb-2 contato">

            <div class="col">

                <input
                    class="form-control tipoContato"
                    placeholder="Tipo"

                    value="${nome}">

            </div>

            <div class="col">

                <input
                    class="form-control valorContato"

                    placeholder="Contato"

                    value="${numero}">

            </div>

            <div class="col-auto">

                <button

                    class="btn"

                    type="button"

                    onclick="this.parentElement.parentElement.remove()">

                    <i class="bi bi-trash"></i>

                </button>

            </div>

        </div>

    `);

}

function adicionarImagem(link = "", titulo = "") {

    const container = document.getElementById("listaImagens");

    container.insertAdjacentHTML("beforeend", `

        <div class="row mb-2 imagem">

            <div class="col">

                <input

                    class="form-control tituloImagem"

                    placeholder="Título"

                    value="${titulo}">

            </div>

            <div class="col">

                <input

                    class="form-control linkImagem"

                    placeholder="URL"

                    value="${link}">

            </div>

            <div class="col-auto">

                <button

                    class="btn"

                    type="button"

                    onclick="this.parentElement.parentElement.remove()">

                    <i class="bi bi-trash"></i>

                </button>

            </div>

        </div>

    `);

}