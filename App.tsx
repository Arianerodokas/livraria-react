import Home from './src/pages/Home/index';
import { View, StatusBar, SafeAreaView } from 'react-native';

export default function App() {
  return (

    <SafeAreaView>
    <StatusBar/>
    <Home/>
  </SafeAreaView>

  );
}