import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { SpaceBetweenRow } from './Wrapper'
import HeaderLeft from './HeaderLeft'
import { Icons } from './Icon'
import { Colors } from '../styles'
import NavigationService from '../navigation/NavigationService'
import { Size } from '../constants'


export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <SpaceBetweenRow>
        <HeaderLeft
          iconType={Icons.AntDesign}
          iconName='arrowleft'
          color={Colors.white}
          onPress={() => { NavigationService.goBack() }}
        />
      </SpaceBetweenRow>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Size.vl + Size.s + Size.xs,
    backgroundColor: Colors.primary,
    paddingTop: Size.xs
  }
})
