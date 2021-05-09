import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { Container } from './styles';

const ParteUm = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </View>
      
      <View style={styles.investiment}>
        <View style={styles.investimentContentTitle}>
          <Text style={styles.investimentTitle}>
            Quando vamos investir hoje?
          </Text>
        </View>
        
        <View style={styles.investimentContentInput}>
          
          <TextInput
            style={styles.investimentInput}
            placeholder={"R$"}
          />
          <TouchableOpacity style={styles.investimentButton}>
            <AntDesign name="check" size={24} color="black" />
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.results}>
        
        <Text>Valor Investido:</Text>

        <Text>
          Visualizações Esperadas:
        </Text>

      </View>

      <View style={styles.containerResult}>
        <View style={styles.contentResult}>
          <MaterialCommunityIcons name="currency-brl" size={24} color="black" />
          <Text>24,00</Text>
        </View>
        <View style={styles.contentResult}>
          <MaterialIcons name="supervisor-account" size={24} color="black" />
          <Text>2400</Text>
        </View>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  investiment:{
    backgroundColor: '#E6E1FA',
    paddingHorizontal: 80,
    paddingVertical: 50,
    borderRadius: 20,
  },
  investimentTitle:{},
  investimentContentTitle:{},
  investimentContentInput:{},
  investimentInput:{},
  investimentButton:{},
  backButton:{}

})

export default ParteUm;