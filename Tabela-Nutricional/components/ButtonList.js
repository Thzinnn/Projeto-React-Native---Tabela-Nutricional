import { Pressable, View, Text, StyleSheet } from "react-native"

const ButtonList = ({title, onPress}) => {
  return (
    <Pressable  style={styles.tHButton} onPress={onPress}>
        <View style={styles.customButton}>
            <Text style={styles.textButton}>{title}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#000000",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: "50%",
        
      },
      tHButton: {
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 15,
      },
      textButton: {
        fontWeight: '500',
        textAlign: 'center',
        color: "#FFF"
      }
})

export default ButtonList