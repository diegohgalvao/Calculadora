let allThemes = document.querySelectorAll("input")
let body = document.querySelector("body")
let result = document.querySelector("#resultaCalculadora")
let header = document.querySelector("#headerCalculadora")
let itens = document.querySelector("#itensCalculadora")
let teclas = document.querySelector("#itensCalculadora")
let btnreset = document.querySelector("#btnreset")
let btnigual = document.querySelector("#btnigual")
let btnDel = document.querySelector("#btnDel")
let menuTemas = document.querySelector("#seletorTemas")


let temaEscolhido = () =>{
    let selecionado = document.querySelector("input:checked").value
    body.setAttribute('class', 'body'+selecionado)
    result.setAttribute('class', 'resultCalculadora'+selecionado)
    header.setAttribute('class', 'headerCalculadora'+selecionado)
    itens.setAttribute('class', 'itensCalculadora'+selecionado)
    teclas.setAttribute('class', 'itensCalculadora'+selecionado)
    btnreset.setAttribute('class', 'btnreset'+selecionado)
    btnigual.setAttribute('class', 'btnigual'+selecionado)
    btnDel.setAttribute('class', 'del'+selecionado)
    menuTemas.setAttribute('class', 'seletorTemas'+selecionado)
}

allThemes.forEach(selectTema =>{
    selectTema.addEventListener("change", temaEscolhido)
})

let numerosClicados = ""

function reset(){
    let numeroCima = document.querySelector(".OpNumero1")
    numeroCima.innerHTML = 0
    numeroCima.style.display = "none"
    numerosClicados = ""
    document.querySelector("#visorCalculadora").innerHTML = numerosClicados
}

function del(){
    let numerosString = numerosClicados.toString();
    let ultimoNumero = numerosString.charAt(numerosString.length - 1)
    let novoNumero = numerosString.slice(0, -1);
    numerosClicados = novoNumero

    if(numerosClicados.length < "1"){
        numerosClicados = ""
    }

    document.querySelector("#visorCalculadora").innerHTML = numerosClicados

}

function clickResult(){
    let result = Number(numerosClicados)
    console.log(result)
}

function clickSoma(){
    let numeroCima = document.querySelector(".OpNumero1")
    let primeiroNumero = document.querySelector(".OpNumero1").innerHTML
    let visorCal = document.querySelector("#visorCalculadora")
    console.log(`Numero cima: ${numeroCima.innerHTML} - Primeiro número: ${primeiroNumero}`)

    if(primeiroNumero == 0){
        let numero1 = numerosClicados
        let novoNumero1 = Number(numero1)
        numeroCima.innerHTML = novoNumero1
        numeroCima.style.display = "block"
        numerosClicados=""
        document.querySelector("#visorCalculadora").innerHTML = 0
    }

    if(primeiroNumero > 0){
        let numerosClicadosNovo = Number(numerosClicados)
        let novoPrimeiroNumero = Number(primeiroNumero)
        console.log(numerosClicadosNovo, novoPrimeiroNumero)
        let resultSoma = numerosClicadosNovo + novoPrimeiroNumero
        console.log(resultSoma)
        numeroCima.innerHTML = resultSoma
        visorCal.innerHTML = 0
        numerosClicados = ""
    }
}

function clickSubtracao(){
    let numeroCima = document.querySelector(".OpNumero1")
    let primeiroNumero = document.querySelector(".OpNumero1").innerHTML
    let visorCal = document.querySelector("#visorCalculadora")
    console.log(`Numero cima: ${numeroCima.innerHTML} - Primeiro número: ${primeiroNumero}`)

    if(primeiroNumero == 0){
        let numero1 = numerosClicados
        let novoNumero1 = Number(numero1)
        numeroCima.innerHTML = novoNumero1
        numeroCima.style.display = "block"
        numerosClicados = ""
        document.querySelector("#visorCalculadora").innerHTML = 0
    }

    if(primeiroNumero > 0){
        let numerosClicadosNovo = Number(numerosClicados)
        let novoPrimeiroNumero = Number(primeiroNumero)
        console.log(numerosClicadosNovo, novoPrimeiroNumero)
        let resultSubtrair = novoPrimeiroNumero - numerosClicadosNovo
        if(resultSubtrair < 0){
            alert("O resultado é menor que 0")
            visorCal.innerHTML = 0
            numeroCima.innerHTML = 0
            numeroCima.style.display = "none"
            resultSubtrair = 0
        }
        console.log(resultSubtrair)
        numeroCima.innerHTML = resultSubtrair
        visorCal.innerHTML = 0
        numerosClicados = ""
    }
}

function clickPonto(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".sinalPonto").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickDivisao(){
    let numeroCima = document.querySelector(".OpNumero1")
    let primeiroNumero = document.querySelector(".OpNumero1").innerHTML
    let visorCal = document.querySelector("#visorCalculadora")
    console.log(`Numero cima: ${numeroCima.innerHTML} - Primeiro número: ${primeiroNumero}`)

    if(primeiroNumero == 0){
        let numero1 = numerosClicados
        let novoNumero1 = Number(numero1)
        numeroCima.innerHTML = novoNumero1
        numeroCima.style.display = "block"
        numerosClicados=""
        document.querySelector("#visorCalculadora").innerHTML = 0
    }

    if(primeiroNumero > 0){
        let numerosClicadosNovo = Number(numerosClicados)
        let novoPrimeiroNumero = Number(primeiroNumero)
        console.log(numerosClicadosNovo, novoPrimeiroNumero)
        let resultDivisao = novoPrimeiroNumero / numerosClicadosNovo
        console.log(resultDivisao)
        numeroCima.innerHTML = resultDivisao
        visorCal.innerHTML = 0
        numerosClicados = ""
    }
}

function clickMultiplicacao(){
    let numeroCima = document.querySelector(".OpNumero1")
    let primeiroNumero = document.querySelector(".OpNumero1").innerHTML
    let visorCal = document.querySelector("#visorCalculadora")

    if(primeiroNumero == 0){
        let numero1 = numerosClicados
        let novoNumero1 = Number(numero1)
        numeroCima.innerHTML = novoNumero1
        numeroCima.style.display = "block"
        numerosClicados=""
        document.querySelector("#visorCalculadora").innerHTML = 0
    }

    if(primeiroNumero > 0){
        let numerosClicadosNovo = Number(numerosClicados)
        let novoPrimeiroNumero = Number(primeiroNumero)
        console.log(numerosClicadosNovo, novoPrimeiroNumero)
        let resultMultiplicar = novoPrimeiroNumero * numerosClicadosNovo
        console.log(resultMultiplicar)
        numeroCima.innerHTML = resultMultiplicar
        visorCal.innerHTML = 0
        numerosClicados = ""

    }
}

function clickNumero0(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n0").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero1(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n1").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero2(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n2").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero3(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n3").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero4(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n4").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero5(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n5").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero6(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n6").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero7(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n7").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero8(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n8").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}

function clickNumero9(){
    if(numerosClicados.length > 17){
        alert("Quantidade de números excedidos")
    } else{
        const saveNumber = document.querySelector(".n9").innerHTML;
        numerosClicados = numerosClicados + saveNumber
        document.querySelector("#visorCalculadora").innerHTML = numerosClicados
    }
}