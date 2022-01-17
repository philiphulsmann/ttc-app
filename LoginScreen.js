import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ttcBlue = '#004989';

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Image
          style={styles.ttcLogo}
          source={require('./assets/ttc-logo-white.svg')}
          resizeMode='contain'
        />
      </View>
      <View style={styles.headerAfter}>
        <Text style={styles.loginTitle}>Inloggen</Text>
        <View style={styles.formControl}>
          <TextInput
            style={styles.input}
            placeholder='Gebruikersnaam'
          />
        </View>

        <View style={styles.formControl}>
          <TextInput
            style={styles.input}
            placeholder='Wachtwoord'
          />
        </View>

        <View style={styles.passForget}>
          Wachtwoord vergeten?
        </View>

        <View style={styles.loginBtnWrap}>
          <Pressable style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Inloggen</Text>
          </Pressable>
        </View>

        <View style={styles.lineBreak}></View>

        <View>
          <Text style={styles.loginSubText}>Voor het inloggen bij de TTC app gebruik je hetzelfde account als bij https://www.ttc-tegelen.nl</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '250px',
    backgroundColor: ttcBlue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px'
  },

  ttcLogo: {
    width: '100%',
    height: 90
  },

  headerAfter: {
    padding: '25px'
  },

  loginTitle: {
    fontFamily: 'Open Sans',
    fontSize: '24px',
    marginBottom: '25px'
  },

  formControl: {
    paddingHorizontal: 10,
    marginBottom: 20
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  passForget: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    color: '#d8d8d8',
    textDecorationLine: 'underline'
  },

  btnPrimary: {
    backgroundColor: ttcBlue,
    borderRadius: 5,
    textAlign: 'center',
    padding: 10,
    marginTop: 25
  },

  btnPrimaryText: {
    color: '#fff',
    fontSize: 18
  },

  lineBreak: {
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
    marginTop: 50,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },

  loginSubText: {
    fontFamily: 'Open Sans'
  }
});
