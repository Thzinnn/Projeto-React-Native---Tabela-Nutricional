import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


const Body = () => {
    return (
            <View style={styles.Body}>
                <ImageBackground 
                    source={require('../assets/image-background.png')}
                        style={styles.bg}
                >

                </ImageBackground>
            </View>

            )
}

const styles = StyleSheet.create({ 
    Body: {
        width: '100%',
      },
      bg: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
      }
})

export default Body