function cubo(numero) {
  return numero * numero * numero;
}

var numeroUsuario = prompt("Digite um número:");
var cuboUsuario = cubo(numeroUsuario);

alert("O cubo de " + numeroUsuario + " é " + cuboUsuario);

function fahrenheitToCelsius(tempF) {
    var tempC = (tempF - 32) * 5/9;
    return tempC;
  }
  
  var tempF = prompt("Digite a temperatura em graus Fahrenheit:");
  var tempC = fahrenheitToCelsius(tempF);
  
  alert(tempF + "°F é equivalente a " + tempC + "°C");

  function calcularAreaTriangulo(base, altura) {
    var area = (base * altura) / 2;
    return area;
  }
  
  var base = prompt("Digite o valor da base do triângulo:");
  var altura = prompt("Digite o valor da altura do triângulo:");
  
  var areaTriangulo = calcularAreaTriangulo(base, altura);
  
  alert("A área do triângulo é: " + areaTriangulo);
  
  function calcularAreaPerimetroCirculo(raio) {
    var area = Math.PI * Math.pow(raio, 2);
    var perimetro = 2 * Math.PI * raio;
    return [area, perimetro];
  }
  
  var raio = prompt("Digite o valor do raio do círculo:");
  
  var resultados = calcularAreaPerimetroCirculo(raio);
  var area = resultados[0];
  var perimetro = resultados[1];
  
  alert("A área do círculo é: " + area + "\nO perímetro do círculo é: " + perimetro);
  
  function calcularDesconto(valor) {
    var desconto = valor * 0.05;
    return desconto;
  }
  
  function verificarMaioridade(anoNascimento) {
    var dataAtual = new Date();
    var idade = dataAtual.getFullYear() - anoNascimento;
    
    if (idade >= 18) {
      return "Maior de idade";
    } else {
      return "Menor de idade";
    }
  }
    
  function calcularCombustivel(dinheiro) {
    const precoLitro = 5.0;
    const kmPorLitro = 20.0;
  
    const litros = dinheiro / precoLitro;
    const km = litros * kmPorLitro;
  
    return [litros, km];
  }
  
  const dinheiro = prompt("Quanto dinheiro você tem?");
  
  const resultados = calcularCombustivel(parseFloat(dinheiro));
  
  alert(`Com R$ ${dinheiro} você pode comprar ${resultados[0].toFixed(2)} litros de combustível e andar ${resultados[1].toFixed(2)} km.`);
  