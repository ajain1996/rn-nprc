/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as ReduxProvider } from "react-redux";
import Store from './src/redux/Store';

const provider = () => {
    return (
        <ReduxProvider store={Store}>
            <App />
        </ReduxProvider>
    )
}

AppRegistry.registerComponent(appName, () => provider);
