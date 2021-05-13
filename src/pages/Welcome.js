import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
// import { Container } from './styles';
const Welcome = () => {
  const navigation = useNavigation();
  
  const handleCalculadora = () => {
    navigation.navigate('ParteUm');
  }

  const handleAnuncio = () => {
    navigation.navigate('ParteDois');
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>
          Desafio Capgemini
        </Text>
        <MaterialCommunityIcons name="tree" size={30} color="black" iconStyle={styles.iconStyle} />
      </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCalculadora}>
              <Text style={styles.text}>Calculadora</Text>
              <Entypo name="calculator" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAnuncio}>
              <Text style={styles.text}>Cadastrar Anúncio</Text>
              <FontAwesome5 name="adversal" size={24} color="black"/>
          </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentTitle:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40
  },
  title:{
    fontFamily: 'dancing-script-bold',
    fontSize: 30,
    marginRight: 10
  },
  buttonContainer: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#F2F3F5'
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 200,
    height: 100,
  },
  text:{
    marginRight: 20,
    fontFamily: 'roboto-bold'
  },
})
export default Welcome;