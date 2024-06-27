const config = {
    titulo: "Teste",
    texto: "Cfb cursos",
    cor: "#48f"
}

const cxmsg = new Cxmsg(config)

const btnMostrar = document.querySelector("#btn_mostrarCaixa")

btnMostrar.addEventListener("click", ()=> {
    cxmsg.mostrar()
})