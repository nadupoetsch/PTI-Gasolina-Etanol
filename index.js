let gasolina, etanol, resultado, pergunta = 'S'

alert('Esta calculadora ajuda na escolha do combustível para seu veículo baseado nos valores e consumo.')
alert('Vamos verificar qual deles é o melhor para você.')


while(pergunta.toUpperCase() == 'S'){
  
  gasolina = parseFloat(prompt('\nQual o valor da Gasolina?'))
  etanol = parseFloat(prompt('Qual o valor do Etanol?'))
  resultado = etanol/gasolina
  
  if(resultado == 0.7){
    alert('Abasteça com o combustivel que preferir')
  }
  else if(resultado < 0.7){
    alert('Abasteça com Etanol')
  }
  else if(resultado > 0.7){
    alert('Abasteça com Gasolina')
  }
  
  pergunta = prompt('\nDeseja realizar um novo calculo? (s/n):')
}

alert('Calculo encerrado.')