import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, TextInput } from 'react-native';
import Header from '../components/Header';
import { useNavigation, useRoute} from '@react-navigation/native'
import Button from '../components/Button';

const EditarRefeicao = () => {

    const route = useRoute()
    const navigation = useNavigation()

    const {refeicao} = route.params

    const [txtNome, setTxtNome] = useState(refeicao.nome)

    const editRefeicao = async () =>{
        try{
          //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {

          const result = await fetch('http://localhost:4444/refeicao/'+refeicao.id, {
            method: "PUT",
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
          console.log('Error editRefeicao ' + error.message)
          alert(error.message)
        }
      
  } 
  return (
    <View style={styles.container}>
      <Header/>
      <TextInput 
          style={styles.input}
          placeholder='Nome'
          onChangeText={setTxtNome}
          value={txtNome}
      />
      <Button title="Editar Refeição" onPress={editRefeicao} />
      <Button 
        title="Voltar"
        onPress={() => navigation.navigate('Lista de Refeição')}
        />
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

export default EditarRefeicao;