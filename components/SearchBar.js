import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const SearchBar = ({ onChangeText, text }) => {
  return (
    <TextInput
      style={tw`h-10 border-gray-300 border-2 w-11/12 rounded-xl p-2 pl-4`}
      onChangeText={onChangeText}
      value={text}
      placeholder='Image search'
    />
  )
}

export default SearchBar

const styles = StyleSheet.create({})
