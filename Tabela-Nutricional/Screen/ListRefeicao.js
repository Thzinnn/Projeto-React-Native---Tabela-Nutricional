import {View, StyleSheet, FlatList, Text, Platform} from 'react-native'
import { useEffect, useState } from 'react'
import CardRefeicao from '../components/CardRefeicao'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'


const listRefeicao = () => {
  const navigation = useNavigation()

  const [refeicoes, setRefeicoes] = useState('')

  const getRefeicao = async () => {
    try{
      //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/Comida')
      const result = await fetch('http://localhost:4444/refeicao')
      const data = await result.json()
      console.log(data)
      setRefeicoes(data.refeicoes)
    } catch (error){
      console.log('Error getRefeicao ' + error.message)
    }
  }

  useEffect(()=>{
    getRefeicao()
  },[])

  console.log(refeicoes);

  return (
   
    <View style={{flex: 1}}>
         <Header/>
        <View style={styles.titleAdd}>
          <Text style={styles.usuariosText}>Suas Refeições</Text>
        </View>
        
        <View style={styles.listRefeicao}>
          {console.log(refeicoes)}
          {refeicoes.length ?
              <FlatList
                style={{width: '100%'}}
                data={refeicoes}
                renderItem={({item}) => <CardRefeicao refeicao={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListRefeicao}
              /> :
              <Text style={{color: '#F2C159'}}>Loading...</Text>
          }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    usuariosText: {
      marginBottom: 20,
        fontSize: 32,
        color: '#F2C159',
    },
    listRefeicao:{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    titleAdd:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 20,
      marginTop: 25,
    },
    flatListRefeicao: {
      alignSelf: 'center'
    }
  }
)

export default listRefeicao