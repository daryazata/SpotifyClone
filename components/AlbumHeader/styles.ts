import {StyleSheet} from 'react-native'

//rfcp

const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        padding:20

    },
    image :{

        width:200,
        height:200,
        margin:10
    },

    name:{
        color: 'white',
        fontSize:30,
        fontWeight:'bold'
    },
    creatorContainer:{
        flexDirection:'row',
        margin:5
        
    },
    creator:{
        color:'white',
        margin:5,
        fontSize:17

    },
    likes:{
        color:'white',
        margin:5,
        fontSize:17

    },
    button:{
        backgroundColor:'#1CD05D',
        height:45,
        width: 140,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize: 21
    }
})

export default styles