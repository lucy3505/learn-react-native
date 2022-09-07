import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layer}>
        <Text style={styles.textred}>hello</Text>
        <Text>App</Text>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'grey',
    color: 'white',
  },
  layer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textred: {
    color: 'red',
  },
});
