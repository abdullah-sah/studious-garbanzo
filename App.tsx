import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>This is the homepage</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '2%',

    // width: 100,
    // height: 100,
  },
  title: {
    textAlign: 'center',
    width: '100%',
    padding: '12%',
    letterSpacing: 3,
    fontSize: 40,
  },
});
