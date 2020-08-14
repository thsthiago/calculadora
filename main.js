let conta = document.querySelector('.conta');
let AC = document.querySelector('p[value="AC"]');
let maiseMenos = document.querySelector('p[value="maisemenos"]');
let divisao = document.querySelector('p[value="barra"]');
let apagar = document.querySelector('i[value="apagar"]');
let vezes = document.querySelector('p[value="x"]');
let mais = document.querySelector('p[value="mais"]');
let menos = document.querySelector('p[value="menos"]');
let nove = document.querySelector('p[value="9"]');
let oito = document.querySelector('p[value="8"]');
let sete = document.querySelector('p[value="7"]');
let seis = document.querySelector('p[value="6"]');
let cinco = document.querySelector('p[value="5"]');
let quatro = document.querySelector('p[value="4"]');
let tres = document.querySelector('p[value="3"]');
let dois = document.querySelector('p[value="2"]');
let um = document.querySelector('p[value="1"]');
let zero = document.querySelector('p[value="0"]');
let ponto = document.querySelector('.w100 p[value="ponto"]');
let igual = document.querySelector('p[value="igual"]');

zero.onclick = (event) => printa(0);
um.onclick = (event) => printa(1);
dois.onclick = (event) => printa(2);
tres.onclick = (event) => printa(3);
quatro.onclick = (event) => printa(4);
cinco.onclick = (event) => printa(5);
seis.onclick = (event) => printa(6);
sete.onclick = (event) => printa(7);
oito.onclick = (event) => printa(8);
nove.onclick = (event) => printa(9);
mais.onclick = (event) => printa('+');
menos.onclick = (event) => printa('-');
ponto.onclick = (event) => printa('.');
vezes.onclick = (event) => printa('x');
divisao.onclick = (event) => printa('/');
apagar.onclick = (event) => excluir();
AC.onclick = (event) => deletar();
igual.onclick = (event) => resultado();

function printa (name) {
  let valor = document.createTextNode(name);
  conta.appendChild(valor);
}

function excluir() {
  let valor = conta.innerHTML.substr(0,(conta.innerHTML.length - 1));
  conta.innerHTML = "";  
  conta.innerHTML = valor;
}

function deletar() {
  conta.innerHTML = "";
}

function resultado() {
  let res = conta.innerHTML;
  if(res.indexOf('+') >= 0) {
    let arr = res.split('+');
    let soma = parseInt(arr[0]) + parseInt(arr[1]);
    conta.innerHTML = soma;
  } else if (res.indexOf('-') >= 0) {
    let arr = res.split('-');
    let subtracao = parseInt(arr[0]) - parseInt(arr[1]);
    conta.innerHTML = subtracao;
  } else if(res.indexOf('/') >= 0) {
    let arr = res.split('/');
    let div = parseInt(arr[0]) / parseInt(arr[1]);
    conta.innerHTML = div;
  } else if(res.indexOf('x') >= 0) {
    let arr = res.split('x');
    let multi = parseInt(arr[0]) * parseInt(arr[1]);
    conta.innerHTML = multi;
  }
}