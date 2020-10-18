import  React ,{useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { useRoute } from '@react-navigation/core';
import albumDetails from '../components/data/albumDetails'
import SongListItem from '../components/SongListItem'
import AlbumHeader from '../components/AlbumHeader';
import {API, graphqlOperation} from 'aws-amplify'
import {getAlbum} from '../src/graphql/queries'



const AlbumScreen =()=>{

    const [songs, setSongs] = useState([])
    const [album, setAlbum]  = useState([])

    const route = useRoute()

    useEffect(() => {
        
        const fetchAlbumDeatils = async ()=>{

            try{
    
                const data = await API.graphql(graphqlOperation(getAlbum,{id:route.params.id}))
                console.log('ONE ALBUM',data.data.getAlbum)
                setSongs(data.data.getAlbum.songs.items)
                setAlbum(data.data.getAlbum)
            }catch(e){
    
                console.log(e)
            }

        }

        fetchAlbumDeatils()

    }, [])

    /* display one category with all albums */
    /* GetAlbumCategory */
    return (

        <View style={styles.container}>
  
       <FlatList 
       data={songs}
       renderItem ={({item} ) => <SongListItem song ={item}/>}
        keyExtractor={(item)=> item.id}
        ListHeaderComponent ={()=> <AlbumHeader album={album}/>}
       
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
  