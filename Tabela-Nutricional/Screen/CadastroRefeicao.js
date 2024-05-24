import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, TextInput } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

const App = () => {


  const [comidas, setComidas] = useState([])
  const [dropdownCount, setDropdownCount] = useState(0);
  const [options, setOptions] = useState([]);
  const [txtNome, setTxtNome] = useState('')
  const [dropdownComponents, setDropdownComponents] = useState([]); // State to store dropdown components
  const options2 = [
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
  ];

  const getComida = async () => {
    try {
      const result = await fetch('http://localhost:4444/comida');
      const data = await result.json();
      console.log(data);
      setComidas(data.comidas);
  
      const options = data.comidas.map((comida) => ({
        label: comida.nome,
        value: comida.id,
      }));
      console.log('options result', options);
      setOptions(options);
    } catch (error) {
      console.error('Error getComidas', error.message);
    }
  };

  const postRefeicao = async () =>{
    try{
      //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {

      console.log(numGor_Sat)
      const result = await fetch('http://localhost:4444/refeicao', {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({nome: txtNome})
      })
      const data = await result.json()
      console.log(data)
      if(data?.success){
        navigation.goBack()
      } else {
        alert(data.error)
      }
    } catch (error){
      console.log('Error postRefeicao' + error.message)
      alert(error.message)
    }
  } 
 

  useEffect(()=>{
    getComida()
  },[])

  
  const addDropdown = () => {
    const newDropdown = (
      <View key={dropdownCount} style={styles.dropdownContainer}>
        <Picker
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
    setDropdownComponents([...dropdownComponents, newDropdown]);
  };

  return (
    <View style={styles.container}>
      <Header/>
      <TextInput 
          style={styles.input}
          placeholder='Nome'
          onChangeText={setTxtNome}
          value={txtNome}
      />
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
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginBottom: 18,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,  
}
});

export default App;
