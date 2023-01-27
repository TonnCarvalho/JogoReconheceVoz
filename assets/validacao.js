function VerificarChuteValido (chute) {
    const numero = +chute
    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML +='<div>Isso não existe</div>'
    }

    if (numeroMairOuMenor (numero))
    elementoChute.innerHTML += `
    <div>Numero invalido: o número secreto prescisa entra entra 
    ${menorValor} e ${maiorValor}</div>`
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou =)</h2>

        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar 
        novamente </button>
        `

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor 
        <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior
         <i class="fa-solid fa-up-long"></i></div>`  
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroMairOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
}) 
