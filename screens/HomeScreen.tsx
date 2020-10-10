import  React, {useEffect, useState} from 'react';
import { StyleSheet ,Text, View, FlatList} from 'react-native';
import AlbumCategory from '../components/AlbumCategory'
import albumCategories from '../components/data/albumCategories'

import {API, graphqlOperation} from 'aws-amplify'
import {listAlbumCategorys} from '../src/graphql/queries'

export default function HomeScreen() {

  const [categories, setCategories] = useState ([])

  useEffect(() => {
    
    const fetchAlbumCategories = async ()=>{

    
      try{
        const data = await API.graphql(graphqlOperation(listAlbumCategorys))
        console.log(data.data.listAlbumCategorys.items)
        setCategories(data.data.listAlbumCategorys.items)
      }catch(e){
        console.log(e)
      }

    }

    fetchAlbumCategories()
  }, [])


  return (

    <View style={styles.container}>


   <FlatList 
    data={categories}
    renderItem ={({item})=> <AlbumCategory
     title={item.title} 
     albums ={item.album.items}
     /> }
     keyExtractor ={(item)=> item.id}

   

   /> 
{/*         <AlbumCategory title ={albumCategory.title} albums={albumCategory.albums}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'orange',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
