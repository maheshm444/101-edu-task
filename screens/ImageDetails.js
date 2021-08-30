import React from 'react'
import { Image, Text, View, ScrollView, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import ViewBlock from '../components/ViewBlock'

const ImageDetails = () => {
  const navigation = useNavigation()
  const { clickedImage, screenMode } = useSelector((state) => state.search)
  return clickedImage ? (
    <ScrollView style={tw`flex p-2`}>
      <Image
        style={screenMode === 'PORTRAIT' ? tw`h-72 w-96` : tw`h-72`}
        resizeMode='cover'
        source={{
          uri: clickedImage.previewURL,
        }}
      />
      <View style={tw`flex border-gray-300 border-t-2 mt-2 ml-3 mb-5`}>
        <View style={tw`flex mb-2`}>
          <Text style={tw`text-black font-bold text-lg`}>Image Details</Text>
        </View>
        <ViewBlock title='Uploaded By :' value={clickedImage.user} />
        <ViewBlock title='Downloads :' value={clickedImage.downloads} />
        <ViewBlock title='Comments :' value={clickedImage.comments} />
        <ViewBlock
          title='Resolution :'
          value={clickedImage.imageHeight + 'x' + clickedImage.imageWidth}
        />
        <ViewBlock title='Height :' value={clickedImage.imageHeight} />
        <ViewBlock title='Width :' value={clickedImage.imageWidth} />
        <ViewBlock title='Likes :' value={clickedImage.likes} />
        <ViewBlock title='Tags :' value={clickedImage.tags} />
        <ViewBlock title='Views :' value={clickedImage.views} />
      </View>
    </ScrollView>
  ) : (
    <Pressable onPress={navigation.navigate('MainHome')}>
      <Text>Go Home</Text>
    </Pressable>
  )
}

export default ImageDetails
