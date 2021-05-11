import React , {useState}from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import useCalculadora from '../hooks/useCalculadora';
// import { Container } from './styles';

import { useNavigation } from "@react-navigation/core";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ParteUm = () => {
  const [input, setInput] = useState('')
  const [values, addValue] = useCalculadora()
  const [isFocused, setIsFocused] = useState(false)
  const [isFIlled, setIsFilled] = useState(false)

  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.navigate('Welcome');
  }

  const handleClick = value =>{
    addValue(value);
    setInput('')
  }

  const handleOnBlur = () =>{
    setIsFocused(false)
    setIsFilled(!!input)
  }

  const handleOnFocus = () =>{
    setIsFocused(true)
  }

  const renderItem = (item) => {
    const {peopleVizualizations, valueInvested} = item.item
    if(item.item.valueInvested)
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerResult}>
            <View style={styles.contentResult}>
              <MaterialCommunityIcons name="currency-brl" size={24} color="black" />
              <Text style={styles.valueResult}>{valueInvested}</Text>
            </View>
            <View style={styles.contentResult}>
              <MaterialIcons name="supervisor-account" size={24} color="black" />
              <Text style={styles.valueResult}>{peopleVizualizations}</Text>
            </View>
          </View>
      </TouchableWithoutFeedback>
    )
  }
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' :'height'}
      >
      
      <View style={styles.backButton}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.investiment}>
        <View style={styles.investimentContentTitle}>
          <Text style={styles.investimentTitle}>
            Quando vamos investir hoje?
          </Text>
        </View>
        
        <View style={styles.investimentContentInput}>
    
          <View style={styles.investimentInput}>
            {
              input ? <MaterialCommunityIcons name="currency-brl" size={18} color="black" /> : null 
            }
            <TextInput
              style={styles.input}
              placeholder={"R$"}
              value={input}
              keyboardType="numeric"
              onChangeText={input => setInput(input)}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}  
            />
          </View>

          <TouchableOpacity style={styles.investimentButton} onPress={ () => handleClick(input)}>
            <AntDesign name="check" size={24} color="black" />
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.results}>
        
        <Text  style={styles.columnValue}>Valor Investido</Text>
        <Text style={styles.columnValue}>Visualizações Esperadas</Text>

      </View>
     
      <FlatList 
        data={values}
        renderItem={(data) => renderItem(data)}
        keyExtractor={data => data.index}
      />
      
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: windowHeight/10
  },
  investiment:{
    backgroundColor: '#E6E1FA',
    paddingHorizontal: 70,
    paddingVertical: 30,
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: windowHeight/8
  },
  investimentTitle:{
    fontFamily: 'roboto-bold',
    fontSize: 16,
    marginLeft: 20,
  },
  investimentContentInput:{
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 30
  },
  investimentInput:{
    flexDirection: 'row',
  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: '#C0C3C6',
    paddingHorizontal: 50
  },
  results:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: windowHeight/24,
    marginLeft: windowWidth/10

  },
  columnValue:{
    fontSize: 16,
    fontFamily: 'roboto-bold'
  },
  containerResult:{
    backgroundColor: '#C8CDDE',
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  contentResult:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  valueResult:{
    fontFamily: 'roboto-bold',
    marginLeft: 10
  },
  backButton:{
    marginLeft: 30
  }

})

export default ParteUm;