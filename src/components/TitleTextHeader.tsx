import React from 'react'

import { StyleSheet, View } from 'react-native'

import MText from './Text';
import { Size } from '../constants';

type Props = {
  title: string;
  subtitle: string;
  boldText?: string;
}

const TitleTextHeader = ({ title, subtitle, boldText }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <MText style={styles.title}>{title}</MText>
      </View>
      <View style={styles.subtitleWrapper}>
        <MText style={styles.subtitleText}>{subtitle}
          {!!boldText && <MText style={styles.subtitleBoldText}>{boldText}</MText>}
        </MText>
      </View>
    </View>
  )
}

export default TitleTextHeader

const styles = StyleSheet.create({
  container: {
    marginVertical: Size.xs,
  },
  titleWrapper: {
    marginBottom: Size.xs,
  },
  title: {
    fontSize: Size.ml,
    fontWeight: "700",
  },
  subtitleWrapper: {
  },
  subtitleText: {
    lineHeight: Size.l,
  },
  subtitleBoldText: {},
})