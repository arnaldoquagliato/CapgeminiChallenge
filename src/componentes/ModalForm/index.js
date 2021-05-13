import React, {useState, useEffect} from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const ModalForm = ({modalVisible, handleModal}) => {
  const [showModal, setShowModal] = useState(false)

  
  return(
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
          <TouchableOpacity
              onPress={() => {
                handleModal()
              }}>
                <Text>FEcha mo0dal</Text>
            </TouchableOpacity>
      </Modal>
    </View>
    );
}

export default ModalForm;