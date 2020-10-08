import React from 'react'

import {Text, View, FlatList} from 'react-native'
import {Album} from '../../types'
import styles from './styles'
import AlbumComponent from '../Album';

export type AlbumCategory ={

    id:string,
    title: string,
    albums: [Album]

}

const AlbumCategory =(props:AlbumCategory) =>(

    <View styles={styles.container}>
    <Text style ={styles.title}>{props.title}</Text>
    {/* List of Albums */}
    <FlatList data={props.albums} 
     renderItem={({item})=> <AlbumComponent album ={item}/>}
     keyExtractor = {(item) => item.id}
     showsHorizontalScrollIndicator = {false}
     horizontal 
 /*    feed */
     />

    </View>
)

export default AlbumCategory