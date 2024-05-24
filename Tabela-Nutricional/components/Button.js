import { Pressable, View, Text, StyleSheet } from "react-native"

const Button = ({title, onPress}) => {
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
        backgroundColor: "#F2C159",
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 28,
      },
      tHButton: {
        borderRadius: 15,
        marginVertical: 8
      },
      textButton: {
        fontWeight: '500',
        textAlign: 'center'
      }
})

export default Button
