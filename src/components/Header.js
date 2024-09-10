import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = (props) => {
    const navigation = useNavigation();
  return (
    <View style={[styles.Header,props.back?{justifyContent:'space-between'}:{justifyContent:'center'}]}>
        {
            props.back&&( 
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style={styles.Title}>
                        Back
                    </Text>
                </TouchableOpacity>
            )
        }
        <TouchableOpacity>
        <Text style={styles.Title}>
            {props.title}
        </Text>
        </TouchableOpacity> 
        <TouchableOpacity>
            <Text style={styles.Title}>
                
            </Text>
        </TouchableOpacity> 
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Header:{
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        flexDirection:'row', 
        alignItems: 'center',
        alignContent:'center',
        paddingHorizontal:12
    },
    Title:{
        fontSize:16,
        fontWeight:'600',
        color:'#141414'
    }
})