import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ttcBlue = '#004989';

var username = 'Arne Reijntjes';

export default function App() {
  return (
    <View>
      <View style={styles.NavWrap}>
        <View style={styles.hamburger}>A</View>
        <View style={styles.navCenter}>
          <Text style={{ color: '#fff', fontWeight: 700 }}>TTC</Text>
          <Text style={{ color: '#fff', fontSize: 10 }}>{ username }</Text>
        </View>
        <View style={styles.infoWrap}>B</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NavWrap: {
    backgroundColor: ttcBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5
  },

  navCenter: {
    alignItems: 'center'
  }
});
