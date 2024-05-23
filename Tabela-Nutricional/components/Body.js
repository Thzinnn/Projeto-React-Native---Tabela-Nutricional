import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Body = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.Body}>
            <ImageBackground
                source={require('../assets/image-background.png')}
                style={styles.bg}
            >
                {/* onPress={() => navigation.navigate('Editar', { user })} */}

                <Pressable onPress={() => navigation.navigate('Cadastrar Comida')}>
                    <View style={styles.card}>
                        <View style={styles.comida}>
                            <Image
                                style={styles.comidaImg}
                                source={require('../assets/cidades-com-comida-brasileira.jpg')}
                            />
                        </View>
                        <View>
                            <Text style={styles.texto}>Cadastro de comida</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable>
                    <View style={styles.card}>
                        <View style={styles.comida}>
                            <Image
                                style={styles.comidaImg}
                                source={require('../assets/shutterstock_1903144615-696x464.jpg')}
                            />
                        </View>
                        <View>
                            <Text style={styles.texto}>Cadastro de Refeições</Text>
                        </View>
                    </View>
                </Pressable>

            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    Body: {
        width: '100%',
        alignItems: 'center'
    },
    bg: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    card: {
        flexDirection: 'colunm',
        alignItems: 'center',
        width: '80%',
        height: 220,
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginTop: 100,
        marginHorizontal: '10%',
        backgroundColor: '#F5DBA4'
    },
    comida: {
        width: '100%'
    },
    comidaImg: {
        width: '100%',
        height: 140,
        borderRadius: 15,
    },
    texto: {
        fontWeight: '500',
        fontSize: 20,
        marginVertical: 25
    }
})

export default Body