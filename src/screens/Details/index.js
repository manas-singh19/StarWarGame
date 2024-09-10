import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header';

import GameStatus from '../../components/GameStatus';

const Datails = ({route}) => {
    const navigation = useNavigation();
  const {data} = route.params;
  console.log(data);
  return (
    <View style={styles.Container}>
        <Header title={data?data[0].name:""} back={true}/> 
        <View style={styles.InnerContainer}> 
            <Text style={styles.title}>Matches</Text> 
            <FlatList 
               style={{marginTop:12}}
                data={data}
                renderItem={({item}) => (
                    <GameStatus data={item}/>
                )}
                ListEmptyComponent={<Text style={styles.emptyMessage}>No matches available.</Text>}
            />
        </View>  
    </View>
  )
}

export default Datails

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff', 
    },
    title:{
        fontSize:16,
        fontWeight:'600',
        color:'#141414'
    },
    InnerContainer:{
        padding:12
    }
})