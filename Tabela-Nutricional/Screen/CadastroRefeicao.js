import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Button'
import { useNavigation} from '@react-navigation/native'
import Header from '../components/Header'


const CadastrarComida = () => {
    const navigation = useNavigation()

    const [txtNome, setTxtNome] = useState('')
    const [numCalorias, setNumCalorias] = useState('')
    const [numGor_Sat, setNumGor_Sat] = useState('')
    const [numGor_Trns, setNumGor_Trns] = useState('')
    const [numCarboidratos, setNumCarboidratos] = useState('')
    const [numProteinas, setNumProteinas] = useState('')
    const [numSodio, setNumSodio] = useState('')

    const postComida = async () =>{
        try{
          //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {

          console.log(numGor_Sat)
          const result = await fetch('http://localhost:4444/comida', {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({nome: txtNome,
                calorias: numCalorias,
                gorduras_saturadas: numGor_Sat,
                gorduras_trans: numGor_Trns,
                carboidratos: numCarboidratos,
                proteinas: numProteinas,
                sodio: numSodio
                })
          })
          const data = await result.json()
          console.log(data)
          if(data?.success){
            navigation.goBack()
          } else {
            alert(data.error)
          }
        } catch (error){
          console.log('Error postComida ' + error.message)
          alert(error.message)
        }
      } 

    return (
        <ScrollView>
          <Header/>


            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder='Nome'
                onChangeText={setTxtNome}
                value={txtNome}
                />
                <TextInput 
                style={styles.input}
                placeholder='Calorias'
                onChangeText={setNumCalorias}
                value={numCalorias}
                />
                <TextInput 
                style={styles.input}
                placeholder='Gorduras Saturadas em gramas'
                onChangeText={setNumGor_Sat}
                value={numGor_Sat}
                />
                <TextInput 
                style={styles.input}
                placeholder='Gorduras Trans em gramas'
                onChangeText={setNumGor_Trns}
                value={numGor_Trns}
                />
                <TextInput 
                style={styles.input}
                placeholder='Carboidratos em gramas'
                onChangeText={setNumCarboidratos}
                value={numCarboidratos}
                />
                <TextInput 
                style={styles.input}
                placeholder='Proteinhas em gramas'
                onChangeText={setNumProteinas}
                value={numProteinas}
                />
                <TextInput 
                style={styles.input}
                placeholder='Sodio em miligramas'
                onChangeText={setNumSodio}
                value={numSodio}
                />
                <Button 
                    title="Cadastrar Comida"
                    onPress={postComida}
                />
                <Button 
                    title="Voltar"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        padding: 40
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: 18,
        borderRadius: 15,
        padding: 10,
    }
})

export default CadastrarComida
