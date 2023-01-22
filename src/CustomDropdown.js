import React from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const CustomDropdown = props => {
  const {options, modalOpen} = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => props.onPress()}
      onDismiss={() => props.onPress()}>
      <TouchableWithoutFeedback onPress={() => props.onPress()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {options.map((option, index) => (
              <View
                key={index}
                style={[
                  styles.modalOption,
                  option === props.selectedOption && styles.selectedOption,
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    props.onSelect(option);
                    props.onPress();
                  }}>
                  <Text style={styles.modalOptionText}>{option}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalOption: {
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  modalOptionText: {
    fontSize: 18,
    color: 'gray',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
    color: 'white',
  },
});

export default CustomDropdown;
