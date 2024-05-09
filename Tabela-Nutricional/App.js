import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import Header from './components/Header';



export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});


{/* <Image
        style={styles.imagem}
        source='https://icones.pro/wp-content/uploads/2021/04/icone-de-nourriture-jaune-symbole-png.png'
        /> */}