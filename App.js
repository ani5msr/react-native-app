import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './Products';
import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const mystate = useSelector((state) => state.change);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ProductList/>
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
