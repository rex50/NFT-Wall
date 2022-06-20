import { View, Image, Text, ToastAndroid } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import { CircleButton, RectButton } from './Button'
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo"

import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants'

const NFTCard = ({ data }) => {
  const navigation = useNavigation()

  const onLiked = () => {
    ToastAndroid.show(`${data.name} added to favourites!`, ToastAndroid.SHORT);
  }

  const onNavigateToDetailsPage = () => {
    navigation.navigate("Details", {data})
  }

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width: "100%", height: 200}}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
        />

        <CircleButton imgUrl={assets.heart} handlePress={ onLiked } right={10} top={10}/>
      </View>

      <SubInfo />

      <View 
        style={{
          width: "100%",
          padding: SIZES.font
        }}
      >
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View 
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <EthPrice price={data.price}/>
          <RectButton 
            minWidth={120}
            fontSize={FONTS.font}
            handlePress={ onNavigateToDetailsPage }
          />
        </View>
      </View>
    </View>
  )
}

export default NFTCard