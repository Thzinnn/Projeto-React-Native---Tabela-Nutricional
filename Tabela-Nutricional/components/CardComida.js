import {Text, View, StyleSheet, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CardComida = ({comida}) => {

  const navigation = useNavigation()

  return (

    // onPress={() => navigation.navigate('Editar', {user})}

    <Pressable >
        <View style={styles.card}>
            <View>
                <Text style={styles.email}>{comida.nome}</Text>
                <Text style={styles.email}>{comida.calorias}</Text>
                <Text style={styles.email}>{comida.carboidrato}</Text>
                <Text style={styles.email}>{comida.gorduras_saturadas}</Text>
                <Text style={styles.email}>{comida.gorduras_trans}</Text>
                <Text style={styles.email}>{comida.proteinas}</Text>
                <Text style={styles.email}>{comida.sodio}</Text>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'colunm',
        alignItems: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#F2C159',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },
    email: {
        marginTop: 4,
        color: '#FFF'
    }
})

export default CardComida