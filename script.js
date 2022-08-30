var tela = document.querySelector(".tela");
var numero = document.querySelector(".numero");

var conta = [];
var historico = [];
var operacao = [];

var valor1 = 0;
var valor2 = 0;
var resultado = 0;

function limpaTela(){
    conta = [];
    tela.innerHTML = " ";
}
function limpaVariavel(){
    limpaTela();
    historico = [];
    operacao = [];
    valor1 = 0;
    valor2 = 0;
    resultado = 0;
}
function imprimeNumero(num){
    conta.push(num);
    tela.innerHTML = conta.join("");
}
function mostraHistorico(){
    tela.innerHTML = historico.join("");
}
function adicao(){
    operacao.push("+");
    recebeValor();
    historico.push("+");  
}
function divisao(){
    operacao.push("/");
    recebeValor();
    historico.push("/");  
}
function multiplicacao(){
    operacao.push("*");
    recebeValor();
    historico.push("*");  
}
function subtracao(){
    operacao.push("-");
    recebeValor();
    historico.push("-");   
}
function calculaResultado(v1,v2){
    var total = 0;
    var num = 0;
    if(operacao[operacao.length-1] == "="){
            num = operacao.length-1;
    }

    num = operacao.length-2
    if (operacao[num] == "+"){
            total = parseFloat(v1) + parseFloat(v2);
            console.log(v1,v2,total);
            return total;
        }
    if (operacao[num] == "-"){
            total = parseFloat(v1) - parseFloat(v2);
            console.log(v1,v2,total);
            return total;
        }
    if (operacao[num] == "*"){
            total = parseFloat(v1) * parseFloat(v2);
            console.log(v1,v2,total);
            return total;
        }
    if (operacao[num] == "/"){
            total = parseFloat(v1) / parseFloat(v2);
            console.log(v1,v2,total);
            return total;
        }
    }
function recebeValor(){
        if(valor1 == 0){
            valor1 = conta.join("");
            valor1 = parseFloat(valor1);
            historico.push(valor1);
            limpaTela();
        }else if(valor1 !=0){
            valor2 = conta.join("");
            valor2 = parseFloat(valor2);
            historico.push(valor2);
            resultado = calculaResultado(valor1,valor2);
            valor1 = resultado;
            tela.innerHTML = resultado;
        }
        conta = [];
    }
    function mostraResultado(){
        operacao.push("=");
        recebeValor();
        if((valor1 == 0 && historico.length-1 == "") || 
            (historico[historico.length-1] == "/") ||
            (historico[historico.length-1] == "*") ||
            (historico[historico.length-1] == "-") ||
            (historico[historico.length-1] == "+"))  {
                tela.innerHTML = " - ERRO !!! - ";
            }
            else{
            historico.push("=",resultado);
            tela.innerHTML = historico.join("");
            }
    }





