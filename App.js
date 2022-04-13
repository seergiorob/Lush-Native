import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home'
import Blog from './src/Screens/Blog'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './src/redux/reducers/mainReducer.js'


export default function App() {

  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  return (
    <Provider store={reduxStore}>
    <View style={styles.container}>
      {/* <Home/> */}
      <Blog/>
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
