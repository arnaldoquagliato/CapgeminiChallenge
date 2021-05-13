import React , {useState}from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import useCalculadora from '../hooks/useCalculadora';
// import { Container } from './styles';

import { useNavigation } from "@react-navigation/core";
import ModalForm from "../componentes/ModalForm";
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ParteDois = () => {
  const [input, setInput] = useState('')
  const [values, addValue] = useCalculadora()
  const [isFocused, setIsFocused] = useState(false)
  const [isFIlled, setIsFilled] = useState(false)
  const [showModal, setShowModal] = useState(false)


  const navigation = useNavigation();
  
  const handleBack = () => {
    navigation.navigate('Welcome');
  }

  const handleModal = () => {
    setShowModal(!showModal);
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
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} key={item.index} >
            <View style={styles.containerResult} >
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
      <View style={styles.header}>
        <View style={styles.content}>
          <TouchableOpacity onPress={handleBack}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>

          <View style={styles.investimentContentTitle}>
            <Text style={styles.investimentTitle}>
              Cadastra Anúncio
            </Text>
          </View>

          <TouchableOpacity onPress={handleModal} style={styles.addButton}>
            <Text style={styles.addButtonText}>Adicionar</Text>
            <Ionicons name="add-circle-sharp" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      
      <ModalForm modalVisible={showModal} handleModal={handleModal}/>

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
  
  header:{
    padding: 30,
    backgroundColor: '#E6E1FA',
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  investimentTitle:{
    fontFamily: 'roboto-bold',
    fontSize: 16,
  },
  investimentInput:{
    flexDirection: 'row',
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
  
  addButton:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C8CDDE',
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  addButtonText:{
    marginRight: 5,
    fontFamily: 'roboto-bold'
  }

})

export default ParteDois;