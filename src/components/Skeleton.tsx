import React, { FC } from 'react'

import * as Animatable from 'react-native-animatable';
import { Colors } from '../styles';
import { Size } from '../constants';

export const defaultBaseColor = Colors.gray;

export interface SkeletonProps {
  height: number | string;
  width: number | string;
  mt?: number;
  mb?: number;
  borderRadius?: number;
  background?: string;
}

const fadeIn = {
  0: { opacity: 0.5 },
  1: { opacity: 1 },
}
const skeletonStyles = (
  height: number | string,
  width: number | string,
  mb: number,
  mt: number,
  borderRadius?: number,
  background?: string,
) =>
({
  backgroundColor: background ? background : defaultBaseColor,
  borderRadius: borderRadius || 2,
  lineHeight: 1,
  width: width,
  height: height,
  marginBottom: mb,
  marginTop: mt,
} as any);

const Skeleton: FC<SkeletonProps> = ({
  height,
  width,
  mb = 3,
  mt = 3,
  borderRadius,
}) => {
  const styles = skeletonStyles(height, width, mb, mt, borderRadius);

  return <Animatable.View
    easing="ease-out"
    iterationCount="infinite"
    direction="alternate"
    animation={fadeIn}
    style={styles} />;
}

export default Skeleton;

Skeleton.defaultProps = {
  width: Size.l,
  height: Size.l,
}