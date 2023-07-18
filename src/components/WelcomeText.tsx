import React from 'react';

import { StyleSheet, View } from 'react-native';

import MText from './Text';
import { Size } from '../constants';
import { h, w } from '../utils';
import { Colors } from '../styles';


type Props = {
  element: string;
  first: boolean;
}
const WelcomeText = ({ element, first }: Props) => {
  const newTextArray = element.split('\n');
  const firstArray = newTextArray.splice(0, 1)[0].split(' ');
  const otherArray = newTextArray;
  const firstString = first ? firstArray.splice(0, 1).join() : firstArray.splice(0, firstArray.length - 1).join(' ');
  const secondString = firstArray.join(' ');
  const otherString = '\n' + otherArray.join('\n');
  // logger("firstString: " + firstString)
  // logger("secondString: " + secondString)
  // logger("otherString: " + otherString)

  return (
    <View>
      <View>
        {first ?
          <MText style={styles.textStyle}>
            <MText style={styles.highlighTextStyle}>{firstString} </MText>
            {secondString}
            {otherString}
          </MText> :
          <MText style={styles.textStyle}>
            {firstString}
            <MText style={styles.highlighTextStyle}> {secondString} </MText>
            {otherString}
          </MText>
        }
      </View>
    </View>
  );
}

export default WelcomeText;

const styles = StyleSheet.create({
  imageStyle: {
    height: h(70),
    width: w(100),
    marginBottom: -Size.xl * 2.2
  },
  textWrapper: {
    // paddingHorizontal: '5%'
  },
  highlighTextStyle: {
    fontSize: (Size.m * 2) - 2,
    fontWeight: "600",
    color: Colors.primary
  },
  textStyle: {
    fontSize: (Size.m * 2) - 2,
    fontWeight: "600",
  },
  button: {
    marginVertical: Size.xl,
    marginHorizontal: '5%'
  },
});