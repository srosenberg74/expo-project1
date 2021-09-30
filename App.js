import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import koko from "./assets/kodiscabin.jpg";
import "./App.css";

export default function App() {
  const [picState,setPicState] = useState('default');

  function spinButton() {
    // document.getElementsByClassName('default').class = 'spin';
    setPicState('spin');
  }
  return (
    <View style={styles.container}>
      
      
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.inner}>
        <Image id="koko" className="default" style={styles.sam} source={koko} />
        <Text>Kodi</Text>
        <Button
        onPress={spinButton}
        title="SPIN"
        color="#841584"
/> 
        </View>
      </View>
      <View style={styles.footer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    
  },
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: 'grey',

  },
  body: {
    width: "100%",
    height: '80%',
    backgroundColor: 'cadetblue',
    textAlign: 'center',
  },
  footer: {
    width: "100%",
    height: '10%',
    backgroundColor: 'purple',
  },
  sam: {
    width: '400px',
    height: '400px',
    border: '10px solid darkblue',
    // borderWidth: '10px',
    // borderStyle: 'solid',
    borderRadius: '25%',
    margin: "auto",
    '&:hover': {
      transform: 'translateX("800px")',


    }
  },
 
  inner: {
    margin: "auto",
  },
//   default: {

//   },
//   @media (prefers-reduced-motion: no-preference) {
//   .App-logo {
//     animation: App-logo-spin infinite 20s linear;
//   }
// },
  
  // @keyframes cssAnimation: {
  //   from {
  //     -webkit-transform: rotate(0deg) scale(1) skew(0deg) translate(100px);
  //   }
  //   to {
  //     -webkit-transform: rotate(0deg) scale(2) skew(0deg) translate(100px);
  //   }
  // }
});
