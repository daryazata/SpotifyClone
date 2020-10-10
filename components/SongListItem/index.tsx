import React, { useState, useEffect ,useContext} from 'react'
import {Text, Image, View, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'
import {Song} from '../../types'
import {AppContext} from '../../AppContext'


export type SongListItem={

    song:Song
}
// nfn named function
//rfc func comp

export default function SongListItem(props:SongListItem) {
  
    const {song} = props
  
    const {setSongId} = useContext(AppContext) //using context api to set songId

    const playOnPress = ()=>{
                console.log(song.id)
          setSongId(song.id)      // setting songId with context
                
    }
    return (
        <View style={styles.container}>
 
        
            <>
            <TouchableWithoutFeedback onPress={playOnPress}>
                 <Image source ={{uri: song.imageUri}} style={styles.image}/>
            </TouchableWithoutFeedback>
            
            <View style={styles.rightContainer}>

                <Text style={styles.title}> {song.title}</Text>
                <Text style={styles.artist}> {song.artist}</Text>

            </View>
            </>
      

        </View>
    )
}
