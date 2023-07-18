import Clipboard from "@react-native-clipboard/clipboard";

import { showAndroidToast } from './ui/androidToast';

export const copy = async () => {
  await Clipboard.setString('');
  showAndroidToast('copied', 'short')
}