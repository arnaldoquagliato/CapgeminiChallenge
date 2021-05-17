import React, {useState, useEffect} from 'react';
import { View, Modal, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ModalForm = ({modalVisible, handleModal}) => {
  const [showModal, setShowModal] = useState(false)
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [textAd, setTextAd] = useState(" ")
  const [cliente, setCliente] = useState(" ")
  const [dataInicio, setDataInicio] = useState(" ")
  const [dataTermino, setDataTermino] = useState(" ")
  const [investimentoDia, setInvestimentoDia] = useState(" ")
  

  const getData = (data) =>{
    if(data == undefined || data == 'NaN/NaN/NaN') return "DD/MM/YYYY"
    let dia = data.getDate() + 1;
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    dia < 10 ? (dia = `0${dia}`) : (dia = dia);
    mes < 10 ? (mes = `0${mes}`) : (mes = mes);
    return dia + '/' + mes + '/' + ano;
}

  const onChangeInicio = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDataInicio(getData(currentDate))
  };
  const onChangeFim = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setDataTermino(getData(currentDate))
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const onChangeText = (text) => setTextAd(text)
  return(
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >

          <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleModal()
                }}>
                <Feather name="x-circle" size={24} color="red" />
            </TouchableOpacity>

              <View style={styles.content}>
                <Text style={styles.title}>
                  Anúncio
                </Text>
                <TextInput 
                style={styles.input} 
                onChangeText={text => setTextAd(text)}
                value={textAd}
                placeholder={'Anúncio'}
                numberOfLines={1}
                />
              </View>
          
            <View style={styles.content}>
              <Text style={styles.title}>
                Cliente
              </Text>
              <TextInput 
                style={styles.input} 
                onChangeText={text => setCliente(text)}
                value={cliente}
                placeholder={'Qual o seu nome?'}
                numberOfLines={1}
              />
            </View>
         
              <View style={styles.data}>
                <View style={styles.content}>
                  <Text style={styles.title}>Inicio</Text>
                  <View>
                  <Button onPress={showDatepicker} title="Show date picker!" />
                </View>
               {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                  )}
                </View>
                <View style={styles.content}>
                  <Text style={styles.title}>Término</Text>
                  <View>
                  <Button onPress={showDatepicker} title="Show date picker!" />
                </View>
               {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                  )}
                </View>
              </View>

              <View style={styles.content}>
                <Text style={styles.title}>
                  Investimento 
                </Text>
                <TextInput 
                  style={styles.input} 
                  onChangeText={text => setInvestimentoDia(text)}
                  value={investimentoDia}
                  keyboardType={'numeric'}
                  
                />
             </View>
            
          </View>
      </Modal>
    </View>
    );
}

const styles = StyleSheet.create({
  button:{
    marginLeft: windowWidth/1.2,
    height: windowHeight/50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: '#E9FAD2',
    borderRadius: 20,
    marginVertical: windowHeight/4,
    width: windowWidth/1.10
  },
  content:{
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  input:{
    borderRadius: 10,
    borderColor: '#D2D2D2',
    borderWidth: 2,
  },
  data:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'roboto-bold',
    fontSize: 16,
    paddingBottom:10
  },
})
export default ModalForm;