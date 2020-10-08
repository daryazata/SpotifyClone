import React, { useState, useEffect } from 'react'
import {Text, Image, View} from 'react-native'

import styles from './styles'

import {Song} from '../../types'

export type SongListItem={

    song:Song
}
// nfn named function
//rfc func comp
export default function SongListItem(props:SongListItem) {
    const {song} = props
    return (
        <View style={styles.container}>
         
            <Image source ={{uri: song.imageUri}} style={styles.image}/>
    
            <View style={styles.rightContainer}>

                <Text style={styles.title}> {song.title}</Text>
                <Text style={styles.artist}> {song.artist}</Text>

            </View>

        </View>
    )
}
