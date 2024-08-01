import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../shared/Button';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button text="Login" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default LoginScreen;
