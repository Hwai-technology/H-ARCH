import { View, Text, StyleSheet } from "react-native";

export default function HomeRoute() {
  return (
    <View style={styles.container}>
      <Text>Welcome to your app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
