import React, {useState} from 'react';
import Routes from "./src/routes";

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false) 

  const fetchFonts = () => {
    return Font.loadAsync({
    'dancing-script-bold': require('./src/assets/Dancing_Script/static/DancingScript-Bold.ttf'),
    'roboto-bold': require('./src/assets/Roboto/Roboto-Bold.ttf'),
      });
    };

  if(!fontLoaded) {
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
        />
    );
  }
  return (
    <Routes />
  )
}