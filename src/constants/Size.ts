import { StatusBar } from "react-native";
import { Dimensions, Platform } from "react-native";
import { h, w } from "../utils";

export const { width: wWidth, height: wHeight } = Dimensions.get('window');
export const { width: width, height: height } = Dimensions.get('window');

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const isLargeScreen = wWidth > 700;
const smallDevice = wHeight <= 550;

export default {
  vs: w(1),//4
  xs: w(2),//8
  s: w(2.4),//10
  s12: w(3),//12
  s14: w(3.4), //14
  m: w(4),//16
  l: w(4.9),//20
  ml: w(5.8),//24
  xl: w(6.2),//28
  vl: w(10.2),//40
  w100: w(24.4),

  _vvs: h(0.1),
  _vs: h(0.5),
  _xs: h(1),
  _s: h(1.22),
  _12: h(1.5),
  _m: h(1.95),
  _l: h(2.45),
  _ml: h(2.94),
  _xl: h(3.4),
  _vl: h(4.89),

  wWidth,
  wHeight,
  width,
  height,
  isLargeScreen,
  smallDevice,
  STATUSBAR_HEIGHT,
};