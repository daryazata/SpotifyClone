import React, { useState, useEffect } from 'react'
import {Text, Image, View} from 'react-native'
import {AntDesign, FontAwesome} from "@expo/vector-icons"
import { Entypo } from '@expo/vector-icons';
import styles from './styles'
import {Audio } from 'expo-av'
import {Song} from '../../types'


const song ={ 
    id:"1",
    uri:'https://archive.org/details/thereckoning2020-10-07.bobbyhogg/10.+Tangled+Up+In+Blue.flac#',
    imageUri:"https://images.genius.com/0d81bc56d6111dec7ae23086388d0ee6.960x960x1.jpg",
    title:'Yellow',
    artist: 'Coldplay'
}


export default function PlayerWidget() {



    const playCurrentSong = async (status)=>{

        const {sound} = Audio.Sound.createAsync(
            {uri: song.uri},
            {shouldPlay:true},
          
        )

    }

    useEffect(()=>{
        /* play the song */
        playCurrentSong()
    }, [])
    
    return (
        <View style={styles.container}>
         
            <Image source ={{uri: song.imageUri}} style={styles.image}/>
    
            <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>

                <Text style={styles.title}> {song.title}</Text>
                <Entypo name="dot-single" size={20} color="white" />
                <Text style={styles.artist}> {song.artist}</Text>
            </View>
            <View style={styles.iconsContainer}>

                <AntDesign name='hearto' size={25} color={'white'}/>
                <FontAwesome name='play' size={25} color={'white'}/>
            </View>

            </View>

        </View>
    )
}
