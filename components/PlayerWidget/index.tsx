import React, { useState, useEffect, useContext } from 'react'
import {Text, Image, View} from 'react-native'
import {AntDesign, FontAwesome} from "@expo/vector-icons"
import { Entypo } from '@expo/vector-icons';
import styles from './styles'
import {Audio } from 'expo-av'
import {Song} from '../../types'
import { Sound } from 'expo-av/build/Audio';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AppContext }from '../../AppContext'
import {API, graphqlOperation} from 'aws-amplify'
import {getSong} from '../../src/graphql/queries'
import { isGenericTypeAnnotation } from '@babel/types';

const song1 ={ 
    id:"1",
    uri:'https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4',
    imageUri:"https://images.genius.com/0d81bc56d6111dec7ae23086388d0ee6.960x960x1.jpg",
    title:'Yellow',
    artist: 'Coldplay'
}


export default function PlayerWidget() {

    const [song, setSong] =useState(null) 
    const [sound, setSound] = useState<Sound|null>(null)
    const [ isPlaying, setIsPlaying] = useState<boolean>(true)
    const [duration, setDuration]= useState<number|null>(null)
    const [position, setPosition] = useState<number|null>(null)

    const { songId} = useContext(AppContext)


    useEffect(() => {
        
        const fetchAlbumDeatils = async ()=>{

            try{
    
                const data = await API.graphql(graphqlOperation(getSong,{id:songId}))
                console.log('SONG',data.data.getSong)
                const newSong=data.data.getSong
               setSong(newSong)
               /*  setSongs(data.data.getAlbum.songs.items)
                setAlbum(data.data.getAlbum) */
            }catch(e){
    
                console.log(e)
            }

        }

        fetchAlbumDeatils()

    }, [songId])

    
    const onPlaybackStatusUpdate= (status) =>{ // now does this status come in here?
       
        setIsPlaying(status.isPlaying)
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)

    }

    const getSongProgress =()=>{
        if(sound == null || duration == null || position== null){
            return 0
        }
        return (position/duration)*100
    }


    const playCurrentSong = async (status)=>{
        if(sound){
            await sound.unloadAsync() //destroys the provious instance of a sound
        }

        const {sound: newSound} = await Sound.createAsync(
            {uri: song.uri},
            {shouldPlay: isPlaying},
          onPlaybackStatusUpdate
        )
        setSound(newSound)

    }

    useEffect(()=>{
       
        if(song){

            playCurrentSong()
        }
    }, [song])
    

    async function onPlayPausePress(){
        if(!sound){
            return
        }
        if(isPlaying){

            await sound.pauseAsync()


        }else{
            await sound.playAsync()
        }
    }

   if(!song){
       return null

   }

    return (
        <View style={styles.container}>
        <View style={[styles.progress, {width:`${getSongProgress()}%`}]}>
            <Text>{getSongProgress()}</Text>
        </View>

         <View style={styles.row}>
            <Image source ={{uri: song.imageUri}} style={styles.image}/>
            <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>

                <Text style={styles.title}> {song.title}</Text>
                <Entypo name="dot-single" size={20} color="white" />
                <Text style={styles.artist}> {song.artist}</Text>
            </View>
            <View style={styles.iconsContainer}>

                <AntDesign name='hearto' size={25} color={'white'}/>
                <TouchableOpacity onPress={onPlayPausePress} >
                <FontAwesome name= {isPlaying ? `pause`:`play`} size={25} color={'white'}/>
                </TouchableOpacity>
            </View>

            </View>
        </View>
        </View>
    )
}
