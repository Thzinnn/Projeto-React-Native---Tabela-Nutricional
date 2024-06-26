import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation} from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation()

    return (
      

            <View style={styles.header}>
                <View style={styles.flex_header}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                <Image
                    style={styles.imagem}
                    source='https://icones.pro/wp-content/uploads/2021/04/icone-de-nourriture-jaune-symbole-png.png'
                />
                </Pressable>
                    <Text style={styles.texto_header}>Nutricional Table</Text>
                </View>
            </View>

            )
}

const styles = StyleSheet.create({ 
    header: {
        width: '100%',
        backgroundColor: '#F2C159'
      },

      imagem: {
        width: 75,
        height: 75,
        marginHorizontal: 10,
        overflow: 'hidden'
      },
    
      flex_header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },

      texto_header: {
        color: '#fff',
        fontSize: 28,
        margin: 'auto',
        textAlignVertical: 'center'
      },
})

export default Header