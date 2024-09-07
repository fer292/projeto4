let num1 = document.getElementById('n1')
let res = document.getElementById('res')
let final = document.getElementById('final')
let valor = []
function clicar(){
function numero(n){
if (Number(n) >=1 && Number(n) <=100){
    return true

}
else {
    return false
}
    
}


function lista (n , l){
   if (l.indexOf(Number(n)) != -1){
    return true
   }
   else {
    return false
   }

}




if(numero(num1.value) && !lista(num1.value , valor)){
    valor.push(Number(num1.value))
   optio = document.createElement('option')
   optio.text += `valor ${num1.value} adicionado`
   final.innerHTML = ''


    res.appendChild(optio)
}
else 
{
    alert(`Dados Invalidos ou ja encontrados na lista, digite um Valor!`)

}
num1.value = ''
num1.focus()
}
function finalizar(){
if(valor.length == 0) {
    alert('Adicione valores antes de finalizar')
}
else{
    let total = valor.length
    let maior = valor[0]
    let menor = valor[0]
    let soma  = 0
    let media = 0
    
    for (let pos in valor){
        soma += valor[pos]
        if ( valor[pos] > maior){
            maior = valor[pos]
        }
        if (valor[pos] < menor){
            menor = valor[pos]
        }
        media = soma / total


    }
final.innerHTML = ''
final.innerHTML += `<p>Foram adicionados ${total} numeros</p>`
final.innerHTML += `<p>O Maior numero é ${maior} </p>`
final.innerHTML += `<p>O Menor numero é ${menor} </p>`
final.innerHTML += `<p>A soma é ${soma} </p>`
final.innerHTML += `<p>A media de seus numeros é ${media} </p>`

}
}