import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "red",
  },
});

export function Button() {
  return <View style={styles.button} />;
}
