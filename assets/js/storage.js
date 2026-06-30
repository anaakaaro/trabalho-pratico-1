function getProjetos(){
    return JSON.parse(localStorage.getItem("projetos")) || [];
}

function salvarProjetos(projetos){
    localStorage.setItem("projetos", JSON.stringify(projetos));
}

function getUsuarios(){
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function salvarUsuarios(usuarios){
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}