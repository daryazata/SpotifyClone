import  React ,{useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { useRoute } from '@react-navigation/core';
import albumDetails from '../components/data/albumDetails'
import SongListItem from '../components/SongListItem'


const AlbumScreen =()=>{

    const route = useRoute()

    useEffect(() => {
        
      console.log(route)
    }, [])
    return (

        <View style={styles.container}>

       
            <SongListItem song={albumDetails.songs[0]}/>
        </View>

    )


}

export default AlbumScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor:'orange',
/*       flex: 1,
      alignItems: 'center',
      justifyContent: 'center', */
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  