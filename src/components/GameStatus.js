import { StyleSheet, Text, View } from 'react-native'
import React,{memo} from 'react' 

const GameStatus = ({data}) => {
  return (
    <View style={[styles.pointsContainer,
        data.playerPoints == data.opponintPoints?{backgroundColor:'white'}:{},
        data.playerPoints > data.opponintPoints?{backgroundColor:'green'}:{},
        data.playerPoints < data.opponintPoints?{backgroundColor:'red'}:{} 
    ]}>
      <View style={styles.InnerBox}>
            <Text>{data.name}</Text>
            <Text>{data.playerPoints}</Text>
      </View>
      <Text>-</Text>
      <View style={styles.InnerBox}>
        <Text>{data.opponintPoints}</Text>
        <Text>{data.opponintName}</Text> 
      </View> 
    </View>
  )
} 

export default memo(GameStatus)

const styles = StyleSheet.create({
    pointsContainer:{
        width:'100%',
        height:60,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        alignContent:'center', 
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
    InnerBox:{
        width:'49%',
        height:'100%',
        backgroundColor:'transparent',
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:14,
        fontWeight:'500',
        color:'#333',
        marginLeft:6
    }
})