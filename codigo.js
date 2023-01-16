function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O seu valor é reais é: " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor2");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmReal = valorEmEuroNumerico * 5.16;
  console.log(valorEmReal);

  var elementoValorConvertidoE = document.getElementById("valorConvertidoE");
  var valorConvertidoE = "O valor em reais é: " + valorEmReal;
  elementoValorConvertidoE.innerHTML = valorConvertidoE;
}

function ConverterBit() {
  var valorMoeda = document.getElementById("valor3");
  var valor = parseFloat(valorMoeda.value);
  var valorEmBitcoin = valor * 0.0000097;
  console.log(valorEmBitcoin);

  var valorElemento = document.getElementById("valorConvertidoB");
  var valorConvertidoB = "Seu dinheiro em Bitcoin é ₿ " + valorEmBitcoin;
  valorElemento.innerHTML = valorConvertidoB;
}
