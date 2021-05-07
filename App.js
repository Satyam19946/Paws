import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from "./components/card.js";
import ButtonBar from "./components/buttonBar.js";

export default function App() {

  return (
    <View style={styles.container}>
      <Card key={"myCard"} style={styles.card}/>
      <ButtonBar style={styles.buttonBar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },

  card: {
    width: '100%',
    height: '90%',
    marginBottom: '10px',
  },

  buttonBar: {
    flex: 0.10,
    color: '#123',
    alignSelf: 'center',
    justifyContent: 'center',
  }
});