import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import Animated, { interpolate, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
import { Styles } from '../styles';


interface AnimatedView {
  children: React.ReactNode;
  iOpacity: number;
}
const AnimatedView = ({ children, iOpacity }: AnimatedView) => {
  const navigation = useNavigation()
  const [fade, toggle] = useState(false)
  const progress = useDerivedValue(() => {
    return fade ? withTiming(1, { duration: 300 }) : withTiming(0, { duration: 200 })
  }, [fade])
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [0, 1],
      [iOpacity, 1],
    )
    return { opacity }
  })

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      toggle(true)
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      toggle(false)
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Animated.View style={[Styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  )
}

export default AnimatedView

AnimatedView.defaultProps = {
  iOpacity: 0,
}