import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  
  // Add a button to the app that will send a request to the server localhost:3000/
  // The server will respond with a message that will be displayed on the app


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Connected to Web, IOS and Android!</Text>
      <Text>Next Steps: Server CRUD and others </Text>
      <Pressable onPress={() => alert('Hello World!')}>
        <Text>Pressable</Text>  
      </Pressable>


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
