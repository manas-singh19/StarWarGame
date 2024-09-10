import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Header from '../../components/Header'
import PointsTable from '../../components/pointsTable';

const Dashboard = () => {
   // 0: draw 
   // 1: for win 
   // 2: for loose
  
 const pointsData = [
    {
        id:1,
        name:'Aaseem',
        points:12,
        image:'',
        maches:[
            {   
                name:'Aaseem', 
                opponintName:'Sanjeev',
                playerPoints:18,
                opponintPoints:12 
            },
            {
                name:'Aaseem',
                opponintName:'Kartik', 
                playerPoints:12,
                opponintPoints:12 
            },
            {
                name:'Aaseem',
                opponintName:'Rohit',
                playerPoints:19,
                opponintPoints:20 
            }
        ]
    },
    {
        id:2,
        name:'Sanjeev',
        points:22,
        image:'',
        maches:[
            {   
                name:'Sanjeev',
                opponintName:'Aaseem',
                playerPoints:22,
                opponintPoints:20

            },
            {   
                name:'Sanjeev',
                opponintName:'Manas',
                playerPoints:10,
                opponintPoints:10 

            },
            {
                name:'Sanjeev',
                opponintName:'Kartik',
                playerPoints:12,
                opponintPoints:14 
            } 
        ]
    }
  ]

  return (
    <View style={styles.Container}>
      <Header title="Star Wars Blaster Tournament" back={false}/>
      <View style={styles.InnerContainer}>
        <Text style={styles.title}>Points Table</Text> 
        <FlatList 
            style={{marginTop:12}}
            data={pointsData}
            renderItem={({item}) => (
                <PointsTable item={item}/>
            )}
            keyExtractor={(item) => item.id.toString()} 
        />
      </View> 
    </View>
  )
}

export default Dashboard

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