import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#FCFDFE',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48,
        }}>
        Nome do Evento
      </Text>
      <Text
        style={{
          color: '#6b6b6b',
          fontSize: 16,
        }}>
        3 de novembro de 2022
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
});
