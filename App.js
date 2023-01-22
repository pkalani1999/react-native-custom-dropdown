import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CustomDropdown from './src/CustomDropdown';

const options = ['Option 1', 'Option 2', 'Option 3'];
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      {modalOpen && (
        <CustomDropdown
          options={options}
          modalOpen={modalOpen}
          selectedOption={selectedOption}
          onPress={() => setModalOpen(!modalOpen)}
          onSelect={option => {
            setSelectedOption(option);
          }}
        />
      )}
      <View style={styles.container}>
        <Button
          title="SELECT ME"
          style={styles.button}
          color="teal"
          onPress={() => setModalOpen(!modalOpen)}
        />
        <Text style={styles.selectedOption}>
          {selectedOption ? 'Selected: ' + selectedOption : 'Select an option'}
        </Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    width: 200,
    padding: 10,
    color: 'white',
    borderRadius: 10,
    elevation: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  selectedOption: {
    margin: 10,
    fontSize: 18,
    color: 'gray',
  },
});
