import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidget from './components/PlayerWidget';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)


import {AppContext} from './AppContext'


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  const [songId, setSongId]= useState<string| null>(null) 
  console.log('songId',songId)
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider 
        value={{songId ,
          setSongId:(id) => setSongId(id)
        
        }}>
        <Navigation colorScheme={colorScheme} />
        <PlayerWidget />
        <StatusBar />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
