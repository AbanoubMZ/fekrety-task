import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';

const HomeScreen=({navigation})=>{
    const [text,setText]=useState('');
    
    return(
        <ImageBackground 
            source={require('../../assets/wp.jpg')} 
            style={{width: '100%', height: '100%'}}>
            <View style={styles.inputContainer}>
                <Text style={styles.heading}>Enter Your Text:</Text>
                
                <TextInput style={styles.input}
                    placeholder='  Write your Text Here'
                    onChangeText={utext => setText(utext)}
                    value={text}
                />

                <Text style={{fontSize:14,color:'white'}} >{text}</Text>
            </View>

            
            <View style={styles.buttonContainer}>
               
                <TouchableOpacity 
                    style={styles.button}
                    disabled={text.length>1?false:true}
                    onPress={()=>setText(text)}
                >
                    <MaterialIcons name='add' style={styles.icon}/>
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    disabled={text.length>1?false:true}
                >
                    <AntDesign name='edit' style={styles.icon}/> 
                    <Text style={styles.text}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    disabled={text.length>1?false:true}
                    onPress={()=>setText('')}
                >
                    
                    <MaterialIcons name='delete' style={styles.icon}/>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>
            </View>

         </ImageBackground>
    );
}


const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'column',
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    buttonContainer:{
        flexDirection:'column',
        flex:1
    },
    heading:{
        fontWeight:'bold',
        fontSize:14,
        color:'white'
    },
    input:{
        borderColor:'white',
        borderWidth:1,
        height: 40,
        marginTop:5,
        marginBottom:20,
        marginHorizontal:5,
        alignContent:'flex-start',
        borderRadius:5,
        color:'white'
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        paddingVertical:15,
        marginHorizontal:30,
        backgroundColor:'#3c3c3c',
        borderRadius:25,
        borderWidth: 1,
        borderColor: '#fff',
    },
    text:{
        color:'#fff',
        fontSize:15,
        textAlign:'center'
    },
    icon:{
        color:'#fff',
        fontSize:20,
        marginRight:5
    }
});


export default HomeScreen