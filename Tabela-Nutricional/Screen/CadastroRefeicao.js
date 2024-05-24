import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

const App = () => {
  const [dropdownCount, setDropdownCount] = useState(0);
  const [options, setOptions] = useState([
    { label: 'Opção 1', value: 'option1' },
    { label: 'Opção 2', value: 'option2' },
    { label: 'Opção 3', value: 'option3' },
  ]);
  const [options2, setOptions2] = useState([
    { label: '100 gramas', value: '1' },
    { label: '200 gramas', value: '2' },
    { label: '300 gramas', value: '3' },
    { label: '400 gramas', value: '4' },
    { label: '500 gramas', value: '5' },
    { label: '600 gramas', value: '6' },
    { label: '700 gramas', value: '7' },
    { label: '800 gramas', value: '8' },
    { label: '900 gramas', value: '9' },
    { label: '1 kg', value: '10' },
  ]);
  const [dropdownComponents, setDropdownComponents] = useState([]); // State to store dropdown components

  const addDropdown = () => {
    const newDropdown = (
      <View key={dropdownCount} style={styles.dropdownContainer}>
        <Picker
          selectedValue={null}
          onValueChange={() => {}}
          style={styles.dropdown}
          itemStyle={{
            backgroundColor: '#FFF',
            color: '#ffffff',
            padding: 10,
            borderRadius: 10,
          }}
        >
          
          {options.map((option) => (
            <Picker.Item label={option.label} value={option.value} key={option.value} />
          ))}
        </Picker>
        <Picker
          selectedValue={null}
          onValueChange={() => {}}
          style={styles.dropdown}
          itemStyle={{
            backgroundColor: '#FFF',
            color: '#ffffff',
            padding: 10,
            borderRadius: 10,
          }}
        >
          {options2.map((option) => (
            <Picker.Item label={option.label} value={option.value} key={option.value} />
          ))}
        </Picker>
      </View>
    );
    setDropdownCount(dropdownCount + 1);
    setOptions([...options, { label: `Opção ${dropdownCount + 1}`, value: `option${dropdownCount + 1}` }]);
    setOptions2([...options2, { label: `Opção ${dropdownCount + 1}`, value: `option${dropdownCount + 1}` }]);
    setDropdownComponents([...dropdownComponents, newDropdown]);
  };

  return (
    <View style={styles.container}>
      <Header/>
      {dropdownComponents}
      <Button title="Adicionar Comida" onPress={addDropdown} />
      <Button title="Cadastrar Refeição" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownContainer: {
    marginBottom: 10,
    marginLeft: '15%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
  dropdown: {
    backgroundColor: '#FFF',
    width: '80%',
    height: 40,
    borderRadius: 15,
    marginBottom: 5,
  },
});

export default App;
