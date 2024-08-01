import {View, Text} from 'react-native';
import React from 'react';
import Button from '../shared/Button';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button text="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default HomeScreen;
