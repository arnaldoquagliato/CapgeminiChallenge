import React, {useState} from 'react'
import getVisualization from "../utils/calculadora";
function useCalculadora(){
  const  [values, setValue] = useState([])

  function addValue(value){
    setValue([...values, {valueInvested:value, peopleVizualizations: getVisualization(value)} ])
  }
  return [values, addValue]
}

export default useCalculadora