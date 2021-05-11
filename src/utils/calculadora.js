const valorInvestidoInicialmente = (valorRecebido) => {
  return Number(valorRecebido) * 30
}

const shareByClick = vizualizacaGerada =>{
  let countClick = 0
  while (vizualizacaGerada >= 100) {
    countClick++
    
    vizualizacaGerada = vizualizacaGerada-100
  }
  
  console.log("vizualizacaGerada")
  console.log(countClick)

  return countClick*12
}

const vizualizationByShare = (value) =>{
  let clickedValue = shareByClick(value)
  let vizualizationByShared = 0
  while (clickedValue>=20) {
    vizualizationByShared += 9*40
    vizualizationByShared += 1
    clickedValue = clickedValue-20
  }
  return vizualizationByShared
}

export default function getVisualization(valueInvested){
  let vizualizacaoTotal = valorInvestidoInicialmente(valueInvested)
  vizualizacaoTotal+=vizualizationByShare(vizualizacaoTotal)

  return String(vizualizacaoTotal)
}