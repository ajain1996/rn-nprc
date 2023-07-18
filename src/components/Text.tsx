import React from 'react'

import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, TextStyle } from 'react-native'


import Skeleton from './Skeleton';
import { w } from '../utils';
import { Size } from '../constants';


type textTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize'
export type textAlign = 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
type weight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
interface MTextProps {
  size?: number;
  color?: string;
  family?: string;
  children?: React.ReactNode | string | undefined;
  weight?: string;
  align?: textAlign;
  style?: TextStyle | TextStyle[] | undefined;
  padding?: number;
  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginBottom?: number;
  marginTop?: number;
  isBold?: boolean;
  lineHeight?: number;
  loading?: boolean;
  skH?: number | string;//sk refers to skeleton
  skW?: number | string;
  skBg?: string;
  skBR?: number;
  numberOfLines?: number,
  textTransform?: textTransform;
  adjustsFontSizeToFit?: boolean;
}

const MText = ({
  size,
  color,
  family,
  children,
  weight,
  align,
  marginHorizontal,
  marginVertical,
  style,
  paddingHorizontal,
  paddingVertical,
  padding,
  margin,
  marginBottom,
  marginTop,
  isBold,
  lineHeight,
  loading,
  skH,
  skW,
  skBR,
  skBg,
  textTransform,
  numberOfLines,
  adjustsFontSizeToFit,
  ...props
}: MTextProps) => {

  const theme = useTheme()
  if (loading && skW && skH) {
    return <Skeleton
      height={skH} width={skW} borderRadius={skBR}
      background={skBg} />
  }

  return (
    <Text
      {...props}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      numberOfLines={numberOfLines}
      style={[
        styles.text,
        {
          fontSize: size,
          color: color ? color : theme.colors.text,
          fontFamily: isBold ? "700" : family,
          // fontWeight: isBold ? 'bold' : weight,
          textAlign: align,
          marginVertical,
          marginHorizontal,
          paddingHorizontal,
          paddingVertical,
          margin,
          padding,
          marginTop,
          marginBottom,
          lineHeight,
          textTransform,
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

MText.defaultProps = {
  size: w(3.4),
  weight: 'normal',
  align: 'auto',
  skH: Size.s,
  skW: w(10),
  loading: false,
  adjustsFontSizeToFit: false,
}

export default MText;
const styles = StyleSheet.create({
  text: {
    fontFamily: "400",
    fontSize: w(3.4),
  },
})
