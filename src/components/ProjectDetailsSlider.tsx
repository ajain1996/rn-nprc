import * as React from 'react';

import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper'
import Button from './Button';
import { Colors, Styles } from '../styles';
import MText from './Text';
import { Size } from '../constants';
import { h, w } from '../utils';

const slideList = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
  },
];

export default function ProjectDetailSlider() {
  const [currIndx, setCurrIndx] = React.useState(1);

  return (
    <View style={{ height: h(26) }}>
      <Swiper
        dot={<View style={styles.dotStyle} />}
        activeDot={<View style={styles.activeDotStyle} />}
        index={currIndx}
        onIndexChanged={(indx) => { setCurrIndx(indx) }}
      >
        {slideList.map((item, indx) => {
          return (
            <View key={indx} style={styles.container}>
              <Image
                source={{ uri: item?.image }}
                resizeMode="stretch"
                style={styles.image}
              />
              <View style={styles.content}>
                <Button
                  title="NewLaunch"
                  background={Colors.tertiary}
                  textStyle={styles.btnText}
                  style={styles.btn}
                />
              </View>
            </View>
          )
        })}
      </Swiper>

      <View style={styles.currIndex}>
        <MText style={styles.currIndexText}>{currIndx + 1}/{slideList.length}</MText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Styles.centered,
  },
  image: {
    height: Size.w100 * 2,
    width: Size.wWidth,
  },
  btn: {
    width: w(21),
    height: Size._ml,
    borderRadius: Size.vs
  },
  btnText: {
    fontSize: Size.s,
    fontWeight: "600",
    color: Colors.white,
  },
  content: {
    position: "absolute",
    top: Size.m,
    right: 0,
    paddingHorizontal: Size.m,
  },
  currIndex: {
    paddingHorizontal: Size.s12,
    paddingVertical: Size.vs,
    color: Colors.white,
    position: "absolute",
    bottom: Size.vl,
    right: Size.s14,
    backgroundColor: Colors.black,
    opacity: 0.6,
    borderRadius: Size.vs
  },
  currIndexText: {
    fontSize: Size.s,
    fontWeight: "600",
    color: Colors.white,
  },
  dotStyle: {
    width: 0,
    height: 0,
  },
  activeDotStyle: {
    width: 0,
    height: 0,
  },
})