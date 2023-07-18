import { Vibration } from "react-native";

type vibrationType = 'light' | 'good' | 'medium' | 'heavy';
export default (type: vibrationType, repeat?: boolean) => {
  let vibrate: number;
  switch (type) {
    case 'light': vibrate = 100; break;
    case 'good': vibrate = 200; break;
    case 'medium': vibrate = 300; break;
    case 'heavy': vibrate = 500; break;
    default: vibrate = 400;
  }
  Vibration.vibrate(vibrate, !!repeat)
}