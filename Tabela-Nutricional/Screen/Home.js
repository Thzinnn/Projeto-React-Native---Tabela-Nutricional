import Body from "../components/Body";
import Header from "../components/Header"
import { StyleSheet, Text, View, Image } from 'react-native';

const Home = () => {
    return ( 
        <View style={styles.camada_um}>
        <Header/>
        <Body/>
        </View>
    )
}

const styles = StyleSheet.create({ 
    camada_um: {
        flex: 1,
        width: '100%'
    }
})

export default Home