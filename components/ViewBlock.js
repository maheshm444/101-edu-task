import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const ViewBlock = ({ value, title }) => {
  return (
    <View style={tw`flex flex-row`}>
      <Text style={tw`text-black font-bold`}>{title} </Text>
      <Text>{value}</Text>
    </View>
  )
}

export default ViewBlock
