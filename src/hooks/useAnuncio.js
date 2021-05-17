import React, {useState} from 'react'
function useAnuncio(){
  const  [values, setValue] = useState([])

  function addValue(
      anuncio, 
      cliente, 
      dataInicio, 
      dataTermino, 
      investimentoDia,
      valorTotal,
      quantidadeMaximaVizualizacao,
      quantidadeMaximaCliques,
      quantidadeMaximaCompartilhamentos,
      ){
    setValue([...values, {
      anuncio, 
      cliente, 
      dataInicio, 
      dataTermino, 
      investimentoDia,
      valorTotal,
      quantidadeMaximaVizualizacao,
      quantidadeMaximaCliques,
      quantidadeMaximaCompartilhamentos,
    } ])
  }
  return [values, addValue]
}

export default useAnuncio