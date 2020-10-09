import React from 'react'
import {Album} from "../../types"
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native'
import styles from './styles';


export type AlbumsHeaderProps={

    album:Album
}

export default function AlbumHeader(props: AlbumsHeaderProps) {
    const {album}= props
    return (
        
            <View style={styles.container}>
                {/* cover image */}
                 <Image source={{uri:album.imageUri}} style={styles.image}/>
                {/* name */}
                <Text style={styles.name}>{album.name}</Text>
                {/* creator    number of likes */}
                <View style={styles.creatorContainer}>
                        <Text style={styles.creator}>
                            By {album.by}
                        </Text>
                        <Text style={styles.likes}>{album.numberOfLikes}Likes</Text>
                </View>
                {/* Play Pause button */}
                <TouchableOpacity>
                    <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                    </View>
                </TouchableOpacity>
            </View>
     
    )
}
