import React from 'react';
import {Text,View,StyleSheet,TextInput,FlatList} from 'react-native';
import {SimpleLineIcons,EvilIcons,FontAwesome} from '@expo/vector-icons';

const user=({name})=>{
    return(
        <View>
             <View style={styles.container}>
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',justifyContent:'center'}}>
                    <SimpleLineIcons name='user' style={styles.identityIcon}/>
                </View>
                
                <View style={styles.miniContainer}>
                    <Text style={styles.text}>{name}</Text>
                    <Text style={{color:'#3fff79',fontStyle: 'italic',fontSize:18,alignSelf:'flex-start',marginTop:10}}>Eye Specialist</Text>
                    
                    <View style={{flex:1,flexDirection:'row',marginVertical:10,alignSelf:'flex-start'}}>
                        <EvilIcons name='location' style={{fontSize:20,color:'gray',marginRight:5}}/>
                        <Text style={{fontSize:16, color:'gray'}}>St. Bronxlyn 212</Text>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',marginTop:5}}>
                    <FontAwesome name='star' style={styles.starIcon}/>
                    <Text style={{fontSize:16,color:'gray'}}>{Math.floor(Math.random()*5)}</Text>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',
        width:'100%',
        height:120,
        margin:10,
        alignItems:'flex-start',
        elevation:2
    },
    miniContainer:{
        flexDirection:'column',
        alignItems:'center',
        flex:2
    },
    identityIcon:{
        margin:25,
        fontSize: 40,
        marginHorizontal:10,
    },
    text:{
        marginTop:5,
        fontSize:18,
        alignSelf:'flex-start'
    },
    starIcon:{
        fontSize:24,
        color:'#fed401',
        marginHorizontal:10
    }

});


export default user
