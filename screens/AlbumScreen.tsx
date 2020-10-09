import  React ,{useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { useRoute } from '@react-navigation/core';
import albumDetails from '../components/data/albumDetails'
import SongListItem from '../components/SongListItem'
import AlbumHeader from '../components/AlbumHeader';


const AlbumScreen =()=>{

    const route = useRoute()

    useEffect(() => {
        
      console.log(route)
    }, [])
    return (

        <View style={styles.container}>
  
       <FlatList 
       data={albumDetails.songs}
       renderItem ={({item} ) => <SongListItem song ={item}/>}
        keyExtractor={(item)=> item.id}
        ListHeaderComponent ={()=> <AlbumHeader album={albumDetails}/>}
       
       />
 
        </View>

    )


}

export default AlbumScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor:'black',
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
  