import React from 'react'

import { StyleSheet, TouchableHighlight } from 'react-native'

import { Icon, Icons } from './Icon';
import { Size } from '../constants';
import { Colors, Styles } from '../styles';
import { w } from '../utils';


interface HeartIconProps {
  onPress?: () => void;
}

export default function HeartIcon({ onPress }: HeartIconProps) {
  return (
    <TouchableHighlight style={styles.heart} onPress={onPress}>
      <Icon
        name='heart'
        size={Size.s14}
        color={Colors.white}
        type={Icons.AntDesign}
      />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  heart: {
    width: w(7.8),
    height: w(7.8),
    backgroundColor: Colors.heart,
    borderRadius: Size.w100,
    position: "absolute",
    top: Size.xs,
    right: Size.xs,
    ...Styles.centered,
    opacity: 0.6
  }
});