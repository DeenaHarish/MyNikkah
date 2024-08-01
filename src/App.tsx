/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from './shared/Button';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

function App(): React.JSX.Element {
  return (
    //     <SafeAreaView
    //       style={{
    //         display: 'flex',
    //         flex: 1,
    //         alignItems: 'center',
    //       }}>
    //       <Text style={{fontFamily: 'NunitoSans'}}>React Native Fun!</Text>
    //       <Text style={styles.textFOnt}>Welcome to My Nikkah!</Text>
    //       <Entypo name="code" size={50} color="green" />
    //       <Text className="text-red-600">tailwind</Text>
    //
    //       <Button
    //         text="Login"
    //         onPress={() => console.log('Login button pressed')}
    //       />
    //
    //       <FontAwesome name="twitter" size={50} color="blue" />
    //     </SafeAreaView>

    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    fontFamily: 'NunitoSans',
  },
  textFOnt: {
    fontFamily: 'AGENOVA',
  },
});

export default App;
