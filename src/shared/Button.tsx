import React from 'react';
import {View, Text, Pressable, PressableProps} from 'react-native';

interface ButtonProps extends PressableProps {
  text: string;
}

const Button = ({text, onPress, ...props}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <View className="px-5 py-1.5 rounded-lg bg-neutral-900 bg-opacity-80 border border-yellow-600">
        <Text className="text-lg text-center text-white">{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
