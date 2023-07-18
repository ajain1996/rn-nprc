import React from 'react'

import { Image, StyleSheet, ViewStyle } from 'react-native'

import { View } from 'react-native'
import HeartIcon from './HeartIcon';
import MText from './Text';
import { Size } from '../constants';
import { Colors } from '../styles';


interface ListData {
  name: string,
  price: string,
  image: string,
  address: string,
  lotSize: string,
  sqft: string,
}

interface PopularListItemProps {
  item: ListData;
  containerStyle?: ViewStyle;
}

export const PopularListItem = ({ item, containerStyle }: PopularListItemProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <Image
          source={{ uri: item?.image }}
          resizeMode="stretch"
          style={styles.image}
        />
        <HeartIcon onPress={() => { }} />
      </View>
      <View style={styles.content}>
        <MText style={[styles.listingTitle]}>
          {item?.name}
        </MText>
        <MText style={[styles.listingSubTitle]}>
          ₹ {item?.price}
        </MText>
        <MText style={[styles.location]}>
          {item?.address}
        </MText>
        <MText style={[styles.info]}>
          {item.lotSize}
        </MText>
        <MText style={[styles.info]}>
          Sqft {item?.sqft}
        </MText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Size.xs,
    marginRight: Size.m,
    width: Size.wWidth / 3,
  },
  image: {
    width: "100%",
    height: Size.wWidth / 5.4,
    borderRadius: Size.xs
  },
  listingTitle: {
    fontSize: Size.s14,
    fontWeight: "700",
    color: Colors.black,
  },
  listingSubTitle: {
    fontSize: Size.s12,
    fontWeight: "700",
    color: Colors.black,
  },
  address: {
    fontSize: Size.s12,
    fontWeight: "300",
    color: Colors.black,
  },
  content: {
    width: Size.wWidth / 2.8,
    marginTop: Size.s12,
  },
  location: {
    fontSize: Size.xs + 1,
    color: Colors.black,
    marginVertical: Size.xs,
  },
  info: {
    fontSize: Size.s + 1,
    color: Colors.black,
    marginBottom: Size.vs,
  },
})