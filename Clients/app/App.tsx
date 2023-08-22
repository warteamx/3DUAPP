import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // make a call to the server
  fetch('http://localhost:3000', {
    method: 'GET',
    mode: 'no-cors',
  })
    .then((response) => response.json())
    .then((data) => console.log(data));


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Connected to Web, IOS and Android!</Text>
      <Text>Next Steps: Server CRUD and others </Text>
      <Text>Amelia adlñfkjañsdflkj </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
