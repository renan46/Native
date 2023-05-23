import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main'
import Form from './src/components/Form';
import ResultImc from './src/components/Form/ResultImc';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      
      <Main/>
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
