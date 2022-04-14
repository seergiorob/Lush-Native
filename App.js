import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home'
import Blog from './src/Screens/Blog'
import SignInScreen from './src/Screens/SignInScreen'
import SignUpScreen from './src/Screens/SignUpScreen'
import Shop from './src/Screens/Shop'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './src/redux/reducers/mainReducer.js'


export default function App() {

  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  return (
    <Provider store={reduxStore}>
    <View style={styles.container}>
      <Home/>
      {/* <Blog/> */}
      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <Shop/> */}
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
