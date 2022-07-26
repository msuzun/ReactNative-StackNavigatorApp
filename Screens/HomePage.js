import { View, Text,TextInput,Button } from 'react-native'
import React,{useState} from 'react'

export default function HomePage({navigation}) {
    const [post,setPost]=useState({
        name:'',
        content:''
    })
  return (
    <View style={{height:'100%',justifyContent:'center',alignItems:'center'}}>
      <TextInput 
      placeholder='Adınız'
      underlineColorAndroid={'black'}
      style={{width:'50%',textAlign:'center',fontSize:18}}
      onChangeText={value => setPost({...post,name:value})}
      />
      <TextInput 
      placeholder='Yazınız'
      underlineColorAndroid={'black'}
      multiline={true}
      numberOfLines={5}
      style={{width:'50%',textAlign:'center',fontSize:18}}
      onChangeText={value => setPost({...post,content:value})}
      />
      <Button
        title='Gonder'
        onPress={()=> navigation.navigate('Second',{
            blogpost:post
        })}
      />
    </View>
  )
}