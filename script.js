let hamburguer = document.querySelector(".hamburguer");
let body = document.querySelector("body")

hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("click", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("click", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("click", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    var prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas` 
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const script = document.querySelector("#js").checked
    const layout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    let preco = qtde * 100
    if (script) {preco *= 1.1}
    if (layout) {preco += 500}
    if (preco < 0) {preco = 0}
    let taxaUrgencia = 1 - prazo * 0.1
    preco *= 1 + taxaUrgencia

    let precoFinal = document.querySelector("#preco-total").innerHTML = `R$ ${preco.toFixed(2)}`
}