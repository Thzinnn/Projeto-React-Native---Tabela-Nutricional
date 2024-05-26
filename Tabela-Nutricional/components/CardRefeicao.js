import {Text, View, StyleSheet, Pressable, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonList from './ButtonList'

const CardRefeicao = ({refeicao}) => {

  const navigation = useNavigation()

    const removeRefeicao = async () =>{
      try{
        
        const result = await fetch('http://localhost:4444/refeicao/'+refeicao.id, {
          method: "DELETE",
          headers:{
            "Content-Type": "application/json"
          }
        })
        const data = await result.json()
        console.log(data)
        if(data?.success){
          navigation.goBack()
        } else {
          alert(data.error)
        }
      } catch (error){
        console.log('Error removeRefeicao ' + error.message)
        alert(error.message)
      }
    } 

  return (

    // onPress={() => navigation.navigate('Editar', {user})}

    <Pressable >
        <View style={styles.card}>
            <View>
                <Text style={styles.email}>Nome:   {refeicao.nome}</Text>
            </View>
            <View>
                <ButtonList style={styles.button}
                title="Editar Comida"
                 onPress={() => navigation.navigate('Editar Refeição', {refeicao})}
                />
                <ButtonList style={styles.button}
                title="Remover Comida"
                onPress={removeRefeicao}
                />
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'colunm',
        width: 370,
        height: 250,
        backgroundColor: '#F2C159',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },
    email: {
        marginTop: 4,
        color: '#FFF',
        marginHorizontal: 15,
    },
    button: {
        backgroundColor: "#000000",
        color: "#FFF",
        width: "50%",
    },
    botoes: {
        justifyContent: "center"
    }
    
})

export default CardRefeicao