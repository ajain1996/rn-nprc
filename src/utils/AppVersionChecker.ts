import deviceInfoModule from "react-native-device-info"

import VersionCheck from 'react-native-version-check';

import logger from './logger';

//yarn add @types/react-native-version-check --dev

export const isLatestVersion = () => {
  const versionName = deviceInfoModule.getVersion()
  logger(versionName);
}
