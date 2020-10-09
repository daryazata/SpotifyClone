import {StyleSheet} from "react-native"


const styles = StyleSheet.create({

        container:{
            /*    margin:10, */
            position:"absolute",
            bottom:49,
            backgroundColor:'black',
            width:'100%',
            flexDirection:'row', 
            borderWidth:1,
            borderColor:'black'
       

        },

        rightContainer:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between'

        },
        nameContainer:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-start'

        }
        ,
        iconsContainer:{
            flexDirection:'row',
            alignItems:'center',
            width:80,
            justifyContent:'space-around',
            margin:13

          
        },

        image:{
            width:100,
            height:80,
            marginRight:7
        },

        title:{
            fontSize:18,
            color:'white',
            fontWeight:'bold',
            margin:7
        },
        artist:{
            color:'#fff',
            fontSize:18,


        }
})

export default styles