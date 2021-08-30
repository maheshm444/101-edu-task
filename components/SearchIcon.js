import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
const SearchIcon = ({ type, color, name }) => {
  return (
    <Icon
      type={type}
      color={color}
      name={name}
      style={tw`p-2 rounded-full w-10`}
    />
  )
}

export default SearchIcon
