import * as React from 'react';

import {View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import {Album} from '../../types'
import { useNavigation } from '@react-navigation/native';
import AlbumScreen from '../../screens/AlbumScreen';

export type AlbumProps = {
    album: Album
}


const AlbumComponent = (props: AlbumProps)=> {

    const navigation:any = useNavigation()
    
    const onPress =()=>{
    
        navigation.navigate('AlbumScreen' ,{id: props.album.id})
       // console.warn(`Album pressed: ${props.album.artistHeadline}`)
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>

            <Image source={ {uri: props.album.imageUri}} style={styles.image}/>
            <Text style={styles.text} >{props.album.artistHeadline}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}



export default AlbumComponent

