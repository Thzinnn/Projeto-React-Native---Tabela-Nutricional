import {View, StyleSheet, FlatList, Text, Platform} from 'react-native'
import { useEffect, useState } from 'react'
import CardComida from '../components/CardComida'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'




const ListComida = () => {
  const navigation = useNavigation()

  const [comidas, setComidas] = useState('')

  const getComida = async () => {
    try{
      //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/Comida')
      const result = await fetch('http://localhost:4444/comida')
      const data = await result.json()
      console.log(data)
      setComidas(data.comidas)
    } catch (error){
      console.log('Error getComidas ' + error.message)
    }
  }

  useEffect(()=>{
    getComida()
  },[])

  console.log(comidas);

  return (
   
    <View style={{flex: 1}}>
         <Header/>
        <View style={styles.titleAdd}>
          <Text style={styles.usuariosText}>Suas Comidas</Text>
        </View>
        
        <View style={styles.listComida}>
          {comidas.length ?
              <FlatList
                style={{width: '100%'}}
                data={comidas}
                renderItem={({item}) => <CardComida comida={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListComida}
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
    listComida:{
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
    flatListComida: {
      alignSelf: 'center'
    }
  }
)

export default ListComida