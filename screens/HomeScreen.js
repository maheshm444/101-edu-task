import React, { useEffect, useState, useCallback } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setClickedImage } from '../slices/searchSlice'
import { useNavigation } from '@react-navigation/native'
import CustomText from '../components/CustomText'
import SearchBar from '../components/SearchBar'
import SearchIcon from '../components/SearchIcon'
import { colors } from '../common/theme'

const HomeScreen = () => {
  const [text, onChangeText] = React.useState('')
  const [screenMode, setScreenMode] = useState('PORTRAIT')
  const [noOfCols, setNoOfCols] = useState(3)
  const [imageResult, setImageResult] = useState([])
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { clickedImage: stateClickedImage } = useSelector(
    (state) => state.search
  )
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=23142908-d84364210ef50383148318bf8&per_page=100&q=${text}`
      )
      .then((res) => {
        if (res) setImageResult(res.data.hits)
      })
      .catch((err) => setError(err))

    if (text === '') setImageResult([])
  }, [text])

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setScreenMode('PORTRAIT')
        dispatch(
          setClickedImage({
            screenMode: 'PORTRAIT',
          })
        )
        setNoOfCols(3)
      } else {
        setScreenMode('LANDSCAPE')
        dispatch(
          setClickedImage({
            screenMode: 'LANDSCAPE',
          })
        )
        setNoOfCols(6)
      }
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`flex m-4 items-center`}>
        <CustomText text='Image search sponsored by 101' />
        <View style={tw`mr-1`}>
          <View style={tw`flex flex-row w-full mb-4`}>
            <SearchIcon type='solid' color={colors.black} name='search' />
            <SearchBar onChangeText={onChangeText} value={text} />
          </View>

          {imageResult.length > 0 && text.length > 0 && noOfCols == 3 && (
            <FlatList
              numColumns={noOfCols}
              data={imageResult}
              renderItem={({ item }) =>
                renderItem(
                  item,
                  screenMode,
                  dispatch,
                  navigation,
                  stateClickedImage
                )
              }
              keyExtractor={(item) => '#' + item.id.toString()}
              key={'#'}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          )}
          {imageResult.length > 0 && text.length > 0 && noOfCols == 6 && (
            <FlatList
              numColumns={noOfCols}
              data={imageResult}
              renderItem={({ item }) =>
                renderItem(
                  item,
                  screenMode,
                  dispatch,
                  navigation,
                  stateClickedImage
                )
              }
              keyExtractor={(item) => '#' + item.id.toString()}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

function renderItem(item, screenMode, dispatch, navigation, stateClickedImage) {
  return (
    <TouchableOpacity
      style={{
        flex: screenMode === 'PORTRAIT' ? 1 / 3 : 1 / 6, //here you can use flex:1 also
        aspectRatio: 1,
      }}
      onPress={() => {
        dispatch(
          setClickedImage({
            clickedImage: item,
          })
        )
        navigation.navigate('ImageDetails')
      }}
    >
      <Image
        style={[
          {
            flex: 1,
            height: 100,
            width: 120,
            marginHorizontal: 2,
            marginVertical: 2,
          },
          stateClickedImage && stateClickedImage.id === item.id
            ? {
                borderColor: colors.red,
                borderWidth: 3,
              }
            : '',
        ]}
        resizeMode='cover'
        source={{
          uri: item.previewURL,
        }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
})
