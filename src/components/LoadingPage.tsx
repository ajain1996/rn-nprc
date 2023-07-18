import React from 'react'

import { StyleSheet, View, ViewStyle } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { ActivityIndicator } from 'react-native-paper'

import { Container } from './Wrapper';
import { Colors, Styles } from '../styles';


type size = 'large' | 'small' | undefined;
interface Props {
  loading: boolean;
  size?: size;
  style?: ViewStyle;
}
export const SimpleLoader = ({ loading, size, style }: Props) => {
  if (loading) {
    return (
      <Container style={[styles.loader, style]}>
        <ActivityIndicator size={size} color={Colors.primary} />
      </Container>
    )
  }
  return null;
};

SimpleLoader.defaultProps = {
  size: 'small',
}

const LoadingPage = ({ size }: Props) => {
  return (
    <View style={Styles.centeredView}>
      <Animatable.View animation={'slideInRight'} duration={400} delay={1000}>
        <ActivityIndicator size={size} color={Colors.primary} />
      </Animatable.View>
    </View>
  )
};


LoadingPage.defaultProps = {
  size: 'large',
}

export default LoadingPage

const styles = StyleSheet.create({
  container: {
    ...Styles.centered,
  },
  loader: {
    ...Styles.centered,
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});
