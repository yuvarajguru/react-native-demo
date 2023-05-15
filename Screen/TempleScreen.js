import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
  } from 'react-native';

function TempleScreen () {
    return (
        <View style={styles.container}>
            <Text>Comming Soon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center'
    }
});


export default TempleScreen;