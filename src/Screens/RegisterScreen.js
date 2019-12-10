import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,ScrollView,Alert} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const validateValues=(fullName,birthDate,emailAddress,phoneNumber,location)=>{
    if(fullName==='' ||birthDate==='' ||emailAddress===''||phoneNumber===''||location==='' ){
        return false;
    }else if(!(emailAddress.includes('@') &&emailAddress.includes('.') )){
        return false;
    }else{
        return true;
    }
}

const RegisterScreen=()=>{
    const [name,setName]=useState('');
    const [birthday,setBirthday]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
   

    const showErrorAlert=()=>{
        Alert.alert(
            'Wrong Data',
            'Please Enter data correctly'
        );
    };

    const showDoneAlert=()=>{
        Alert.alert(
            'Well Done',
            'Wait a moment ...');
    }
    return(
        <ScrollView>
            <View style={{alignItems:'center',marginVertical:15}}>
                <View style={styles.iconView} >
                    <MaterialIcons name='person-outline' size={40} color={'black'}/>
                <Text>ADD PHOTOS</Text>
            </View>

            </View>
            <View style={styles.container}>
           
            <Text>Full Name</Text>
            <TextInput 
                style={styles.inputs} 
                placeholder='  Your Full Name'
                autoCapitalize = 'none'
                onChangeText={(fullname)=>setName(fullname)}
            />
            
            <Text>Birthday</Text>
            <TextInput 
                style={styles.inputs} 
                placeholder='  dd/mm/yy'
                keyboardType='numbers-and-punctuation'
                onChangeText={(birthday)=>setBirthday(birthday)} 
            />

            
            <Text>Email</Text>
            <TextInput 
                style={styles.inputs} 
                placeholder='  Your Email'
                autoCapitalize = 'none'
                keyboardType='email-address'
                onChangeText={(email)=>setEmail(email)}

            />
            
            <Text>Phone Number</Text>
            <TextInput 
                style={styles.inputs} 
                placeholder='  Your Phone Number'
                keyboardType='number-pad'
                onChangeText={(phone)=>setPhone(phone)}
                />
            
            <Text>Location/Address</Text>
            <TextInput 
                style={styles.inputs} 
                placeholder='  Your Location' 
                autoCapitalize = 'none'
                onChangeText={(address)=>setAddress(address)}
            />

            <TouchableOpacity style={styles.button} activeOpacity = { .5 }
                            onPress={validateValues(name,birthday,email,phone,address)?showDoneAlert():showErrorAlert()}>
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>

        </View>


        </ScrollView>


        
    );
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        alignContent:'center',
        flexDirection:'column',
        margin:20
    },
    headers:{
        fontWeight:'bold'

    },
    inputs:{
        borderColor:'black',
        borderWidth:1,
        height: 40,
        marginTop:5,
        marginBottom:10,
        alignContent:'flex-start',
        borderRadius:5,

    },
    button:{
        marginTop:10,
        paddingVertical:15,
        marginHorizontal:30,
        backgroundColor:'#08da5f',
        borderRadius:25,
        borderWidth: 1,
        borderColor: '#fff',
    },
    text:{
        color:'#fff',
        textAlign:'center',
        fontSize:14
    },
    iconView:{
        width:150,
        height:150,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 150/2,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        
    }
});


export default RegisterScreen