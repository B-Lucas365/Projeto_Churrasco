// Carne - 400gpor pessoa + de 6 horas - 650
//cerveja - 1200 ml por pessoa + 6 horas - 2000ml
//refrigerante - 1000 ml por pessoa + 6 horas 1500
//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")
function calcular(){
    console.log("calculando")


    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    
    let qtc = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas) 
    let qta = cervejaPP(duracao) * adultos 
    let qtb = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas) 
    
    resultado.innerHTML = `<p> ${qtc/1000}Kg de Carne<p>`
    resultado.innerHTML += `<p> ${Math.ceil(qta/355)} Latas de Cerveja<p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtb/2000)} Garrafas de 2L de Refrigerante <p>`
     
    


}
function carnePP(duracao){

    
    if (duracao > 6){
        return 650
    }else{
        return 400
    }


}
function cervejaPP(duracao){

    
    if (duracao > 6){
        return 2000
    }else{
        return 1200
    }


}
function bebidasPP(duracao){

    
    if (duracao > 6){
        return 1500
    }else{
        return 1000
    }


}
