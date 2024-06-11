import {AppRegistry, Text, TextInput} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  // console.log('Message received in the background!', remoteMessage)
});
messaging().onMessage(async remoteMessage => {
  console.log('Message received in the FFFFF FORE GROUND!', remoteMessage);
});

// console.debug = function (message, data) {
//   console.log('[DEBUG]:', message, JSON.stringify(data, null, 2));
// };

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
