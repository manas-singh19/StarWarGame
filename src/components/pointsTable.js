import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{memo} from 'react'
import { useNavigation } from '@react-navigation/native'


const PointsTable = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity key={item.id} style={styles.pointsContainer} onPress={()=>navigation.navigate("Datails",{data:item.maches})}>
       <View style={styles.InnerCon}> 
       {
        item.image != ''?
        <Image styles={styles.image}/>
        :
        <View style={styles.image}>

        </View>
       }
      <Text style={styles.title}>{item.name}</Text>
      </View>
      <Text style={styles.title}>{item.points}</Text>
    </TouchableOpacity>
  )
}

export default memo(PointsTable)

const styles = StyleSheet.create({
    pointsContainer:{
        width:'100%',
        height:60,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        alignContent:'center',
        marginBottom:8,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        padding:6
    },
    InnerCon:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        alignContent:'center',
    },
    image:{
        width:40,
        height:40,
        borderRadius:6,
        backgroundColor:'#ddd',
    },
    title:{
        fontSize:14,
        fontWeight:'500',
        color:'#333',
        marginLeft:6
    }
})