import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,TextInput,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import JSONplaceholder from '../Api/JSONplaceholder';
import User from '../Components/User';

const ListScreen=({navigation})=>{
    var [results,setResults]=useState([]);
    const [err,setErr]=useState('');
    

    const handleData=(dataArray)=>{
        while(dataArray.length<191){
            for(var i=0;i<10;i++){
                dataArray.push(dataArray[i]);                
         }
        } 
        return dataArray;
    }    
    const JsphAPI= async()=>{
        try{
            const response=await JSONplaceholder.get('/users');
            setResults(handleData(response.data));
            //console.log(response.data);
            
        }catch(error){
            console.log(error);
            setErr('Something Went Wrong !!');
        }
    }
    
    useEffect(()=>{
        JsphAPI();
    },[]);
    
    
    return(
        <View style={styles.containerStyle}>
            <ScrollView>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                data={results}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity  >
                            <User name={item.name}/>
                        </TouchableOpacity>
                    )
                }}
            />
            </ScrollView>
        </View>


    );
}

const styles=StyleSheet.create({
    containerStyle:{
        height:'100%',
        width:'100%',
        backgroundColor:'#f2f2f2'
    }
});


export default ListScreen