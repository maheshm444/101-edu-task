import React from 'react';
import { Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CustomText = ({text}) => {
  return <Text style={tw`font-bold text-xl`}>{text}</Text>
}

export default CustomText
